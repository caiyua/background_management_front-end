// 引入axios
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useLoginStore } from '@/stores/user/login'
import { isCheckTimeout } from '@/utils/auth'
import { getItem } from '@/utils/storage'
import { TOKEN } from '@/constant' // 这个做一个好看的交互效果，

// 运行axios这个对象上的create方法。然后传了一个对象，这个对象里可以写很多属性（也就是很多配置）
const request = axios.create({
	// 初始URL
	baseURL: import.meta.env.VITE_APP_BASE_API,
	// 统一的请求头
	headers: {
		'Content-Type': 'application/json;charset=UTF-8',
	},
	// 发一个请求，如果在5秒内服务器没有响应，就认为请求失败，终止请求
	timeout: 5000,
})

// 请求拦截器
request.interceptors.request.use((config) => {
	const loginStore = useLoginStore()
	if (loginStore.token) {
		// 确保 config.headers 和 config.headers.common 存在
		config.headers = config.headers || {}
		config.headers.common = config.headers.common || {}
		// 配置请求头
		config.headers.common['Authorization'] = getItem(TOKEN)
		if (isCheckTimeout()) {
			loginStore.logout()
			ElMessage.error('token过期，请重新登录')
		}
	}
	return config
})

// 响应拦截器
request.interceptors.response.use((response) => {
	// 获取接口返回结果
	const res = response.data
	if (res.status === 200) {
		return res // 这里的数据就是组件中请求直接返回的res
	} else {
		setTimeout(() => {
			ElMessage.error('网络请求异常，请稍后再试')
		}, 1000)
		return res
	}
})

// 暴露请求模块
export default request
