<style scoped lang="scss">
@import 'index';
</style>

<template>
	<div class="profile-container">
		<el-row :gutter="20">
			<el-col :span="6">
				<ProjectCard />
				<div class="personal-information">
					<div class="one">
						<div class="title">姓名</div>
						<div class="value">{{ u.username }}</div>
					</div>
					<div class="one">
						<div class="title">性别</div>
						<div class="value">{{ isGender }}</div>
					</div>
					<div class="one">
						<div class="title">出生日期</div>
						<div class="value">{{ u.date_of_birth }}</div>
					</div>
					<div class="one">
						<div class="title">最高学历</div>
						<div class="value">{{ u.highest_degree }}</div>
					</div>
					<div class="one">
						<div class="title">民族</div>
						<div class="value">{{ u.nation }}</div>
					</div>
					<div class="one">
						<div class="title">工作经验</div>
						<div class="value">{{ u.work_experience }}</div>
					</div>
					<div class="one">
						<div class="title">入职时间</div>
						<div class="value">{{ u.on_board_time }}</div>
					</div>
					<template v-if="u.on_board_status">
						<div class="one">
							<div class="title">入职状态</div>
							<div class="value">{{ u.on_board_status }}</div>
						</div>
					</template>
					<template v-if="u.on_board_status">
						<div class="one">
							<div class="title">离职时间</div>
							<div class="value">{{ u.turnover_time }}</div>
						</div>
					</template>
					<div class="one">
						<div class="title">角色</div>
						<div class="value">{{ u.role }}</div>
					</div>
					<div class="one">
						<div class="title">所属部门</div>
						<div class="value">{{ u.subordinate_department }}</div>
					</div>
					<div class="one">
						<div class="title">职责</div>
						<div class="value">{{ u.Duty }}</div>
					</div>
					<div class="one">
						<div class="title">籍贯</div>
						<div class="value">{{ u.native_place }}</div>
					</div>
					<div class="one">
						<div class="title">联系地址</div>
						<div class="value">{{ u.contact_address }}</div>
					</div>
					<div class="one">
						<div class="title">手机号</div>
						<div class="value">{{ u.cell_phone }}</div>
					</div>
				</div>
			</el-col>
			<el-col :span="18">
				<el-card>
					<el-tabs v-model="activeName">
						<el-tab-pane label="打卡记录" name="feature"><Feature /></el-tab-pane>
						<el-tab-pane label="本月绩效" name="chapter"><Chapter /></el-tab-pane>
						<el-tab-pane label="" name="author"><Author /></el-tab-pane>
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
import { computed, ref } from 'vue'
import { useLoginStore } from '@/stores/user'
const activeName = ref('feature')
const loginStore = useLoginStore()

// 指代简写
const u = computed(() => {
	return loginStore.userinfo
})

// 性别值
const isGender = computed(() => {
	if (loginStore.userinfo.gender === 0) return '未知'
	if (loginStore.userinfo.gender === 1) return '男'
	if (loginStore.userinfo.gender === 2) return '女'
})
</script>
