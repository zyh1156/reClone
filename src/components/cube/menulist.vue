
  <!-- 菜单栏 -->
  <!-- mlist:{
      text:"",
      children:[""]
  } -->
<template>
  <header class="menu-x w-100">
    <div class="menu-box">
      <div class="en-title overflow-auto d-flex">
        <div
          :class="{'active':menuSet[0]==inx}"
          class="en-menu flex-grow-1 flex-shrink-0 text-center position-relative"
          v-for="(ml,inx) in mlist"
          v-bind:key="inx"
          @click="tapMenu(inx,0,ml.id)"
        >{{ml.text}}</div>
      </div>
      <div v-for="(ml,inx) in mlist" v-bind:key="inx">
        <div v-if="menuSet[0]==inx" class="en-title2 overflow-auto d-flex">
          <div
            v-for="(ml2,inx2) in ml.zlist"
            @click="tapMenu(inx2,1,ml2.id)"
            v-bind:key="inx2"
            class="en-menu flex-shrink-0"
          >
            <div class="em-body" :class="{'active':menuSet[1]==inx2}">{{ml2.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import $ from "jquery";
export default {
  data() {
    return {
      menuSet: this.menuinx || [0, 0]
    };
  },
  mounted() {
    this.toTop();
  },
  props: ["mlist", "menuinx"],
  methods: {
    toTop() {
      let t, t2;
      $(document).scroll(() => {
        if ($(".menu-x").length > 0) {
          t = $(".menu-x").offset().top;
          t2 = $(document).scrollTop();
          if (t2 > t) {
            $(".menu-box").css("position", "fixed");
            $(".menu-x").css("min-height", $(".menu-box").height());
          } else {
            $(".menu-box").css("position", "relative");
          }
        }
      });
    },
    tapMenu(x, y, id) {
      if (y) {
        this.$set(this.menuSet, 1, x);
      } else {
        this.menuSet = [x, -1];
      }
      this.$emit("tapset", this.menuSet);
      this.$emit("tapid", id);
    }
  },
  mounted() {
    this.toTop();
  },
  updated() {
    let dom = $(".en-menu").eq(this.menuSet[0]);
    let left = $(".en-title").scrollLeft() + dom.offset().left,
      width = dom.outerWidth(),
      devW = window.innerWidth;
    devW = left - devW / 2 + width / 2;
    $(".en-title").animate(
      {
        scrollLeft: devW
      },
      1000
    );
    $(".menu-x").css("min-height", $(".menu-box").height());
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
  box-shadow: 0 10px 10px #f2f2f2;
  position: relative;
}
.en-title {
  //   padding: $pardon/2;
  .en-menu {
    color: #626262;
    line-height: 1.4;
    // padding:0 40px;
    padding: $pardon/2 40px;
    font-size: 30px;
    white-space: nowrap;
    cursor: pointer;
  }
  .active {
    color: #4d4d4d;
    font-weight: 700;
  }
  .active::after {
    content: "";
    width: 25%;
    height: 4px;
    position: absolute;
    // bottom: -$pardon/4;
    bottom: 10px;
    left: 37.5%;
    background-color: $theme-bor;
    border-radius: 4px 4px 0 0;
  }
}
.en-title2 {
  .en-menu:first-child {
    padding-left: $pardon;
  }
  .en-menu {
    padding: $pardon/2;
    .em-body {
      border-radius: 25px;
      padding: 12px 30px;
      color: #656565;
      background-color: #f4f4f4;
    }
    .active {
      color: $money;
      background-color: $theme-bac;
    }
  }
}
</style>