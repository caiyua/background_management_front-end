<style scoped lang="scss">
@import 'index';
</style>

<template>
	<div class="user-mange-container">
		<div class="header">
			<div class="left">
				<el-button @click="toExcel" text bg>excel导入</el-button>
				<el-button text bg @click="dialogFormVisible = true">新增员工</el-button>
			</div>
			<div class="right">
				<el-button text bg>导出</el-button>
			</div>
		</div>

		<!-- Table -->
		<div class="content">
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
				<el-table-column label="头像" prop="headImg" align="center" class="custom-head-img-column">
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
		<el-dialog v-model="dialogFormVisible" title="新增员工" class="custom-dialog">
			<el-form :model="form" label-position="right" scroll-to-error :rules="rules" ref="formRef">
				<el-form-item label="姓名：" prop="username">
					<el-input v-model.trim="form.username" autocomplete="off" maxlength="4" placeholder="请输入姓名" />
				</el-form-item>
				<el-form-item label="手机号：" prop="cellPhone">
					<el-input
						class="no-spin-arrow"
						v-model.trim="form.cellPhone"
						autocomplete="off"
						maxlength="11"
						placeholder="请输入手机号"
						type="tel"
					/>
				</el-form-item>
				<!--<el-form-item label="头像：">-->
				<!--	<el-upload-->
				<!--		class="upload-demo"-->
				<!--		method="post"-->
				<!--		:headers="{ Authorization: userStore.token }"-->
				<!--		action="http://localhost:3000/api/v1/upload/avatar"-->
				<!--		:on-progress="handlePreview"-->
				<!--		:auto-upload="false"-->
				<!--		ref="uploadRef"-->
				<!--		list-type="picture-card"-->
				<!--		:limit="1"-->
				<!--		drag-->
				<!--		:on-error="errUpload"-->
				<!--		:before-upload="handleBeforeUpload"-->
				<!--	>-->
				<!--		<el-button type="success" text style="font-size: 12px">点击 或 拖拽</el-button>-->
				<!--	</el-upload>-->
				<!--</el-form-item>-->
				<el-form-item label="角色：" prop="roles">
					<el-cascader
						:options="options"
						:props="props2"
						clearable
						@change="handleCascaderChange"
						:show-all-levels="false"
					/>
				</el-form-item>
			</el-form>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="dialogFormVisible = false">取消</el-button>
					<el-button type="primary" @click="addNewEmployee(formRef)">提交</el-button>
				</span>
			</template>
		</el-dialog>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserManageStore } from '@/stores/user/user-manage'
import { useUserStore } from '@/stores/user'

const userManageStore = useUserManageStore()
const userStore = useUserStore()
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

getListData()

/*
 * 新增员工
 * */
const handleCascaderChange = (val) => {
	const values = val
		.filter((item) => item[1] !== undefined)
		.map((item) => item[1])
		.filter((value) => !form.value.roles.includes(value))
	form.value.roles.push(...values)
}

const dialogFormVisible = ref(false)
const uploadRef = ref(null)
const formRef = ref(null)
/*
 * 点击上传
 * */
const addNewEmployee = async (formRef) => {
	await formRef.validate(async (valid) => {
		if (valid) {
			console.log(form.value)
			try {
				await userManageStore.InsertNewEmployee(form.value)
				// uploadRef.value.submit()
			} catch (err) {
				throw err
			}
		}
	})
}

/*
 * 表单数据源
 * */
const form = ref({
	username: '萨瓦迪卡',
	cellPhone: 1316666666,
	roles: [],
})

const rules = ref({
	username: [
		{ required: true, message: '姓名不能为空', trigger: 'blur' },
		{ min: 2, max: 4, message: '姓名长度为2~4位', trigger: 'blur' },
	],
	cellPhone: [
		{ required: true, message: '手机号不能为空', trigger: 'blur' },
		{ min: 11, max: 11, message: '手机号长度为11位', trigger: 'blur' },
		{ pattern: /^1[3456789]\d{9}$/, message: '手机号码格式不正确', trigger: 'blur' },
	],
	roles: [{ required: true, message: '角色不能为空', trigger: 'blur' }],
})

/*
 * 角色选择
 * */
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
			{ value: '产品策划', label: '产品策划' },
			{ value: '活动策划', label: '活动策划' },
			{ value: '内容策划', label: '内容策划' },
		],
	},
]

const props2 = {
	multiple: true,
	checkStrictly: true,
	expandTrigger: 'hover',
}

/*
 * 头像处理
 * */
const handlePreview = (val) => {
	console.log(val)
}

/*
 * 上传失败
 * */
const errUpload = (val) => {
	console.log(val)
}
</script>
