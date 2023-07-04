import request from '@/utils/request'

// 登录
export function postLoginApi(loginForm) {
	const { username, password } = loginForm
	return request({
		method: 'POST',
		url: '/login',
		data: { username, password },
	})
}

// 获取用户信息
export function queryUserinfoApi() {
	return request({
		method: 'GET',
		url: '/user/userinfo',
	})
}
