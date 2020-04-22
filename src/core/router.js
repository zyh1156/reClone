import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from "../components/HelloWorld"
import reprint from "../components/cube/router"
import err404 from "../components/cube/error404"
import {
    getCookie
} from "./cookie"
Vue.use(VueRouter)

function reRouter(to) {
    return () => import("@/components/" + to + ".vue")
}

const router = new VueRouter({
    savedPosition: true,
    mode: 'history',
    routes: [{
        path: "/",
        component: reRouter("HelloWorld"),
        name: "index",
        alias: "/index"
    }, {
        path: "/article",
        component: reprint,
        children: [{
            path: "",
            component: reRouter("article/index"),
            meta: {
                title: "话题"
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
                name: "release"
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
            component: reRouter("act/index"),
            meta: {
                title: "活动中心"
            }
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
            component: reRouter("user/index"),
            meta: {
                title: "会员中心"
            },
        }, {
            path: "getcode",
            component: reRouter("user/getcode")
        }, {
            path: "login",
            component: reRouter("user/welogin"),
            meta: {
                title: "登录界面"
            }
        }, {
            path: "login2",
            component: reRouter("user/login"),
            meta: {
                title: "登录界面"
            }
        }, {
            path: "activity",
            component: reRouter("user/funlist/activity"),
            meta: {
                title: "我的活动"
            }
        }, {
            path: "coupon",
            component: reRouter("user/funlist/coupon"),
            name: "coupon",
            meta: {
                title: "优惠券"
            }
        }, {
            path: "course",
            component: reRouter("user/funlist/course"),
            meta: {
                title: "我的课程"
            }
        }, {
            path: "edit",
            component: reRouter("user/funlist/edit"),
            meta: {
                title: "编辑资料"
            }
        }, {
            path: "follow",
            component: reRouter("user/funlist/follow"),
            name: "follow",
            meta: {
                title: "关注"
            }
        }, {
            path: "help",
            component: reprint,
            children: [{
                path: ":helpid",
                component: reRouter("user/funlist/help-con"),
                name: "help"
            }, {
                path: "",
                component: reRouter("user/funlist/help")
            }],
            meta: {
                title: "帮助与反馈"
            }
        }, {
            path: "news",
            component: reRouter("user/funlist/news")
        }, {
            path: "order",
            component: reRouter("user/funlist/order"),
            name: "order",
            meta: {
                title: "订单记录"
            }
        }, {
            path: "phone",
            component: reRouter("user/funlist/phone"),
            meta: {
                title: "绑定手机"
            }
        }, {
            path: "service",
            component: reRouter("user/funlist/service"),
            meta: {
                title: "客户服务"
            }
        }, {
            path: "signin",
            component: reRouter("user/funlist/signin"),
            name: "signin",
            meta: {
                title: "签到记录"
            }
        }, {
            path: "study",
            component: reRouter("user/funlist/study"),
            meta: {
                title: "我的学习"
            }
        }, {
            path: "talk",
            component: reRouter("user/funlist/talk"),
            meta: {
                title: "我的话题"
            }
        }, {
            path: "wallet",
            component: reprint,
            children: [{
                path: "apply",
                component: reRouter("user/wallet/apply"),
                name: "apply"
            }, {
                path: "detail",
                component: reRouter("user/wallet/detail"),
                meta: {
                    title: "资金明细"
                }
            }, {
                path: "exchange",
                component: reRouter("user/wallet/exchange"),
                meta: {
                    title: "积分兑换"
                }
            }, {
                path: "record",
                component: reRouter("user/wallet/record")
            }, {
                path: "retail",
                component: reRouter("user/wallet/retail"),
                meta: {
                    title: "分销记录"
                }
            }, {
                path: "retail-con",
                component: reRouter("user/wallet/retail-con"),
                meta: {
                    title: "分销记录"
                }
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
        path: "/give",
        component: reprint,
        meta: {
            title: "赠送"
        },
        children: [{
            path: "givelist",
            component: reRouter("give/give-con"),
            name: "givelist"
        }, {
            path: "giveacc",
            component: reRouter("give/give-accept"),
        }, {
            path: "",
            component: reRouter("give/index")
        }]
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
router.beforeEach((to, from, next) => {
    let site_name = getCookie("site_name");
    let title = to.meta.title ? to.meta.title : "";
    // let title = to.meta.title ? to.meta.title : "张永铧的个人主页";
    document.title = title;
    next();
})
export default router