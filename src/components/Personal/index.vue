<style scoped lang="scss">
@import 'index';
</style>

<template>
	<el-dropdown trigger="hover">
		<div class="avatar_wrapper" style="cursor: pointer">
			<el-avatar shape="circle" fit="cover" :src="loginStore.userinfo.head_img" />
		</div>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item>个人主页</el-dropdown-item>
				<el-dropdown-item
					><span
						><a href="https://caiyua.github.io">{{ $t('navbar.avatar.personalHomepage') }}</a></span
					></el-dropdown-item
				>
				<el-dropdown-item divided @click="handleLogout"
					><span style="color: #ea3e66">{{ $t('navbar.avatar.logOut') }}</span></el-dropdown-item
				>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>

<script setup>
import { useLoginStore } from '@/stores/user'
import { onMounted } from 'vue'
const loginStore = useLoginStore()

//region 退出登录选择
const handleLogout = () => {
	ElMessageBox.confirm('确认退出登录吗？', '您好！XXX！', {
		confirmButtonText: '确认',
		cancelButtonText: '取消',
		type: 'warning',
		confirmButtonClass: 'el-button--danger', // 添加按钮样式的类名
	})
		// 退出登录
		.then(() => {
			loginStore.logout()
			ElMessage({
				type: 'warning',
				message: '已退出登录！',
			})
		})
		// 取消登录
		.catch(() => {
			ElMessage({
				type: 'success',
				message: '已取消登录！',
			})
		})
}
//endregion

onMounted(() => {
	loginStore.fetchUserinfo()
})
</script>
