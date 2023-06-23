<style lang="scss">
html,
body {
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
}
#app {
	width: 100%;
	height: 100%;
}
.el-popper.is-light {
	background: var(--theme-tooltip-bgc) !important;
	color: var(--theme-tooltip-text-color);
}
</style>

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
