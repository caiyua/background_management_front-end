<template>
	<el-config-provider :locale="language">
		<router-view />
	</el-config-provider>
</template>

<script setup>
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import { computed } from 'vue'
import { useLangStore } from '@/stores/lang'
const langStore = useLangStore()

// 这里为什么要使用计算属性return结果，因为如果直接引用store里的lang是字符串，而这里的是一个对象类型的语言包
const language = computed(() => {
	return langStore.language === 'zhCn' ? zhCn : en
})
</script>
