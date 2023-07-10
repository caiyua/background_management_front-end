<style scoped lang="scss">
@import 'index';
</style>

<template>
	<div class="user-mange-container">
		<div class="header">
			<el-button type="primary" @click="toExcel">excel导入</el-button>
			<el-button type="success">导出</el-button>
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
				<el-table-column label="索引" header-align="center">
					<template v-slot="{ $index }">{{
						$index + 1 + (userManageStore.page - 1) * userManageStore.size
					}}</template>
				</el-table-column>
				<el-table-column label="姓名" prop="username" header-align="center" />
				<el-table-column label="手机号" prop="cellPhone" header-align="center" />
				<el-table-column label="头像" prop="headImg" header-align="center" align="center">
					<template v-slot="{ row }">
						<el-image :src="row.headImg" fit="cover" style="width: 80px; height: 80px" />
					</template>
				</el-table-column>
				<el-table-column label="角色" prop="role" header-align="center" />
				<el-table-column label="入职时间" header-align="center">
					<template v-slot="{ row }">
						<span style="font-size: 13px">
							{{ row.onBoardTime.slice(0, 10) }}
						</span>
					</template>
				</el-table-column>
				<el-table-column label="操作" prop="address" header-align="center"></el-table-column>
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
	</div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUserManageStore } from '@/stores/user/user-manage'
const userManageStore = useUserManageStore()

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
 * 跳转excel导入页面
 * */
const router = useRouter()
const toExcel = () => {
	router.push('/user/import')
}
</script>
