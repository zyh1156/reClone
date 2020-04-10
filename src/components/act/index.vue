<template>
  <section class="bac">
    <search :type="1" :ptxt="'搜索活动'" @rekey="getkw"></search>
    <div class="swiper-box">
      <!-- 轮播图 -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(sl,inx) in swlist" v-bind:key="inx">
            <img :src="sl.image" alt />
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <menulist :mlist="menuList" @tapid="setCli"></menulist>
    <ce :enlist="celist" :nodata="page.ojbk"></ce>
    <foot></foot>
  </section>
</template>
<script>
import search from "../cube/search";
import menulist from "../cube/menulist";
import ce from "../cube/cube-enroll";
import foot from "../cube/footer";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  data() {
    return {
      // 菜单列表
      menuList: [],
      //   菜单列
      cateid: "",
      //   活动列表
      celist: [],
      //   页码
      page: {
        now: 0,
        max: 0,
        ojbk: false
      },
      //   搜索关键字
      keyword: "",
      swlist: []
    };
  },
  components: {
    search,
    menulist,
    ce,
    foot
  },
  methods: {
    getSwiper() {
      this.axios.post(
        "/api/home/index/get_ads.html",
        {
          ad_id: 6
        },
        res => {
          this.swlist = res.data.data;
        }
      );
    },
    toSwiper() {
      new Swiper(".swiper-container", {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        }
      });
    },
    setCli(val) {
      this.cateid = val;
      this.page.ojbk = false;
      this.celist = [];
      this.getData(1);
    },
    getData(page) {
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
    getkw(val) {
      // 赋值搜索关键字
      this.keyword = val;
      //   重置搜索内容
      this.page.ojbk = false;
      this.celist = [];
      //   开始搜索
      this.getData(1);
    },
    getMenu() {
      this.axios.post("/api/home/index/cate.html", { table: "act" }, res => {
        let arr = [{ text: "全部", id: "" }];
        res.data.data.forEach(ele => {
          ele.text = ele.name;
          arr.push(ele);
        });
        this.menuList = arr;
      });
    }
  },
  mounted() {
    this.getSwiper();
    this.getData(1);
    this.getMenu();
    // 添加滚动监听
    document.addEventListener("scroll", this.scrollLoad);
  },
  updated() {
    this.toSwiper();
  }
};
</script>
<style lang="scss" scoped>
.swiper-box {
  padding: $pardon/2 $pardon;
  background-color: #fff;
}
// 轮播图
.swiper-container {
  height: 310px;
  border: 2px solid #fff;
  border-radius: 13px;
}
</style>