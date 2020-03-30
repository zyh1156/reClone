<template>
  <section>
    <search></search>
    <menulist :mlist="navlist"></menulist>
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
        name: "精选课程",
        url: "",
        list: [],
        type: 0
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
    getData() {
      let loading = this.weui.loading("获取中"),
        that = this,
        data;
      this.axios("http://192.168.1.92/api/").then(res => {
        if (res.status == 200) {
          loading.hide();
          data = res.data.data;
          that.getMenu(data.catelist);
          that.$set(that.caseData, "list", data.tj_goods);
        }
      });
    },
    getMenu(val) {
      if (val) {
        let list = [{ text: "首页" }];
        val.forEach(ele => {
          list.push({
            text: ele.name
          });
        });
        console.log(list);
        this.$store.state.indexmenu = list;
        this.navlist = list;
      } else if (this.$store.state.indexmenu.length == 0) {
        this.getData();
      } else {
        this.navlist = this.$store.state.indexmenu;
      }
    }
  },
  mounted() {
    //   this.getMenu();
    this.getData();
  }
};
</script>
<style lang="scss" scoped>
</style>