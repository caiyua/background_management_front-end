<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
	width: 200px;
}
</style>

<template>
	<div class="sidebar-wrapper">
		<el-menu
			class="el-menu-vertical-demo"
			:unique-opened="true"
			router
			:default-active="activeMenu"
			:collapse="sidebarStore.isFold"
		>
			<SidebarItem v-for="item in routes" :key="item.path" :route="item"></SidebarItem>
		</el-menu>
	</div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { filterRouters, generateMenus } from '@/utils/route'
import SidebarItem from '@/layout//Sidebar/SidebarItem.vue'

const router = useRouter()
const routes = computed(() => {
	const filterRoutes = filterRouters(router.getRoutes())
	return generateMenus(filterRoutes)
})

// 默认激活导航
const route = useRoute()
const activeMenu = computed(() => {
	const { path } = route
	return path
})

// 控制菜单折叠
import { useSidebarStore } from '@/stores/sidebar'
const sidebarStore = useSidebarStore()
</script>
