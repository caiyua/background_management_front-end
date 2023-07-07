<style scoped lang="scss">
@import './PersonalInformation';
</style>

<template>
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
			<div class="value">{{ u.work_experience }}年</div>
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
</template>

<script setup>
// 指代简写
import { computed } from 'vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const u = computed(() => {
	return userStore.userinfo
})

// 性别值
const isGender = computed(() => {
	if (userStore.userinfo.gender === 0) return '未知'
	if (userStore.userinfo.gender === 1) return '男'
	if (userStore.userinfo.gender === 2) return '女'
})
</script>
