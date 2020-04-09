<template>
  <section class="bac">
    <!-- banner图 -->
    <div class="banner overflow-hidden position-relative">
      <cs :wd="wd"></cs>
      <img :src="tz.thumbnail" alt />
    </div>
    <!-- 标题 -->
    <div class="title">
      <div class="txt0 line-clamp2">
        <span>{{tz.post_title}}</span>
      </div>
      <div class="txt2">{{tz.post_excerpt}}</div>
      <div class="txt1 d-flex align-items-center">
        <span class="t0 font-weight-bold">{{tz.starttime}}</span>
        <span class="t1 d-flex align-items-center">
          <span>{{tz.post_hits}}人观看</span>
          <span
            class="status"
            :class="{'status0':tz.ts_static==0,'status1':tz.ts_static==1,'status2':tz.ts_static==3}"
          >
            <span v-if="tz.ts_static==0">未开始</span>
            <span v-if="tz.ts_static==1">直播中</span>
            <span v-if="tz.ts_static==3">回放</span>
          </span>
        </span>
      </div>
    </div>
    <!-- 直播内容 -->
    <div class="live-con">
      <div class="tit font-weight-bold">直播介绍</div>
      <div class="con" v-html="tz.post_content"></div>
    </div>
    <!-- 主播相关 -->
    <div class="about d-none">
      <!-- 商店指路 -->
      <div class="d-flex toshop">
        <div class="ab-img overflow-hidden">
          <!-- <img src="../../assets/menu.jpg" alt /> -->
        </div>
        <div class="ab-con">
          <div class="tit font-weight-bold line-clamp2">
            <span class="sip">#所属频道</span>
            <span>临川二中临川二中临川二中临川二中</span>
            <span>临川二中临川二中临川二中临川二中</span>
            <span>临川二中临川二中临川二中临川二中</span>
          </div>
          <div class="renew">已更新13期</div>
        </div>
      </div>
      <!-- 主播名字 -->
      <div class="d-flex meto align-items-center">
        <div class="me-img overflow-hidden">
          <!-- <img src="../../assets/menu.jpg" alt /> -->
        </div>
        <div>
          <span>临川网校</span>
          <span>&nbsp;的直播间</span>
        </div>
      </div>
    </div>
    <st :teach="teach"></st>
    <st2></st2>
    <!-- 进入直播间 -->
    <div>
      <div class="btns"></div>
      <div class="btnt w-100 position-fixed">
        <router-link
          class="tolive text-center d-block"
          v-if="tz.is_pay==1"
          :to="{name:'channel'}"
        >进入直播间</router-link>
        <div v-else-if="tz.priceNum==0" class="tolive text-center" @click="topay">进入直播间</div>
        <div v-else class="tolive text-center" @click="topay">付费观看 ￥{{tz.price}}</div>
      </div>
    </div>
  </section>
</template>
<script>
import st from "../cube/shoptitle";
import cs from "../cube/cube-share";
import st2 from "../cube/stepstone";
export default {
  data() {
    return {
      tz: {},
      teach: {},
      wd: {
        type: "act_post",
        money: ""
      }
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      let id = this.$route.params.zoneid;
      this.wd.id = id;
      this.axios.post("/api/home/tv/show.html", { id: id }, res => {
        this.tz = res.data.data.data;
        // 分享金额
        this.wd.money = res.data.data.data.rate_money;
        // 售价
        this.tz.priceNum = parseFloat(this.tz.price);
        this.teach = res.data.data.teach;
      });
    },
    topay() {
      let id = this.$route.params.zoneid;
      let data = {
        table: "tv_post",
        object_id: id,
        is_firends: 0,
        num: 1
      };
      this.axios.post("/api/user/order/to_pay.html", data, res => {
        if (res.data.data == 0) {
          this.$router.push({ name: "channel", params: { zoneid: id } });
        } else {
          this.$router.push({ name: "pay", query: { orderid: res.data.data } });
        }
        console.log(res);
      });
    }
  },
  components: {
    st,
    cs,
    st2
  }
};
</script>
<style lang="scss" scoped>
.banner {
  height: 420px;
}
.status {
  color: #fff;
  position: relative;
  font-size: 22px;
  padding: 6px 8px;
  margin-left: 6px;
  border-radius: 4px;
}
.status0 {
  background-image: linear-gradient(to right bottom, #3ed6b6, #05d380);
}
.status1 {
  background-image: linear-gradient(to right bottom, #76b3f9, #408ae7);
}
.status2 {
  background-image: linear-gradient(to right bottom, #ffca45, #f1a139);
}
.title {
  padding: $pardon;
  background-color: #fefefe;
  .txt0 {
    font-size: 34px;
    line-height: 1.4;
  }
  .txt1 {
    padding: $pardon/2 0;
    font-size: 26px;
    .t0 {
      color: $theme;
      padding-right: 14px;
      margin-right: 14px;
      border-right: 1px solid #757575;
    }
    .t1 {
      color: #878787;
    }
  }
  .txt2 {
    margin-top: 10px;
    color: #656465;
    line-height: 1.4;
  }
}
.live-con {
  margin-top: 20px;
  padding: $pardon;
  background-color: #fefefe;
  border-bottom: 1px solid #f8f8f8;
  .tit {
    padding-top: 8px;
  }
  .con {
    padding: $pardon/2 0;
    img {
      margin: $pardon/2 0;
    }
  }
}
.about {
  margin-top: 20px;
  padding: $pardon 0 $pardon $pardon;
  background-color: #fff;
  .toshop {
    padding-bottom: $pardon;
    border-bottom: 2px solid #f4f4f4;
    background: url(../../assets/right-ico2.png) 680px center no-repeat;
    background-size: auto 27px;
    .ab-img {
      width: 185px;
      height: 141px;
      border-radius: 4px;
      margin-right: $pardon/2;
    }
    .ab-con {
      width: 520px;
      padding-right: 85px;
      .tit {
        line-height: 35px;
        height: 70px;
        margin-top: 5px;
        .sip {
          color: #2575f5;
        }
      }
      .renew {
        margin-top: 20px;
        color: #9d9d9d;
      }
    }
  }
  .meto {
    padding: $pardon 0;
    .me-img {
      width: $pardon * 2;
      height: $pardon * 2;
      border-radius: $pardon;
      margin-right: $pardon/2;
    }
  }
}
.btns {
  height: 90px;
}
.btnt {
  left: 0;
  bottom: 0;
  padding: $pardon/2 $pardon;
  background-color: #fff;
  box-shadow: 0 -10px 10px #f2f2f2;
  .tolive {
    color: #fff;
    padding: 25px 0;
    border-radius: 4px;
    background-image: linear-gradient(to right, $theme-bor, $theme, $theme-bor);
  }
}
</style>