<template>
  <section class="bac">
    <ct :ctxt="cobj"></ct>
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
          <div class="txt1">订单号：{{or.order_sn}}</div>
          <div class="txt1">支付时间：{{or.create_time}}</div>
          <div class="txt1">支付方式：{{or.pay_name}}</div>
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
import ct from "../../cube/cube-title";
export default {
  data() {
    return {
      cobj: {
        class: { "icon-dingdan": true },
        txt: "订单记录"
      },
      orList: [],
      page: {
        now: 0,
        max: 0,
        ojbk: false
      }
    };
  },
  components: {
    ct
  },
  methods: {
    getData(page) {
      this.page.now = page;
      if (!this.page.ojbk) {
        this.axios.post(
          "/api/user/profile/getorderlist.html",
          {
            page: page
          },
          res => {
            if (page == 1) {
              this.orList = res.data.data.data;
            } else {
              this.orList = this.orList.concat(res.data.data.data);
            }
            this.page.max = res.data.data.last_page;
            this.page.ojbk = this.page.max <= page;
          }
        );
      }
    },
    scrollLoad() {
      let scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight; //document的滚动高度
      let nowScotop =
        document.documentElement.clientHeight || document.body.clientHeight; //可视区高度
      let wheight =
        document.documentElement.scrollTop || document.body.scrollTop; //已滚动高度

      //   是否快滚到底
      if (nowScotop >= scrollHeight - wheight * 1.1) {
        // 页数是否拉满
        if (this.page.now < this.page.max) {
          let inx = this.page.now + 1;
          //获取数据
          this.getData(inx);
        }
      }
    }
  },
  mounted() {
    this.getData(1);
    this.scrollLoad();
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
    // height: 155px;
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
    .txt1 {
      color: $theme;
      font-size: 24px;
    }
  }
}
</style>