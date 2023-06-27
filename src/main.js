import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@/router/index.js'
import 'virtual:svg-icons-register'
import i18n from '@/i18n'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import installFilter from '@/filters' // 全局属性

const app = createApp(App)

installFilter(app)
app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
