<template>
  <section>
    <search></search>
    <!-- 列表部分 -->
    <div class="list-content" v-for="(l,inx) in list" v-bind:key="inx">
      <div class="panpel">
        <div class="img-box">
          <img v-lazy="l.bigImg" alt />
        </div>
        <div class="content-box d-flex justify-content-between align-items-center">
          <div class="box0">
            <img v-lazy="l.smallImg" alt />
          </div>
          <div class="box1">
            <div class="txt0 font-weight-bold">{{l.title}}</div>
            <div class="txt1 text-truncate">{{l.content}}</div>
          </div>
          <div class="box2 text-center">进入</div>
        </div>
        <div class="about-box d-flex">
          <div class="mr-90">
            <span class="iconfont icon-remen"></span>
            <span>{{l.humen}}&nbsp;成员</span>
          </div>
          <div>
            <span class="iconfont icon-dingdan"></span>
            <span>{{l.cont}}&nbsp;内容</span>
          </div>
        </div>
      </div>
    </div>
    <footer2></footer2>
  </section>
</template>
<script>
import search from "../cube/search"
import footer2 from "../cube/footer";
export default {
  data() {
    return {
      myList: [
        {
          img: require("../../assets/menu.jpg"),
          txt: "轻笑打卡轻笑打卡轻笑打卡",
          url:"/#/bbs/community"
        },
        {
          img: require("../../assets/menu.jpg"),
          txt: "轻笑打卡"
        },
        {
          img: require("../../assets/menu.jpg"),
          txt: "轻笑打卡"
        },
        {
          img: require("../../assets/menu.jpg"),
          txt: "轻笑打卡"
        },
        {
          img: require("../../assets/menu.jpg"),
          txt: "轻笑打卡"
        },
        {
          img: require("../../assets/menu.jpg"),
          txt: "轻笑打卡"
        },
        {
          img: require("../../assets/menu.jpg"),
          txt: "轻笑打卡"
        }
      ],
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
    search
  }
};
</script>
<style lang="scss" scoped>
.list-content {
  padding: 20px 27px;
  .panpel {
    border-radius: 6px;
    background-color: #fefefe;
    padding: 27px 27px 0;
    .img-box {
      height: 240px;
      overflow: hidden;
      img {
        border-radius: 6px;
      }
    }
    .content-box {
      padding: 27px 0 24px 0;
      .box0 {
        img {
          width: 90px;
          height: 90px;
          border-radius: 45px;
        }
      }
      .box1 {
        width: 410px;
        .txt0 {
          font-size: 30px;
        }
        .txt1 {
          color: #9f9f9f;
          margin-top: 16px;
        }
      }
      .box2 {
        height: 48px;
        width: 115px;
        border-radius: 24px;
        line-height: 48px;
        border-radius: #f3ca3c;
        background-color: #f4d054;
      }
    }
    .about-box {
      border-top: 1px solid #f8f8f8;
      padding: 15px 5px 20px;
      height: 62px;
      color: #898989;
      font-size: 22px;
      line-height: 25px;
      .mr-90 {
        margin-right: 90px;
      }
      .iconfont {
        margin-right: 20px;
      }
    }
  }
}
</style>