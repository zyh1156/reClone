<template>
  <section class="bac">
    <div class="shop-ul">
      <!-- 详情 -->
      <div
        class="d-flex justify-content-between align-items-center wr-box"
        v-for="(or,inx) in orList"
        v-bind:key="inx"
      >
        <!-- 备注文字 -->
        <div class="wr-text">
          <div class="txt0 text-truncate">{{or.remark}}</div>
          <div class="txt1">时间：{{or.create_time}}</div>
          <div class="txt1">订单号：{{or.order_sn}}</div>
        </div>
        <!-- 金额 -->
        <div class="text-right wr-money">
          <div class="txt0 font-weight-bold">￥{{or.order_amount}}</div>
          <div class="txt1">已支付</div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      orList: []
    };
  },
  methods: {
    getData() {
      //   return;
      this.axios.post("/api/user/profile/getorderlist.html", {}, res => {
        this.orList = res.data.data.data;
      });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
<style lang="scss" scoped>
.shop-ul {
  padding: 18px 22px;
}

.wr-box {
  padding: $pardon/2 0 0 $pardon;
  background-color: #fff;
  border-radius: 15px;
  border-bottom: 1px solid #f1f1f1;
  margin-bottom: 18px;
  .wr-text {
    width: 480px;
    height: 155px;
    padding: $pardon/2;
    .txt0 {
      font-size: 28px;
      line-height: 1.4;
    }
    .txt1 {
      color: #959595;
      font-size: 24px;
      height: 24px;
      margin-top: 16px;
    }
  }
  .wr-money {
    width: 200px;
    height: 155px;
    padding: 0 $pardon 0 0;
    .txt0 {
      font-size: 32px;
      height: 100px;
      line-height: 100px;
    }
    .txt1{
        color: #ea5b33;
        font-size: 24px;
    }
  }
}
</style>