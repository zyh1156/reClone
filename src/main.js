import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'

import router from './core/router'
import store from './core/store'

Vue.use(VueLazyload)

import axios from 'axios'
Vue.prototype.axios = axios
//基础样式重置
import "bootstrap/dist/css/bootstrap-reboot.min.css"
//提取bootstrap的通用样式
import "./core/bootstrap-bone.css"
// 阿里巴巴字体库
import "./core/iconfont.css"
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')