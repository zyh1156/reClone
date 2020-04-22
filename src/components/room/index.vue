<template>
  <section class="bac">
    <!-- banner -->
    <div class="banner overflow-hidden">
      <img :src="teach.thumbnail_bj" alt />
    </div>
    <shopt :teach="teach"></shopt>
    <menul :mlist="nav" @tapset="tapMenu"></menul>
    <sc v-show="navInx==0" :datas="caseData" :nodata="page.ojbk"></sc>
    <cb v-show="navInx==1" :cblist="alist" :nodata="page.ojbk"></cb>
    <ce v-show="navInx==2" :enlist="celist" :nodata="page.ojbk"></ce>
    <cl v-show="navInx==3" :clist="tlist" :nodata="page.ojbk"></cl>
    <foot></foot>
  </section>
</template>
<script>
let id;
import shopt from "../cube/shoptitle";
import menul from "../cube/menulist";
import sc from "../cube/showcase";
import ce from "../cube/cube-enroll";
import cb from "../cube/cube-bbs";
import cl from "../cube/cube-live";
import foot from "../cube/footer";
export default {
  data() {
    return {
      navInx: 0,
      nav: [
        { text: "课程" },
        { text: "话题" },
        { text: "活动" },
        { text: "直播" }
      ],
      teach: {},
      tlist: [],
      celist: [],
      alist: [],
      caseData: {
        name: "",
        url: "",
        list: [],
        type: 0
      },
      page: {
        now: 0,
        max: 0,
        ojbk: false
      }
    };
  },
  components: {
    shopt,
    menul,
    foot,
    sc,
    ce,
    cb,
    cl
  },
  methods: {
    tapMenu(val) {
      this.navInx = val[0];
    },
    getData() {
      //   获取教师信息
      this.axios.post("/api/home/teach/index.html", { user_id: id }, res => {
        this.teach = res.data.data;
      });
    },
    getData1(page) {
      //   获取课程
      let arr = [];
      this.page.now = page;
      if (!this.page.ojbk) {
        this.axios.post(
          "/api/home/goods/index.html",
          {
            user_id: id,
            page: page
          },
          res => {
            arr = this.caseData.list.concat(res.data.data.data);
            this.$set(this.caseData, "list", arr);
            //   是否所有页数加载完成
            this.page.max = res.data.data.last_page;
            this.page.ojbk = page >= this.page.max;
          }
        );
      }
    },
    getData2(page) {
      this.page.now = page;
      this.axios.post(
        "/api/home/article/index.html",
        {
          page: page,
          user_id: id
        },
        res => {
          this.alist = this.alist.concat(res.data.data.data);
          this.page.max = res.data.data.last_page;
          if (page < this.page.max) {
            this.page.ojbk = false;
          } else {
            this.page.ojbk = true;
          }
        }
      );
    },
    getData3(page) {
      this.page.now = page;
      if (!this.page.ojbk) {
        this.axios.post(
          "/api/home/act/index.html",
          {
            page: page,
            category: this.cateid,
            keyword: this.keyword
          },
          res => {
            res.data.data.data.forEach(ele => {
              if (new Date(ele.endtime).getTime() < new Date().getTime()) {
                ele.outime = true;
              }
            });
            this.celist = this.celist.concat(res.data.data.data);
            this.page.max = res.data.data.last_page;
            if (page < this.page.max) {
              this.page.ojbk = false;
            } else {
              this.page.ojbk = true;
            }
          }
        );
      }
    },
    getData4(page) {
      this.page.now = page;
      if (!this.page.ojbk) {
        this.axios.post(
          "/api/home/tv/index.html",
          { keyword: this.keyword, category: this.cateid, page: page },
          res => {
            this.tlist = this.tlist.concat(res.data.data.data);
            this.page.max = res.data.data.last_page;
            if (page < this.page.max) {
              this.page.ojbk = false;
            } else {
              this.page.ojbk = true;
            }
          },
          true
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
    id = this.$route.params.roomid;
    this.getData();
    this.getData1(1);
    this.getData2(1);
    this.getData3(1);
    this.getData4(1);
    // 添加滚动监听
    document.addEventListener("scroll", this.scrollLoad);
  }
};
</script>
<style lang="scss" scoped>
.banner {
  height: 375px;
}
</style>