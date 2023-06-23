<style scoped lang="scss"></style>

<template>
	<div class="theme-container">
		<el-tooltip :content="promptText" effect="light">
			<el-button circle @click="toggleTheme" id="guide-dark">
				<el-icon v-if="!isDark"><Sunny /></el-icon>
				<el-icon v-else><MoonNight /></el-icon>
			</el-button>
		</el-tooltip>
	</div>
</template>

<script setup>
import { MoonNight, Sunny } from '@element-plus/icons-vue'
import { useDark, useToggle } from '@vueuse/core'
import { computed } from 'vue'
const isDark = useDark()
const toggleDark = useToggle(isDark)

// 点击切换主题
const toggleTheme = () => {
	toggleDark()
	console.log(isDark.value)
}

// 提示文字
const promptText = computed(() => {
	return isDark.value ? '切换至默认主题' : '切换至暗黑主题'
})

// 提示文字的主题
const isEffect = computed(() => {
	return isDark.value ? 'dark' : 'light'
})
</script>
