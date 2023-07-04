<template>
	<div class="countdown">
		<el-button @click="sendMsg" :disabled="canClick">{{ content }}</el-button>
	</div>
</template>

<script setup>
/*
 * 倒计时
 * */
import { ref } from 'vue'

// 接收
const props = defineProps({
	content: { type: String, default: '' }, // 显示的文字
	totalTime: { type: Number, default: 5 }, // 倒计时秒数
	repeatText: { type: String, default: '' }, // 倒计时过程中显示的文字
})

// 响应式
const content = ref(props.content)
const totalTime = ref(props.totalTime)
const repeatText = ref(props.repeatText)
const canClick = ref(false) // 可点击状态

// 事件处理
const sendMsg = () => {
	if (canClick.value) return
	canClick.value = true
	content.value = '请 ' + totalTime.value + ` 秒${repeatText.value}`
	const clock = setInterval(() => {
		totalTime.value--
		content.value = '请 ' + totalTime.value + ` 秒${repeatText.value}`
		if (totalTime.value < 1) {
			clearInterval(clock)
			content.value = props.content
			totalTime.value = props.totalTime
			canClick.value = false
		}
	}, 1000)
}
</script>
