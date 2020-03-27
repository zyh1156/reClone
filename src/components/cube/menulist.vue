<template>
  <!-- 菜单栏 -->
  <article class="menu-box">
    <div class="en-title overflow-auto d-flex justify-content-between">
      <div
        :class="{'active':menuInx==inx}"
        class="en-menu flex-shrink-0 text-center position-relative"
        v-for="(ml,inx) in menuList"
        v-bind:key="inx"
        @click="menuInx=inx"
      >
        <div class="em-body text-truncate">{{ml}}</div>
      </div>
    </div>
    <div class="en-title2 overflow-auto d-flex">
      <div v-for="i in 10" class="en-menu flex-shrink-0">
        <div class="em-body active">骨发扬生</div>
      </div>
    </div>
  </article>
</template>
<script>
import $ from "jquery";
export default {
  data() {
    return {
      menuList: [
        "热门活动",
        "培训机构",
        "线上教程",
        "热门活动",
        "培训机构",
        "线上教程"
      ],
      menuInx: 0
    };
  },
  mounted() {
    this.toTop();
  },
  methods: {
    toTop() {
      let t = $(".menu-box").offset().top,
        t2;
      $(document).scroll(() => {
        t2 = $(document).scrollTop();
        if (t2 > t) {
          $(".menu-box").css("position", "fixed");
        } else {
          $(".menu-box").css("position", "relative");
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
// 菜单
.menu-box {
  left: 0;
  top: 0;
  width: 100%;
  z-index: 100;
  background-color: #fff;
}
.en-title {
  padding: $pardon/2;
  .en-menu {
    color: #626262;
    width: 144.6px;
    height: 36.5px;
    white-space: nowrap;
  }
  .active {
    color: #4d4d4d;
    font-weight: 700;
  }
  .active::after {
    content: "";
    width: 68px;
    height: 4px;
    position: absolute;
    bottom: -$pardon/4;
    left: calc(50% - 34px);
    background-color: $theme-bor;
    border-radius: 4px 4px 0 0;
  }
}
.en-title2 {
  padding: $pardon/2;
  .en-menu {
    padding: 0 $pardon/2;
    .em-body {
      border-radius: 25px;
      padding: 12px 30px;
      color: #656565;
      background-color: #f4f4f4;
    }
    .active {
      color: #eb5d36;
      background-color: #fceeea;
    }
  }
}
</style>