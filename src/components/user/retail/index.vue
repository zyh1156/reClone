<template>
  <section class="bac">
    <div class="topbox">
      <div class="d-flex text-center">
        <div class="w-50 w-box">
          <div class="toget">今日收益（元）</div>
          <div class="money">0.00</div>
        </div>
        <div class="w-50 w-box">
          <div class="toget">累计收益（元）</div>
          <div class="money">0.00</div>
        </div>
      </div>
      <!-- 按钮 -->
      <div class="getMoney">提现</div>
    </div>
    <!-- 分销管理 -->
    <div class="rt-box">
      <div class="rt-tit">分销管理</div>
      <div class="rt-ul">
        <div class="rt-li">分销订单</div>
        <div class="rt-li">我分销的直播间</div>
      </div>
      <div class="rt-ul">
        <div class="rt-li">赚钱秘籍</div>
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
.topbox {
  height: 315px;
  background: url("../../../assets/user/headerTop.a664892.png") no-repeat center -20px;
  background-size: 100% auto;
}
.w-box {
  .toget {
    color: rgba(255, 255, 255, 0.72);
    margin-top: 45px;
  }
  .money {
    color: #fff;
    margin-top: 24px;
    font-size: 42px;
    font-weight: bold;
    letter-spacing: 3px;
  }
}
.getMoney {
  width: 600px;
  height: 90px;
  margin: 55px auto;
  text-align: center;
  line-height: 90px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 10px 10px 10px $theme-bac;
  color: $theme;
}
.rt-box {
  margin-top: 10px;
  .rt-tit {
    font-size: 32px;
    font-weight: bold;
    padding: 20px;
  }
  .rt-ul {
      margin-bottom: 20px;
    background-color: #fff;
  }
  .rt-li:last-child {
    border-bottom: none;
  }
  .rt-li {
      color: #636363;
    padding: $pardon 20px;
    border-bottom: 1px solid #f2f2f2;
    background: url(../../../assets/right-ico2.png) no-repeat 720px center;
    background-size: auto 26px;
  }
}
</style>