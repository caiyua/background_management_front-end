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
import XLSX from 'xlsx'

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
	const files = e.target.files
	const rawFile = files[0]
	if (!rawFile) return
	upload(rawFile)
}

// 触发上传事件
const upload = (rawFile) => {
	excelUploadInput.value.value = null

	if (!props.beforeUpload) {
		readerData(rawFile)
		return
	}

	const before = props.beforeUpload(rawFile)
	if (before) {
		readerData(rawFile)
	}
}
const readerData = (rawFile) => {
	loading.value = true
	return new Promise((resolve, reject) => {
		const reader = new FileReader()
		// 读取操作完成时触发
		reader.onload = (e) => {
			// 1. 获取到解析后的数据
			// 2. 利用 XLSX 对数据进行解析
			// 3. 获取第一个表格的名称
			// 4. 读取第一张表格里的数据
			// 5. 解析数据的表头
			// 6. 解析数据体
			// 7. 传入解析之后的数据
			// 8. 处理 loading
			// 9. 成功回调
			const data = e.target.result
			const workbook = XLSX.read(data, { type: 'array' })
			const firstSheetName = workbook.SheetNames[0]
			const workSheet =  workbook.Sheets[firstSheetName]
			// 7.7——13:30分
		}
		reader.readAsArrayBuffer(rawFile)
	})
}
</script>
