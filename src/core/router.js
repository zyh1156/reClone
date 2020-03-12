import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from "../components/HelloWorld"

Vue.use(VueRouter)

function reRouter(to) {
  return () => import("@/components/" + to + ".vue")
}

const router = new VueRouter({
  routes: [{
    path: '/',
    component: HelloWorld,
    meta: {
      title: "张永铧的个人主页"
    }
  },{
    path:"/search",
    component:reRouter("searchpage/index"),
    meta:{
      title:"搜索",
    },
    name:"search"
  }, {
    path: "/user",
    component: reRouter("user/index"),
    meta: {
      title: "个人中心"
    },
    name: "user"
  }
  ]
})

router.beforeEach((to, from, next) => {
  let title = to.meta.title ? to.meta.title : "张永铧的个人主页";
  document.title = title + " &raquo; 为什么坚持，想一想当初";
  next();
})
export default router