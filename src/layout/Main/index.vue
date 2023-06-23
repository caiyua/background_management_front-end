<style scoped lang="scss">
@import './index';
</style>

<template>
	<div class="main-wrapper">
		<!-- 带有切换动画，并且具备组件缓存的-->
		<div class="main-content">
			<router-view v-slot="{ Component, route }">
				<transition name="fade-transform" mode="out-in">
					<component :is="Component" :key="route.name" />
				</transition>
			</router-view>
		</div>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { watch } from 'vue'
import { isTags } from '@/utils/tags'
import { useTagStore } from '@/stores/tag'
import { generateTitle } from '@/utils/i18n'
const tagStore = useTagStore()

// 生成 title
const getTitle = (route) => {
	let title = ''
	// 如果此路由没有meta属性，则
	if (!route.meta) {
		const pathArr = route.path.split('/')
		title = pathArr[pathArr.length - 1]
	} else {
		title = generateTitle(route.meta.title)
	}

	return title
}

// 监听路由变化
const route = useRoute()
watch(
	route,
	(to) => {
		// 如果进入的路由是白名单内的（则返回true）
		if (!isTags(to.path)) return
		// 如果路由不是白名单内的
		const { fullPath, meta, name, params, path, query } = to
		tagStore.addTagsViewList({
			fullPath,
			meta,
			name,
			params,
			path,
			query,
			title: getTitle(to),
		})
	},
	// 当组件刚被创建的时候，watch就会执行一次
	{
		immediate: true,
	}
)
</script>
