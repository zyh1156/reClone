<template>
  <footer>
    <div class="d-flex position-fixed align-items-center justify-content-between btmenu w-100">
      <router-link :class="{'active':toto=='index'}" :to="{name:'index'}">
        <div class="text-center">
          <span class="iconfont icon-icon_discovery"></span>
        </div>
        <div class="menu-text">发现</div>
      </router-link>
      <router-link :to="{name:'user'}">
        <div class="text-center">
          <span class="iconfont icon-icon_new_recruit"></span>
        </div>
        <div class="menu-text">开始学习</div>
      </router-link>
      <router-link :class="{'active':toto=='user'}" :to="{name:'user'}">
        <div class="text-center">
          <span class="iconfont icon-icon_boss"></span>
        </div>
        <div class="menu-text">个人中心</div>
      </router-link>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      toto: ""
    };
  },
  mounted() {
    this.toto = this.$route.name;
  }
};
</script>
<style lang="scss" scoped>
.btmenu {
  bottom: 0;
  padding: 10px 84px;
  min-height: 89px;
  background-color: #fff;
  border-top: 1px solid #f0f0f0;
  .iconfont {
    font-size: 44px;
  }
  .menu-text {
    margin-top: 8px;
    font-size: 17px;
  }
  a {
    color: #b8b8b8;
    text-decoration: none;
  }
  a.active {
    color: #ed7452;
  }
}
</style>