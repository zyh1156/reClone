<template>
  <footer>
    <div class="d-flex position-fixed justify-content-between btmenu w-100">
      <div>
        <div></div>
        <div>发现</div>
      </div>
      <div>
        <div></div>
        <div>开始学习</div>
      </div>
      <router-link :to="{name:'user'}">
        <div></div>
        <div>个人中心</div>
      </router-link>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.btmenu {
  bottom: 0;
  height: 98px;
  padding: 0 84px 11px;
}
</style>