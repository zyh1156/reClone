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
      <!-- 单个章节 -->
      <div class="course-box">
        <!-- 标题部分 -->
        <div class="course-title d-flex align-items-center justify-content-between">
          <div class="title">标题</div>
          <div class="remore">查看更多</div>
        </div>
        <!-- 课程部分 -->
        <div>
          <div class="course-body d-flex">
            <!-- 左边 -->
            <div class="cour-left overflow-hidden position-relative text-center">
              <div class="cl-img">
                <img src="../assets/menu.jpg" alt />
              </div>
              <div class="w-100 position-absolute cl-men">2355人</div>
            </div>
            <!-- 右边 -->
            <div class="cour-right">
              <div class="cr-text line-clamp2">【国粤双语】&nbsp;小学生必背古诗108首，每天三分钟，让孩子轻松学习。</div>
              <div class="cr-money d-flex justify-content-between">
                <div class="renew">已更新109期</div>
                <div>
                  <span class="money0">￥&nbsp;99.00</span>
                  <span class="money1">
                    ￥&nbsp;
                    <span class="money2">9</span>.90
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="course-body d-flex">
            <!-- 左边 -->
            <div class="cour-left overflow-hidden position-relative text-center">
              <div class="cl-img">
                <img src="../assets/menu.jpg" alt />
              </div>
              <div class="w-100 position-absolute cl-men">
                <span class="iconfont icon-remen"></span>
                <span>2335人</span>
              </div>
            </div>
            <!-- 右边 -->
            <div class="cour-right">
              <div class="cr-text line-clamp2">【国粤双语】&nbsp;小学生必背古诗108首，每天三分钟，让孩子轻松学习。</div>
              <div class="cr-money d-flex justify-content-between">
                <div class="renew">已更新109期</div>
                <div>
                  <span class="money0">￥&nbsp;99.00</span>
                  <span class="money1">
                    ￥&nbsp;
                    <span class="money2">9</span>.90
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 单个章节 -->
      <div class="course-box">
        <!-- 标题部分 -->
        <div class="course-title d-flex align-items-center justify-content-between">
          <div class="title">标题</div>
          <div class="remore">查看更多</div>
        </div>
        <!-- 课程部分 -->
        <div>
          <div class="course-body d-flex">
            <!-- 左边 -->
            <div class="cour-left overflow-hidden position-relative text-center">
              <div class="cl-img">
                <img src="../assets/menu.jpg" alt />
              </div>
              <div class="w-100 position-absolute cl-men">2355人</div>
            </div>
            <!-- 右边 -->
            <div class="cour-right">
              <div class="cr-text line-clamp2">【国粤双语】&nbsp;小学生必背古诗108首，每天三分钟，让孩子轻松学习。</div>
              <div class="cr-money d-flex justify-content-between">
                <div class="renew">已更新109期</div>
                <div>
                  <span class="money0">￥&nbsp;99.00</span>
                  <span class="money1">
                    ￥&nbsp;
                    <span class="money2">9</span>.90
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="course-body d-flex">
            <!-- 左边 -->
            <div class="cour-left overflow-hidden position-relative text-center">
              <div class="cl-img">
                <img src="../assets/menu.jpg" alt />
              </div>
              <div class="w-100 position-absolute cl-men">2355人</div>
            </div>
            <!-- 右边 -->
            <div class="cour-right">
              <div class="cr-text line-clamp2">【国粤双语】&nbsp;小学生必背古诗108首，每天三分钟，让孩子轻松学习。</div>
              <div class="cr-money d-flex justify-content-between">
                <div class="renew">已更新109期</div>
                <div>
                  <span class="money0">￥&nbsp;99.00</span>
                  <span class="money1">
                    ￥&nbsp;
                    <span class="money2">9</span>.90
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 免费章节 -->
      <div class="course-box2">
        <!-- 标题部分 -->
        <div class="course-title d-flex align-items-center justify-content-between">
          <div class="title">免费课程</div>
          <div class="remore">查看更多</div>
        </div>
        <!-- 课程部分 -->
        <div class="d-flex flex-wrap justify-content-between">
          <div class="course-body2">
            <div class="position-relative">
              <div class="cr-img">
                <img src="../assets/menu.jpg" alt />
              </div>
              <div class="position-absolute play-num">
                <span class="iconfont icon-play-circle"></span>
                <span>386次</span>
              </div>
            </div>
            <div class="cr-text line-clamp2">先导课：不辛苦，不节食，人人都能轻松快乐减肥</div>
            <div class="cr-free">免费</div>
          </div>
          <div class="course-body2">
            <div class="position-relative">
              <div class="cr-img">
                <img src="../assets/menu.jpg" alt />
              </div>
              <div class="position-absolute play-num">
                <span class="iconfont icon-play-circle"></span>
                <span>386次</span>
              </div>
            </div>
            <div class="cr-text line-clamp2">先导课：不辛苦，不节食，人人都能轻松快乐减肥</div>
            <div class="cr-free">免费</div>
          </div>
          <div class="course-body2">
            <div class="position-relative">
              <div class="cr-img">
                <img src="../assets/menu.jpg" alt />
              </div>
              <div class="position-absolute play-num">
                <span class="iconfont icon-play-circle"></span>
                <span>386次</span>
              </div>
            </div>
            <div class="cr-text line-clamp2">先导课：不辛苦，不节食，人人都能轻松快乐减肥</div>
            <div class="cr-free">免费</div>
          </div>
          <div class="course-body2">
            <div class="position-relative">
              <div class="cr-img">
                <img src="../assets/menu.jpg" alt />
              </div>
              <div class="position-absolute play-num">
                <span class="iconfont icon-play-circle"></span>
                <span>386次</span>
              </div>
            </div>
            <div class="cr-text line-clamp2">先导课：不辛苦，不节食，人人都能轻松快乐减肥</div>
            <div class="cr-free">免费</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底脚 -->
    <footer2></footer2>
  </section>
