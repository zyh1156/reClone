<template>
  <section class="bac">
    <search :type="1" :ptxt="'搜索直播间'" @rekey="getkw"></search>
    <menulist :mlist="mlist" @tapid="setCli"></menulist>
    <cl :clist="tlist" :nodata="page.ojbk"></cl>
    <foot></foot>
  </section>
</template>
<script>
import search from "../cube/search";
import menulist from "../cube/menulist";
import cl from "../cube/cube-live";
import foot from "../cube/footer";
export default {
  data() {
    return {
      mlist: [],
      keyword: "",
      //   菜单列
      cateid: "",
      page: {
        now: 0,
        max: 0,
        ojbk: false
      },
      tlist: []
    };
  },
  components: {
    search,
    menulist,
    cl,
    foot
  },
  mounted() {
    this.getData(1);
    this.getMenu();
    // 添加滚动监听
    document.addEventListener("scroll", this.scrollLoad);
  },
  methods: {
    getData(page) {
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
    setCli(val) {
      // 赋值类别
      this.cateid = val;
      this.tlist = [];
      this.page.ojbk = false;
      this.getData(1);
    },
    getkw(val) {
      // 赋值关键字
      this.keyword = val;
      this.tlist = [];
      this.page.ojbk = false;
      this.getData(1);
    },
    getMenu() {
      this.axios.post("/api/home/index/cate.html", { table: "tv" }, res => {
        let arr = [{ text: "全部", id: "" }];
        res.data.data.forEach(ele => {
          ele.text = ele.name;
          arr.push(ele);
        });
        this.mlist = arr;
      });
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