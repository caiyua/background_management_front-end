import { defineStore } from 'pinia'
import { getItem, removeAllItem, setItem } from '@/utils/storage'
import { TOKEN } from '@/constant'
import { addPunchCardApi, postLoginApi, queryUserinfoApi, queryUserPunchRecordsApi } from '@/api/user'
import { setTimeStamp, setTokenExpiration } from '@/utils/auth'
import router from '@/router'

export const useUserStore = defineStore('user', {
	state: () => ({
		token: getItem(TOKEN) || '',
		userinfo: {}, // 用户个人信息
		userPunchRecords: {}, // 用户打卡信息
	}),
	actions: {
		// 登进
		async sendLogin(loginForm) {
			try {
				const res = await postLoginApi(loginForm)
				this.token = res.data.token
				setItem(TOKEN, this.token) // 存token
				setTimeStamp() // 存时间戳
				setTokenExpiration(res.data.tokenExpiration) // 存token有效期
				this.userinfo = res.data.userinfo
				await router.push('/')
				ElMessage.success('欢迎回来！' + this.userinfo.username)
				return { status: 200 }
			} catch (err) {
				if (err && err.response && err.response.status === 401) {
					ElMessage.error('用户名或密码错误')
					return { status: 401 }
				}
			}
		},

		// 登出
		async logout() {
			this.token = ''
			this.userinfo = ''
			removeAllItem()
			await router.push('/login')
		},

		// 获取用户信息
		async fetchUserinfo() {
			try {
				const { data } = await queryUserinfoApi()
				this.userinfo = data.userinfo
			} catch (err) {
				throw err
			}
		},

		// 获取打卡信息
		async fetchUserPunchRecords() {
			try {
				const res = await queryUserPunchRecordsApi()
				console.log(res)
				if (res.status === 204) {
					this.userPunchRecords = null
				}
				this.userPunchRecords = res.data
			} catch (err) {
				console.log('获取打卡信息失败')
				throw err
			}
		},

		// 添加打卡记录
		async onToClockIn(punch_in) {
			try {
				const res = await addPunchCardApi(this.userinfo.id, punch_in)
				if (punch_in) {
					ElMessage.success(res.message)
				} else {
					ElMessage.error(res.message)
				}
				window.location.reload()
				console.log(res)
			} catch (err) {
				throw err
			}
		},
	},
})
