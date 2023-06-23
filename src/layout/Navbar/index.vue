<style scoped lang="scss">
@import './index.scss';
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
			<!-- 引导功能 -->
			<Guide />
			<!-- 搜索功能 -->
			<Search />
			<!-- 全屏功能 -->
			<FullScreen />
			<!-- 暗黑模式切换 -->
			<Theme />
			<!-- 语言切换 -->
			<Languages />
			<!-- 个人头像下拉菜单-->
			<Personal />
		</div>
	</div>
</template>

<script setup>
import Guide from '@/components/Guide/index.vue'
import Search from '@/components/Search/index.vue'
import Languages from '@/components/Languages/index.vue'
import Fold from '@/components/Fold/index.vue'
import Crumbs from '@/components/Crumbs/index.vue'
import Personal from '@/components/Personal/index.vue'
import Theme from '@/components/Theme/index.vue'
import FullScreen from '@/components/FullScreen/index.vue'
</script>
