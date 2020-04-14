<template>
  <section class="bac">
    <!-- 菜单栏 -->
    <div class="d-flex rw-menu position-fixed w-100 justify-content-between">
      <div @click="reload" class="rw-re0 d-flex align-items-center">
        <span class="iconfont icon-icon_left"></span>
        <span>返回</span>
      </div>
      <div class="rw-re1 d-flex align-items-center">
        <span class="iconfont icon-icon_service"></span>
        <span>提现咨询</span>
      </div>
    </div>
    <div class="menu-shadow"></div>
    <!-- 主内容 -->
    <div v-for="j in 3" v-bind:key="j">
      <!-- 标题 -->
      <div class="wrt-box">
        <div class="wr-tit d-flex justify-content-between w-100">
          <div>{{j}}</div>
          <div>￥200.00</div>
        </div>
      </div>
      <!-- 流水 -->
      <div class="position-relative" v-for="i in 20" v-bind:key="i">
        <!-- 详情 -->
        <div class="d-flex align-items-center wr-box">
          <!-- 银行logo -->
          <div class="bank-logo">
            <img src="../../../assets/menu.jpg" alt />
          </div>
          <!-- 备注文字 -->
          <div class="wr-text">
            <div class="txt0">文字</div>
            <div class="txt1">时间</div>
            <div class="txt1">时间</div>
          </div>
          <!-- 金额 -->
          <div class="text-right wr-money font-weight-bold">￥100.00</div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import $ from "jquery";
export default {
  data() {
    return {};
  },
  mounted() {
    this.getData();
    this.scrollLoad();
    // 添加滚动监听
    document.addEventListener("scroll", this.scrollLoad);
  },
  methods: {
    getData() {
      //   return;
      this.axios.post("/api/user/user_money_log/txIndex.html", {}, res => {
        console.log(res);
      });
    },
    scrollLoad() {
      let wheight =
        document.documentElement.scrollTop || document.body.scrollTop; //已滚动高度
      let a = $(".wr-tit").css({
        position: "",
        zIndex: -10,
        top: 0
      });
      let h = $(".rw-menu").height();
      //   从后往前
      for (let i = a.length - 1; i > -1; i--) {
        if (wheight + h > a[i].offsetTop) {
          $(a[i]).css({
            position: "fixed",
            zIndex: i + 1,
            top: h + "px"
          });
          break;
        }
      }
    },
    reload() {
      this.$router.go(-1);
    }
  },
  updated() {
    this.setTop();
  }
};
</script>
<style lang="scss" scoped>
.menu-shadow {
  height: 94px;
}
.rw-menu {
  left: 0;
  top: 0;
  background: #fff;
  box-shadow: 0 10px 10px $theme-bac;
  z-index: 250;
  .rw-re0 {
    padding: $pardon $pardon/2;
  }
  .rw-re1 {
    padding: $pardon $pardon/2;
  }
  .iconfont {
    margin-right: $pardon/2;
    font-size: 40px;
  }
}
.wrt-box {
  height: 100px;
  .wr-tit {
    color: #9b9b9b;
    font-size: 24px;
    background: #f5f5f5;
    padding: 37px $pardon;
    border-bottom: 1px solid #eeeeee;
  }
  .wr-shadow {
    top: 0;
    left: 0;
  }
}
.wr-box {
  padding: $pardon/2 0 0 $pardon;
  background-color: #f8f8f8;
  .bank-logo {
    width: 92px;
    padding: $pardon/2;
    img {
      width: 64px;
      height: 64px;
      border-radius: 32px;
    }
  }
  .wr-text {
    width: 430px;
    height: 155px;
    padding: $pardon/2;
    border-bottom: 1px solid #f1f1f1;
    .txt0 {
      font-size: 28px;
      height: 28px;
    }
    .txt1 {
      color: #959595;
      font-size: 24px;
      height: 24px;
      margin-top: 24px;
    }
  }
  .wr-money {
    width: 200px;
    height: 155px;
    line-height: 155px;
    padding: 0 $pardon;
    font-size: 32px;
    border-bottom: 1px solid #f1f1f1;
  }
}
</style>