import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import weui from 'weui.js'
import VueWechatTitle from 'vue-wechat-title'
import '@/assets/css/main.css'
import '@/assets/css/base.css'
import 'weui'
const app = createApp(App)
app.config.globalProperties.$weui = weui
app.use(VueWechatTitle)
app.use(router).mount('#app')
