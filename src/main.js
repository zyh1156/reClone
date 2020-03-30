import Vue from 'vue'
import App from './App.vue'

import router from './core/router'
import store from './core/store'
// 使用weui
import "weui"
import weui from "weui.js"
Vue.prototype.weui = weui
// 使用懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
// ajax访问
import axios from 'axios'
Vue.prototype.axios = axios
//新axios
import axios2 from "./core/axios"
Vue.prototype.axios2 = axios2
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