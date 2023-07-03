import { defineStore } from 'pinia'
import { getItem, removeAllItem, setItem } from '@/utils/storage'
import { TOKEN } from '@/constant'
import { postLoginApi, queryUserinfoApi } from '@/api/user/login'
import { setTimeStamp } from '@/utils/auth'
import router from '@/router'

export const useLoginStore = defineStore('login', {
	state: () => ({
		token: getItem(TOKEN) || '',
		userinfo: {}, // 用户信息
	}),
	actions: {
		// 登进
		async sendLogin(loginForm) {
			try {
				const res = await postLoginApi(loginForm)
				this.token = res.data.token
				setItem(TOKEN, this.token) // 存token
				setTimeStamp() // 存时间戳
				this.userinfo = res.data.userinfo
				await router.push('/')
				ElMessage.success('欢迎回来！' + this.userinfo.username)
				return { status: 200 }
			} catch (err) {
				if (err.response && err.response.status === 401) {
					ElMessage.error('用户名或密码错误')
					return { status: 401 }
				}
			}
		},
		// 登出
		async logout() {
			this.token = ''
			removeAllItem()
			await router.push('/login')
		},
		// 获取用户信息
		async fetchUserinfo() {
			// try {
			// 	this.userinfo = await queryUserinfoApi()
			// 	console.log(this.userinfo)
			// } catch (err) {
			// 	console.log(err)
			// 	ElMessage.error({ message: '获取用户信息失败...' })
			// 	throw err
			// }
			const res = await queryUserinfoApi()
			console.log(res)
		},
	},
})
