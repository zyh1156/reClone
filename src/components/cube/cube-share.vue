<template>
  <aside>
    <!-- 分享按钮 -->
    <router-link
      v-if="show"
      :to="{name:'share',query:{kc_id:wd.id,type:wd.type}}"
      class="position-absolute toshare"
    >
      <span class="iconfont icon-qiandai"></span>
      <span>{{wd.money}}</span>
      <span>&nbsp;元</span>
    </router-link>
  </aside>
</template>
<script>
export default {
  data() {
    return {
      show: false
    };
  },
  props: ["wd"],
  updated() {
    setTimeout(() => {
      document.querySelector(".toshare").classList.add("active");
    },200);
  },
  watch: {
    "wd.money"() {
      let money = parseInt(this.wd.money);
      if (money > 0) {
        this.show = true;
      } else {
        this.show = false;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.toshare {
  font-size: 22px;
  padding: 14px $pardon 14px 14px;
  background-color: $theme;
  top: 18px;
  right: -100px;
  color: #fff;
  border: 2px solid #fff;
  border-right: none;
  border-radius: 27px 0 0 27px;
  transition: right 0.8s;
  .iconfont {
    margin-right: $pardon/2;
  }
}
.toshare.active {
  right: 0;
}
</style>