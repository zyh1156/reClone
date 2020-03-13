<template>
  <section>
    <!-- 奖励位 -->
    <div class="reward d-flex align-items-center">
      <div class="hb">
        <img src="../assets/hb-ico.png" alt />
      </div>
      <div>
        <span>你有</span>
        <span class="money">370</span>
        <span>元红包未领取，7天后过期</span>
      </div>
      <div class="receive">
        <span>立即领取</span>
        <span>
          <img src="../assets/left-ico.png" alt />
        </span>
      </div>
    </div>
    <!-- 搜索框 -->
    <div class="search-box">
      <router-link :to="{name:'search'}">
        <div class="text-center search-body d-flex align-items-center justify-content-center">
          <div class="search-ico">
            <img src="../assets/search-ico.png" alt />
          </div>
          <div>搜索课程/专栏/直播间</div>
        </div>
      </router-link>
    </div>
    <!-- 菜单栏 -->
    <div class="menu-box d-flex">
      <div
        class="recommend position-relative active d-flex align-items-center justify-content-center"
      >
        <div>推荐</div>
      </div>
      <div class="menu-nav overflow-auto">
        <div class="menu-list h-100 d-flex align-items-center justify-content-center">
          <div v-for="(ml,index) in menuList" v-bind:key="index">{{ml.text}}</div>
        </div>
      </div>
    </div>
    <!-- 主体内容 -->
    <div class="bac-f2f p27">
      <!-- 轮播图 -->
      <div class="swiper-box">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div>
                <img src="../assets/swiper/00.png" alt />
              </div>
            </div>
            <div class="swiper-slide">
              <div>
                <img src="../assets/swiper/01.png" alt />
              </div>
            </div>
            <div class="swiper-slide">
              <div>
                <img src="../assets/swiper/02.png" alt />
              </div>
            </div>
            <div class="swiper-slide">
              <div>
                <img src="../assets/swiper/03.png" alt />
              </div>
            </div>
            <div class="swiper-slide">
              <div>
                <img src="../assets/swiper/04.png" alt />
              </div>
            </div>
            <div class="swiper-slide">
              <div>
                <img src="../assets/swiper/05.png" alt />
              </div>
            </div>
            <div class="swiper-slide">
              <div>
                <img src="../assets/swiper/06.png" alt />
              </div>
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <!-- 主菜单 -->
      <div class="menux5 text-center d-flex justify-content-between">
        <div class="w-100">
          <div class="position-relative">
            <div class="position-absolute tips">
              <span>免费</span>
            </div>
            <img src="../assets/menu.jpg" alt />
          </div>
          <div class="text">公益课程</div>
        </div>
        <div class="w-100">
          <div class="position-relative">
            <img src="../assets/menu.jpg" alt />
          </div>
          <div class="text">超低秒杀</div>
        </div>
        <div class="w-100">
          <div class="position-relative">
            <div class="position-absolute tips">
              <span>9.9</span>
            </div>
            <img src="../assets/menu.jpg" alt />
          </div>
          <div class="text">vip月卡</div>
        </div>
        <div class="w-100">
          <div class="position-relative">
            <img src="../assets/menu.jpg" alt />
          </div>
          <div class="text">奖学金</div>
        </div>
        <div class="w-100">
          <div class="position-relative">
            <img src="../assets/menu.jpg" alt />
          </div>
          <div class="text">签到中心</div>
        </div>
      </div>
      <!-- 主推列表 -->
      <div class="wares">
        <div>
          <!-- 标题 -->
          <div class="tit-box d-flex align-items-center justify-content-between">
            <div class="title">商家案例</div>
            <div class="more">查看更多</div>
          </div>
          <!-- 商品列表 -->
          <div>
            <!-- 商品 -->
            <div class="ware d-flex justify-content-between">
              <div class="position-relative lshow">
                <div class="ware-img">
                  <img src="../assets/menu.jpg" alt />
                </div>
                <div class="w-100 text-center ware-sales position-absolute">6.2万人</div>
              </div>
              <div class="rshow">
                <div class="ware-title">UP主必备PR软件实操：20节短视频赚钱课，教你月入过万</div>
                <div class="d-flex align-items-center justify-content-between">
                  <div class="ware-renew">已更新22期</div>
                  <div class="ware-discount">立减10元</div>
                </div>
              </div>
            </div>
            <!-- 商品 -->
            <div class="ware d-flex justify-content-between">
              <div class="position-relative lshow">
                <div class="ware-img">
                  <img src="../assets/menu.jpg" alt />
                </div>
                <div class="w-100 text-center ware-sales position-absolute">6.2万人</div>
              </div>
              <div class="rshow">
                <div class="ware-title">UP主必备PR软件实操：20节短视频赚钱课，教你月入过万</div>
                <div class="d-flex align-items-center justify-content-between">
                  <div class="ware-renew">已更新22期</div>
                  <div class="ware-discount">立减10元</div>
                </div>
              </div>
            </div>
            <!-- 商品 -->
            <div class="ware d-flex justify-content-between">
              <div class="position-relative lshow">
                <div class="ware-img">
                  <img src="../assets/menu.jpg" alt />
                </div>
                <div class="w-100 text-center ware-sales position-absolute">6.2万人</div>
              </div>
              <div class="rshow">
                <div class="ware-title">UP主必备PR软件实操：20节短视频赚钱课，教你月入过万</div>
                <div class="d-flex align-items-center justify-content-between">
                  <div class="ware-renew">已更新22期</div>
                  <div class="ware-discount">立减10元</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 页脚菜单 -->
    <fter></fter>
  </section>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";
