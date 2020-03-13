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
    add() {}
  },
  mounted() {}
};
</script>

<style lang="scss">
#app {
  // 字体参考：新浪微博
  font: 26px/1 "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
    "WenQuanYi Micro Hei", sans-serif;
}
.bac-f2f {
  background-color: #f2f2f2;
}
.p27 {
  padding: 27px;
}
</style>
