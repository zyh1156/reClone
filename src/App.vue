<template>
  <div id="app">
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
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
      if (checkCookie("userid")) {
        this.$store.state.userid = getCookie("userid");
      } else {
        setCookie("nowurl", encodeURIComponent(location.href));
        location.href = "/user/login";
      }
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
    font-size: 120px;
  }
  .txt1 {
    margin-top: 80px;
    font-size: 30px;
  }
}

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter {
  transform: translateX(750px);
}
.slide-fade-leave-to {
  transform: translateX(0);
}
</style>
