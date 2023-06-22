<template>
	<!-- 有子路由的，渲染一级路由 并…… -->
	<el-sub-menu v-if="route.children.length > 0" :index="route.path">
		<template #title>
			<MenuItem :title="route.meta.title" :icon="route.meta.icon"></MenuItem>
		</template>
		<!-- 渲染二级路由 -->
		<sidebarItem v-for="item in route.children" :key="item.path" :route="item" />
	</el-sub-menu>

	<!-- 没有子路由的，渲染一级路由 -->
	<el-menu-item v-else :index="route.path">
		<MenuItem :title="route.meta.title" :icon="route.meta.icon"></MenuItem>
	</el-menu-item>
</template>

<script setup>
import MenuItem from './MenuItem.vue'

defineProps({
	route: {
		type: Object,
		required: true,
	},
})
</script>
