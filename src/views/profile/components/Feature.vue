<style scoped lang="scss">
@import 'index';
</style>

<template>
	<div class="feature-container">
		<el-timeline>
			<el-timeline-item timestamp="2018/4/12" placement="top">
				<el-card>
					<h4>打卡成功</h4>
					<p>（原因）未打卡时显示此条消息</p>
				</el-card>
			</el-timeline-item>
			<el-timeline-item timestamp="2018/4/12" placement="top">
				<el-card>
					<h4>打卡成功</h4>
					<p>（原因）未打卡时显示此条消息</p>
				</el-card>
			</el-timeline-item>
			<el-timeline-item timestamp="2018/4/12" placement="top">
				<el-card>
					<h4>打卡成功</h4>
					<p>（原因）未打卡时显示此条消息</p>
				</el-card>
			</el-timeline-item>
			<el-timeline-item timestamp="2018/4/12" placement="top">
				<el-card>
					<h4>打卡成功</h4>
					<p>（原因）未打卡时显示此条消息</p>
				</el-card>
			</el-timeline-item>
			<el-timeline-item timestamp="2018/4/12" placement="top">
				<el-card>
					<h4>打卡成功</h4>
					<p>（原因）未打卡时显示此条消息</p>
				</el-card>
			</el-timeline-item>
		</el-timeline>
	</div>
</template>

<script setup>
import { useLoginStore } from '@/stores/user/login'
const loginStore = useLoginStore()
</script>
