<template>
  <section class="bac">
    <div>
      <!-- 标题部分 -->
      <div class="position-relative">
        <!-- 图片 -->
        <div class="top-box position-relative">
          <div>
            <img :src="wd.thumbnail" alt />
          </div>
          <div class="position-absolute volume d-flex align-items-center justify-content-start">
            <div class="txt0">
              <span class="iconfont icon-remen"></span>
              <span>{{wd.post_hits}}人次</span>
            </div>
            <div class="txt1">
              <span class="iconfont icon-chenggong"></span>
              <span class>永久回听</span>
            </div>
          </div>
        </div>
        <!-- 限时优惠 -->
        <div v-if="limitTime" class="discount d-flex">
          <!-- 优惠价 -->
          <div class="money0 d-flex">
            <!-- 现价 -->
            <div class="dm00">
              <span class="aa">￥</span>
              <span class="bb">{{wd.money2[0]}}</span>
              <span>.{{wd.money2[1]}}</span>
            </div>
            <!-- 原价 -->
            <div class="dm01">
              <div class="aa">￥{{wd.price}}</div>
              <div class="bb d-inline-block">限时特价</div>
            </div>
          </div>
          <!-- 优惠时间 -->
          <div class="money1">
            <div class="aa text-center">距离特价结束仅剩</div>
            <div class="bb d-flex align-items-center justify-content-center text-center">
              <span>{{cd.d}}</span>
              <span>天</span>
              <span class="bbox">{{cd.h}}</span>
              <span>:</span>
              <span class="bbox">{{cd.m}}</span>
              <span>:</span>
              <span class="bbox">{{cd.s}}</span>
            </div>
          </div>
        </div>
        <!-- 描述 -->
        <div class="desc-box">
          <!-- 题目 -->
          <div class="txt0 font-weight-bold">{{wd.post_title}}</div>
          <!-- 描述 -->
          <div class="txt1">{{wd.post_excerpt}}</div>
          <!-- 课程 -->
          <div v-if="wd.item_num" class="txt2">共{{wd.item_num}}节</div>
        </div>
        <!-- 优惠券 -->
        <div v-if="wd.red_price" class="position-absolute coupon">
          <span class="aa d-inline-block">优惠券</span>
          <span class="bb d-inline-block">￥{{wd.red_price}}</span>
        </div>
        <!-- 分享按钮 -->
        <cs :wd="wd2"></cs>
      </div>
      <!-- 内容部分 -->
      <cg :wd="wd" @tojv="jumpv"></cg>
      <div class="shop-mt">
        <shopt :teach="teach"></shopt>
      </div>
      <cpay :limitTime="limitTime" :wd="wd"></cpay>
      <tool :options="tooloptions"></tool>
    </div>
  </section>
</template>
<script>
import shopt from "../cube/shoptitle";
import tool from "../cube/tool";
import cg from "../cube/cube-goods";
import cpay from "../cube/cube-pay";
import cs from "../cube/cube-share";
export default {
  data() {
    return {
      wd: {
        rate_goods_money: "",
        money2: [0, 0]
      },
      wd2: {
        money: "0",
        type: "goods_post"
      },
      teach: {},
      limitTime: false,
      cd: {
        d: 0,
        h: 0,
        m: 0,
        s: 0
      },
      tooloptions: {
        follow: false,
        teach: {}
      }
    };
  },
  methods: {
    getData: function() {
      let id = this.$route.params.goodsid;
      this.wd2.id = id;
      this.axios.post("/api/home/goods/show.html", { id: id }, res => {
        res = res.data.data;
        //价格
        res.data.money2 = parseFloat(res.data.money)
          .toFixed(2)
          .split(".");
        this.wd = res.data;
        this.wd2.money = res.data.rate_goods_money;
        // 赋值关注
        let follow = {
          fav: res.data.is_fav == 1,
          id: res.data.id,
          string: "tv_post"
        };
        this.$set(this.tooloptions, "follow", follow);
        // 赋值讲师
        this.$set(this.tooloptions, "teach", res.teach);
        //   修改title
        document.title = res.data.post_title;
        this.teach = res.teach;
        if (res.data.zk_endtime < new Date().getTime() / 1000) {
          this.limitTime = false;
        } else {
          this.limitTime = true;
          //   优惠倒计时
          this.cdtime(res.data.zk_endtime);
        }
      });
    },
    cdtime(time) {
      let now = new Date().getTime() / 1000,
        obj = {},
        that = this,
        clock = setInterval(totime, 1000);
      function totime() {
        now++;
        if (now > time) {
          clearInterval(clock);
          window.location.reload();
        } else {
          obj.d = parseInt((time - now) / 86400);
          obj.h = parseInt((time - now - obj.d * 86400) / 3600);
          obj.m = parseInt((time - now - obj.d * 86400 - obj.h * 3600) / 60);
          obj.s = parseInt(
            time - now - obj.d * 86400 - obj.h * 3600 - obj.m * 60
          );
          that.cd = obj;
        }
      }
    },
    jumpv(vid) {
      this.$router.push({ name: "play", query: { id: vid } });
    }
  },
  mounted() {
    this.getData();
  },
  components: {
    shopt,
    tool,
    cg,
    cpay,
    cs
  }
};
</script>
<style lang="scss" scoped>
.top-box {
  height: 430px;
  overflow: hidden;
  img {
    width: 100%;
  }
  .volume {
    width: 100%;
    left: 0;
    height: 55px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.3);
    bottom: 0;
    .txt0 {
      padding-left: 27px;
    }
    .txt1 {
      padding-left: 20px;
    }
    .iconfont {
      margin-right: 10px;
    }
  }
}

