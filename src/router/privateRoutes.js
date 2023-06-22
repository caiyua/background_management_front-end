/**
 * 私有路由表
 */
const privateRoutes = [
	{
		path: '/user',
		component: () => import('@/layout/index.vue'),
		redirect: '/user/manage',
		meta: {
			title: 'user',
			icon: 'personnel',
		},
		children: [
			{
				path: '/user/manage',
				component: () => import('@/views/user-manage/index.vue'),
				meta: {
					title: 'userManage',
					icon: 'personnel-manage',
				},
			},
			{
				path: '/user/role',
				component: () => import('@/views/role-list/index.vue'),
				meta: {
					title: 'roleList',
					icon: 'role',
				},
			},
			{
				path: '/user/permission',
				component: () => import('@/views/permission-list/index.vue'),
				meta: {
					title: 'permissionList',
					icon: 'permission',
				},
			},
			{
				path: '/user/info/:id',
				name: 'userInfo',
				component: () => import('@/views/user-info/index.vue'),
				meta: {
					title: 'userInfo',
				},
			},
			{
				path: '/user/import',
				name: 'import',
				component: () => import('@/views/import/index.vue'),
				meta: {
					title: 'excelImport',
				},
			},
		],
	},
	{
		path: '/article',
		component: () => import('@/layout/index.vue'),
		redirect: '/article/ranking',
		meta: {
			title: 'article',
			icon: 'article',
		},
		children: [
			{
				path: '/article/ranking',
				component: () => import('@/views/article-ranking/index.vue'),
				meta: {
					title: 'articleRanking',
					icon: 'article-ranking',
				},
			},
			{
				path: '/article/create',
				component: () => import('@/views/article-create/index.vue'),
				meta: {
					title: 'articleCreate',
					icon: 'article-create',
				},
			},
			{
				path: '/article/:id',
				component: () => import('@/views/article-detail/index.vue'),
				meta: {
					title: 'articleDetail',
				},
			},
			{
				path: '/article/editor/:id',
				component: () => import('@/views/article-create/index.vue'),
				meta: {
					title: 'articleEditor',
				},
			},
		],
	},
]

export default privateRoutes
