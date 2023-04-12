import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/style/common.css'

import 'vant/es/toast/style'

import base from './utils/base'
window.$base = base

// import './assets/base.css'

import HeadBar from '@/components/HeadBar.vue'
const componentObj = {
  install(app) {
    app.component('HeadBar', HeadBar)
  }
}

console.log('--------', process.env.NODE_ENV)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(componentObj)

app.mount('#app')
