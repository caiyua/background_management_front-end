<style scoped lang="scss">
@import 'index';
</style>

<template>
	<el-dropdown trigger="hover">
		<div class="avatar_wrapper" style="cursor: pointer">
			<el-avatar shape="circle" fit="cover" :src="loginStore.userinfo.avatar" />
		</div>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item
					><span>{{ $t('navbar.avatar.personalHomepage') }}</span></el-dropdown-item
				>
				<el-dropdown-item divided @click="handleLogout"
					><span style="color: #ea3e66">{{ $t('navbar.avatar.logOut') }}</span></el-dropdown-item
				>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>

<script setup>
import { useLoginStore } from '@/stores/user/login'
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
	/*
	 * 服务器接收不到请求，不知道是哪的问题，干脆登录的时候把用户信息存入本地存储。
	 * 这样每次刷新也不会看到右上角的头像会频繁显示/消失
	 * 不行，还是得研究下这个为什么接收到。
	 * */
	loginStore.fetchUserinfo()
})
</script>
