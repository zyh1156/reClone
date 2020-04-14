<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { setCookie, getCookie, checkCookie } from "./core/cookie";
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
    },
    // 获取播放数据
    toPlay() {
        return;
      if (checkCookie("playtime")) {
        let data = JSON.parse(getCookie("playtime"));
        if (!data.toajax) {
          // 提交播放器记录数据
          this.axios.post("/api/user/index/addlook.html", data, res => {
            data.toajax = true;
            setCookie("playtime", JSON.stringify(data));
          });
        }
      }
    }
  },
  mounted() {
    this.getUser();
    this.toPlay();
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
  background-color: #f0f0f0;
  min-height: 100vh;
}

.nodata {
  padding: $pardon;
  background-color: #fff;
  border-radius: 10px;
  color: #9f9f9f;
  .txt0 {
    margin-top: 80px;
    font-size: 300px;
  }
  .txt1 {
    margin-top: 80px;
    font-size: 40px;
  }
}
</style>
