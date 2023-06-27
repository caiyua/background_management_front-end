<style scoped lang="scss">
@import 'index';
</style>

<template>
	<div class="upload-excel-container">
		<div class="upload-excel-wrapper">
			<div class="btn-upload">
				<el-button :loading="loading" type="primary" @click="handleUpload">点击上传</el-button>
			</div>

			<input
				ref="excelUploadInput"
				class="excel-upload-input"
				type="file"
				accept=".xlsx, .xls"
				@change="handleChange"
			/>
			<div class="or"></div>
			<div
				class="drop"
				@drop.stop.prevent="handleDrop"
				@dragover.stop.prevent="handleDragover"
				@dragenter.stop.prevent="handleDragover"
			>
				<el-icon class="up-icon"><UploadFilled /></el-icon>
				<span>将文件拖到此处即可上传</span>
			</div>
		</div>
	</div>
</template>

<script setup>
// import XLSX from 'xlsx'
import { ref } from 'vue'
import { UploadFilled } from '@element-plus/icons'

const props = defineProps({
	// 上传之前的回调
	beforeUpload: Function,
	// 上传成功的回调
	onSuccess: Function,
})

// 点击上传触发
const loading = ref(false)
const excelUploadInput = ref(null)
const handleUpload = () => {
	excelUploadInput.value.click()
}
const handleChange = (e) => {
	const files = e.traget.files
	const rawFile = files[0]
	console.log(rawFile)
}
</script>
