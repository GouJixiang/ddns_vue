import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
// 导入字体
import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'
// 导入naive
import naiveUi from '@/plugins/naive-ui'

const app = createApp(App)
app.mount('#app')
app.use(naiveUi)
