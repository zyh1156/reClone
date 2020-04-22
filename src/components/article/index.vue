<template>
  <section class="bac">
    <search :type="1" :ptxt="'搜索话题'" @rekey="getkw"></search>
    <menulist :mlist="menuls"></menulist>
    <!-- 列表部分 -->
    <cb :cblist="alist" :nodata="page.ojbk"></cb>
    <footer2></footer2>
  </section>
</template>
<script>
import search from "../cube/search";
import cb from "../cube/cube-bbs";
import footer2 from "../cube/footer";
import menulist from "../cube/menulist";
export default {
  data() {
    return {
      alist: [],
      menuls: [{ text: "推荐" }, { text: "热门" }, { text: "火爆" }],
      keyword: "",
      page: {
        now: 0,
        max: 0,
        ojbk: false
      }
    };
  },
  components: {
    footer2,
    cb,
    search,
    menulist
  },
  mounted() {
    this.getData(1);
    // 添加滚动监听
    document.addEventListener("scroll", this.scrollLoad);
  },
  methods: {
    getData(page) {
      this.page.now = page;
      this.axios.post(
        "/api/home/article/index.html",
        {
          page: page,
          keyword: this.keyword
        },
        res => {
          if (page == 1) {
            this.alist = res.data.data.data;
          } else {
            this.alist = this.alist.concat(res.data.data.data);
          }
          this.page.max = res.data.data.last_page;
          if (page < this.page.max) {
            this.page.ojbk = false;
          } else {
            this.page.ojbk = true;
          }
        }
      );
    },
    getkw(val) {
      // 赋值搜索关键字
      this.keyword = val;
      //   重置搜索内容
      this.page.ojbk = false;
      this.alist = [];
      //   开始搜索
      this.getData(1);
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
  }
};
</script>
<style lang="scss" scoped>
</style>