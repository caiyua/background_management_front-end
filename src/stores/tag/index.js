import { defineStore } from 'pinia'
import { getItem, setItem } from '@/utils/storage'
import { TAGS_VIEW } from '@/constant'

export const useTagStore = defineStore('tag', {
	state: () => ({
		// tag列表（就是面包屑下面的
		tagsViewList: getItem(TAGS_VIEW) || [],
	}),
	actions: {
		// 添加 tags.js
		addTagsViewList(tag) {
			// 处理重复
			const isFind = this.tagsViewList.find((item) => {
				return item.path === tag.path
			})
			if (!isFind) {
				this.tagsViewList.push(tag)
				setItem(TAGS_VIEW, this.tagsViewList)
			}
		},
		// 处理tags右键菜单子功能项的函数
		removeTagsView(payload) {
			// 关闭当前tag
			if (payload.type === 'index') {
				this.tagsViewList.splice(payload.index, 1)
				console.log(payload.index)
			}
			// 只保留当前tag
			else if (payload.type === 'other') {
				// 删除后面所有
				this.tagsViewList.splice(payload.index + 1, this.tagsViewList.length - payload.index + 1)
				// 删除前面所有——（0,1,2,3,4,5,6,7,8,9）（ 我想保留第五个（索引为4），那么就是从0开始删4个）
				this.tagsViewList.splice(0, payload.index)
			}
			// 删除当前tag右边的所有tag
			else if (payload.type === 'right') {
				this.tagsViewList.splice(payload.index + 1, this.tagsViewList.length - payload.index + 1)
			}
			setItem(TAGS_VIEW, this.tagsViewList)
		},
	},
})
