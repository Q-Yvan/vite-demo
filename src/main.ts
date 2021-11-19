import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'

// Antd
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

const app = createApp(App)

app.use(Antd)

createApp(App)
  .use(Antd)
  .use(router)
  .mount('#app')
