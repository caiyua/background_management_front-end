<style scoped lang="scss">
@import 'index';
</style>

<template>
	<div class="search-container">
		<div class="search-icon" @click="handleSearch">
			<SvgIcon name="search" width="20px" height="20px" id="guide-search"/>
		</div>
		<el-select
			ref="selectRef"
			class="search-select"
			:class="isActive"
			v-model="keyword"
			filterable
			default-first-option
			remote
			placeholder="请输入..."
			:remote-method="querySearch"
			@blur="onSelectBlur"
			@change="onSelectChange"
		>
			<el-option
				v-for="option in searchOptions"
				:key="option.item.path"
				:label="option.item.title.join(' > ')"
				:value="option.item"
				popper-class="xcy-option"
			/>
		</el-select>
	</div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { filterRouters } from '@/utils/route'
import { useRouter } from 'vue-router'
import Fuse from 'fuse.js'
import { generateRoutes } from '@/components/Search/FuseData'

//region 点击图标后发生的事件
const isShow = ref(false)
const isActive = computed(() => {
	return isShow.value ? 'search-select-active' : null
})
const selectRef = ref(null)
const handleSearch = () => {
	isShow.value = !isShow.value
	selectRef.value.focus()
}
//endregion

//region 检索数据源
// 1. 数据源
const router = useRouter()
const searchPool = computed(() => {
	const filterRoutes = filterRouters(router.getRoutes())
	return generateRoutes(filterRoutes)
})
//endregion

//region 对数据源进行模糊搜索
const fuse = new Fuse(searchPool.value, {
	// 是否按优先级进行排序
	shouldSort: true,
	// 匹配长度超过这个值，才能被认为是匹配的，可以展示出来
	minMatchCharLength: 1,
	// 将被搜索的key列表
	keys: [
		{
			// 搜索的键
			name: 'title',
			// 此键对应的权重
			weight: 0.2,
		},
		{
			name: 'path',
			weight: 0.1,
		},
	],
})
const keyword = ref('')
const searchOptions = ref([])
const querySearch = (query) => {
	if (query !== '') {
		searchOptions.value = fuse.search(query)
	} else {
		searchOptions.value = []
	}
}
//endregion

const onSelectBlur = () => {
	isShow.value = false
}

const onSelectChange = (val) => {
	router.push(val)
	isShow.value = false
	keyword.value = ''
}
</script>
