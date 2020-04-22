<template>
  <section class="bac">
    <ct :ctxt="cobj"></ct>
    <div class="m-ul">
      <div class="m-li" v-for="(or,inx) in orList" v-bind:key="inx">
        <div class="box0 d-flex justify-content-between align-items-center">
          <div>
            <!-- <span class="txt0">[未读]</span> -->
            <span class="font-weight-bold">{{or.title}}</span>
          </div>
          <div class="txt1">{{or.create_time}}</div>
        </div>
        <div class="box1" v-html="or.content"></div>
      </div>
    </div>

    <!-- 无效页 -->
    <div class="nodata-box">
      <div v-if="page.ojbk&&orList.length==0" class="nodata text-center">
        <div class="txt0 iconfont icon-wushuju"></div>
        <div class="txt1">还没有收到消息</div>
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
        txt: "清空消息",
        class: { "icon-shanchu": true },
        tit: "消息"
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
      let flag;
      this.page.now = page;
      if (!this.page.ojbk) {
        this.axios.post(
          "/api/user/user_msg/index.html",
          {
            page: page
          },
          res => {
            if (page == 1) {
              this.orList = res.data.data.data;
            } else {
              this.orList = this.orList.concat(res.data.data.data);
            }
            this.orList.forEach(ele => {
              flag = parseFloat(ele.change) >= 0;
              ele.cClass = { suc: flag, err: !flag };
            });
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
  },
  updated() {
    document.querySelector(".rw-re1").addEventListener("click", () => {
      this.weui.confirm("您确定要清空消息吗？", () => {
        this.axios.post("/api/user/user_msg/del.html", {}, res => {
          this.weui.toast(res.data.msg, 1500);
          this.page.ojbk = false;
          this.getData(1);
        });
      });
    });
  }
};
</script>
<style lang="scss" scoped>
.m-ul {
  margin-top: $pardon;
  padding-left: $pardon;
  background-color: #fefefe;
  .m-li {
    padding: $pardon;
    border-top: 1px solid #fff;
  }
}
.box0 {
  .txt0 {
    color: $theme;
    font-size: 24px;
  }
  .txt1 {
    color: #777;
    font-size: 18px;
  }
}
.box1 {
  font-size: 24px;
  color: #8a8a8a;
  margin-top: $pardon/2;
  line-height: 1.4;
}
</style>