<template>
  <section>
    <ct :ctxt="cobj"></ct>
    <div class="wabox">
      <!-- 按钮 -->
      <div class="box0 text-center d-flex justify-content-center">
        <div class="btn0 active">微信提现</div>
        <!-- <div class="btn0">支付宝提现</div> -->
      </div>
      <!-- 金额输入框 -->
      <div class="box1">提现金额</div>
      <label class="box2 d-flex" :class="{'error':toget==1}">
        <div class="txt0 font-weight-bold">￥</div>
        <div class="txt1 flex-grow-1">
          <input
            @change="moneyChange"
            v-model="money.get"
            class="w-100 font-weight-bold"
            type="text"
          />
        </div>
      </label>
      <!-- 金额备注 -->
      <div class="box3">
        <span>可提现金额￥{{money.now}}，</span>
        <span @click="wqdy" class="txt0">全部提现</span>
      </div>
      <div class="box3">
        <span>待结算金额￥{{money.clock}}</span>
        <span class="txt1 iconfont icon-bangzhu"></span>
      </div>
      <!-- 收款方 -->
      <!-- <div class="box4 font-weight-bold">收款方实名</div>
      <div class="box5">
        <input type="text" class="w-100" placeholder="请输入您微信实名认证的真实姓名" />
      </div>-->
      <!-- 收款方 -->
      <!-- <div class="box4 font-weight-bold">支付宝账号</div>
      <div class="box5">
        <input type="text" class="w-100" placeholder="手机号/邮箱" />
      </div>-->
      <!-- 备注 -->
      <div class="box6">
        <ol>
          <li>
            每笔提现手续费至少
            <span class="txt0">2元</span>，微信官方收取
            <span class="txt0">0.6%手续费</span>，详情点此查看
          </li>
          <li>
            每日个人账户提现上限为
            <span class="txt0">5万</span>，超出请联系客服
          </li>
          <li>为保证您的资金安全，提现申请需要实名认证</li>
          <li>提现申请平台处理后，将直接转入您的微信钱包</li>
          <li>0-8点是系统升级时间，暂时关闭提现功能</li>
          <li>如需帮助请联系客服（客服通道）</li>
        </ol>
      </div>
      <!-- 提现按钮 -->
      <div class="box7 w-100 position-fixed">
        <div @click="getMoney" :disabled="toget<2" class="btn0 text-center font-weight-bold">确认提现</div>
      </div>
    </div>
  </section>
</template>
<script>
import ct from "../../cube/cube-title";
export default {
  data() {
    return {
      cobj: {
        class: { "icon-dingdan": true },
        txt: "提现记录",
        url: "/user/wallet/record"
      },
      money: {
        now: "0.00",
        clock: "0.00",
        get: ""
      },
      toget: 0
    };
  },
  components: {
    ct
  },
  methods: {
    getData() {
      this.axios.post("/api/user/user_money_log/getusermoney.html", {}, res => {
        this.money.now = parseFloat(res.data.data.money).toFixed(2);
        this.money.clock = parseFloat(res.data.data.no_money).toFixed(2);
      });
    },
    wqdy() {
      this.money.get = this.money.now;
      this.moneyChange();
    },
    moneyChange() {
      let money = this.money.get,
        money1 = this.money.now;
      if (money.length < 1) {
        this.toget = 0;
      } else {
        money = parseFloat(money);
        money1 = parseFloat(money1);
        if (isNaN(money1)) {
          this.toget = 1;
        } else if (money >= 2 && money <= money1) {
          this.money.get = money.toFixed(2);
          this.toget = 2;
        } else {
          this.toget = 1;
        }
      }
    },
    getMoney() {
      this.moneyChange();
      if (this.toget == 2) {
        this.axios.post(
          "/api/user/user_money_log/addtx.html",
          {
            amount: this.money.get
          },
          res => {
            this.weui.toast(res.data.msg, 1500);
            this.$router.push({ path: "record" });
            // this.money.get="";
            // this.getData();
          }
        );
      }
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
<style lang="scss" scoped>
.wabox {
  padding: 0 $pardon;
}
.box0 {
  padding: $pardon 0;
  .btn0 {
    color: #ec6641;
    border: 2px solid #ededed;
    padding: 27px;
    width: 334px;
    border-radius: 13px;
    background-color: #f8f8f8;
  }
  .active {
    border-color: #ec6641;
    background-color: #fdf6f4;
  }
}
.box1 {
  padding: 20px 0;
  font-size: 24px;
}
.box2 {
  padding: 30px 0 25px;
  border-width: 2px;
  border-style: solid;
  border-color: transparent transparent #eeeeee transparent;
  margin: 0;
  .txt0 {
    font-size: 40px;
    margin-right: $pardon/2;
  }
  .txt1 {
    input {
      border: none;
      outline: none;
      letter-spacing: 2px;
    }
  }
}
.error {
  border-color: #e93934;
  border-radius: 8px;
}
.box3 {
  color: #8d8d8d;
  padding-top: $pardon;
  font-size: 24px;
  .txt0 {
    color: #007bff;
  }
  .txt1 {
    margin-left: 10px;
    color: #ea5127;
    font-size: 32px;
  }
}
.box4 {
  margin-top: 72px;
  font-size: 25px;
}
.box5 {
  font-size: 30px;
  padding: 50px 0 22px;
  border-bottom: 2px solid #eeeeee;
  input {
    border: none;
    outline: none;
  }
}
.box6 {
  padding: 60px 0 0 $pardon;
  li {
    color: #919191;
    line-height: 1.4;
    font-size: 22px;
    margin-bottom: $pardon;
    .txt0 {
      color: #eb5f39;
    }
  }
}
.box7 {
  padding: $pardon;
  bottom: 0;
  left: 0;
  .btn0 {
    color: #fff;
    height: 88px;
    line-height: 88px;
    font-size: 30px;
    border-radius: 44px;
    border: 1px solid $theme-bor;
    background: linear-gradient(to right, $theme, $theme-bor);
  }
  .btn0[disabled] {
    background: #ccc;
    border-color: #c4c4c4;
  }
}
</style>