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
    mode: 'history',
    routes: [{
        path: "/",
        component: HelloWorld,
        name: "index",
        alias: "/index"
    }, {
        path: "/article",
        component: reprint,
        children: [{
            path: "",
            component: reRouter("article/index"),
            meta: {
                title: "圈子首页"
            }
        }, {
            path: ":communityid",
            component: reprint,
            children: [{
                path: "",
                component: reRouter("article/community"),
                meta: {
                    title: "社区详情"
                },
                name: "community"
            }, {
                path: "release",
                component: reRouter("article/release"),
                menta: {
                    title: "社区发帖"
                },
                name:"release"
            }, {
                path: ":contentid",
                component: reRouter("article/content"),
                meta: {
                    title: "帖子详情"
                },
                name: 'content'
            }]
        }]
    }, {
        path: '/act',
        component: reprint,
        children: [{
            path: ':actid',
            component: reRouter("act/enrollpage"),
            name: 'act'
        }, {
            path: '',
            component: reRouter("act/index")
        }]
    }, {
        path: "/entry",
        component: reRouter("entry/index")
    }, {
        path: '/tv',
        component: reprint,
        children: [{
            path: "",
            component: reRouter("tv/index")
        }, {
            path: ':zoneid',
            component: reprint,
            children: [{
                path: "",
                component: reRouter("tv/zone"),
                name: "zone"
            }, {
                path: "channel",
                component: reRouter("tv/channel"),
                name: "channel"
            }]
        }]
    }, {
        path: "/search",
        component: reRouter("search/index")
    }, {
        path: "/room",
        component: reprint,
        children: [{
            path: ":roomid",
            component: reRouter("room/index"),
            name: 'room'
        }, {
            path: "",
            redirect: "/"
        }]
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
            path: "login",
            component: reRouter("user/login")
        }, {
            path: "signin",
            component: reRouter("user/signin"),
            name: "signin",
            meta: {
                title: "签到记录"
            }
        }, {
            path: "retail",
            component: reprint,
            children: [{
                path: "",
                component: reRouter("user/retail/index")
            }],
            meta: {
                title: "分销记录"
            }
        }, {
            path: "wallet",
            component: reprint,
            children: [{
                path: "record",
                component: reRouter("user/wallet/record")
            }, {
                path: "",
                component: reRouter("user/wallet/index")
            }],
            meta: {
                title: "钱包"
            }
        }]
    }, {
        path: "/pay",
        component: reRouter("pay/index"),
        name: "pay"
    }, {
        path: "/goods",
        component: reprint,
        children: [{
            path: "share",
            component: reRouter("goods/share"),
            name: 'share'
        }, {
            path: ":goodsid",
            component: reRouter("goods/index"),
            name: 'goods'
        }, {
            path: "",
            redirect: "/search"
        }]
    }, {
        path: "/play",
        component: reRouter("goods/play"),
        name: "play"
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
export default router