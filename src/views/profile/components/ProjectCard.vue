<style scoped lang="scss">
		.project-card-container {
			.el-card { box-shadow: none !important;border: 1px solid var(--profile-card-border);}
		}
</style>

<template>
	<div class="project-card-container">
		<el-card>
			<PanThumb />
		</el-card>
	</div>
</template>

<script setup>
import PanThumb from '@/components/PanThumb/index.vue'
</script>
