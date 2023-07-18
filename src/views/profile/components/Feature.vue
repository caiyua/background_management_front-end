<style scoped lang="scss">
@import 'index';
</style>

<template>
	<div class="feature-container">
		<!--<div class="total_container">-->
		<!--	<el-card>-->
		<!--		<p>本月已打卡：1天</p>-->
		<!--		<p>本月未打卡：29天</p>-->
		<!--	</el-card>-->
		<!--</div>-->
		<el-timeline>
			<el-timeline-item
				v-if="p"
				v-for="v in p"
				:timestamp="v.date"
				placement="top"
				:type="v.punch_in ? 'primary' : ''"
			>
				<el-card>
					<h4 v-if="v.punch_in" style="color: #0087ff">打卡成功</h4>
					<h4 v-else style="font-weight: bold">未打卡</h4>
					<p v-if="!v.punch_in && v.reason" style="margin-top: 5px">{{ v.reason }}</p>
					<p v-if="!v.punch_in && !v.reason" style="margin-top: 5px; color: #aaa">暂无说明</p>
				</el-card>
			</el-timeline-item>
			<h4 v-else style="padding: 0">无打卡记录</h4>
		</el-timeline>
	</div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
import { computed, onMounted } from 'vue'
const userStore = useUserStore()

// 指代
const p = computed(() => {
	return userStore.userPunchRecords
})

onMounted(() => {
	userStore.fetchUserPunchRecords()
    console.log(userStore.userPunchRecords)
})
</script>
