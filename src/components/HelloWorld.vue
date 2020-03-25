<template>
  <section>
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
    <header2></header2>
    <div class="gray-pack">
      <!-- 轮播图 -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../assets/swiper/00.png" alt />
          </div>
          <div class="swiper-slide">
            <img src="../assets/swiper/01.png" alt />
          </div>
          <div class="swiper-slide">
            <img src="../assets/swiper/02.png" alt />
          </div>
          <div class="swiper-slide">
            <img src="../assets/swiper/03.png" alt />
          </div>
          <div class="swiper-slide">
            <img src="../assets/swiper/04.png" alt />
          </div>
          <div class="swiper-slide">
            <img src="../assets/swiper/05.png" alt />
          </div>
          <div class="swiper-slide">
            <img src="../assets/swiper/06.png" alt />
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <!-- 课程列表 -->
      <div class="menu-5 d-flex">
        <a :href="m5.url" class="m5-box text-center" v-for="(m5,inx) in menu5" v-bind:key="inx">
          <div :class="m5.classObj" class="d-inline-block m5-ico iconfont"></div>
          <div class="m5-txt">{{m5.text}}</div>
        </a>
      </div>
      <!-- 精选课 -->
      <div class="choice d-flex justify-content-between">
        <div class="ch0">
          <div class="txt0 font-weight-bold">本周精选课</div>
          <div class="txt1">最强大脑记忆法</div>
          <div class="txt2">17堂最强大脑记忆法，带你干掉烂尾记性。</div>
        </div>
        <div class="ch1">
          <img src="../assets/menu.jpg" alt />
        </div>
      </div>
    </div>
    <!-- 推荐课程 -->
    <showcase :datas="tjCourse"></showcase>
    <!-- 热门课程 -->
    <showcase :datas="hotCourse"></showcase>
    <!-- 免费课程 -->
    <showcase :datas="freeCourse"></showcase>
    <!-- 底脚 -->
    <footer2></footer2>
  </section>
</template>
<script>
import header2 from "./cube/header";
import footer2 from "./cube/footer";
import showcase from "./cube/showcase";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  data() {
    return {
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
      menu5: [
        {
          text: "课程中心",
          classObj: { "icon-salescenter": true },
          url: "#"
        },
        {
          text: "大V直播",
          classObj: { "icon-video": true },
          url: "#"
        },
        {
          text: "报名活动",
          classObj: { "icon-online-tracking": true },
          url: "#"
        },
        {
          text: "圈子话题",
          classObj: { "icon-huati": true },
          url: "/#/bbs"
        },
        {
          text: "签到中心",
          classObj: { "icon-default-template": true },
          url: "/#/user/signin"
        }
      ]
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
    getData() {
      let loading = this.weui.loading("获取中"),
        that = this;
      this.axios("http://192.168.1.92/api/").then(res => {
        if (res.status == 200) {
          loading.hide();
          that.$set(that.tjCourse, "list", res.data.data.tj_goods);
          that.$set(that.hotCourse, "list", res.data.data.hot_goods);
          that.$set(that.freeCourse, "list", res.data.data.mf_goods);
        }
      });
    }
  },
  components: {
    footer2,
    header2,
    showcase
  },
  mounted() {
    //   启动轮播
    this.toSwiper();
    // 获取数据
    this.getData();
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
// 轮播图
.swiper-container {
  height: 235px;
  border: 2px solid #fff;
  border-radius: 8px;
}
.choice {
  padding: 27px;
  margin-top: 27px;
  background-color: #fefefe;
  border-radius: 6px;
  .ch0 {
    width: 420px;
    .txt0 {
      font-size: 36px;
      color: #bb986a;
    }
    .txt1 {
      margin-top: 25px;
      font-size: 27px;
    }
    .txt2 {
      color: #949494;
      margin-top: 32px;
      font-size: 24px;
      line-height: 1.5;
    }
  }
  .ch1 {
    width: 192px;
    height: 192px;
    overflow: hidden;
    border-radius: 10px;
  }
}
.menu-5 {
  margin-top: 16px;
  .m5-box:hover {
    background-color: #d0d0d0;
    border-radius: 16px;
  }
  .m5-box {
    padding: 16px;
    width: 20%;
    text-decoration: none;
    .m5-ico {
      color: #fff;
      background-color: #bf2b1d;
      background-image: linear-gradient(to right bottom, #e43a1d, #b8281b);
      border-radius: 22px;
      padding: 12px;
      font-size: 45px;
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