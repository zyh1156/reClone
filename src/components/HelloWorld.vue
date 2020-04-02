<template>
  <section class="bac">
    <!-- 顶部功能区 -->
    <div>
      <!-- 红包区 -->
      <div class="reward position-relative">
        <!-- 红包 -->
        <div class="icon position-absolute">
          <img src="../assets/hb-ico.png" alt />
        </div>
        <!-- 文字 -->
        <div>
          <span>你有</span>
          <span>370</span>
          <span>元红包未领取，7天后过期</span>
        </div>
        <!-- 领取 -->
        <div class="receive d-flex align-items-center position-absolute">
          <span>立即领取</span>
          <span class="right-ico">
            <img src="../assets/right-ico.png" alt />
          </span>
        </div>
      </div>
    </div>
    <search></search>
    <menulist :mlist="menuLists" @tapset="setMenu"></menulist>
    <div class="swiper-box">
      <!-- 轮播图 -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(s,inx) in hwdata.top_ads" v-bind:key="inx">
            <img :src="s.image" alt />
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <!-- 课程列表 -->
      <div class="menu-5 d-flex justify-content-around">
        <a
          :href="m5.url"
          class="m5-box text-center flex-grow-1"
          v-for="(m5,inx) in hwdata.f_c"
          v-bind:key="inx"
        >
          <div class="d-inline-block m5-ico">
            <img :src="m5.image" alt />
          </div>
          <div class="m5-txt">{{m5.title}}</div>
        </a>
      </div>
      <!-- 精选课 -->
      <router-link
        :to="{name:'zone',params:{zoneid:hwdata.tv.id}}"
        class="choice d-flex justify-content-between"
      >
        <div class="ch0">
          <div class="txt0 font-weight-bold">大V直播</div>
          <div class="txt1">{{hwdata.tv.post_title}}</div>
          <div class="txt2 line-clamp2">{{hwdata.tv.post_excerpt}}</div>
        </div>
        <div class="ch1 overflow-hidden position-relative">
          <img :src="hwdata.tv.thumbnail" alt />
          <div class="ico-play iconfont icon-timeout position-absolute"></div>
        </div>
      </router-link>
    </div>
    <!-- 推荐课程 -->
    <showcase :datas="tjCourse"></showcase>
    <!-- 广告1 -->
    <div class="ads overflow-hidden">
      <img v-lazy="hwdata.one_ads[0].image" alt />
    </div>
    <!-- 热门课程 -->
    <showcase :datas="hotCourse"></showcase>
    <!-- 广告2 -->
    <div class="ads overflow-hidden">
      <img v-lazy="hwdata.two_ads[0].image" alt />
    </div>
    <!-- 免费课程 -->
    <showcase :datas="freeCourse"></showcase>
    <!-- 底脚 -->
    <footer2></footer2>
  </section>
</template>
<script>
import search from "./cube/search";
import menulist from "./cube/menulist";
import footer2 from "./cube/footer";
import showcase from "./cube/showcase";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import axios2 from "../core/axios";
export default {
  data() {
    return {
      hwdata: {
        top_ads: [],
        one_ads: [
          {
            image: ""
          }
        ],
        two_ads: [
          {
            image: ""
          }
        ],
        tv: {
          id: "0"
        }
      },
      swiper: [],
      hotCourse: {
        name: "热门课程",
        link: "",
        list: [],
        type: 0
      },
      freeCourse: {
        name: "免费课程",
        link: "",
        list: [],
        type: 1
      },
      tjCourse: {
        name: "推荐课程",
        link: "",
        list: [],
        type: 0
      },
      menuLists: []
    };
  },
  methods: {
    toSwiper() {
      new Swiper(".swiper-container", {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        }
      });
    },
    getData: async function() {
      let res = await this.axios.post("/api/", {}),
        data;
      if (res.status == 200) {
        data = res.data.data;
        //课程
        this.$set(this.tjCourse, "list", data.tj_goods);
        this.$set(this.hotCourse, "list", data.hot_goods);
        this.$set(this.freeCourse, "list", data.mf_goods);
        this.hwdata = data;
      }
    },
    setMenu(val) {
      // 菜单跳转
      let inx = this.$store.state.indexmenu[val[0]].id || "";
      this.$router.push({ path: "/entry", query: { entryid: inx } });
    },
    setgo() {
      this.menuLists = this.$store.state.indexmenu;
      //   启动轮播
      this.toSwiper();
    }
  },
  components: {
    footer2,
    search,
    menulist,
    showcase
  },
  mounted() {
    // 获取数据
    this.getData();
  },
  watch: {
    "$store.state.indexmenu"() {
      this.setgo();
    }
  }
};
</script>
<style lang="scss" scoped>
.reward {
  color: #60501e;
  height: 74px;
  padding: 24px 0 0 70px;
  background-image: linear-gradient(270deg, #dac888 1%, #efdca4 100%);
}
.ads {
  padding: 0 $pardon;
  max-height: 235px;
}
.icon {
  top: 17px;
  left: 21px;
  transform: rotate(0deg);
  animation: iconKF 0.3s linear infinite alternate;
  img {
    width: 32px;
  }
}
.receive {
  top: 24px;
  right: 24px;
  font-weight: bold;
  min-width: 140px;
  animation: receiveKF 0.5s linear infinite alternate;
}
.right-ico img {
  margin-left: 12px;
  width: 20px;
}
.swiper-box {
  padding: $pardon $pardon 0;
  background-color: #f7f7f7;
}
// 轮播图
.swiper-container {
  height: 235px;
  border: 2px solid #fff;
  border-radius: 8px;
}
.choice {
  padding: $pardon;
  margin-top: 27px;
  background-color: #fefefe;
  border-radius: 6px;
  .ch0 {
    width: 360px;
    .txt0 {
      font-size: 36px;
      color: #bb986a;
    }
    .txt1 {
      margin-top: 16px;
      font-size: 27px;
    }
    .txt2 {
      color: #949494;
      margin-top: 20px;
      font-size: 24px;
      line-height: 1.5;
    }
  }
  .ch1 {
    width: 251px;
    max-height: 192px;
    border-radius: 10px;
    img {
      height: 100%;
    }
    .ico-play {
      right: 10px;
      bottom: 10px;
      color: #fff;
      font-size: 66px;
    }
  }
}
.menu-5 {
  margin-top: $pardon;
  .m5-box:hover {
    background-color: #d0d0d0;
    border-radius: 16px;
  }
  .m5-box {
    text-decoration: none;
    .m5-ico {
      border-radius: 22px;
      width: 76px;
      height: 76px;
      background-size: 100% 100%;
    }
    .m5-txt {
      color: #797979;
      margin-top: 14px;
      font-size: 22px;
    }
  }
}
// 动画
@keyframes iconKF {
  from {
    transform: rotate(-30deg);
  }
  to {
    transform: rotate(30deg);
  }
}
@keyframes receiveKF {
  from {
    right: 26px;
  }
  to {
    right: 22px;
  }
}
</style>