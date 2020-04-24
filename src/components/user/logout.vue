<template>
  <section>
    <div></div>
    <div>
      <button @click="clear" type="button">删除Cookie</button>
    </div>
  </section>
</template>
<script>
import { setCookie, getCookie } from "../../core/cookie";
export default {
  data() {
    return {};
  },
  methods: {
    clear() {
      //   设置头像
      setCookie("useravatar","", -1);
      //   设置userid
      setCookie("userid", "", -1);
      //   设置手机号
      setCookie("usermobile", "", -1);
      //   设置token
      setCookie("token", "", -1);
      //   设置昵称
      setCookie("usernick", "", -1);
      //   设置链接
      setCookie("nowurl", "", -1);
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
</style>