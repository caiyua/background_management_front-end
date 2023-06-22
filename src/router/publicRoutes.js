/*
 * 公共路由表
 * */

const publicRoutes = [
	{ path: '/login', name: 'login', component: () => import('@/views/login/index.vue') },
	{
		path: '/',
		name: 'layout',
		redirect: '/profile',
		component: () => import('@/layout/index.vue'),
		children: [
			{
				path: '/profile',
				name: 'profile',
				component: () => import('@/views/profile/index.vue'),
				meta: { title: 'profile', icon: 'user' },
			},
			{ path: '/401', name: '401', component: () => import('@/views/401/index.vue') },
			{ path: '/404', name: '404', component: () => import('@/views/404/index.vue') },
		],
	},
]
export default publicRoutes
