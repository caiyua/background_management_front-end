<style scoped lang="scss">
@import 'index';
</style>

<template>
	<div class="user-mange-container">
		<div class="header">
			<div class="left">
				<el-button @click="toExcel" text bg>excel导入</el-button>
				<el-button text bg @click="addNewEmployee">新增员工</el-button>
			</div>
			<div class="right">
				<el-button text bg>导出</el-button>
			</div>
		</div>

		<!-- Table -->
		<div class="content">
			<!--
					待解决Bug：切换分页的时候当前分页索引会出现一转而逝的变化，还是用后端来传递索引值吧。
				-->
			<el-table
				:data="userManageStore.list"
				border
				header-align="center"
				class="custom-el-table"
				highlight-current-row
			>
				<el-table-column label="索引" align="center">
					<template v-slot="{ row }">
						{{ row.index }}
					</template>
				</el-table-column>
				<el-table-column label="姓名" prop="username" align="center" />
				<el-table-column label="手机号" prop="cellPhone" align="center" />
				<el-table-column label="头像" prop="headImg" align="center">
					<template v-slot="{ row }">
						<el-image :src="row.headImg" fit="cover" class="custom-head-img" />
					</template>
				</el-table-column>
				<el-table-column label="角色" align="center">
					<template v-slot="{ row }"
						><el-tag v-for="item in row.roles" class="custom-tag">{{ item }}</el-tag></template
					>
				</el-table-column>
				<el-table-column label="注册时间" align="center">
					<template v-slot="{ row }">
						{{ row.onBoardTime.slice(0, 10) }}
					</template>
				</el-table-column>
				<el-table-column label="操作" prop="address" align="center"></el-table-column>
			</el-table>

			<!-- 分页器 -->
			<div class="pagination-container">
				<el-pagination
					background
					v-model:current-page="userManageStore.page"
					v-model:page-size="userManageStore.size"
					:page-sizes="[2, 4, 6, 8]"
					layout="total, sizes, prev, pager, next, jumper"
					:total="userManageStore.total"
					@size-change="handleSizeChange"
					@current-change="handleCurrentChange"
				/>
			</div>
		</div>

		<!-- 弹框-->
		<el-dialog v-model="dialogFormVisible" title="新增员工">
			<el-form :model="form">
				<el-form-item label="姓名"> <el-input v-model="form.name" autocomplete="off" /> </el-form-item>
				<el-form-item label="手机号">
					<el-input v-model="form.cellPhone" autocomplete="off" />
				</el-form-item>
				<el-form-item label="头像">
					<el-upload
						v-model:file-list="fileList"
						class="upload-demo"
						action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
						multiple
						:on-preview="handlePreview"
						:on-remove="handleRemove"
						:before-remove="beforeRemove"
						:limit="3"
						:on-exceed="handleExceed"
					>
						<el-button type="success" text bg>点击上传</el-button>
						<template #tip>
							<div class="el-upload__tip">jpg/png files with a size less than 500KB.</div>
						</template>
					</el-upload>
				</el-form-item>
				<el-form-item label="角色">
					<el-cascader :options="options" :props="props2" clearable />
				</el-form-item>
			</el-form>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="dialogFormVisible = false">取消</el-button>
					<el-button type="primary" @click="dialogFormVisible = false">提交</el-button>
				</span>
			</template>
		</el-dialog>
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserManageStore } from '@/stores/user/user-manage'
const userManageStore = useUserManageStore()

/*
 * 跳转excel导入页面
 * */
const router = useRouter()
const toExcel = () => {
	router.push('/user/import')
}

/*
 * 表格数据
 * */
const getListData = async () => {
	await userManageStore.getUserManageList()
}

const handleSizeChange = (val) => {
	userManageStore.size = val
	userManageStore.page = 1 // 回到第一页
	getListData()
}
const handleCurrentChange = (val) => {
	userManageStore.page = val
	getListData()
}

onMounted(() => {
	getListData()
})

/*
 * 新增员工
 * */
const addNewEmployee = async () => {
	dialogFormVisible.value = true
	// await userManageStore.addNewEmployee()
}

const dialogFormVisible = ref(false)
const form = ref({
	name: '',
	cellPhone: undefined,
	headImg: '',
	roles: [],
})

const props1 = {
	checkStrictly: true,
}

const props2 = {
	multiple: true,
	checkStrictly: true,
}

const options = [
	{
		value: '技术部',
		label: '技术部',
		children: [
			{
				value: '架构师',
				label: '架构师',
			},
			{
				value: '前端工程师',
				label: '前端工程师',
			},
			{
				value: '后端工程师',
				label: '后端工程师',
			},
			{
				value: '运维工程师',
				label: '运维工程师',
			},
			{
				value: '测试工程师',
				label: '测试工程师',
			},
		],
	},
	{
		value: '产品部',
		label: '产品部',
		children: [
			{ value: '产品经理', label: '产品经理' },
			{ value: '产品助理', label: '产品助理' },
			{ value: '设计师', label: '设计师' },
		],
	},
	{
		value: '策划部',
		label: '策划部',
		children: [
			{ value: '产品运营', label: '产品运营' },
			{ value: '活动策划', label: '活动策划' },
			{ value: '内容策划', label: '内容策划' },
		],
	},
]
</script>
