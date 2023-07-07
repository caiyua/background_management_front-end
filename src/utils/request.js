// 引入axios
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/user'
import { isCheckTimeout } from '@/utils/auth'
import { getItem } from '@/utils/storage'
import { TOKEN } from '@/constant'

// 运行axios这个对象上的create方法。然后传了一个对象，这个对象里可以写很多属性（也就是很多配置）
const request = axios.create({
	baseURL: import.meta.env.VITE_APP_BASE_API,
	headers: {
		'Content-Type': 'application/json;charset=UTF-8',
	},
	timeout: 5000,
})

// 请求拦截器
request.interceptors.request.use((config) => {
	const userStore = useUserStore()
	if (userStore.token) {
		config.headers = config.headers || {}
		config.headers['Authorization'] = getItem(TOKEN)
		if (isCheckTimeout()) {
			userStore.logout()
			ElMessage.error('token过期，请重新登录')
		}
	}
	return config
})

// 响应拦截器
request.interceptors.response.use((response) => {
	if (response.data.status === 200) {
		return response.data
	} else {
		ElMessage.error('请求出错，状态码不是200，请前往控制台查看原因！')
		console.log('出错的响应=> ', response.data)
		console.log(response.status)
		if (response.status === 204) {
			return response
		}
		return response.data
	}
})

// 暴露请求模块
export default request
