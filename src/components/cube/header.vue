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
    <div class="menu-box">
      <!-- 主菜单 -->
      <div class="menu0">
        <div class="d-flex">
          <div
            :href="ml.url"
            class="nav flex-shrink-0 text-center position-relative"
            :class="{'active':inx==menuIndex[0]}"
            v-for="(ml,inx) in menuList"
            v-bind:key="inx"
            @click="menuClick(inx,0)"
          >
            <span>{{ml.text}}</span>
          </div>
        </div>
      </div>
      <div class="menu1">
        <!-- 次菜单 -->
        <div v-for="(ml,inx) in menuList" v-bind:key="inx">
          <div v-if="menuIndex[0]==inx" class="d-flex">
            <a
              :href="mc.url"
              class="nav flex-shrink-0"
              :class="{'active':inx2==menuIndex[1]}"
              v-for="(mc,inx2) in ml.child"
              v-bind:key="inx2"
              @click="menuClick(inx2,1)"
            >
              <div class="nav-body">{{mc.text}}</div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="menu-shadow"></div>
  </header>
</template>
<script>
import $ from "jquery";
export default {
  data() {
    return {
      menuList: [
        {
          text: "推荐",
          url: "/#/"
        },
        {
          text: "营销工具",
          url: "/#/entry",
          child: [
            { text: "变美" },
            { text: "变高" },
            { text: "变富" },
            { text: "变帅" },
            { text: "变身" },
            { text: "变变变" }
          ]
        },
        {
          text: "内容分销",
          url: "/#/entry",
          child: [
            {
              text: "终究"
            },
            {
              text: "觉得"
            },
            {
              text: "你最好"
            }
          ]
        },
        {
          text: "面授课",
          url: "/#/entry"
        },
        {
          text: "面授课",
          url: "/#/entry"
        },
        {
          text: "面授课",
          url: "/#/entry"
        }
      ],
      menuIndex: [0, 0]
    };
  },
  methods: {
    menuClick(inx, type) {
      if (type == 0) {
        this.menuIndex = [inx, 0];
      } else {
        this.$set(this.menuIndex, 1, inx);
      }
      //   跳转
      location.href = this.menuList[inx].url + "?inx=" + inx;
    },
    lightUp() {
      let inx = this.$route.query.inx || 0,
        that = this;
      this.menuIndex = [inx, 0];
      $(document).scroll(() => {
        that.menuTop();
      });
    },
    menuTop() {
      let t = $(".search-box").height(),
        t2;
      t2 = $(document).scrollTop();
      if (t2 > t) {
        $("header").css("min-height", $("header").height());
        $(".menu-box").css("position", "fixed");
      } else {
        $(".menu-box").css("position", "relative");
      }
    },
    getData() {
      return;
      this.axios("http://192.168.1.92/api/").then(res => {});
    }
  },
  mounted() {
    this.lightUp();
    this.getData();
  }
};
</script>
<style lang="scss" scoped>
// 搜索框
.search-box {
  padding: 18px $pardon 0;
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
.menu-box {
  color: #999999;
  font-size: 30px;
  background-color: #fff;
  z-index: 1030;
  top: 0;
  left: 0;
  position: relative;
  width: 100%;
  .menu0,
  .menu1 {
    overflow: auto;
  }
  .menu0 {
    padding-top: 18px;
  }
  .menu1 {
    .nav {
      padding: 18px 13.5px;
      .nav-body {
        padding: 13px 32px;
        border-radius: 26px;
        background-color: #f4f4f4;
      }
    }
    .active {
      .nav-body {
        color: #eb5d36;
        background-color: #fceeea;
      }
    }
    .nav:first-child {
      padding-left: 27px;
    }
    .nav:last-child {
      padding-right: 27px;
    }
  }
  .menu0 {
    .nav {
      padding: 9px 27px 20px;
    }
    .active {
      font-weight: bold;
      color: #333333;
    }
    .active::after {
      content: "";
      position: absolute;
      width: 40px;
      left: calc(50% - 20px);
      bottom: 3px;
      height: 4px;
      background-color: #ea443a;
      border-radius: 2px;
    }
  }
  a {
    color: #999999;
    text-decoration: none;
  }
}
</style>