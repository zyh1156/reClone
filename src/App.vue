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
  font: 26px/1 "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
    "WenQuanYi Micro Hei", sans-serif;
  background-color: #f8f8f8;
}
.bac-f2f {
  background-color: #f2f2f2;
}
.p27 {
  padding: 27px;
}
</style>
