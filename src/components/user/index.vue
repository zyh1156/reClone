<template>
  <section class="bac">
    <!-- 资料页 -->
    <div class="user-data position-relative">
      <router-link :to="{path:'/user/edit'}" class="d-inline-flex align-items-center">
        <!-- 头像 -->
        <div class="user-img">
          <img :src="user.avatar" alt />
        </div>
        <!-- 资料 -->
        <div class="user-abo">
          <div class="d-flex align-items-center">
            <div class="font-weight-bold">{{user.truename}}</div>
            <!-- <div class="user-vip text-center">学习卡</div> -->
          </div>
          <div class="text-truncate describe">{{user.desc}}</div>
        </div>
      </router-link>
      <a href="/user/signin" class="active sign position-absolute d-flex align-items-center">
        <div class="ico text-center d-flex justify-content-center align-items-center">
          <span class="iconfont icon-tuipiao"></span>
        </div>
        <div>签到中心</div>
      </a>
    </div>
    <!-- 功能背景 -->
    <div class="dpgo">
      <!-- 功能页 -->
      <div class="d-flex copgo justify-content-around">
        <a
          class="copbox text-center"
          :class="co.classActive"
          :href="co.url"
          v-for="(co,inx) in oplist"
          v-bind:key="inx"
        >
          <div class="copico iconfont d-inline-block" :class="co.classObj"></div>
          <div class="coptxt">{{co.text}}</div>
        </a>
      </div>
      <!-- 开课 -->
      <div class="d-none copbtn text-center font-weight-bold">
        <span>一键开课</span>
        <span class="iconfont icon-icon_circle_line"></span>
      </div>
      <!-- 功能页 -->
      <div class="d-flex copgo justify-content-around">
        <a
          class="copbox text-center"
          :class="co.classActive"
          :href="co.url"
          v-for="(co,inx) in oplist1"
          v-bind:key="inx"
        >
          <div class="copico iconfont d-inline-block" :class="co.classObj"></div>
          <div class="coptxt">{{co.text}}</div>
        </a>
      </div>
    </div>
    <!-- 功能列表1 -->
    <div class="menu-list">
      <a :href="m0.url" class="d-block menu-box" v-for="(m0,inx) in menu0" v-bind:key="inx">
        <span class="menu-ico iconfont" :class="m0.classObj"></span>
        <span class="menu-txt">{{m0.text}}</span>
      </a>
    </div>
    <!-- 功能列表2 -->
    <div class="menu-list">
      <a :href="m1.url" class="d-block menu-box" v-for="(m1,inx) in menu1" v-bind:key="inx">
        <span class="menu-ico iconfont" :class="m1.classObj"></span>
        <span class="menu-txt">{{m1.text}}</span>
      </a>
    </div>
    <footer2></footer2>
  </section>
