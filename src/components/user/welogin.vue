<template>
  <section></section>
</template>
<script>
let appid, redirect_uri;
import { setCookie, checkCookie } from "../../core/cookie";
export default {
  data() {
    return {};
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      if (!checkCookie("userid") && location.href.indexOf("?id=") < 0) {
        setCookie("nowurl", location.href, 30);
        this.axios.post("/api/home/wxlogin/getappid.html", {}, res => {
          appid = res.data.data.wechat_appid;
          this.getData2();
        });
      }
    },
    getData2() {
      let pid = this.$route.query.user_pid;
      redirect_uri = encodeURIComponent(
        location.origin + "/wx/wxlogin/callback.html?user_pid=" + pid
        // "http://192.168.1.92/" + "/index.php/wx/wxlogin/callback"
      );
      let url =
        "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" +
        appid +
        "&redirect_uri=" +
        redirect_uri +
        "&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
      location.href = url;
    }
  }
};
</script>
<style lang="scss" scoped>
</style>