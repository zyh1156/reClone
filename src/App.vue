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
</style>
