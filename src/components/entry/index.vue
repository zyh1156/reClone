<template>
  <section class="bac">
    <search></search>
    <menulist :mlist="navlist" :menuinx="menuInx" @tapset="setMenu"></menulist>
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
      navlist: [],
      caseData: {
        name: "",
        url: "",
        list: [],
        type: 0,
        nodata: false
      },
      menuInx: [0, 0]
    };
  },
  components: {
    search,
    menulist,
    showCase,
    foot
  },
  methods: {
    getData: async function() {
      let inx = this.$route.query.entryid;
      let res = await this.axios.post("/api/home/goods/index.html", {
        category: inx
      });
      this.$set(this.caseData, "list", res.data.data.data);
      if (res.data.data.data.length == 0) {
        this.$set(this.caseData, "nodata", true);
      } else {
        this.$set(this.caseData, "nodata", false);
      }
    },
    setMenu(val) {
      // 菜单跳转
      let inx = this.navlist[val[0]].id;
      this.$router.push({ path: "/entry", query: { entryid: inx } });
      this.getData();
    },
    setgo() {
      this.navlist = this.$store.state.indexmenu;
      for (let i = 0; i < this.navlist.length; i++) {
        if (this.$route.query.entryid == this.navlist[i].id) {
          this.$set(this.menuInx, 0, i);
          break;
        }
      }
    }
  },
  mounted() {
    this.getData();
    this.setgo();
  },
  watch: {
    "$store.state.indexmenu"() {
      this.setgo();
    }
  }
};
</script>
<style lang="scss" scoped>
</style>