</template>
<script>
import { setCookie, getCookie, checkCookie } from "../../core/cookie";
import footer2 from "../cube/footer";
export default {
  data() {
    return {
      user: {
        truename: "",
        avatar: "",
        desc: ""
      },
      oplist: [
        {
          text: "关注",
          classObj: {
            "icon-aixin": true
          },
          url: "/user/follow?type=0"
        },
        {
          text: "收藏",
          classObj: {
            "icon-shoucang": true
          },
          url: "/user/follow?type=1"
        },
        {
          text: "优惠券",
          classObj: {
            "icon-dianyingpiao": true
          },
          classActive: {
            // ii: true
          },
          url: "/user/coupon"
        },
        {
          text: "订单记录",
          classObj: {
            "icon-dingdan": true
          },
          url: "/user/order"
        }
      ],
      oplist1: [
        {
          text: "我的课程",
          classObj: {
            "icon-training": true
          },
          url: "/user/course"
        },
        {
          text: "我的活动",
          classObj: {
            "icon-process": true
          },
          url: "user/activity"
        },
        {
          text: "我的话题",
          classObj: {
            "icon-customization": true
          },
          url: "/user/talk"
        },
        {
          text: "我的学习",
          classObj: {
            "icon-manage-order": true
          },
          url: "/user/study"
        }
      ],
      menu0: [
        {
          text: "钱包",
          classObj: {
            "icon-icon_coinpurse_line": true
          },
          url: "/user/wallet/"
        },
        {
          text: "收益明细",
          classObj: {
            "icon-icon_statistics": true
          },
          url: "/user/wallet/retail/"
        },
        {
          text: "消息",
          classObj: {
            "icon-icon_sms": true
          },
          url: "/user/news"
        },
        {
          text: "赠送好友",
          classObj: {
            "icon-lipinka": true
          },
          url: "/give"
        }
      ],
      menu1: [
        {
          text: "联系客服",
          classObj: {
            "icon-icon_service": true
          },
          url: "/user/service"
        },
        {
          text: "帮助与反馈",
          classObj: {
            "icon-icon_shakehands": true
          },
          url: "/user/help"
        },
        {
          text: "绑定手机",
          classObj: {
            "icon-icon_mobilephone": true
          },
          url: "/user/phone"
        }
      ]
    };
  },
  components: {
    footer2
  },
  mounted() {
      this.user = {
        truename: getCookie("usernick"),
        avatar: getCookie("useravatar"),
        desc: getCookie("userdesc") || "一句话形容自己"
      };
    //   滑动效果
    setTimeout(() => {
      document.querySelector(".sign").classList.remove("active");
    }, 200);
  }
};
</script>
<style lang="scss" scoped>
section {
  overflow-x: hidden;
}
.user-data {
  padding-top: $pardon;
  height: 116px;
  .user-img {
    margin-left: 26px;
    img {
      width: 80px;
      height: 80px;
      border-radius: 40px;
    }
  }
  .user-abo {
    color: initial;
    padding-left: 18px;
    .user-vip {
      color: #a56224;
      padding: 0 10px;
      height: 34px;
      line-height: 34px;
      background-color: #eac88e;
      border-radius: 4px;
      margin-left: 10px;
    }
    .describe {
      color: #5a5a5a;
      font-size: 24px;
      margin-top: 8px;
      width: 400px;
    }
  }
  .sign {
    color: $theme;
    height: 72px;
    width: 220px;
    border-radius: 36px 0 0 36px;
    font-size: 25px;
    background-color: $theme-bac;
    padding: 0 16px 0 10px;
    top: 35px;
    right: -34px;
    transition: right 0.8s;
    .ico {
      background-color: $theme-bor;
      height: 50px;
      width: 50px;
      border-radius: 25px;
      margin-right: 10px;
      span {
        color: #fff;
        font-size: 28px;
      }
    }
  }
  .sign.active {
    right: 0;
  }
}
.dpgo {
  padding: 0 $pardon;
  .copgo {
    background-color: #fff;
    border-radius: 11px;
    margin: $pardon 0;
    padding: 38px 0 20px;
  }
  .copbtn {
    margin-top: $pardon;
    color: #fff;
    background-image: linear-gradient(to right, $theme, $theme-bor);
    box-shadow: 0 4px 16px 0 $theme;
    font-size: 32px;
    height: 90px;
    line-height: 90px;
    border-radius: 45px;
    .iconfont {
      margin-left: 12px;
    }
  }
}
.copbox.ii::after {
  content: "";
  position: absolute;
  width: 17px;
  height: 17px;
  border-radius: 8px;
  background-color: $theme-bor;
  left: calc(50% + 13px);
  top: 2px;
  border: 1px solid #fff;
}
.copbox {
  width: 20%;
  color: inherit;
  cursor: pointer;
  position: relative;
  .copico {
    color: $theme;
    font-size: 52px;
  }
  .coptxt {
    margin-top: 28px;
    font-size: 24px;
  }
}
.menu-list {
  background-color: #fff;
  padding-left: $pardon;
  margin-bottom: 27px;
  .menu-box {
    color: #333;
    text-decoration: none;
    border-top: 2px solid #f1f1f1;
    padding: $pardon $pardon/2;
    font-size: 27px;
    background-image: url(../../assets/right-ico2.png);
    background-position: 681px center;
    background-repeat: no-repeat;
    background-size: auto 22px;
  }
  .menu-box:first-child {
    border: none;
  }
  .menu-box:hover {
    background-color: #f2f2f2;
  }
  .menu-ico {
    font-size: 32px;
  }
  .menu-txt {
    margin-left: 23px;
  }
}
</style>