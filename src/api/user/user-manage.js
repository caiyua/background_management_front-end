import request from '@/utils/request'

// 获取员工列表
export const queryUserManageList = (page, size) => {
	return request({
		url: `/user/manage-list?page=${page}&size=${size}`,
		method: 'GET',
	})
}

// 添加员工
export const createNewEmployeeApi = (data) => {
	const { username, cellPhone, roles } = data
	return request({
		url: `/employee/create?username=${username}&cellPhone=${cellPhone}&roles=${roles}`,
		method: 'GET',
		data,
	})
}
