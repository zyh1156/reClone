<template>
  <section class="bac">
    <ct :ctxt="cobj"></ct>
    <div class="gul">
      <router-link
        :to="{name:'givelist',query:{giveid:cl.id,key:''}}"
        class="d-block gli"
        v-for="(cl,inx) in cplist"
        v-bind:key="inx"
      >
        <div class="box0">订单号：{{cl.order_sn}}</div>
        <!-- 商品 -->
        <div class="box1 d-flex">
          <div class="box2 overflow-hidden">
            <img v-lazy="cl.thumbnail" alt />
          </div>
          <div class="box3">
            <div class="box4 font-weight-bold line-clamp2">{{cl.post_title}}</div>
            <div class="box5 d-flex justify-content-between">
              <div class="box6">可赠送{{cl.k_num}}人</div>
              <div class="box7">
                <span class="iconfont icon-fenxiang"></span>
                <span>&nbsp;分享给好友</span>
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </section>
</template>
<script>
import dayjs from "dayjs";
import ct from "../cube/cube-title";
export default {
  data() {
    return {
      cobj: {
        tit: "赠送好友"
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
          "/api/user/user_friends/index.html",
          {
            page: page
          },
          res => {
            res = res.data.data;
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
.gul {
  padding: $pardon/2 $pardon;
  .gli {
    color: inherit;
    margin: $pardon/2 0;
    padding: $pardon/2 $pardon $pardon;
    background-color: #fff;
    border-radius: 10px;
  }
  .box0 {
    color: #b5b5b5;
    font-size: 20px;
    padding-bottom: $pardon/2;
    border-bottom: 1px solid #f0f0f0;
  }
  .box1 {
    padding-top: $pardon;
  }
  .box2 {
    width: 280px;
    height: 161.5px;
    margin-right: $pardon;
    border-radius: 7px;
    img {
      width: 100%;
    }
  }
  .box4 {
    height: 75px;
  }
  .box3 {
    width: 370px;
    font-size: 26px;
    line-height: 1.4;
  }
  .box5 {
    margin-top: $pardon * 1.5;
    .box6 {
      color: #b5b5b5;
    }
  }
}
</style>