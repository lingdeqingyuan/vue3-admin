// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'virtual:svg-icons-register'
import GlobalComponent from '@/components'

import App from './App.vue'

const app = createApp(App)

app.use(GlobalComponent)

app.use(ElementPlus, {
  locale: zhCn,
})

app.mount('#app')
