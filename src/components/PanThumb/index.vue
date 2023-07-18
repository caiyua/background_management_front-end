<style scoped lang="scss">
@import 'index';
</style>

<template>
	<div class="pan-thumb-container">
		<div class="thumb-wrapper">
			<el-avatar :size="150" src="http://114.132.169.149/upload/default-avatar.svg"> </el-avatar>
			<img class="hide-img" src="@/assets/avatar.jpg" alt="" />
		</div>
	</div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()

// defineProps({
// 	image: {
// 		type: String,
// 	},
// 	zIndex: {
// 		type: Number,
// 		default: 1,
// 	},
// 	width: {
// 		type: String,
// 		default: '150px',
// 	},
// 	height: {
// 		type: String,
// 		default: '150px',
// 	},
// })
</script>
