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
	console.log('调用了api')
	return request({
		method: 'GET',
		url: '/user/userinfo',
	})
}
