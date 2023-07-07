<style scoped lang="scss"></style>

<template>
	<div class="simulate-container">
		<el-button type="primary" :icon="Promotion" @click="onHandleClock">模拟成功打卡</el-button>
		<el-button type="warning" :icon="CircleClose" @click="onNoClock">模拟未打卡</el-button>
	</div>
</template>

<script setup>
import { CircleClose, Promotion } from '@element-plus/icons'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()

const onHandleClock = () => {
	userStore.onToClockIn(1)
}
const onNoClock = () => {
	userStore.onToClockIn(0)
}
</script>
