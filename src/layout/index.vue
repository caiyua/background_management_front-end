<style scoped lang="scss">
@import './index';
</style>

<template>
	<div class="layout-container">
		<!-- 左侧导航栏 -->
		<div class="sidebar-container"><Sidebar /></div>
		<!-- 右侧内容区 -->
		<div class="content-container">
			<!-- 顶部导航栏 -->
			<div class="navbar-container"><Navbar /></div>
			<!-- 主要内容区 -->
			<div class="main-container"><Main /></div>
		</div>
	</div>
</template>

<script setup>
import Sidebar from '@/layout/Sidebar/index.vue'
import Navbar from '@/layout/Navbar/index.vue'
import Main from '@/layout/Main/index.vue'
</script>
