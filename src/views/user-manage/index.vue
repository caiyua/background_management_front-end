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
			<el-table class="el-table" :data="tableData" border highlight-current-row>
				<!-- 索引 -->
				<el-table-column label="#" type="index"></el-table-column>
				<!-- 姓名 -->
				<el-table-column label="姓名" prop="username"></el-table-column>
				<!-- 手机号 -->
				<el-table-column label="手机号" prop="mobile"></el-table-column>
				<!-- 头像 -->
				<el-table-column label="头像" align="center">
					<template v-slot="{ row }">
						<el-image
							class="table-avatar"
							fit="cover"
							:src="row.avatar"
							:preview-src-list="[row.avatar]"
						></el-image>
					</template>
				</el-table-column>
				<!-- 角色 -->
				<el-table-column label="角色" prop="role">
					<template #default="{ row }">
						<el-tag class="el-tag" v-for="item in row.role" :key="item.id">
							{{ item.title }}
						</el-tag>
					</template>
				</el-table-column>
				<!-- 开通时间 -->
				<el-table-column label="注册时间">
					<template #default="{ row }">{{ $filters.dateFilter(row.openTime) }}</template>
				</el-table-column>
				<!-- 操作 -->
				<el-table-column label="操作">
					<template #default>
						<el-button type="primary" size="small">查看</el-button>
						<el-button type="info" size="small">角色</el-button>
						<el-button type="danger" size="small">删除</el-button>
					</template>
				</el-table-column>
			</el-table>

			<!-- 分页器 -->
			<el-pagination
				class="pagination"
				small
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange"
				:current-page="page"
				:page-size="size"
				:page-sizes="[5, 10, 20]"
				layout="total, sizes, prev, next, pager, jumper"
				:total="total"
			></el-pagination>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { queryUserManageList } from '@/api/user/user-manage'
import { useRouter } from 'vue-router'

/*
 * 表格数据
 * */
const tableData = ref([])
const total = ref(0) // 总页数
const page = ref(1) // 当前页
const size = ref(5) // 每页数据有几条
// 获取数据的方法
const getListData = async () => {
	const result = await queryUserManageList({
		page: page.value,
		size: size.value,
	})
	tableData.value = result.list
	page.value = result.page
	size.value = result.size
	total.value = result.total
	console.log(tableData.value)
}
getListData()

const handleSizeChange = () => {}
const handleCurrentChange = () => {}

// 跳转excel页面
const router = useRouter()
const toExcel = () => {
	router.push('/user/import')
}
</script>
