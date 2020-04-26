<template>
  <section></section>
</template>
<script>
import { Base64 } from "js-base64";
import { setCookie, getCookie, checkCookie } from "../../core/cookie";
export default {
  data() {
    return {};
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      let code = this.$route.query;
      let avatar = Base64.decode(code.avatar);
      let id = code.id;
      let mobile = code.mobile;
      let token = code.token;
      let user_nickname = Base64.decode(code.user_nickname);

      //   设置头像
      setCookie("useravatar", avatar, 30);
      //   设置userid
      setCookie("userid", id, 30);
      //   设置手机号
      setCookie("usermobile", mobile, 30);
      //   设置token
      setCookie("token", token, 30);
      //   设置昵称
      setCookie("usernick", user_nickname, 30);
      //   设置真实姓名
      //   setCookie("username", res.data.data.user.truename, 30);
      //   设置简介
      //   setCookie("userdesc", res.data.data.user.desc, 30);
      //   设置性别
      //   setCookie("usersex", res.data.data.user.sex, 30);
      if (checkCookie("nowurl")) {
        let href = decodeURIComponent(getCookie("nowurl"));
        location.href = href;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
</style>