import fter from "./cube/footer";
export default {
  name: "HelloWorld",
  data() {
    return {
      menuList: [
        {
          text: "我要变美"
        },
        {
          text: "个人成长"
        },
        {
          text: "赚钱理财"
        },
        {
          text: "婚姻情感"
        },
        {
          text: "亲子教育"
        },
        {
          text: "享受生活"
        }
      ]
    };
  },
  components: {
    fter
  },
  methods: {},
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      autoplay: true,
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>
<style lang="scss" scoped>
@keyframes hbani {
  from {
    transform: rotate(-30deg);
  }
  to {
    transform: rotate(30deg);
  }
}
@keyframes reani {
  from {
    right: 30px;
  }
  to {
    right: 24px;
  }
}
.reward {
  color: #5e4517;
  height: 80px;
  background-image: linear-gradient(270deg, #dac888 1%, #efdca4 100%);
  padding-left: 77px;
  position: relative;
  .hb img {
    width: 32px;
    position: absolute;
    transform: rotate(-30deg);
    left: 30px;
    top: 20px;
    animation: hbani 0.3s linear infinite alternate;
  }
  .receive {
    position: absolute;
    top: 27px;
    right: 30px;
    animation: reani 0.5s linear infinite alternate;
    img {
      margin-left: 12px;
      width: 22px;
    }
  }
  .money {
    color: #ee4d03;
  }
}
.search-box {
  padding: 20px 30px 14px;
  .search-body {
    color: #c3c3c3;
    background-color: #f8f8f8;
    height: 64px;
    border-radius: 32px;
    .search-ico img {
      height: 30px;
      margin-right: 18px;
    }
  }
}
.menu-box {
  height: 71px;
  margin-bottom: 11px;
  .active {
    font-size: 37px;
    font-weight: bold;
  }
  .active::after {
    content: "";
    position: absolute;
    height: 6px;
    width: 42px;
    background-color: #ff3807;
    border-radius: 4px;
    bottom: 1px;
  }
  .recommend {
    width: 130px;
  }
  .menu-nav {
    width: 620px;
    .menu-list {
      width: 1038px;
      div {
        padding: 0 29.5px;
        white-space: nowrap;
        width: 173px;
      }
    }
  }
}
.swiper-box {
  padding-bottom: 16px;
  height: 292px;
  .swiper-container {
    border: 2px solid #fff;
    border-radius: 11px;
  }
  img {
    height: 246px;
    width: 100%;
    border-radius: 9px;
  }
}
.menux5 {
  padding: 6px 3px;
  .tips {
    left: 70px;
    top: -10px;
    font-size: 22px;
    span {
      background: #ff2e3e;
      border: 4px solid #fff;
      border-bottom-right-radius: 14px;
      border-top-left-radius: 14px;
      border-top-right-radius: 14px;
      color: #fff;
      display: inline-block;
      font-size: 20px;
      line-height: 25px;
      padding: 4px;
      white-space: nowrap;
    }
  }
  img {
    width: 76px;
    border-radius: 20px;
  }
  .text {
    margin-top: 20px;
  }
}
.wares {
  margin-top: 27px;
  background-color: #fff;
  padding: 0 27px;
  border-radius: 10px;
  .tit-box {
    height: 85px;
    .title {
      font-size: 31px;
      color: #000;
      font-weight: bold;
    }
    .more {
      color: #9f9f9f;
      font-size: 23px;
    }
  }
  .ware:nth-child(n+1){
      padding-top: 27px;
      border-top: 1px solid #f5f5f5;
  }
  .ware {
    padding-bottom: 27px;
    .lshow {
      border-radius: 5px;
      overflow: hidden;
      width: 212px;
    }
    .rshow {
      width: 410px;
    }
    .ware-img img {
      width: 210px;
      height: 160px;
    }
    .ware-sales {
      left: 0;
      bottom: 0;
      font-size: 22px;
      color: #8d8d8d;
      background-color: #f4f4f4;
    }
    .ware-title {
      font-size: 28px;
      line-height: 37px;
      color: #000;
      font-weight: bold;
      padding-bottom: 42px;
    }
    .ware-renew{
        color: #999;
        font-size: 20px;
    }
    .ware-discount{
        background-color: #eb5046;
        border-radius: 4px;
        color: #fff;
        font-size: 20px;
        padding: 6px;
        border: 1px solid #e83b30;
    }
  }
}
</style>
