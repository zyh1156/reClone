<template>
  <section></section>
</template>
<script>
let appid, redirect_uri;
import { setCookie } from "../../core/cookie";
export default {
  data() {
    return {};
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.axios.post("/api/home/wxlogin/getappid.html", {}, res => {
        appid = res.data.data.wechat_appid;
        this.getData2();
      });
    },
    getData2() {
      redirect_uri = encodeURIComponent(
        location.origin + "/index.php/wx/wxlogin/callback"
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