<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  },
  methods: {
    getMenu: async function() {
      let res = await this.axios.post("/api/home/goods/getcate.html");
      this.setMenu(res.data.data);
    },
    setMenu(val) {
      let list = [{ text: "全部"}];
      val.forEach(ele => {
        ele.text = ele.name;
        list.push(ele);
      });
      this.$store.state.indexmenu = list;
    }
  },
  mounted() {
    this.getMenu();
  }
};
</script>

<style lang="scss">
#app {
  // 字体参考：新浪微博
  font: 26px/1 "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
    "WenQuanYi Micro Hei", sans-serif;
}
section.bac {
  background-color: #f8f8f8;
  min-height: 100vh;
}
</style>