.discount {
  height: 90px;
  .money0 {
    color: #fff;
    width: 510px;
    background-image: linear-gradient(to right, $theme, $theme-bor);
    .dm00 {
      padding-left: 24px;
      line-height: 90px;
      .aa {
        margin-right: 10px;
      }
      .bb {
        font-size: 64px;
      }
    }
    .dm01 {
      padding-left: 18px;
      .aa {
        margin-top: 15px;
        font-size: 20px;
        color: rgba(255, 255, 255, 0.5);
        text-decoration: line-through;
      }
      .bb {
        margin-top: 10px;
        font-size: 20px;
        padding: 8px;
        border-radius: 4px;
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
  }
  .money1 {
    width: 240px;
    .aa {
      margin-top: 12px;
      font-size: 22px;
      color: #dc4f5d;
    }
    .bb {
      margin-top: 8px;
      font-size: 18px;
      color: #7f512b;
      span {
        margin: 0 3px;
      }
      .bbox {
        color: #fff;
        display: inline-block;
        width: 35px;
        height: 35px;
        border-radius: 6px;
        background-color: #85582f;
        line-height: 35px;
        border: 1px solid #7b4d28;
      }
    }
    background-image: linear-gradient(to bottom, #fcef9b, #f7dd70);
  }
}
.coupon {
  right: 27px;
  bottom: 18px;
  span {
    padding: 6px;
    color: #fff;
    font-size: 26px;
    border-radius: 8px;
    border: 1px solid #e94e24;
    background-color: #ec6541;
  }
  .aa {
    border-right: 0;
  }
  .bb {
    border-left: 0;
  }
}
.toshare {
  font-size: 22px;
  padding: 14px $pardon 14px 14px;
  background-color: $theme;
  top: 18px;
  right: -100px;
  color: #fff;
  border: 2px solid #fff;
  border-right: none;
  border-radius: 27px 0 0 27px;
  transition: right 0.8s;
  .iconfont {
    margin-right: $pardon/2;
  }
}
.toshare.active {
  right: 0;
}

.desc-box {
  padding: 27px;
  background-color: #fff;
  .txt0 {
    font-size: 32px;
    line-height: 1.31;
  }
  .txt1 {
    color: #a5a5a5;
    line-height: 1.36;
    margin-top: 16px;
  }
  .txt2 {
    color: #a5a5a5;
    margin-top: 16px;
  }
}
.shop-mt {
  margin-top: $pardon;
}
.money-boxs {
  height: 260px;
}
.money-box {
  padding: 6px 27px;
  bottom: 0;
  left: 0;
  background-color: #fefefe;
  border-top: 2px solid #f2f2f2;
  box-shadow: 0 -10px 10px #f2f2f2;
  .nowshop {
    color: #fff;
    height: 84px;
    line-height: 84px;
    background-image: linear-gradient(to right, $theme, $theme-bor);
    border: 1px solid $theme-bor;
    border-radius: 42px;
    .aa {
      font-size: 30px;
    }
    .bb {
      color: rgba(255, 255, 255, 0.5);
      text-decoration: line-through;
      margin-left: $pardon/2;
    }
  }
}
</style>