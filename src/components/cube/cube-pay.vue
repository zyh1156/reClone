<template>
  <aside>
    <!-- 价格部分 -->
    <div class="money-boxs"></div>
    <div :class="{ispay:wd.is_pay==1}" class="money-box w-100 position-fixed">
      <div @click="topay" class="nowshop text-center">
        <span v-if="wd.is_pay==1">已支付</span>
        <span v-else-if="wd.price=='0.00'">免费</span>
        <span v-else>
          <span v-if="limitTime">折扣价</span>
          <span v-else-if="wd.red_price">优惠价</span>
          <span v-else>支付价</span>
          <span class="aa">：￥{{wd.money}}</span>
          <span v-if="limitTime||wd.red_price" class="bb">￥{{wd.price}}</span>
        </span>
      </div>
    </div>
  </aside>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    topay() {
      if (this.wd.is_pay == 0) {
        let data = {
          table: "goods_post",
          object_id: this.wd.id,
          is_firends: 0,
          num: 1
        };
        this.axios.post("/api/user/order/to_pay.html", data, res => {
          if (res.data.data == 0) {
            this.weui.toast(res.data.msg, 1500);
            this.$router.go();
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
  props: ["wd", "limitTime"]
};
</script>
<style lang="scss" scoped>
.money-boxs {
  height: 100px;
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
.ispay {
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
  -webkit-filter: grayscale(1);
}
</style>