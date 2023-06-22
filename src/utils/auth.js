import { TOKEN_ENTRY_TIME, TOKEN_VALIDITY } from '@/constant'
import { getItem, setItem } from '@/utils/storage'

// 获取时间戳
export const getTimeStamp = () => {
	return getItem(TOKEN_ENTRY_TIME)
}

// 设置时间戳
export const setTimeStamp = () => {
	setItem(TOKEN_ENTRY_TIME, Date.now())
}

// 是否超时
export const isCheckTimeout = () => {
	// 创建当前时间
	const currentTime = Date.now()
	// 获取存储时的时间
	const timeStamp = getTimeStamp()
	return currentTime - timeStamp > TOKEN_VALIDITY
}
