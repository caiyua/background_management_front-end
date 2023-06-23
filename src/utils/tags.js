const whiteList = ['/login' , '/404', '/401']

// 如果白名单有这个路由，会返回false
export function isTags(path) {
	return !whiteList.includes(path)
}