</template>
<script>
import header2 from "./cube/header";
import footer2 from "./cube/footer";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  data() {
    return {
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
          url: "#"
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
    }
  },
  components: {
    footer2,
    header2
  },
  mounted() {
    this.toSwiper();
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
// 灰色容器
.gray-pack {
  padding: 27px;
  background-color: #f7f7f7;
}
// 轮播图
.swiper-container {
  // width: 692px;
  height: 235px;
  border: 2px solid #fff;
  border-radius: 8px;
  img {
    max-width: 100%;
  }
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
    img {
      max-width: 100%;
    }
  }
}
.course-box {
  padding: 10px 17px;
  background-color: #fff;
  border-radius: 10px;
  margin-top: 32px;
  .course-title {
    padding: 14.5px 10px;
    .title {
      font-size: 34px;
      color: #000;
      font-weight: bold;
    }
    .remore {
      font-size: 25px;
      color: #9a9a9a;
    }
  }
  .course-body:hover {
    background-color: #f8f8f8;
  }
  .course-body {
    border-top: 2px solid #f6f6f6;
    padding: 10px 10px 25px;
    margin-top: 17px;
    .cour-left {
      width: 212px;
      height: 162px;
      overflow: hidden;
      border-radius: 5px;
      .cl-img {
        height: 122px;
      }
      .cl-men {
        color: #838383;
        background-color: #f4f4f4;
        border-top: 1px solid #f6f6f6;
        height: 40px;
        bottom: 0;
        line-height: 40px;
        .iconfont {
          margin-right: 8px;
          font-size: 26px;
        }
      }
    }
    .cour-right {
      width: 430px;
      padding: 0 0 0 20px;
      .cr-money {
        margin-top: 50px;
        .renew {
          color: #999999;
        }
        .money0 {
          color: #919191;
          font-size: 15px;
          text-decoration: line-through;
        }
        .money1 {
          color: #e8362b;
          font-size: 16px;
          font-weight: bold;
          .money2 {
            font-size: 20px;
          }
        }
      }
    }
  }
  img {
    max-width: 100%;
  }
  .cr-text {
    font-size: 28px;
    line-height: 1.43;
    font-weight: bold;
  }
}

.course-box2 {
  margin-top: 32px;
  .course-title {
    padding: 14.5px 10px 0 10px;
    .title {
      font-size: 34px;
      color: #000;
      font-weight: bold;
    }
    .remore {
      font-size: 25px;
      color: #9a9a9a;
    }
  }
  .course-body2 {
    width: 335px;
    border-radius: 10px;
    background-color: #fff;
    overflow: hidden;
    margin-top: 27px;
    .cr-img {
      height: 172px;
      overflow: hidden;
    }
    .play-num {
      left: 18px;
      bottom: 8px;
      color: #fff;
      font-size: 22px;
    }
    .cr-text {
      padding: 17px 18px 0 18px;
    }
    .cr-free {
      color: #da2b16;
      font-size: 21px;
      padding: 22px 18px;
    }
  }
  img {
    max-width: 100%;
  }
  .cr-text {
    font-size: 28px;
    line-height: 1.43;
    font-weight: bold;
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