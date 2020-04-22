<template>
  <section class="bac">
    <ct :ctxt="cobj"></ct>
    <div class="cplist">
      <div class="d-flex cpbox" v-for="(cp,inx) in cplist" v-bind:key="inx">
        <div class="l-box flex-grow-1">
          <div class="txt0">{{cp.title}}</div>
          <div class="box1 txt1">
            <!-- <span>平台优惠券</span> -->
          </div>
          <div class="box1 text-truncate">
            <span class="txt1">适用范围：</span>
            <span class="txt2">{{cp.post_title}}</span>
          </div>
          <div class="box1">
            <span class="txt1">有效期至：</span>
            <span class="txt2">{{cp.endtime}}</span>
          </div>
        </div>
        <div class="r-box text-center d-flex justify-content-center align-content-center flex-wrap">
          <div class="cf w-100">
            <span class="txt0">￥</span>
            <span class="txt1 font-weight-bold">{{cp.price}}</span>
          </div>
          <router-link :to="{name:'goods',params:{goodsid:cp.id}}" class="d-block txt2">立即使用</router-link>
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
        tit: "优惠券"
      },
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
          "/api/home/red/index.html",
          {
            page: page
          },
          res => {
            if (page == 1) {
              this.cplist = res.data.data.data;
            } else {
              this.cplist = this.cplist.concat(res.data.data.data);
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
    // 添加滚动监听
    document.addEventListener("scroll", this.scrollLoad);
  }
};
</script>
<style lang="scss" scoped>
.cplist {
  padding: 22px;
  .cpbox {
    margin-bottom: 18px;
    border-radius: 5px;
    overflow: hidden;
    border-left: 3px solid $theme;
  }
}
.l-box {
  width: 490px;
  background-color: #fff;
  padding: $pardon;
  position: relative;
  .box1 {
    padding-top: 16px;
    height: 40px;
    font-size: 24px;
  }
  .txt0 {
    font-weight: bold;
    margin-bottom: 10px;
  }
  .txt1 {
    color: #aaaaaa;
  }
  .txt2 {
    color: #838383;
  }
}
.r-box::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -10%;
  height: 120%;
  z-index: 100;
  width: 30px;
  background-image: radial-gradient(#f0f0f0 50%, transparent 0);
  background-size: 30px 30px;
  background-position:0 7.5px;
}
.r-box {
  width: 214px;
  position: relative;
  background-image: linear-gradient(to right bottom, $theme, $theme-bor);
  .cf {
    color: #fff;
  }
  .txt0 {
    font-size: 20px;
  }
  .txt1 {
    font-size: 38px;
  }
  .txt2 {
    margin-top: 24px;
    font-size: 24px;
    height: 50px;
    width: 150px;
    line-height: 50px;
    background-color: #fff;
    border-radius: 25px;
    color: inherit;
  }
}
</style>