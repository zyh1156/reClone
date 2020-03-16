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
      <!-- 搜索框 -->
      <div class="search-box">
        <a href="/#/search" class="search-body d-flex align-items-center justify-content-center">
          <span>
            <img src="../assets/search-ico.png" alt />
          </span>
          <span>搜索课程/专栏/直播间</span>
        </a>
      </div>
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
    <div class="gray-pack">
      <!-- 轮播图 -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../assets/swiper/00.png" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../assets/swiper/01.png" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../assets/swiper/02.png" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../assets/swiper/03.png" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../assets/swiper/04.png" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../assets/swiper/05.png" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../assets/swiper/06.png" alt="">
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <!-- 课程列表 -->
      <div>
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
                <div class="cr-text">【国粤双语】&nbsp;小学生必背古诗108首，每天三分钟，让孩子轻松学习。</div>
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
                <div class="cr-text">【国粤双语】&nbsp;小学生必背古诗108首，每天三分钟，让孩子轻松学习。</div>
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
                <div class="cr-text">【国粤双语】&nbsp;小学生必背古诗108首，每天三分钟，让孩子轻松学习。</div>
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
                <div class="cr-text">【国粤双语】&nbsp;小学生必背古诗108首，每天三分钟，让孩子轻松学习。</div>
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
      </div>
    </div>
    <!-- 底脚 -->
    <footer2></footer2>
  </section>
</template>
<script>
import footer2 from "./cube/footer";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  data() {
    return {
      menuList: [
        {
          text: "内容商品"
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
    },
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
    footer2
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
  img{
    max-width: 100%;
  }
}
.course-box {
  padding: 10px 17px;
  background-color: #fff;
  border-radius: 10px;
  margin-top: 50px;
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
  .course-body:hover{
    
    background-color: #f8f8f8;
  }
  .course-body {
    border-top: 2px solid #f6f6f6;
    padding:10px 10px 25px;
    margin-top: 17px;
    .cour-left {
      width: 212px;
      height: 162px;
      border-radius: 5px;
      .cl-img {
        img {
          max-width: 100%;
        }
      }
      .cl-men {
        color: #838383;
        background-color: #f4f4f4;
        border-top: 1px solid #f6f6f6;
        height: 40px;
        bottom: 0;
        line-height: 40px;
        .iconfont{
          margin-right: 8px;
          font-size: 26px;
        }
      }
    }
    .cour-right {
      width: 430px;
      padding: 0 0 0 20px;
      .cr-text {
        font-size: 28px;
        font-weight: bold;
        line-height: 1.43;
        word-break: break-all;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
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