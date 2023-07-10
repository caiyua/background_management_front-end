import request from '@/utils/request'

// 获取员工列表
export const queryUserManageList = (page, size) => {
	return request({
		url: `/user/manage-list?page=${page}&size=${size}`,
		method: 'GET',
	})
}
