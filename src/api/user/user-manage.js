import request from '@/utils/request'

// 获取员工列表
export const queryUserManageList = (data) => {
	return request({
		url: 'user-manage/list',
		method: 'GET',
		data,
	})
}
