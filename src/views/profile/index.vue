<style scoped lang="scss">
@import 'index';
</style>

<template>
	<div class="profile-container">
		<el-row :gutter="20">
			<el-col :span="6">
				<ProjectCard />
			</el-col>
			<el-col :span="18">
				<el-card>
					<el-tabs v-model="activeName">
						<el-tab-pane label="功能" name="feature"><Feature /></el-tab-pane>
						<el-tab-pane label="文章" name="chapter"><Chapter /></el-tab-pane>
						<el-tab-pane label="作者" name="author"><Author /></el-tab-pane>
					</el-tabs>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script setup>
import ProjectCard from '@/views/profile/components/ProjectCard.vue'
import Feature from '@/views/profile/components/Feature.vue'
import Chapter from '@/views/profile/components/Chapter.vue'
import Author from '@/views/profile/components/Author.vue'
import { ref } from 'vue'

const activeName = ref('feature')
</script>
