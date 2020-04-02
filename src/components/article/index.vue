<template>
  <section class="bac">
    <search></search>
    <!-- 列表部分 -->
    <cb></cb>
    <footer2></footer2>
  </section>
</template>
<script>
import search from "../cube/search";
import cb from "../cube/cube-bbs";
import footer2 from "../cube/footer";
export default {
  data() {
    return {
      list: [
        {
          bigImg: require("../../assets/swiper/00.png"),
          smallImg: require("../../assets/menu.jpg"),
          title: "轻小云",
          content: "轻小云互动交流轻小云互动交流轻小云互动交流轻小云互动交流",
          humen: 2,
          cont: 5
        },
        {
          bigImg: require("../../assets/swiper/00.png"),
          smallImg: require("../../assets/menu.jpg"),
          title: "轻小云",
          content: "轻小云互动交流轻小云互动交流轻小云互动交流轻小云互动交流",
          humen: 2,
          cont: 5
        },
        {
          bigImg: require("../../assets/swiper/00.png"),
          smallImg: require("../../assets/menu.jpg"),
          title: "轻小云",
          content: "轻小云互动交流轻小云互动交流轻小云互动交流轻小云互动交流",
          humen: 2,
          cont: 5
        },
        {
          bigImg: require("../../assets/swiper/00.png"),
          smallImg: require("../../assets/menu.jpg"),
          title: "轻小云",
          content: "轻小云互动交流轻小云互动交流轻小云互动交流轻小云互动交流",
          humen: 2,
          cont: 5
        },
        {
          bigImg: require("../../assets/swiper/00.png"),
          smallImg: require("../../assets/menu.jpg"),
          title: "轻小云",
          content: "轻小云互动交流轻小云互动交流轻小云互动交流轻小云互动交流",
          humen: 2,
          cont: 5
        }
      ]
    };
  },
  components: {
    footer2,
    cb,
    search
  }
};
</script>
<style lang="scss" scoped>
</style>