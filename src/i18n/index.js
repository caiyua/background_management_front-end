import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'
import { useLangStore } from '@/stores/lang'
import App from '@/App.vue'
import { createApp } from 'vue'
const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
const langStore = useLangStore()
// 以上很多代码实际在main.js中已经定义过了，之所以再次定义是因为不定义会报错（想完善这个问题请自行解决）

import en from '@/i18n/lang/en'
import zhCn from '@/i18n/lang/zhCn'

const messages = {
	en: { ...en },
	zhCn: { ...zhCn },
}

const locale = langStore.language

const i18n = createI18n({
	// 关闭 options api，使用 composition api。
	legacy: false,
	// 表示将国际化实例注入到全局上下文中，使其可以在整个应用程序中访问。这样，你可以在任何组件中通过 this.$i18n 或 app.config.globalProperties.$i18n 来访问国际化实例。
	globalInjection: true,
	// 表示当前的语言环境，即要显示的语言。
	locale,
	// 表示包含不同语言翻译内容的对象。它的结构通常是一个键值对，其中键是语言标识，值是包含对应语言翻译的消息对象。
	messages,
})

export default i18n
