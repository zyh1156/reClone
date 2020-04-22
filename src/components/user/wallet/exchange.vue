<template>
  <section class="bac">
    <ct :ctxt="cobj"></ct>
    <div class="tit">
      <span>可用奖学金：</span>
      <span class="txt1 font-weight-bold">{{credit}}</span>
    </div>
    <div class="e-box d-flex flex-wrap">
      <div class="e-body overflow-hidden" v-for="(cp,inx) in cplist" v-bind:key="inx">
        <!-- 图片 -->
        <div class="box0 overflow-hidden">
          <img v-lazy="cp.thumbnail" alt />
        </div>
        <!-- 标题 -->
        <div class="box1 font-weight-bold">
          <div class="line-clamp2">{{cp.post_title}}</div>
        </div>
        <!-- 金额 -->
        <div class="box2">
          <span class="txt0 font-weight-bold">{{cp.credit}}</span>
          <span class="txt1">积分</span>
          <span class="txt2">￥{{cp.price}}</span>
        </div>
        <!-- 按钮 -->
        <div class="box3 text-center font-weight-bold">
          <div @click="toex(cp)" class="btn0">立即兑换</div>
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
        tit: "奖学金兑换"
      },
      credit: 0,
      cplist: [],
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
          "/api/home/goods/creditgoods.html",
          {
            page: page
          },
          res => {
            res = res.data.data;
            res.data.forEach(ele => {
              ele.ebac = {
                backgroundImage: "url(" + ele.thumbnail + ")"
              };
            });
            if (page == 1) {
              this.cplist = res.data;
            } else {
              this.cplist = this.cplist.concat(res.data);
            }
            this.page.max = res.last_page;
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
    },
    toex(val) {
      if (this.credit > val.credit) {
        this.weui.confirm("花费 " + val.credit + " 奖学金兑换该课程？", res => {
          this.axios.post(
            "/api/user/order/creditpay.html",
            { id: val.id },
            res => {
              return;
              this.$router.push({ name: "goods", params: { goodsid: val.id } });
            },
            false,
            true
          );
        });
      } else {
        this.weui.alert("奖学金不足");
      }
    }
  },
  mounted() {
    this.credit = this.$route.query.credit;
    this.getData(1);
    // 添加滚动监听
    document.addEventListener("scroll", this.scrollLoad);
  }
};
</script>
<style lang="scss" scoped>
.tit {
  font-size: 24px;
  padding: $pardon $pardon/2 0;
  .txt1 {
    color: #dc3420;
  }
}
.e-box {
  padding: $pardon/2;
  .e-body {
    width: 334.5px;
    margin: $pardon/2;
    border-radius: 6px;
    background-color: #fff;
    box-shadow: 10px 10px 10px $theme-bac;
  }
}
.box0 {
  height: 193px;
}
.box1 {
  font-size: 24px;
  line-height: 1.4;
  padding: $pardon/2;
}
.box2 {
  padding: $pardon/2;
  .txt0 {
    font-size: 36px;
    color: #dc3420;
  }
  .txt1 {
    margin: 0 10px;
    font-size: 20px;
    color: #dc3420;
  }
  .txt2 {
    font-size: 20px;
    color: #aaa;
    text-decoration: line-through;
  }
}
.box3 {
  padding: $pardon/2;
  .btn0 {
    border-radius: 5px;
    color: #fff;
    padding: $pardon/2;
    background-image: linear-gradient($theme, $theme-bor);
  }
}
</style>