<style scoped lang="scss">
@import './index';
</style>

<template>
	<div class="login-container">
		<Theme />
		<Languages :reload="true" />
		<div class="login-wrapper">
			<el-form ref="ruleFormRef" :model="loginForm" :rules="rules" scroll-to-error>
				<div class="title">
					<h1>{{ $t('login.title') }}</h1>
				</div>
				<el-form-item prop="username" required>
					<el-input
						class="el-input"
						v-model="loginForm.username"
						:placeholder="$t('login.userPlaceholder')"
					/>
				</el-form-item>
				<el-form-item prop="password">
					<el-input
						class="el-input"
						v-model="loginForm.password"
						:placeholder="$t('login.passwordPlaceholder')"
						type="password"
					/>
				</el-form-item>
				<el-button
					class="el-button"
					@click="submitForm(ruleFormRef)"
					:disabled="isBtnClick"
					:loading="isBtnClick"
				>
					{{ $t('login.elButtonText') }}
				</el-button>
			</el-form>
			<span style="font-size: 12px; color: #bbb; text-align: center; display: block; margin-top: 10px"
				>用户名 admin 密码 123123</span
			>
		</div>
	</div>
</template>

<script setup>
import Theme from '@/components/Theme/index.vue'
import Languages from '@/components/Languages/index.vue'
import { ref, watch } from 'vue'
import { useLoginStore } from '@/stores/user/login'
import {
	passwordVerifyLength,
	passwordVerifyRequired,
	userVerifyLength,
	userVerifyRequired,
} from '@/views/login/verify'
import { useLangStore } from '@/stores/lang'

const loginStore = useLoginStore()

// 表单数据源
const loginForm = ref({
	username: 'admin',
	password: '',
})

// 1. 表单的验证规则
const rules = ref({
	username: [
		{ required: true, message: userVerifyRequired },
		{ min: 3, max: 8, message: userVerifyLength },
	],
	password: [
		{ required: true, message: passwordVerifyRequired },
		{ min: 6, max: 18, message: passwordVerifyLength },
	],
})

// 2. 发送登录请求
const ruleFormRef = ref(null)
const submitForm = async (formEl) => {
	if (!formEl) return
	await formEl.validate((valid, fields) => {
		if (valid) {
			isBtnClick.value = true
			loginStore.sendLogin(loginForm.value).then((res) => {
				// 登录成功后返回了200，失败返回401
				if (res && res.status && res.status !== 200) {
					setTimeout(() => {
						isBtnClick.value = false
					}, 1000)
				}
				if (res && res.status && res.status === 200) {
					isBtnClick.value = false
				}
			})
		} else {
			console.log('表单验证失败！')
		}
	})
}

// 语言改变时，刷新页面
const langStore = useLangStore()
watch(
	() => langStore.language,
	() => {
		window.location.reload()
	}
)

// 按钮可点击状态
const isBtnClick = ref(false)
</script>
