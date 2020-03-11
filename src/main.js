import Vue from 'vue'
import App from './App.vue'

import router from './core/router'
import store from './core/store'

import axios from 'axios'
Vue.prototype.axios = axios

import "bootstrap/dist/css/bootstrap-reboot.min.css"
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
