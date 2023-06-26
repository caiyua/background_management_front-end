<style scoped lang="scss">
@import 'index';
</style>

<template>
	<div class="pan-thumb-container">
		<div class="thumb-wrapper">
			<el-avatar :size="150" :src="loginStore.userinfo.avatar" > </el-avatar>
			<img class="hide-img" src="@/assets/avatar.jpg" alt="" />
		</div>
	</div>
</template>

<script setup>
import { useLoginStore } from '@/stores/user/login'
import { computed, ref } from 'vue'
const loginStore = useLoginStore()

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
