<template>
  <section class="bac">
    <search :type="1" :ptxt="'搜索课程'" @rekey="getkey"></search>
    <menulist :mlist="menuLists" :menuinx="menuInx" @tapid="setMenu"></menulist>
    <showCase :datas="caseData" :nodata="page.ojbk"></showCase>
    <foot></foot>
  </section>
</template>
<script>
let inx, keyword;
import search from "../cube/search";
import menulist from "../cube/menulist";
import showCase from "../cube/showcase";
import foot from "../cube/footer";
export default {
  data() {
    return {
      menuLists: [],
      caseData: {
        name: "",
        url: "",
        list: [],
        type: 0
      },
      menuInx: [0, -1],
      page: {
        now: 0,
        max: 0,
        ojbk: false
      }
    };
  },
  components: {
    search,
    menulist,
    showCase,
    foot
  },
  methods: {
    getData(page) {
      let arr = [];
      inx = this.$route.query.entryid;
      this.page.now = page;
      if (!this.page.ojbk) {
        this.axios.post(
          "/api/home/goods/index.html",
          {
            category: inx,
            page: page,
            keyword: keyword
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
    setMenu(val) {
      if (this.$route.query.entryid != val) {
        this.page.ojbk = false;
        this.caseData.list = [];
        this.$router.push({ path: "/entry", query: { entryid: val } });
        this.getData(1);
      }
    },
    getkey(val) {
      this.$router.push({ path: "/entry", query: { keyword: val } });
      this.$router.go();
    },
    getMenu() {
      this.axios.post("/api/home/goods/getcate.html", {}, res => {
        let arr = [{ text: "全部", id: "" }];
        res.data.data.forEach(ele => {
          ele.text = ele.name;
          arr.push(ele);
        });
        this.menuLists = arr;
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
  },
  mounted() {
    keyword = this.$route.query.keyword;
    this.getData(1);
    this.getMenu();
    // 添加滚动监听
    document.addEventListener("scroll", this.scrollLoad);
  },
  watch: {
    menuLists() {
      let id = this.$route.query.entryid || "",
        i;
      for (i = 0; i < this.menuLists.length; i++) {
        if (this.menuLists[i].id == id) {
          // 重置菜单栏
          this.$set(this.menuInx, 0, i);
          this.$set(this.menuInx, 1, -1);
          break;
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
</style>