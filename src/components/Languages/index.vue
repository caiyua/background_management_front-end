<style scoped lang="scss">
@import './index';
</style>

<template>
	<div class="lang-container">
		<el-dropdown class="el-dropdown" @command="toggleLang">
			<div class="lang-icon">
				<SvgIcon name="language" width="25px" height="25px" />
			</div>
			<template #dropdown>
				<el-dropdown-menu>
					<el-dropdown-item command="zhCn" :disabled="langStore.language === 'zhCn'">中文</el-dropdown-item>
					<el-dropdown-item command="en" divided :disabled="langStore.language === 'en'"
						>English</el-dropdown-item
					>
				</el-dropdown-menu>
			</template>
		</el-dropdown>
	</div>
</template>

<script setup>
import { useLangStore } from '@/stores/lang'
import { useI18n } from 'vue-i18n'

const langStore = useLangStore()
const i18n = useI18n()

// 有的时候必须在setup中绑定i18n，但这种方式无法实时刷新页面文字状态，所以出此下策，通过传值来决定刷新或不刷新页面。
const props = defineProps({
	reload: {
		type: Boolean,
		default: false,
	},
})

const toggleLang = (lang) => {
	if (props.reload) {
		// location.reload()
	}
	i18n.locale.value = lang
	langStore.setLanguage(lang)
}
</script>
