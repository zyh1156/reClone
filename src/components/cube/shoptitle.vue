<template>
  <router-link
    :to="{name:'room',params:{roomid:1}}"
    class="d-flex title-box align-items-center justify-content-between"
  >
    <div class="img overflow-hidden">
      <img v-lazy="teach.thumbnail" alt />
    </div>
    <div class="name">
      <div class="txt0 font-weight-bold">{{teach.post_title}}</div>
      <div class="txt1">{{teach.post_favorites}}人关注&nbsp;&nbsp;{{teach.post_hits}}人气</div>
    </div>
    <div class="fllow text-center">+关注</div>
  </router-link>
</template>
<script>
export default {
  data() {
    return {};
  },
  props:["teach"]
};
</script>
<style lang="scss" scoped>
.title-box {
  background-color: #fff;
  height: 114px;
  padding: 0 $pardon;
  border-bottom: 1px solid #ededed;
  box-shadow: 0 8px 8px #ededed;
}
.img {
  width: 72px;
  border: 1px solid #f8f8f8;
  border-radius: 36px;
  height: 72px;
}
.name {
  margin-left: 18px;
  width: 498px;
  .txt0 {
      color: #333;
    font-size: 28px;
  }
  .txt1 {
    color: #919191;
    font-size: 20px;
    margin-top: 20px;
  }
}
.fllow {
  color: #fff;
  font-size: 22px;
  background-color: $theme;
  border: 1px solid $theme-bor;
  width: 108px;
  height: 58px;
  line-height: 58px;
  border-radius: 29px;
}
</style>