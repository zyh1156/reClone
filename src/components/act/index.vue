<template>
  <section class="bac">
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
    <menulist :mlist="menuList"></menulist>
    <ce></ce>
    <foot></foot>
  </section>
</template>
<script>
import search from "../cube/search";
import menulist from "../cube/menulist";
import ce from "../cube/cube-enroll";
import foot from "../cube/footer";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  data() {
    return {
      menuList: [
        { text: "热门活动" },
        { text: "培训机构" },
        { text: "线上教程" }
      ],
      menuInx: 0
    };
  },
  components: {
    search,
    menulist,
    ce,
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
</style>