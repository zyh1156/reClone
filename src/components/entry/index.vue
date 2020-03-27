<template>
  <section>
    <search></search>
    <menulist></menulist>
    <showCase :datas="caseData"></showCase>
  </section>
</template>
<script>
import search from "../cube/search";
import menulist from "../cube/menulist";
import showCase from "../cube/showcase";
export default {
  data() {
    return {
      caseData: {
        name: "免费课程",
        url: "",
        list: [],
        type: 1
      }
    };
  },
  components: {
    search,
    menulist,
    showCase
  },
  methods: {
    getData() {
      let loading = this.weui.loading("获取中"),
        that = this;
      this.axios("http://192.168.1.92/api/").then(res => {
        if (res.status == 200) {
          loading.hide();
          //分类
        //   that.$set(that, "menu5", res.data.data.f_c);
          //课程
          that.$set(that.caseData, "list", res.data.data.tj_goods);
        }
      });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
<style lang="scss" scoped>
</style>