<style scoped lang="scss">
.full-screen-container {
	padding: 13px !important;
	border-radius: 10px !important;
	@include dh(0.3);
	cursor: pointer !important;
	@extend .f_center;
	margin-right: 15px;
	&:hover {
		background-color: var(--theme-ele-hover-bgc);
	}
}
</style>

<template>
	<el-tooltip :content="isContent" effect="light">
		<div class="full-screen-container" @click="toggleFull">
			<SvgIcon :name="fullIcon" id="guide-full"/>
		</div>
	</el-tooltip>
</template>

<script setup>
import { computed, ref } from 'vue'
import screenfull from 'screenfull'

// 全屏功能
const isFull = ref(false)
const toggleFull = () => {
	screenfull.toggle()
	isFull.value = !isFull.value
}

const fullIcon = computed(() => {
	return isFull.value ? 'exit-fullscreen' : 'fullscreen'
})

const isContent = computed(() => {
	return isFull.value ? '缩小' : '放大'
})
</script>
