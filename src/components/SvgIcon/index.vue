<style scoped lang="scss"></style>

<template>
	<svg aria-hidden="true" :width="width" :height="height">
		<use :href="symbolId" :fill="fill" color="red" :stroke-width="strokeWidth" />
	</svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
	prefix: {
		type: String,
		default: 'icon',
	},
	name: {
		type: String,
		required: true,
	},
	color: {
		type: String,
		default: '#333',
	},
	width: {
		type: String,
		default: '18px',
	},
	height: {
		type: String,
		default: '18px',
	},
	fill: {
		type: String,
		default: '#999',
	},
	strokeWidth: {
		type: String,
		default: '',
	},
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>
