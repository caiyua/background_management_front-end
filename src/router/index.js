import { createRouter, createWebHistory } from 'vue-router'
import { useLoginStore } from '@/stores/user/login'
import publicRoutes from './publicRoutes'
import privateRoutes from './privateRoutes'

const router = createRouter({
	history: createWebHistory(),
	routes: [...publicRoutes, ...privateRoutes],
})

// 路由拦截器
router.beforeEach((to, from, next) => {
	const useStore = useLoginStore()
	// 已登录
	if (useStore.token) {
		if (to.path === '/login') {
			next('/')
			return
		}
	}
	// 未登录
	else {
		if (to.path !== '/login') {
			next('/login')
			return
		}
	}
	next()
})

export default router
