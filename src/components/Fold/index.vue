<style scoped lang="scss">
.fold_container {
	@extend .f_center;
	cursor: pointer;
	@include dh(0.5);
	padding: 10px;
	border-radius: 10px;
	&:hover {
		background-color: rgba(0, 0, 0, 0.05);
	}
}
</style>

<template>
	<div class="fold-outer-layer" @click="onFold">
		<el-tooltip
			class="box-item"
			effect="light"
			:content="content ? $t('navbar.unfoldTips') : $t('navbar.foldTips')"
			placement="bottom-start"
			:hide-after="0"
		>
			<div class="fold_container">
				<SvgIcon :name="idFold" width="22px" height="22px" />
			</div>
		</el-tooltip>
	</div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useSidebarStore } from '@/stores/sidebar'
import { useI18n } from 'vue-i18n'
const sidebarStore = useSidebarStore()

// 根据状态返回图标名
const idFold = computed(() => {
	return sidebarStore.isFold ? 'hamburger-closed' : 'hamburger-opened'
})

// 折叠/展开
const onFold = () => {
	sidebarStore.changeFold()
}

/*
 * 监听 sidebarStore.isFold 的值，
 * 之所以用watch监听是因为：当点击折叠/展开按钮后，在动画过程中，提示信息会立刻改变，这种改变是突兀、让人觉得不适应的。
 * 所以为了延长提示信息的留存时间，当改变后保留0.5s旧信息后再更新新信息。
 * */
let content = ref(false)
watch(
	() => sidebarStore.isFold,
	(newVal) => {
		if (newVal) {
			setTimeout(() => {
				content.value = false
			}, 500)
		} else {
			setTimeout(() => {
				content.value = true
			}, 500)
		}
	},
	{ immediate: true }
)
</script>
