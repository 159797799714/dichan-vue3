import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import pinia from "./store/index"

import './assets/style/common.css'

import 'vant/es/toast/style'

import base from './utils/base'
window.$base = base

// import './assets/base.css'

// import HeadBar from '@/components/HeadBar.vue'
// const componentObj = {
//   install(app) {
//     app.component('HeadBar', HeadBar)
//   }
// }

import request from './Ajax/request'

// provide({ Http: request })

console.log('request', request)

console.log('--------', process.env.NODE_ENV)

const app = createApp(App)

app.provide('Http', request)
app.use(router)
// app.use(componentObj)
app.use(pinia)
app.mount('#app')
