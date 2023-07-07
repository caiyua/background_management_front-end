<style scoped lang="scss">
@import 'index';
</style>

<template>
	<div class="profile-container">
		<el-row :gutter="20">
			<el-col :span="6">
				<ProjectCard />
				<PersonalInformation />
			</el-col>
			<el-col :span="18">
				<el-card>
					<el-tabs v-model="activeName">
						<el-tab-pane label="打卡记录" name="feature"><Feature /></el-tab-pane>
						<el-tab-pane label="本月绩效" name="chapter"><Chapter /></el-tab-pane>
						<el-tab-pane label="模拟打卡" name="author"><Author /></el-tab-pane>
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
import PersonalInformation from '@/views/profile/components/PersonalInformation.vue'
import { computed, ref } from 'vue'
import { useUserStore } from '@/stores/user'
const activeName = ref('feature')
const userStore = useUserStore()


</script>
