<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { getCookie } from "./core/cookie";
export default {
  name: "app",
  data() {
    return {};
  },
  methods: {
    // 获取用户信息
    getUser() {
        // id
      this.$store.state.userid = getCookie("userid");
    }
  },
  mounted() {
    this.getUser();
  }
};
</script>

<style lang="scss">
#app {
  // 字体参考：新浪微博
  font: 28px/1 "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
    "WenQuanYi Micro Hei", sans-serif;
}
section.bac {
  background-color: #f8f8f8;
  min-height: 100vh;
}
</style>
