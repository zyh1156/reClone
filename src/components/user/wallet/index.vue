<template>
  <section  class="bac">
    <div class="wallet-box">
      <div class="wallet-body">
        <div>查看明细</div>
        <div>
          <div>我的余额</div>
          <div>0.00</div>
        </div>
        <div>
          <div>
            <div>昨日收益（元）</div>
            <div>0.00</div>
          </div>
          <div>
            <div>今日收益（元）</div>
            <div>0.00</div>
          </div>
        </div>
        <div class="cash-out font-weight-bold text-center">提现</div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.wallet-box {
  padding: 27px;
  .wallet-body {
    color: #fff;
    padding: 35px;
    border-radius: 15px;
    background-image: linear-gradient(to right bottom, #56a0f7, #438ce7);
    .cash-out {
      color: #408be6;
      font-size: 32px;
      padding: 27px;
      border-radius: 43px;
      background-color: #fff;
    }
  }
}
</style>