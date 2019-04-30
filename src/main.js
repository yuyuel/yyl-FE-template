import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './icons' // icon
import '@/styles/index.less' // 全局样式

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
