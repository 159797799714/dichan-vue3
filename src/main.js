import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import pinia from './store/index'

import './assets/style/common.css'

import 'vant/es/toast/style'

// 全局方法
import base from './utils/base'
window.$base = base

// 全局请求
import request from './Ajax/request'
window.$Http = request

console.log('process.env.NODE_ENV', process.env.NODE_ENV)

const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
