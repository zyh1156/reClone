  import Vue from 'vue'
  import Vuex from 'vuex'
  Vue.use(Vuex)
  export default new Vuex.Store({
      state: {
          userid: "", //用户ID
          togive: 0, //赠送状态
          complaint: {
              title: "",
              link: ""
          }
      }
  })