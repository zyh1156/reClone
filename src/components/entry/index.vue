<template>
  <section class="bac">
    <search></search>
    <menulist :mlist="menuLists" :menuinx="menuInx" @tapid="setMenu"></menulist>
    <showCase :datas="caseData"></showCase>
    <foot></foot>
  </section>
</template>
<script>
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
        type: 0,
        nodata: false
      },
      menuInx: [0, -1]
    };
  },
  components: {
    search,
    menulist,
    showCase,
    foot
  },
  methods: {
    getData: function() {
      let inx = this.$route.query.entryid;
      this.axios.post(
        "/api/home/goods/index.html",
        {
          category: inx
        },
        res => {
          this.$set(this.caseData, "list", res.data.data.data);
          if (res.data.data.data.length == 0) {
            this.$set(this.caseData, "nodata", true);
          } else {
            this.$set(this.caseData, "nodata", false);
          }
        }
      );
    },
    setMenu(val) {
      if (this.$route.query.entryid != val) {
        this.$router.push({ path: "/entry", query: { entryid: val } });
        this.getData();
      }
    },
    getMenu: function() {
      this.axios.post("/api/home/goods/getcate.html", {}, res => {
        let arr = [{ text: "全部", id: "" }];
        res.data.data.forEach(ele => {
          ele.text = ele.name;
          arr.push(ele);
        });
        this.menuLists = arr;
      });
    }
  },
  mounted() {
    this.getData();
    this.getMenu();
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