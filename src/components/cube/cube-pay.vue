<template>
  <aside>
    <!-- 价格部分 -->
    <div class="money-boxs"></div>
    <div class="money-box w-100 position-fixed">
      <div class="nowshop text-center">
        <span v-if="limitTime">折扣价</span>
        <span v-else-if="wd.red_price">优惠价</span>
        <span v-else>支付价</span>
        <span class="aa">：￥{{wd.money}}</span>
        <span v-if="limitTime||wd.red_price" class="bb">￥{{wd.price}}</span>
      </div>
    </div>
  </aside>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["wd", "limitTime"]
};
</script>
<style lang="scss" scoped>
.money-boxs {
  height: 125px;
}
.money-box {
  padding: 6px 27px;
  bottom: 0;
  left: 0;
  background-color: #fefefe;
  border-top: 2px solid #f2f2f2;
  box-shadow: 0 -10px 10px #f2f2f2;
  z-index: 200;
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