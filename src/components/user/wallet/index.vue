<template>
  <section class="bac">
    <div class="wallet-box">
      <div class="wallet-body position-relative">
        <div class="readmx position-absolute">查看明细</div>
        <div class="balance">
          <div>我的余额</div>
          <div class="money font-weight-bold">{{md.all_money}}</div>
        </div>
        <div class="profit d-flex">
          <div class="w-50">
            <div class="tit">昨日收益（元）</div>
            <div class="money font-weight-bold">{{md.z_money}}</div>
          </div>
          <div class="w-50">
            <div class="tit">今日收益（元）</div>
            <div class="money font-weight-bold">{{md.j_money}}</div>
          </div>
        </div>
        <router-link :to="{path:'apply'}" class="d-block cash-out font-weight-bold text-center">提现</router-link>
      </div>
    </div>
    <div class="cash-record">
      <router-link :to="{path:'record'}" class="cr-li d-flex align-items-center">
        <div class="iconfont icon-icon_doc_fill icbox"></div>
        <div class="txt">提现记录</div>
      </router-link>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      md: {
        z_money: "0.00",
        j_money: "0.00"
      }
    };
  },
  methods: {
    getData() {
      this.axios.post("/api/user/user_money_log/dayMoney.html", {}, res => {
        this.md = {
          z_money: res.data.data.z_money.toFixed(2),
          j_money: res.data.data.j_money.toFixed(2),
          all_money: parseFloat(res.data.data.money).toFixed(2)
        };
      });
    },
    outMoney() {
      this.axios.post("/api/user/user_money_log/txPost.html", {}, res => {
        console.log(res);
      });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
<style lang="scss" scoped>
.wallet-box {
  padding: $pardon;
  .wallet-body {
    color: #fff;
    padding: 45px 35px;
    border-radius: 15px;
    background-image: linear-gradient(to right bottom, #76b3f9, #408ae7);
    box-shadow: 20px 20px 20px -10px #bad8f6;
  }
}
.readmx {
  top: 45px;
  right: 38px;
}
.balance {
  .money {
    margin-top: 22px;
    font-size: 55px;
    letter-spacing: 2px;
  }
}
.profit {
  margin-top: 105px;
  .money {
    font-size: 32px;
    margin-top: 22px;
  }
}

.cash-record {
  padding: 8px 0 0 $pardon;
  .cr-li:hover {
    background-color: #efefef;
  }
  .cr-li {
    color: #212529;
    cursor: pointer;
    padding: 15px 15px;
    border-bottom: 2px solid #c6c6c6;
    background: no-repeat url(../../../assets/right-ico2.png) 680px center;
    background-size: auto 28px;
    .icbox {
      color: $theme;
      width: 72px;
      height: 72px;
      font-size: 35px;
      line-height: 72px;
      text-align: center;
      background-color: $theme-bac;
      border-radius: 36px;
    }
    .txt {
      margin-left: 18px;
    }
  }
}
//   提交按钮
.cash-out {
  margin-top: 40px;
  color: #2477e3;
  font-size: 32px;
  padding: 27px;
  border-radius: 43px;
  background-color: #fff;
}
</style>