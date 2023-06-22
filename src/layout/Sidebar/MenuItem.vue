<style scoped lang="scss">
.svg-menu-item {
	margin: 0 10px 0 0;
}
</style>

<template>
	<!-- 图标 -->
	<el-icon> <SvgIcon :name="icon" color="#ccc" class="svg-menu-item"></SvgIcon></el-icon>
	<!-- 文本 -->
	<span>{{ generateTitle(props.title) }}</span>
</template>

<script setup>
import { generateTitle } from '@/utils/i18n'

const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	icon: {
		type: String,
		required: true,
	},
})
</script>
