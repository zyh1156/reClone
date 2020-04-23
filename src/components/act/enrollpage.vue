<template>
  <section class="bac">
    <!-- 标题部分 -->
    <div class="box0 overflow-hidden position-relative">
      <img :src="ad.thumbnail" alt />
      <div v-if="ad.is_top" class="text-center tip position-absolute">热门</div>
      <div v-if="surTime.show">
        <div class="bt0 text-center font-weight-bold position-absolute">火热报名</div>
        <div class="bt1 position-absolute">距离报名结束还有{{this.surTime.string}}</div>
      </div>
    </div>
    <!-- 价格部分 -->
    <div class="money-pean">
      <div class="tit">{{ad.post_title}}</div>
      <div class="tit2">{{ad.post_excerpt}}</div>
      <div class="money-box justify-content-between align-items-center d-flex">
        <div>
          <span class="txt0">￥</span>
          <span class="txt1 font-weight-bold">{{ad.price}}</span>
          <!-- <span class="txt2 d-none">{{ad.price}}</span> -->
        </div>
        <div class="text-center adfavs" @click="adfav" :class="{'fav':ad.is_fav==1}">
          <div class="txt3 iconfont icon-shoucang1"></div>
          <div v-if="ad.is_fav==1" class="txt4">已收藏</div>
          <div v-else class="txt4">收藏</div>
        </div>
      </div>
    </div>
    <!-- 广告 -->
    <!--
    <div class="d-none en-ads align-items-center d-flex justify-content-between">
      <div class="pan1 d-flex align-items-center">
        <span class="txt0 iconfont icon-lipinka"></span>
        <span class="txt1">自购省钱，推荐赚钱</span>
      </div>
      <div class="pan2">去加入</div>
    </div>
    -->
    <!-- 分享 -->
    <div class="en-share">
      <div class="tit">他们都在逛</div>
      <div class="con d-flex align-items-center justify-content-between">
        <div class="ens-user d-flex">
          <div v-for="(g,inx) in go" v-bind:key="inx" class="ens-li position-relative">
            <img :src="g.avatar" alt />
          </div>
          <div class="ens-li position-relative text-center ens-more">...</div>
        </div>
        <div @click="share" class="ens-btn">
          <span class="iconfont icon-fenxiang"></span>
          <span>分享</span>
        </div>
      </div>
    </div>
    <!-- 名片 -->
    <div class="en-visi">
      <st :teach="teach"></st>
      <!--
      <div class="ev-body">
        <router-link
          :to="{name:'room',params:{roomid:123}}"
          class="tit d-flex justify-content-between"
        >
          <div class="txt0">名片</div>
          <div class="txt1">更多</div>
        </router-link>
        <div class="con d-flex align-items-center justify-content-between">
          <div class="d-flex">
            <div class="user">
              <img src="../../assets/menu.jpg" alt />
            </div>
            <div class="data">
              <div class="name">默认机构</div>
              <div class="addr">亚夏大</div>
            </div>
          </div>
          <div class="links text-center d-flex">
            <div class="ico0 iconfont icon-dianhua"></div>
            <div class="ico1 iconfont icon-ditu"></div>
          </div>
        </div>
      </div>
      -->
    </div>
    <menus :mlist="menu" @tapset="setCli"></menus>
    <!-- 内容介绍 -->
    <div class="en-panel">
      <div v-if="menuInx==0" class="content" v-html="ad.post_content"></div>
      <div v-else class="content">
        <p>报名人数：{{ad.pay_num}}/{{ad.max_num}}</p>
        <p>创建时间：{{ad.create_timeString}}</p>
        <p>活动时间：{{ad.post_time}}</p>
        <p>活动地址：{{ad.post_address}}</p>
      </div>
      <div class="en-shadow"></div>
    </div>
    <!-- 报名 -->
    <div class="d-flex text-center now-btn position-fixed">
      <!-- 首页 -->
      <a href="/" class="inx">
        <div class="iconfont icon-shouye"></div>
        <div>首页</div>
      </a>
      <!-- 我的 -->
      <a href="/user" class="me">
        <div class="iconfont icon-icon_boss"></div>
        <div>我的</div>
      </a>
      <!-- 立即报名 -->
      <div
        @click="topay"
        class="bm font-weight-bold text-center"
        :class="{'out':!surTime.show||ad.is_pay}"
      >
        <span v-if="ad.is_pay==1">已支付</span>
        <span v-else-if="surTime.show">立即报名</span>
        <span v-else>已结束</span>
      </div>
    </div>
  </section>
