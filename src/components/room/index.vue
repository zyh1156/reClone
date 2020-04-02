<template>
  <section  class="bac">
    <!-- banner -->
    <div class="banner overflow-hidden">
      <img src="../../assets/swiper/00.png" alt />
    </div>
    <!-- <shopt></shopt> -->
    <menul :mlist="nav" @tapset="tapMenu"></menul>
    <sc v-show="navInx==0" :datas="dt"></sc>
    <cb v-show="navInx==1"></cb>
    <ce v-show="navInx==2"></ce>
    <cl v-show="navInx==3"></cl>
    <foot></foot>
  </section>
</template>
<script>
import shopt from "../cube/shoptitle";
import menul from "../cube/menulist";
import sc from "../cube/showcase";
import ce from "../cube/cube-enroll";
import cb from "../cube/cube-bbs";
import cl from "../cube/cube-live";
import foot from "../cube/footer";
export default {
  data() {
    return {
      navInx: 0,
      nav: [
        { text: "课程" },
        { text: "话题" },
        { text: "活动" },
        { text: "直播" }
      ],
      dt: {
        name: "专栏（35）",
        type: 0,
        list: [
          {
            thumbnail: require("../../assets/menu.jpg"),
            post_title:
              "100个公司教你学会交往之道，你也能拥有池子李诞的吐槽能力，100个公司教你学会交往之道，你也能拥有池子李诞的吐槽能力",
            price: "200",
            money: 0
          },
          {
            post_title:
              "100个公司教你学会交往之道，你也能拥有池子李诞的吐槽能力，100个公司教你学会交往之道，你也能拥有池子李诞的吐槽能力",
            price: "200",
            money: 0
          },
          {
            post_title:
              "100个公司教你学会交往之道，你也能拥有池子李诞的吐槽能力，100个公司教你学会交往之道，你也能拥有池子李诞的吐槽能力",
            price: "200",
            money: 0
          },
          {
            post_title:
              "100个公司教你学会交往之道，你也能拥有池子李诞的吐槽能力，100个公司教你学会交往之道，你也能拥有池子李诞的吐槽能力",
            price: "200",
            money: 0
          },
          {
            post_title:
              "100个公司教你学会交往之道，你也能拥有池子李诞的吐槽能力，100个公司教你学会交往之道，你也能拥有池子李诞的吐槽能力",
            price: "200",
            money: 0
          },
          {
            post_title:
              "100个公司教你学会交往之道，你也能拥有池子李诞的吐槽能力，100个公司教你学会交往之道，你也能拥有池子李诞的吐槽能力",
            price: "200",
            money: 0
          },
          {
            post_title:
              "100个公司教你学会交往之道，你也能拥有池子李诞的吐槽能力，100个公司教你学会交往之道，你也能拥有池子李诞的吐槽能力",
            price: "200",
            money: 0
          }
        ]
      }
    };
  },
  components: {
    shopt,
    menul,
    foot,
    sc,
    ce,
    cb,
    cl
  },
  methods: {
    tapMenu(val) {
      this.navInx = val[0];
    }
  }
};
</script>
<style lang="scss" scoped>
.banner {
  height: 375px;
}
</style>