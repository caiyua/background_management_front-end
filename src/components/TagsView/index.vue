<style scoped lang="scss">
@import 'index';
</style>

<template>
	<div class="tags-view-container">
		<router-link
			class="tag-view-item"
			:class="isActive(tag) ? 'active' : ''"
			v-for="(tag, index) in tagStore.tagsViewList"
			:key="tag.fullPath"
			:to="{ path: tag.fullPath }"
			@contextmenu.prevent="openMenu($event, index)"
		>
			{{ tag.title }}
			<el-icon v-show="!isActive(tag)" @click.prevent="onCloseClick(index)"><CloseBold /></el-icon>
		</router-link>
		<div class="line-tag"></div>
	</div>
	<ContextMenu v-show="visible" :style="menuStyle" :index="selectIndex" />
</template>

<script setup>
//region import
import ContextMenu from '@/components/TagsView/ContextMenu.vue'
import { useRoute } from 'vue-router'
import { CloseBold } from '@element-plus/icons'
import { ref, watch } from 'vue'
import { useTagStore } from '@/stores/tag'
const tagStore = useTagStore()
const route = useRoute()
//endregion

// 当前tag是否被选中
const isActive = (tag) => {
	return tag.path === route.path
}

//region 关闭 tag（这里要格外注意一定要使用prevent修饰符，否则点击x会发生路由跳转事件，而不会对数据源进行操作）
const onCloseClick = (index) => {
	tagStore.removeTagsView({
		type: 'index',
		index,
	})
}
//endregion

//region    右键菜单事件
// 菜单的可见源
const visible = ref(false)
// 菜单的坐标
const menuStyle = ref({
	left: '',
	top: '',
})
// 右键的tag的索引
const selectIndex = ref(0)
// 右键菜单事件（e是事件对象，里面有x、y坐标）
const openMenu = (e, index) => {
	const { x, y } = e
	console.log(x,y)
	menuStyle.value.left = x - 200 + 'px'
	menuStyle.value.top = y + 'px'
	selectIndex.value = index
	visible.value = true
}
//endregion

//region    关闭菜单事件
/*
 * 监听-当visible发生变化的时候，如果新值为true，代表菜单显示。
 * 菜单显示了就对 body 添加点击事件。
 * 菜单没显示就对 body 移除点击事件。
 * 这个点击事件就是设置菜单的可见源为false。
 * */
// 定义菜单可见源为false
const closeMenu = () => {
	visible.value = false
}
watch(visible, (value) => {
	if (value) {
		document.body.addEventListener('click', closeMenu)
	} else {
		document.body.removeEventListener('click', closeMenu)
	}
})
//endregion
</script>
