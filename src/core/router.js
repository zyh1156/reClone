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
    savedPosition: true,
    routes: [{
        path: "/",
        component: HelloWorld,
        name: "index",
        alias: "/index"
    }, {
        path: "/bbs",
        component: reprint,
        children: [{
            path: "",
            component: reRouter("bbs/index"),
            meta: {
                title: "圈子首页"
            }
        }, {
            path: ":communityid",
            component: reprint,
            children: [{
                path: "",
                component: reRouter("bbs/community"),
                meta: {
                    title: "社区详情"
                }
            }, {
                path: ":content",
                component: reRouter("bbs/content"),
                meta: {
                    title: "帖子详情"
                }
            }]
        }]
    }, {
        path: '/enroll',
        component: reprint,
        children: [{
            path: ':enrollid',
            component: reRouter("enroll/enrollpage"),
            name: 'enroll'
        }, {
            path: '',
            component: reRouter("enroll/index")
        }]
    }, {
        path: "/entry",
        component: reRouter("entry/index")
    }, {
        path: "/live",
        component: reprint,
        children: [{
            path: ":zoneid",
            component: reprint,
            children: [{
                path: "channel",
                component: reRouter("live/channel"),
                name: "channel"
            }, {
                path: "",
                component: reRouter("live/zone")
            }]
        }, {
            path: "",
            component: reRouter("live/index")
        }]
    }, {
        path: "/search",
        component: reRouter("search/index")
    }, {
        path: "/shop",
        component: reprint,
        children: [{
            path: ":shopid",
            component: reRouter("shop/index"),
            name: 'shop'
        }, {
            path: "",
            redirect: "/"
        }]
    }, {
        path: "/study",
        component: reRouter("study/index"),
        meta: {
            title: "开始学习"
        }
    }, {
        path: "/test",
        component: reRouter("test/index")
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
            path: ":waresid",
            component: reRouter("wares/index"),
            name: 'wares'
        }, {
            path: "",
            redirect: "/search"
        }]
    }, {
        path: "*",
        component: err404
    }],
    scrollBehavior(to, from, savedPosition) {
        // 跳转后滚动条置顶
        return {
            x: 0,
            y: 0
        }
    }
})

// router.beforeEach((to, from, next) => {
//     let title = to.meta.title ? to.meta.title : "张永铧的个人主页";
//     document.title = title + " &raquo; 为什么坚持，想一想当初";
//     next();
// })
export default router