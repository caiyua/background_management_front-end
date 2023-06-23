<style scoped lang="scss">
.context-menu-container {
	width: auto;
	height: auto;
	border-radius: 10px;
	box-shadow: var(--el-box-shadow-light);
	position: absolute;
	overflow: hidden;
	background-color: #fff;
	li {
		padding: 10px 25px;
		cursor: pointer;
		background-color: #fff;
		font-size: 12px;
		&:hover {
			background-color: rgba(0, 64, 128, 0.7);
			color: #fff;
		}
	}
}
</style>

<template>
	<ul class="context-menu-container">
		<li @click="onRefresh">刷新页面</li>
		<li @click="onCloseRight">关闭右侧</li>
		<li @click="onCloseOther">保留当前</li>
	</ul>
</template>

<script setup>
import { useTagStore } from '@/stores/tag'

const tagStore = useTagStore()

/*
 * 这里的index只是父组件右键某一个tag传过来的index值
 * */
const props = defineProps({
	index: {
		type: Number,
		required: true,
	},
})

// 刷新页面
import { useRouter } from 'vue-router'
const router = useRouter()
const onRefresh = () => {
	router.go(0)
}
// 关闭右侧
const onCloseRight = () => {
	tagStore.removeTagsView({
		type: 'right',
		index: props.index,
	})
}
// 关闭其他（保留当前）
const onCloseOther = () => {
	tagStore.removeTagsView({
		type: 'other',
		index: props.index,
	})
}
</script>
