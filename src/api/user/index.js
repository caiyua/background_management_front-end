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

// 获取用户打卡信息
export function queryUserPunchRecordsApi() {
	return request({
		method: 'GET',
		url: '/user/punch-records',
	})
}
