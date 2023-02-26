import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'
import router, { setupRouter } from '@/router'
import { setupNaive } from '@/plugins/naive'
import { setupStore } from '@/store'
import { setupNaiveDiscreteApi } from '@/plugins/naiveDiscreteApi'

async function bootstrap() {
  const app = createApp(App)
  // 挂载状态管理
  setupStore(app)
  // 注册naive-ui组件
  setupNaive(app)
  // 注册naive-ui全局api
  setupNaiveDiscreteApi()
  // 挂载路由
  setupRouter(app)
  // 路由准备就绪后挂载APP实例
  await router.isReady()
  app.mount('#app')
}

void bootstrap()
