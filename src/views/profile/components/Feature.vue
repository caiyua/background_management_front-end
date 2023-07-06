<style scoped lang="scss">
@import 'index';
</style>

<template>
	<div class="feature-container">
		<el-timeline>
			<el-timeline-item v-for="v in p" :timestamp="v.date" placement="top" :type="v.punch_in ? 'primary' : ''">
				<el-card>
					<h4 v-if="v.punch_in" style="color: #0087ff">打卡成功</h4>
					<h4 v-else style="font-weight: bold">未打卡</h4>
					<p v-if="!v.punch_in" style="margin-top: 5px">{{ v.reason }}</p>
				</el-card>
			</el-timeline-item>
		</el-timeline>
	</div>
</template>

<script setup>
import { useLoginStore } from '@/stores/user'
import { computed, onMounted } from 'vue'
const loginStore = useLoginStore()

// 指代
const p = computed(() => {
	return loginStore.userPunchRecords
})

onMounted(() => {
	loginStore.fetchUserPunchRecords()
})
</script>
