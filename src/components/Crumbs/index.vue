<style scoped lang="scss">
@import 'index';
</style>

<template>
	<div class="crumbs_container">
		<el-breadcrumb class="breadcrumb" separator="/">
			<transition-group name="breadcrumb">
				<el-breadcrumb-item v-for="(item, index) in breadcrumbData" :key="item.path">
					<!-- 不可点击 -->
					<span class="no-redirect" v-if="index === breadcrumbData.length - 1">
						{{ generateTitle(item.meta.title) }}
					</span>
					<!-- 可点击 -->
					<span class="redirect" v-else @click="onLinkClick(item)">{{ generateTitle(item.meta.title) }}</span>
				</el-breadcrumb-item>
			</transition-group>
		</el-breadcrumb>
	</div>
</template>

<script setup>
import { generateTitle } from '@/utils/i18n'
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import router from '@/router'

// 生成数组数据
const breadcrumbData = ref([])
const getBreadcrumbData = () => {
	// 当前路由的标准化路由记录
	breadcrumbData.value = route.matched.filter((item) => item.meta && item.meta.title)
}

// 监听路由变化
const route = useRoute()
watch(
	route,
	() => {
		getBreadcrumbData()
	},
	{
		immediate: true,
	}
)

// 跳转点击事件
const onLinkClick = (item) => {
	router.push(item.path)
}
</script>
