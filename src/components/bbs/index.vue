<template>
  <section>
    <!-- 标题栏 -->
    <div class="title font-weight-bold">我的社区</div>
    <!-- 社区列表 -->
    <div class="my-list d-flex flex-wrap">
      <a :href="ml.url" class="ml-box text-center" v-for="(ml,inx) in myList" v-bind:key="inx">
        <div class="ml-img">
          <img v-lazy="ml.img" alt />
        </div>
        <div class="ml-name text-truncate">{{ml.txt}}</div>
      </a>
    </div>
    <!-- 广告位 -->
    <div class="advert">
      <div class="advert-box d-flex justify-content-between align-items-center">
        <!-- logo -->
        <div class="logo">
          <img src="../../assets/menu.jpg" alt />
        </div>
        <!-- 内容 -->
        <div class="content">
          <div class="tit">轻小云</div>
          <div class="con">回复数字“0”，扫码关注公众号</div>
        </div>
        <!-- 关注 -->
        <div class="follow text-center">关注</div>
      </div>
    </div>
    <!-- 标题栏 -->
    <div class="title font-weight-bold">推荐社区</div>
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
    footer2
  }
};
</script>
<style lang="scss" scoped>
section {
  background-color: #f8f8f8;
}
.title {
  font-size: 40px;
  padding: 37px 30px 16px;
}
.my-list {
  padding:0 35px;
  .ml-box{
      width: 136px;
      padding:6px 0;
  }
  .ml-img {
    img {
      width: 113px;
      height: 113px;
      border-radius: 50%;
    }
  }
  .ml-name {
    margin-top: 24px;
    font-size: 22px;
    color: #080808;
  }
}
.advert {
  padding: 27px 30px 10px;
  .advert-box {
    background-color: #fefefe;
    padding: 0 19px;
    height: 140px;
    border-radius: 70px;
  }
  .logo {
    img {
      width: 114px;
      height: 114px;
      border-radius: 57px;
    }
  }
  .content {
    padding: 0 7px;
    width: 390px;
    .tit {
      color: black;
    }
    .con {
      font-size: 22px;
      margin-top: 22px;
      color: #9f9f9f;
    }
  }
  .follow {
    width: 146px;
    height: 60px;
    font-size: 30px;
    line-height: 60px;
    border-radius: 30px;
    border: 1px solid #f3c93a;
    background-color: #f4d054;
  }
}
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