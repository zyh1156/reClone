<template>
  <section>
    <div class="bacbox position-fixed">
      <div class="gift-box">
        <div class="yue">账号余额：1000元</div>
        <div class="d-flex justify-content-around flex-wrap money-box">
          <div class="money-li text-center font-weight-bold" v-for="(ml,inx) in moneyList" v-bind:key="inx">
            <span class="txt0">￥</span>
            <span class="txt1">{{ml}}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      moneyList: [1, 2, 5, 10, 20, 50, 100, 500]
    };
  }
};
</script>
<style lang="scss" scoped>
.bacbox {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2000;
  background-color: rgba(0, 0, 0, 0.6);
  padding: $pardon $pardon * 1.5;
}
.gift-box {
  border-radius: $pardon;
  background-color: #fff;
  height: 100%;
  padding-top: $pardon;
  .yue {
    line-height: 1.4;
    padding: $pardon;
    border-bottom: 20px solid #f5f5f5;
  }
}
.money-box {
  padding: $pardon*2 $pardon $pardon;
  .money-li {
      color: #fff;
    width: 130px;
    margin: $pardon/4;
    height: 123.6px;
    line-height: 123.6px;
    border-radius: $pardon/2;
    border: 1px solid #ccc;
    background-image: linear-gradient(to right bottom,$theme,$theme-bor);
  }
  .txt0 {
      margin-right: 6px;
  }
  .txt1 {
    font-size: 32px;
  }
}
</style>