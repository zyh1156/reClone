import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from "../components/HelloWorld"
import reprint from "../components/cube/router"
import err404 from "../components/cube/error404"

Vue.use(VueRouter)

function reRouter(to) {
    return () => import("@/components/" + to + ".vue")
}

const router = new VueRouter({
    routes: [{
        path: "/",
        component: HelloWorld,
        name: "index",
        alias: "/index"
    }, {
        path: "/entry",
        component: reRouter("entry/index")
    }, {
        path: "/search",
        component: reRouter("search/index")
    }, {
        path: "/study",
        component: reRouter("study/index"),
        meta: {
            title: "开始学习"
        }
    }, {
        path: "/user",
        component: reprint,
        children: [{
            path: "",
            component: reRouter("user/index")
        }, {
            path: "signin",
            component: reRouter("user/signin"),
            name: "signin"
        }, {
            path: "wallet",
            component: reprint,
            children: [{
                path: "",
                component: reRouter("user/wallet/index")
            }]
        }]
    }, {
        path: "/wares",
        component: reprint,
        children: [{
            path: "",
            redirect: "/search"
        }, {
            path: ":waresid",
            component: reRouter("wares/index")
        }]
    }, {
        path: "*",
        component: err404
    }]
})

router.beforeEach((to, from, next) => {
    let title = to.meta.title ? to.meta.title : "张永铧的个人主页";
    document.title = title + " &raquo; 为什么坚持，想一想当初";
    next();
})
export default router