</template>
<script>
import menus from "../cube/menulist";
import st from "../cube/shoptitle";
import dayjs from "dayjs";
export default {
  data() {
    return {
      menu: [{ text: "活动介绍" }, { text: "活动详情" }],
      menuInx: 0,
      ad: {},
      surTime: {
        show: false,
        string: ""
      },
      go: [],
      teach: {}
    };
  },
  components: {
    menus,
    st
  },
  methods: {
    getData() {
      // 获取数据
      let actid = this.$route.params.actid;
      this.axios.post("/api/home/act/show.html", { id: actid }, res => {
        res = res.data.data;
        document.title = res.data.post_title;
        this.ad = res.data;
        this.go = res.go.slice(0, 5);
        this.teach = res.teach;
        this.ad.create_timeString = dayjs(res.data.create_time * 1000).format(
          "YYYY-MM-DD HH:mm:ss"
        );
        if (this.ad.endtime < new Date().getTime() / 1000) {
          this.surTime.show = false;
        } else {
          this.surTime.show = true;
          this.calcuTime(this.ad.endtime);
        }
      });
    },
    setCli(val) {
      this.menuInx = val[0];
    },
    // 收藏按钮
    adfav() {
      if (this.ad.is_fav == 1) {
        this.weui.confirm("您确定取消关注吗？", () => {
          this.tofllow();
        });
      } else {
        this.tofllow();
      }
    },
    share() {
      //邀请卡
      this.$router.push({
        name: "share",
        query: { kc_id: this.ad.id, type: "act_post" }
      });
    },
    tofllow() {
      this.axios.post(
        "/api/user/Favorites/setFavorites.html",
        {
          object_id: this.ad.id,
          table_name: "act_post",
          url: "/act/" + this.ad.id
        },
        res => {
          this.weui.toast(res.data.msg, 1500);
          this.ad.is_fav = this.ad.is_fav == 1 ? 0 : 1;
        }
      );
    },
    calcuTime(time) {
      let now = new Date().getTime() / 1000,
        that = this,
        clock = setInterval(clockTime, 1000);
      function clockTime() {
        now++;
        if (now > time) {
          clearInterval(clock);
          window.location.reload();
        } else {
          let d = parseInt((time - now) / 86400),
            h = parseInt((time - now - d * 86400) / 3600),
            m = parseInt((time - now - d * 86400 - h * 3600) / 60),
            s = parseInt((time - now) % 60);
          that.surTime.string =
            addzero(d) +
            "天" +
            addzero(h) +
            "时" +
            addzero(m) +
            "分" +
            addzero(s) +
            "秒";
        }
      }
      function addzero(x) {
        return x < 10 ? "0" + x : x;
      }
    },
    topay() {
      if (this.ad.is_pay == 0 || this.surTime.show) {
        let data = {
          table: "act_post",
          object_id: this.ad.id,
          is_firends: 0,
          num: 1
        };
        this.axios.post("/api/user/order/to_pay.html", data, res => {
          if (res.data.data == 0) {
            this.$router.push({ name: "act", params: { actid: this.ad.id } });
          } else {
            this.$router.push({
              name: "pay",
              query: { orderid: res.data.data }
            });
          }
        });
      }
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
<style lang="scss" scoped>
.box0 {
  height: 450px;
  color: #fff;
  img {
    width: 100%;
  }
  .tip {
    width: 38px;
    height: 50px;
    line-height: 32px;
    background-color: #4071cd;
    top: 0;
    left: 14px;
    font-size: 24px;
    z-index: 10;
  }
  .tip::after {
    z-index: -1;
    content: "";
    left: 0;
    width: 100%;
    bottom: -36px;
    position: absolute;
    border: 19px solid #4071cd;
    border-bottom-color: transparent;
  }
  .bt0 {
    width: 205px;
    height: 86px;
    font-size: 32px;
    line-height: 86px;
    bottom: 0;
    left: 0;
    z-index: 10;
    background-image: linear-gradient(to right, $theme, $theme-bor);
  }
  .bt0::after {
    content: "";
    position: absolute;
    right: -41px;
    top: 0px;
    border-color: transparent transparent $theme-bor $theme-bor;
    border-style: solid;
    border-width: 43px 21.5px;
  }
  .bt1 {
    text-align: right;
    width: 100%;
    height: 72px;
    right: 0;
    bottom: 0;
    padding-right: 19px;
    line-height: 72px;
    font-size: 24px;
    background-image: linear-gradient(to right, $theme, $theme-bor);
  }
}
.money-pean {
  padding: 35px 27px;
  background-color: #fff;
  .tit {
    font-size: 32px;
  }
  .tit2 {
    color: #9b9b9b;
    margin-top: 22px;
    padding-bottom: $pardon;
    border-bottom: 1px solid #f8f8f8;
  }
  .money-box {
    margin-top: 17px;
    .txt0 {
      color: $money;
      font-size: 24px;
    }
    .txt1 {
      color: $money;
      margin-left: 6px;
      font-size: 36px;
    }
    .txt2 {
      color: #989898;
      margin-left: 12px;
      font-size: 24px;
      text-decoration: line-through;
    }
    .txt3 {
      color: $money;
      font-size: 42px;
    }
    .txt4 {
      margin-top: 16px;
    }
    .adfavs {
      width: 90px;
    }
    .fav {
      .txt3 {
        color: #ddd;
      }
      .txt4 {
        color: #a0a0a0;
      }
    }
  }
}
.en-ads {
  color: #b2863a;
  height: 80px;
  background-color: #f8f6ef;
  .pan1 {
    padding-left: 22px;
    .txt0 {
      font-size: 32px;
      margin-right: 12px;
    }
    .txt1 {
      font-style: oblique;
    }
  }
  .pan2 {
    padding: 27px 57px 27px 30px;
    background: #f2eee5 url(../../assets/right-ico.png) no-repeat 120px center;
    background-size: auto 24px;
  }
}
.en-share {
  padding: 27px 27px 0;
  background-color: #fff;
  .tit {
    font-size: 26px;
  }
  .con {
    padding: 27px 0;
    border-bottom: 1px solid #e0e0e0;
    .ens-user {
      .ens-li {
        width: 62px;
        height: 62px;
        border-radius: 31px;
        border: 2px solid #fff;
        overflow: hidden;
      }
      .ens-more {
        color: #bbb;
        line-height: 42px;
        background-color: #f1f1f1;
      }
      .ens-li:nth-child(1) {
        z-index: 12;
      }
      .ens-li:nth-child(2) {
        z-index: 10;
        left: -17px;
      }
      .ens-li:nth-child(3) {
        z-index: 8;
        left: -34px;
      }
      .ens-li:nth-child(4) {
        z-index: 6;
        left: -51px;
      }
      .ens-li:nth-child(5) {
        z-index: 4;
        left: -68px;
      }
      .ens-li:nth-child(6) {
        z-index: 2;
        left: -85px;
      }
    }
    .ens-btn {
      font-size: 24px;
      color: #fff;
      width: 140px;
      text-align: center;
      height: 66px;
      line-height: 66px;
      border-radius: 29px;
      background-image: linear-gradient(to right, $theme, $theme-bor);
      border: 1px solid $theme-bor;
      .iconfont {
        margin-right: 6px;
        font-size: 26px;
      }
    }
  }
}
.en-visi {
  padding: 18px 0;
  .ev-body {
    padding: 0 27px;
    background-color: #fff;
    .tit {
      padding: 24px 0;
      border-bottom: 1px solid #e2e2e2;
      .txt0 {
        color: #333;
      }
      .txt1 {
        padding-right: 24px;
        color: #969696;
        background: url(../../assets/right-ico2.png) no-repeat 58px center;
        background-size: auto 20px;
      }
    }
    .con {
      padding: 27px 0;
      .user {
        width: 80px;
        height: 80px;
        border-radius: 40px;
        overflow: hidden;
        margin-right: 15px;
      }
      .data {
        .name {
          margin-top: 7px;
        }
        .addr {
          margin-top: 18px;
          font-size: 24px;
          color: #a3a3a3;
        }
      }
      .links {
        color: #fff;
        div {
          width: 64px;
          height: 64px;
          border-radius: 32px;
          line-height: 64px;
          font-size: 32px;
        }
        .ico0 {
          background-color: #76bc43;
          margin-right: 17px;
        }
        .ico1 {
          background-color: #5099ea;
        }
      }
    }
  }
}
.en-panel {
  background-color: #fff;
  .title {
    padding: 27px 0;
    border-bottom: 1px solid #e2e2e2;
    div {
      color: #a8a8a8;
      margin: 0 37px;
      font-size: 22px;
      position: relative;
    }
    .active {
      font-size: 24px;
      color: #000;
    }
    span {
      position: relative;
      z-index: 10;
    }
    .active::after {
      z-index: 5;
      content: "";
      position: absolute;
      height: 7px;
      width: 94px;
      bottom: -5px;
      left: 1px;
      background-color: $theme;
    }
  }
  .content {
    padding: 27px;
    font-size: 26px;
    line-height: 2;
    overflow-x: hidden;
    position: relative;
    z-index: 1;
    p {
      margin: 0;
    }
  }
}
.en-shadow {
  height: 110px;
  background-color: #f8f8f8;
}
.now-btn {
  bottom: 0;
  left: 0;
  width: 100%;
  height: 82px;
  background-color: #fff;
  box-shadow: 0 -10px 10px #f2f2f2;
  z-index: 100;
  a {
    color: #2f2f2f;
    width: 140px;
  }
  .iconfont {
    font-size: 35px;
    margin: 4px 0 10px;
  }
  .bm {
    color: #fff;
    width: 470px;
    background: linear-gradient(to right, $theme, $theme-bor);
    font-size: 28px;
    padding: 27px 0;
  }
  .bm.out {
    background: #c3c3c3;
  }
}
</style>