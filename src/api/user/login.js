import request from '@/utils/request'

// 登录
export function queryLoginApi() {
	return request({
		method: 'POST',
		url: '/login',
	})
}

// 获取用户信息
export const queryUserinfoApi = () => {
	return request({
		method: 'GET',
		url: '/profile',
	})
}
