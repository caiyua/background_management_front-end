import { TOKEN_ENTRY_TIME, TOKEN_EXPIRATION } from '@/constant'
import { getItem, setItem } from '@/utils/storage'

// 获取时间戳
export const getTimeStamp = () => {
	return getItem(TOKEN_ENTRY_TIME)
}

// 存储时间戳
export const setTimeStamp = () => {
	setItem(TOKEN_ENTRY_TIME, Date.now())
}

// 存储token有效期
export const setTokenExpiration = (tokenExpiration) => {
	setItem(TOKEN_EXPIRATION, tokenExpiration * 1000) // *1000是因为后台返回的是秒，而前端默认判断会为毫秒。
}

// 获取token有效期
export const getTokenExpiration = () => {
	return getItem(TOKEN_EXPIRATION)
}

// 是否超时
export const isCheckTimeout = () => {
	// 创建当前时间
	const currentTime = Date.now()
	// 获取存储时的时间
	const timeStamp = getTimeStamp()
	return currentTime - timeStamp > getTokenExpiration()
}
