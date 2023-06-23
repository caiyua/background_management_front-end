import { defineStore } from 'pinia'
import { getItem, setItem } from '@/utils/storage'
import { VUEUSE_COLOR_SCHEME } from '@/constant'

export const useAppStore = defineStore('app', {
	state: () => ({
		themePattern: getItem(VUEUSE_COLOR_SCHEME) || '',
	}),
	actions: {},
})
