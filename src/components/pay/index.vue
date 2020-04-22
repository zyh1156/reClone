<template>
  <section class="bac">
    <!-- 顶部 -->
    <div class="ptop text-center">
      <div></div>
      <div>支付订单</div>
    </div>
    <!-- 详情 -->
    <div class="pcon">
      <div class="pcon-box">
        <table>
          <tbody>
            <tr>
              <td class="txt0">订单号：</td>
              <td>{{pd.order_sn}}</td>
            </tr>
            <tr>
              <td class="txt0">订单备注：</td>
              <td>{{pd.remark}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="pcon-box text-center txt1">
        <span>￥{{pd.order_amount}}</span>
      </div>
    </div>
    <div class="bor-bot">
      <div class="weui-cells weui-cells_checkbox">
        <label class="weui-cell weui-cell_active weui-check__label" for="s11">
          <div class="paylogo">
            <img src="../../assets/icon/weixin.png" alt />
          </div>
          <div class="weui-cell__bd">
            <p>微信支付</p>
          </div>
          <div class="weui-cell__hd">
            <input
              type="radio"
              class="weui-check"
              v-model="paytype"
              name="checkbox1"
              id="s11"
              value="1"
              checked="checked"
            />
            <i class="weui-icon-checked"></i>
          </div>
        </label>
        <label :class="{'noyue':pd.is_types_2==0}" class="weui-cell weui-cell_active" for="s12">
          <div class="paylogo">
            <img src="../../assets/icon/yue.png" alt />
          </div>
          <div class="weui-cell__bd">
            <div>余额支付</div>
            <div class="txt3">可用余额：{{pd.user_money}}</div>
          </div>
          <div class="weui-cell__hd">
            <input
              :disabled="pd.is_types_2==0"
              type="radio"
              name="checkbox1"
              class="weui-check"
              id="s12"
              value="2"
              v-model="paytype"
            />
            <i class="weui-icon-checked"></i>
          </div>
        </label>
      </div>
    </div>
    <!-- 确认按钮 -->
    <div class="nowpay">
      <div class="paybtn" @click="gopay">立即支付</div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      pd: {},
      paytype: 1
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      let id = this.$route.query.orderid;
      this.axios.post("/api/user/order/getOrder.html", { id: id }, res => {
        this.pd = res.data.data;
      });
    },
    gopay() {
      if (this.pd.is_types_2 == 0 && this.paytype == 2) {
        this.weui.alert("可用余额不足");
        this.paytype == 1;
      } else {
        let data = {
            id: this.$route.query.orderid,
            pay_types: this.paytype
          },
          that = this;
        this.axios.post("/api/user/order/go_pay.html", data, res => {
          if (data.pay_types == 2 && res.data.data.order_id == "") {
            if (this.$store.state.togive == 1) {
              this.$store.state.togive = 2;
            }
            this.weui.toast(res.data.msg, {
              duration: 1500,
              callback: function() {
                that.$router.go(-1);
              }
            });
          }
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
$col: #f8f8f8;
.ptop {
  color: #fff;
  padding: $pardon;
  background-color: $theme;
}
.pcon {
  background-color: #fff;
  padding: $pardon * 2;
  td {
    vertical-align: top;
    min-width: 150px;
    padding: $pardon/2 0;
    line-height: 1.4;
  }
  .txt0 {
    color: #999;
  }
  .txt1 {
    font-size: 72px;
    font-weight: bold;
    line-height: 2;
  }
}
.pcon-box {
  padding: $pardon 0;
  border-bottom: 1px dashed #f0f0f0;
}
.weui-cells {
  margin-top: 0;
  padding-bottom: $pardon;
}
.bor-bot {
  position: relative;
  overflow: hidden;
}
.bor-bot::after {
  content: "";
  position: absolute;
  width: 110%;
  left: -2.5%;
  bottom: -20px;
  border-bottom: 40px dotted $col;
}
p,
label {
  margin: 0;
}
.weui-cells:after {
  border-color: $col;
}
.paylogo {
  padding-right: $pardon;
  img {
    width: 48px;
    height: 48px;
  }
}
.txt3 {
  font-size: 24px;
}
.noyue {
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
  -webkit-filter: grayscale(1);
}
.nowpay {
  position: fixed;
  left: 0;
  width: 100%;
  bottom: 0;
  padding: $pardon;
  background-color: #fff;
  border-top: 1px solid #eee;
  .paybtn {
    color: #fff;
    font-size: 34px;
    padding: $pardon;
    text-align: center;
    border-radius: 7px;
    border: 1px solid $theme-bor;
    background-color: $theme;
  }
}
</style>