<template>
  <section>
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
        type: 0
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
      let res = await this.axios.post(
        "http://192.168.1.92/api/home/goods/index.html",
        { category: inx }
      );
      this.$set(this.caseData, "list", res.data.data.data);
    },
    setMenu(val) {
      // 菜单跳转
      let inx = this.navlist[val[0]].id + 1;
      if (inx) {
        if (inx != this.$route.query.entryid) {
          this.$router.push({ path: "/entry", query: { entryid: inx } });
          this.getData();
        }
      } else {
        this.$router.push("/");
      }
    }
  },
  mounted() {
    this.getData();
  },
  watch: {
    "caseData.list"() {
      this.navlist = this.$store.state.indexmenu;
      for (let i = 0; i < this.navlist.length; i++) {
        if (this.$route.query.entryid == this.navlist[i].id) {
          this.$set(this.menuInx, 0, i);
          break;
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
</style>