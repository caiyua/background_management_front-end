import { defineStore } from 'pinia'
import { getItem, setItem } from '@/utils/storage'
import { FOLD } from '@/constant'

export const useSidebarStore = defineStore('sidebar', {
	state: () => ({
		isFold: getItem(FOLD) || false, // 左侧导航菜单折叠状态
	}),
	actions: {
		changeFold() {
			this.isFold = !this.isFold
			setItem(FOLD, this.isFold)
		},
	},
})
