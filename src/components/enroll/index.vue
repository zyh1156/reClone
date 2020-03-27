<template>
  <section>
    <search></search>
    <div class="swiper-box">
      <!-- 轮播图 -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../../assets/swiper/00.png" alt />
          </div>
          <div class="swiper-slide">
            <img src="../../assets/swiper/01.png" alt />
          </div>
          <div class="swiper-slide">
            <img src="../../assets/swiper/02.png" alt />
          </div>
          <div class="swiper-slide">
            <img src="../../assets/swiper/03.png" alt />
          </div>
          <div class="swiper-slide">
            <img src="../../assets/swiper/04.png" alt />
          </div>
          <div class="swiper-slide">
            <img src="../../assets/swiper/05.png" alt />
          </div>
          <div class="swiper-slide">
            <img src="../../assets/swiper/06.png" alt />
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <menulist></menulist>
    <div class="en-list">
      <div v-for="i in 10" class="en-li d-flex">
        <div class="en-img overflow-hidden">
          <img src="../../assets/menu.jpg" alt />
        </div>
        <div
          class="en-con align-items-center align-content-around d-flex align-items-center flex-wrap"
        >
          <div class="txt0 font-weight-bold w-100">语文学习技巧公开课</div>
          <div class="txt1 w-100">免费技工技术文档</div>
          <div class="txt2 d-flex w-100 justify-content-between">
            <div>
              <div class="d-flex align-items-center">
                <div class="money">
                  <span class="t1">￥</span>
                  <span class="t2">0.01</span>
                </div>
                <div class="old-money">0.01</div>
              </div>
              <div class="address">
                <span class="iconfont icon-dingwei"></span>
                <span>距离1087.7km</span>
              </div>
            </div>
            <a href="/#/enroll/123" class="btn0 text-center">立即报名</a>
          </div>
        </div>
      </div>
    </div>
    <foot></foot>
  </section>
</template>
<script>
import search from "../cube/search";
import menulist from "../cube/menulist";
import foot from "../cube/footer";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  data() {
    return {
      menuList: ["热门活动", "培训机构", "线上教程"],
      menuInx: 0
    };
  },
  components: {
    search,
    menulist,
    foot
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
  mounted() {
    this.toSwiper();
  }
};
</script>
<style lang="scss" scoped>
.swiper-box {
  padding: $pardon/2 $pardon;
    background-color: #fff;
}
// 轮播图
.swiper-container {
  height: 310px;
  border: 2px solid #fff;
  border-radius: 13px;
}

.en-title {
  left: 0;
  top: 0;
  width: 100%;
  background-color: #fff;
  padding: $pardon/2 $pardon;
  .en-menu {
    color: #626262;
    width: 140px;
    height: 36.5px;
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
    left: 36px;
    background-color: $theme-bor;
    border-radius: 4px 4px 0 0;
  }
}
.en-list {
  padding: $pardon/2 $pardon;
    background-color: #fff;
  .en-li:last-child {
    border-bottom: none;
  }
  .en-li {
    padding: $pardon/2 0;
    border-bottom: 1px solid #e2e2e2;
    .en-img {
      width: 218px;
      height: 166.6px;
      border-radius: 7px;
      margin-right: 17px;
    }
    .en-con {
      width: 460px;
    }
    .txt0 {
      color: #2d2d2d;
      font-size: 28px;
    }
    .txt1 {
      color: #373737;
      font-size: 21px;
    }
    .txt2 {
      .money {
        color: $money;
        margin-right: 13px;
        .t1 {
          font-size: 16px;
        }
        .t2 {
          font-size: 21px;
        }
      }
      .old-money {
        font-size: 16px;
        text-decoration: line-through;
      }
      .address {
        margin-top: 10px;
        color: #999999;
        font-size: 22px;
        .iconfont {
          margin-right: 7px;
        }
      }
    }
    .btn0 {
      color: #fff;
      font-size: 19px;
      width: 116px;
      height: 48px;
      line-height: 48px;
      border-radius: 32px;
      border: 1px solid $theme-bor;
      background-image: linear-gradient(to right, $theme, $theme-bor);
    }
  }
}
</style>