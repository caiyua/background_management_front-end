<style scoped lang="scss">
@import './index';
</style>

<template>
	<div class="navbar-wrapper">
		<div class="left">
			<!-- 折叠图标 -->
			<Fold />
			<!-- 面包屑导航 -->
			<Crumbs />
		</div>

		<div class="right">
			<!-- 语言切换 -->
			<Languages />
			<!-- 个人头像下拉菜单-->
			<Personal />
		</div>
	</div>
</template>

<script setup>
import Languages from '@/components/Languages/index.vue'
import Fold from '@/components/Fold/index.vue'
import Crumbs from '@/components/Crumbs/index.vue'
import Personal from '@/components/Personal/index.vue'
import { useSidebarStore } from '@/stores/sidebar'
const sidebarStore = useSidebarStore()


</script>
