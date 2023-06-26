<style scoped lang="scss">
@import 'index.scss';
</style>

<template>
	<el-tooltip content="了解应用功能" effect="light">
		<div class="guide-container" @click="onClick">
			<SvgIcon name="guide" width="25px" height="25px" id="guide-start" />
		</div>
	</el-tooltip>
</template>

<script setup>
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
import steps from './steps'
import { onMounted } from 'vue'

// 组件加载时实例化对象
let driver = null
onMounted(() => {
	driver = new Driver({
		// 禁止点击蒙版关闭
		allowClose: false,
		closeBtnText: '关闭',
		nextBtnText: '继续',
		prevBtnText: '回退',
	})
})

//region 点击开启引导功能
const onClick = () => {
	driver.defineSteps(steps())
	driver.start()
}
//endregion
</script>
