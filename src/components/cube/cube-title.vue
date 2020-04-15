<template>
  <!-- 菜单栏 -->
  <aside>
    <div class="d-flex rw-menu position-fixed w-100">
      <div @click="reload" class="rw-re0 position-absolute d-flex align-items-center">
        <span class="iconfont icon-icon_left"></span>
        <span>返回</span>
      </div>
      <div class="rw-re2 text-center w-100">{{ctxt.tit}}</div>
      <a :href="ctxt.url" class="rw-re1 position-absolute d-flex align-items-center">
        <span v-if="ctxt.class" class="iconfont" :class="ctxt.class"></span>
        <span>{{ctxt.txt}}</span>
      </a>
    </div>
    <div class="menu-shadow"></div>
  </aside>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    reload() {
      this.$router.go(-1);
    }
  },
  props: ["ctxt"]
};
</script>
<style lang="scss" scoped>
.rw-menu {
  left: 0;
  top: 0;
  background: #fff;
  box-shadow: 0 10px 10px $theme-bac;
  z-index: 250;
  height: 92px;
  line-height: 40px;
  .rw-re0 {
    top: 0;
    left: 0;
    padding: $pardon $pardon/2;
  }
  .rw-re1 {
    top: 0;
    right: 0;
    color: inherit;
    padding: $pardon $pardon/2;
  }
  .rw-re2 {
    font-weight: bold;
    padding: $pardon $pardon/2;
  }
  .iconfont {
    margin-right: $pardon/2;
    font-size: 40px;
  }
}
.menu-shadow {
  height: 94px;
}
</style>