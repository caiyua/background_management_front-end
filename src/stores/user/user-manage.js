import { defineStore } from 'pinia'
import { queryUserManageList } from '@/api/user/user-manage'
import { getItem, setItem } from '@/utils/storage'
import { USER_MANAGE_SIZE } from '@/constant'
import { createNewEmployeeApi } from '@/api/user/user-manage'

export const useUserManageStore = defineStore('user-manage', {
	state: () => ({
		list: [], // 表格数据
		total: 0, // 总页数
		page: 1, // 当前页
		size: getItem(USER_MANAGE_SIZE) || 2, // 每页数据有几条
	}),
	actions: {
		async getUserManageList() {
			try {
				const res = await queryUserManageList(this.page, this.size)
				this.list = res.data.list
				this.total = res.data.total
				this.page = res.data.page
				this.size = res.data.size
				setItem(USER_MANAGE_SIZE, res.data.size)
			} catch (err) {
				throw err
			}
		},
		async InsertNewEmployee(data) {
			try {
				const res = await createNewEmployeeApi(data)
				console.log(res)
			} catch (err) {
				console.log(err)
				ElMessage.error(err.response.data.message)
			}
		},
	},
})
