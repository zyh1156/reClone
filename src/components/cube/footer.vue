<template>
  <footer>
    <div class="trace"></div>
    <div class="trace2 fixed-bottom">
      <div class="d-flex justify-content-center menu-list">
        <a
          class="d-inline-block text-center"
          :href="ml.url"
          v-for="(ml,inx) in menulist"
          v-bind:key="inx"
          :class="ml.classObject2"
        >
          <div class="iconfont" :class="ml.classObject"></div>
          <div class="text">{{ml.text}}</div>
        </a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      menulist: [
        {
          text: "发现",
          url: "/#/",
          classObject: {
            "icon-icon_discovery": true
          }
        },
        {
          text: "开始学习",
          url: "/#/study",
          classObject: {
            "icon-icon_new_recruit": true
          }
        },
        {
          text: "个人中心",
          url: "/#/user",
          classObject: {
            "icon-icon_boss": true
          }
        }
      ]
    };
  },
  mounted() {
    // 修改样式
    this.changeClass();
  },
  methods: {
    changeClass() {
      let trp = this.$route.path,
        menulist = [],
        i;
      this.menulist.forEach(ele => {
        ele.classObject2 = {
          active: ele.url.indexOf(trp) >= 0
        };
        menulist.push(ele);
      });
      this.menulist = menulist;
    }
  }
};
</script>
<style lang="scss" scoped>
.trace{
    height: 90px;
}
.trace2 {
  background-color: #fefefe;
  padding: 10px 0;
  border-top: 2px solid #f4f4f4;
}
.menu-list {
  a {
    color: #909090;
    text-decoration: none;
    width: 250px;
    .iconfont {
      font-size: 44px;
    }
    .text {
      margin-top: 8px;
      font-size: 18px;
    }
  }
  .active {
    color: #ea4f25;
  }
  .active + .active {
    color: #909090;
  }
}
</style>