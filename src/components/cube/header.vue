<template>
  <header>
    <!-- 搜索框 -->
    <div class="search-box">
      <a href="/#/search" class="search-body d-flex align-items-center justify-content-center">
        <span>
          <img src="../../assets/search-ico.png" alt />
        </span>
        <span>搜索课程/专栏/直播间</span>
      </a>
    </div>
    <!-- 菜单栏 -->
    <div class="menu">
      <!-- 主菜单 -->
      <div class="d-flex justify-content-around">
        <div
          class="nav text-center position-relative"
          :class="{'active':inx==menuIndex[0]}"
          v-for="(ml,inx) in menuList"
          v-bind:key="inx"
          @click="menuClick(inx)"
        >
          <span>{{ml.text}}</span>
        </div>
      </div>
      <!-- 次菜单 -->
      <div></div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      menuList: [
        {
          text: "推荐"
        },
        {
          text: "营销工具"
        },
        {
          text: "内容分销"
        },
        {
          text: "面授课"
        }
      ],
      menuIndex: [0, 0]
    };
  },
  methods: {
    menuClick(inx) {
      this.menuIndex = [inx, 0];
    }
  }
};
</script>
<style lang="scss" scoped>
// 搜索框
.search-box {
  padding: 18px 27px 0;
  .search-body {
    color: #c4c4c4;
    font-size: 24px;
    background-color: #f8f8f8;
    height: 58px;
    padding: 16px 0;
    border-radius: 29px;
    img {
      height: 26px;
      margin-right: 18px;
    }
  }
}
// 菜单
.menu {
  color: #999999;
  font-size: 30px;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 1030;
  padding-top: 18px;
  .nav {
    padding: 9px 0 32px;
    width: 25%;
  }
  .active {
    font-weight: bold;
    color: #333333;
  }
  .active::after {
    content: "";
    position: absolute;
    width: 40px;
    left: 73.75px;
    bottom: 10px;
    height: 4px;
    background-color: #ea443a;
    border-radius: 2px;
  }
}
</style>