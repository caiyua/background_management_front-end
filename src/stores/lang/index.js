import { defineStore } from 'pinia'
import { getItem, setItem } from '@/utils/storage'
import { LANG } from '@/constant'

export const useLangStore = defineStore('zhCn', {
	state: () => ({
		language: getItem(LANG) || 'zhCn',
	}),
	actions: {
		setLanguage(lang) {
			this.language = lang
			setItem(LANG, lang)
		},
	},
})
