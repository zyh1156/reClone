<template>
  <section  class="bac">
    <div class="er-box">
      <!-- 标题部分 -->
      <div class="er-tit position-relative text-center">营销推广&nbsp;&nbsp;吸粉引流</div>
      <div class="er-body">
        <div class="er-list">
          <div v-for="i in 10" v-bind:key="i" class="er-li">
            <div class="tit">
              <span>分校报名</span>
            </div>
            <div class="con position-relative overflow-hidden">
              <!-- <img src="../../assets/swiper/00.png" alt /> -->
              <div class="time d-inline-block position-absolute">
                <span class="iconfont icon-shijian"></span>
                <span>截止到2020年3月26日10点21分</span>
              </div>
              <div class="go position-absolute"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <foot></foot>
  </section>
</template>
<script>
import foot from "../cube/footer";
export default {
  data() {
    return {};
  },
  components: {
    foot
  }
};
</script>
<style lang="scss" scoped>
section {
  background-color: #f8f8f8;
  padding-bottom: 48px;
}
.er-box {
  .er-tit {
    width: 475px;
    margin: 0 auto;
    font-size: 32px;
    padding: 19px 0;
    border-radius: 35px;
    background-image: linear-gradient(to right bottom, #f4d052, #f4d052);
    bottom: -30px;
    box-shadow: 0 10px 10px #ebe4c7;
  }
  .er-body {
    padding: 0 27px;
    .er-list {
      background-color: #fefefe;
      padding: 27px;
    }
  }
  .er-li {
    border-top: 1px solid #f1f1f1;
    margin-top: 27px;
    padding: 27px 0;
    box-shadow: 0 10px 10px #f1f1f1;
    .tit {
      height: 36px;
      font-size: 22px;
      line-height: 36px;
      padding-left: 15px;
    }
    .con {
      height: 280px;
      margin-top: 20px;
      .time {
        font-size: 20px;
        padding: 9px 14px;
        bottom: 11px;
        left: 0;
        background-color: #fff;
        border-radius: 0 19px 19px 0;
      }
      .go {
        width: 40px;
        height: 40px;
        background-image: url(../../assets/right-ico.png);
        background-size: 100% 100%;
        right: 25px;
        bottom: 14px;
        animation: identifier 1s infinite alternate;
      }
    }
  }
}
@keyframes identifier {
  from {
    right: 20px;
  }
  to {
    right: 30px;
  }
}
</style>