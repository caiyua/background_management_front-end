import { defineStore } from 'pinia'
import { getItem, removeAllItem, setItem } from '@/utils/storage'
import { TOKEN } from '@/constant'
import { queryLoginApi, queryUserinfoApi } from '@/api/user/login'
import { setTimeStamp } from '@/utils/auth'
import router from '@/router'

export const useLoginStore = defineStore('login', {
	state: () => ({
		token: getItem(TOKEN) || '',
		userinfo: {}, // 用户信息
	}),
	actions: {
		// 登进
		async sendLogin() {
			try {
				const data = await queryLoginApi()
				const { token } = data
				this.token = token
				// 存储token
				setItem(TOKEN, this.token)
				// 存储时间戳
				setTimeStamp()
				// 获取用户信息
				await this.fetchUserinfo()
			} catch (err) {
				ElMessage.error({ message: '登录失败...' })
				throw err
			}
		},
		// 登出
		logout() {
			this.token = ''
			removeAllItem()
			router.push('/login').then(() => {
				console.log('已登出，请重新登录！')
			})
		},
		// 获取用户信息
		async fetchUserinfo() {
			try {
				this.userinfo = await queryUserinfoApi()
			} catch (err) {
				ElMessage.error({ message: '获取用户信息失败...' })
				throw err
			}
		},
	},
})
