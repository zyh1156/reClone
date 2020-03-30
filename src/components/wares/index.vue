<template>
  <section>
    <!-- 标题部分 -->
    <div class="position-relative">
      <!-- 图片 -->
      <div class="top-box position-relative">
        <div>
          <img src="../../assets/swiper/00.png" alt />
        </div>
        <div class="position-absolute volume d-flex align-items-center justify-content-start">
          <div class="txt0">
            <span class="iconfont icon-remen"></span>
            <span>4.6万人次</span>
          </div>
          <div class="txt1">
            <span class="iconfont icon-chenggong"></span>
            <span class>永久回听</span>
          </div>
        </div>
      </div>
      <!-- 优惠价格 -->
      <div class="discount d-flex">
        <!-- 优惠价 -->
        <div class="money0 d-flex">
          <!-- 现价 -->
          <div class="dm00">
            <span class="aa">￥</span>
            <span class="bb">99</span>
            <span>.00</span>
          </div>
          <!-- 原价 -->
          <div class="dm01">
            <div class="aa">￥299.00</div>
            <div class="bb d-inline-block">限时特价</div>
          </div>
        </div>
        <!-- 优惠时间 -->
        <div class="money1">
          <div class="aa text-center">距离特价结束仅剩</div>
          <div class="bb text-center">
            <span>22</span>
            <span>天</span>
            <span class="bbox">22</span>
            <span>:</span>
            <span class="bbox">22</span>
            <span>:</span>
            <span class="bbox">22</span>
          </div>
        </div>
      </div>
      <!-- 描述 -->
      <div class="desc-box">
        <!-- 题目 -->
        <div class="txt0 font-weight-bold">韩国罕见新冠病例 美国国会议员确诊 比利时全国封城 影院复映首批片单</div>
        <!-- 描述 -->
        <div
          class="txt1"
        >韩国罕见新冠病例 美国国会议员确诊 比利时全国封城 影院复映首批片单 机场水门迎医疗队 欧盟主席感谢中国 德国确诊病例破万 林书豪返回中国 美国新增近4000例 微博数据疑泄露 斗鱼Q4营收20.6亿 美股第五次熔断 曝杜兰特感染新冠</div>
        <!-- 课程 -->
        <div class="txt2">已更新24节/共24节</div>
      </div>
      <!-- 优惠券 -->
      <div class="position-absolute coupon">
        <span class="aa d-inline-block">优惠券</span>
        <span class="bb d-inline-block">￥30</span>
      </div>
    </div>
    <!-- 内容部分 -->
    <div class="regrays">
      <!-- 标题 -->
      <div class="d-flex top-body">
        <menul :mlist="menuList" @tapset="setMenu"></menul>
      </div>
      <!-- 内容 -->
      <div class="desc-body">
        <!-- 课程介绍 -->
        <div v-show="menuInx==0" class="db-box0">
          <div v-for="(wi,inx) in wares.introduce" v-bind:key="inx">
            <img v-lazy="wi" alt />
          </div>
        </div>
        <!-- 听课列表 -->
        <div v-show="menuInx==1" class="db-box1">
          <div
            v-for="(ws,inx) in wares.Schedule"
            class="db-cont d-flex align-items-center justify-content-between"
            v-bind:key="inx"
          >
            <div class="txt-panpel">
              <div class="txt0">
                <span
                  class="iconfont"
                  v-bind:class="[{'icon-shipin':ws.type==0},{'icon-yinle':ws.type==1}]"
                ></span>
                <span>{{ws.type}}：{{ws.text}}</span>
              </div>
              <div class="txt1">
                <span class="iconfont icon-shijian"></span>
                <span>{{ws.time}}&nbsp;分钟</span>
              </div>
            </div>
            <div class="img-panpel">
              <img v-lazy="ws.img" alt />
            </div>
          </div>
        </div>
        <!-- 学员心得 -->
        <div v-show="menuInx==2" class="db-box2">
          <div class="db2-tit font-weight-bold">精选学生心得</div>
          <div class="db2-body">
            <div class="db2-con" v-for="(wf,inx) in wares.feel" v-bind:key="inx">
              <!-- 头部 -->
              <div class="user d-flex align-items-center justify-content-between">
                <!-- 昵称 -->
                <div class="d-flex align-items-center">
                  <div class="user-img">
                    <img v-lazy="wf.img" alt />
                  </div>
                  <div class="db2-niko font-weight-bold">{{wf.niko}}</div>
                </div>
                <!-- 点赞 -->
                <div>
                  <span class="iconfont icon-dianzan"></span>
                  <span>{{wf.agrees}}</span>
                </div>
              </div>
              <!-- 内容 -->
              <div class="db2-content">{{wf.content}}</div>
              <!-- 课程 -->
              <div class="db2-schedule">
                <span class="iconfont icon-dingdan"></span>
                <span>{{wf.schedule}}</span>
              </div>
              <!-- 日期 -->
              <div class="db2-date d-flex justify-content-between">
                <!-- 日程 -->
                <div>{{wf.date}}</div>
                <!-- 转发 -->
                <div>
                  <span class="iconfont icon-fenxiang"></span>
                  <span>分享</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="shop-mt">
      <shopt></shopt>
    </div>
    <!-- 价格部分 -->
    <div class="money-boxs"></div>
    <div class="money-box w-100 position-fixed">
      <div class="nowshop text-center">
        <span class="aa">券后价：￥69.00</span>
        &nbsp;&nbsp;
        <span class="bb">￥99.00</span>
      </div>
    </div>
    <tool></tool>
  </section>
</template>
<script>
import menul from "../cube/menulist";
import shopt from "../cube/shoptitle";
import tool from "../cube/tool";
export default {
  data() {
    return {
      menuList: [
        { text: "课程介绍" },
        { text: "听课列表" },
        { text: "学员心得" }
      ],
      menuInx: 0,
      wares: {
        //   介绍列表
        introduce: [
          require("../../assets/swiper/01.png"),
          require("../../assets/swiper/02.png"),
          require("../../assets/swiper/03.png"),
          require("../../assets/swiper/04.png"),
          require("../../assets/swiper/05.png"),
          require("../../assets/swiper/06.png")
        ],
        Schedule: [
          {
            type: 0,
            text: "表格原理：搞懂这个逻辑，小白也能玩转Excel",
            time: 9,
            img: require("../../assets/swiper/00.png")
          },
          {
            type: 1,
            text: "数据录入：身份证号，日期是乱码？原因在这里",
            time: 20,
            img: require("../../assets/swiper/00.png")
          },
          {
            type: 1,
            text: "数据录入：身份证号，日期是乱码？原因在这里",
            time: 20,
            img: require("../../assets/swiper/00.png")
          },
          {
            type: 1,
            text: "数据录入：身份证号，日期是乱码？原因在这里",
            time: 20,
            img: require("../../assets/swiper/00.png")
          },
          {
            type: 1,
            text: "数据录入：身份证号，日期是乱码？原因在这里",
            time: 20,
            img: require("../../assets/swiper/00.png")
          }
        ],
        feel: [
          {
            niko: "鸿雁",
            img: require("../../assets/menu.jpg"),
            agrees: 2,
            content:
              "美国新增近4000例 韩国罕见新冠病例 欧盟主席感谢中国 留学生硬闯小区 安徽解除封闭管理 法国新增1404例 古巨基儿子正面照 北京新增报告2例 香奈儿宣布停产 德国确诊病例破万 美股第五次熔断 国际油价逼近20$ 道指重回20000点 纽约监狱员工确诊",
            schedule: "数据录入：身份证号，日期是乱码？原因在这里",
            date: "2020年3月20日 15点48分"
          },
          {
            niko: "鸿雁",
            img: require("../../assets/menu.jpg"),
            agrees: 2,
            content:
              "美国新增近4000例 韩国罕见新冠病例 欧盟主席感谢中国 留学生硬闯小区 安徽解除封闭管理 法国新增1404例 古巨基儿子正面照 北京新增报告2例 香奈儿宣布停产 德国确诊病例破万 美股第五次熔断 国际油价逼近20$ 道指重回20000点 纽约监狱员工确诊",
            schedule: "数据录入：身份证号，日期是乱码？原因在这里",
            date: "2020年3月20日 15点48分"
          }
        ]
      }
    };
  },
  methods: {
    getData() {
      let id = this.$route.params.waresid;
    },
    setMenu(val){
      this.menuInx = val[0];
    }
  },
  mounted() {
    this.getData();
  },
  components: {
    shopt,
    tool,
    menul
  }
};
</script>
<style lang="scss" scoped>
.top-box {
  height: 430px;
  overflow: hidden;
  .volume {
    width: 100%;
    left: 0;
    height: 55px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.3);
    bottom: 0;
    .txt0 {
      padding-left: 27px;
    }
    .txt1 {
      padding-left: 20px;
    }
    .iconfont {
      margin-right: 10px;
    }
  }
}
.regrays {
  padding: $pardon 0 0;
}
.top-body {
  background-color: #fefefe;
  border-bottom: 1px solid #f7f7f7;
}
.discount {
  height: 90px;
  .money0 {
    color: #fff;
    width: 510px;
    background-image: linear-gradient(to right, #e9335e, #e34349);
    .dm00 {
      padding-left: 24px;
      line-height: 90px;
      .aa {
        margin-right: 10px;
      }
      .bb {
        font-size: 64px;
      }
    }
    .dm01 {
      padding-left: 18px;
      .aa {
        margin-top: 15px;
        font-size: 16px;
        color: rgba(255, 255, 255, 0.5);
        text-decoration: line-through;
      }
      .bb {
        margin-top: 10px;
        font-size: 20px;
        padding: 8px;
        border-radius: 4px;
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
  }
  .money1 {
    width: 240px;
    .aa {
      margin-top: 12px;
      font-size: 18px;
      color: #dc4f5d;
    }
    .bb {
      margin-top: 8px;
      font-size: 16px;
      color: #7f512b;
      span {
        margin: 0 3px;
      }
      .bbox {
        color: #fff;
        display: inline-block;
        width: 35px;
        height: 35px;
        border-radius: 6px;
        background-color: #85582f;
        line-height: 35px;
        border: 1px solid #7b4d28;
      }
    }
    background-image: linear-gradient(to bottom, #fcef9b, #f7dd70);
  }
}
.coupon {
  right: 27px;
  bottom: 18px;
  span {
    padding: 6px;
    border: 1px solid #e94e24;
    background-color: #ec6541;
    border-radius: 6px;
    color: #fff;
    font-size: 16px;
  }
  .aa {
    border-right: 0;
  }
  .bb {
    border-left: 0;
  }
}
.desc-box {
  padding: 27px;
  background-color: #fff;
  .txt0 {
    font-size: 32px;
    line-height: 1.31;
  }
  .txt1 {
    color: #a5a5a5;
    font-size: 22px;
    line-height: 1.36;
    margin-top: 16px;
  }
  .txt2 {
    color: #a5a5a5;
    font-size: 22px;
    margin-top: 16px;
  }
}
.desc-body {
  background-color: #fafafa;
  .db-box0 {
    padding: 16px 27px;
    img {
      margin-bottom: 16px;
    }
  }
  .db-box1 {
    padding: 18px;
    background-color: #fefefe;
    .db-cont {
      background-color: #f8f8f8;
      padding: 27px;
      margin-bottom: 18px;
      border-radius: 5px;
      .txt-panpel {
        width: 390px;
        .iconfont {
          margin-right: 10px;
        }
        .txt0 {
          color: #0a0a0a;
          font-size: 24px;
          line-height: 1.33;
        }
        .txt1 {
          color: #808080;
          margin-top: 42px;
          font-size: 20px;
        }
      }
      .img-panpel {
        width: 218px;
        height: 128px;
        overflow: hidden;
        border-radius: 1px solid #fff;
        border-radius: 3px;
        img {
          height: 100%;
        }
      }
    }
  }
  .db-box2 {
    background-color: #fefefe;
    .db2-tit {
      color: #121212;
      font-size: 27px;
      padding: 27px 35px;
      position: relative;
    }
    .db2-tit::after {
      position: absolute;
      left: 18px;
      height: 30px;
      width: 8px;
      border: 1px solid #e95026;
      background-color: #ec6541;
      content: "";
      top: 25.5px;
      border-radius: 4px;
    }
    .db2-body {
      padding: 0 18px 18px;
    }
    .db2-con {
      background-color: #f8f8f8;
      padding: 27px;
      border-radius: 12px;
      margin-bottom: 18px;
    }
    .user .iconfont {
      margin-right: 8px;
    }
    .user-img {
      width: 64px;
      height: 64px;
      border: 1px solid #fff;
      margin-right: $pardon/2;
      img {
        border-radius: 32px;
      }
    }
    .db2-content {
      margin-top: 27px;
      line-height: 1.54;
    }
    .db2-schedule {
      color: #989898;
      margin-top: 20px;
      font-size: 24px;
      .iconfont {
        margin-right: 10px;
      }
    }
    .db2-date {
      color: #989898;
      margin-top: 27px;
      font-size: 20px;
      .iconfont {
        margin-right: 8px;
      }
    }
  }
}
.shop-mt {
  margin-top: $pardon;
}
.money-boxs {
  height: 260px;
}
.money-box {
  padding: 6px 27px;
  bottom: 0;
  left: 0;
  background-color: #fefefe;
  border-top: 2px solid #f2f2f2;
  box-shadow: 0 -10px 10px #f2f2f2;
  .nowshop {
    color: #fff;
    height: 84px;
    line-height: 84px;
    background-color: #ec6541;
    border: 1px solid #e95228;
    border-radius: 42px;
    .aa {
      font-size: 30px;
    }
    .bb {
      color: rgba(255, 255, 255, 0.5);
      text-decoration: line-through;
    }
  }
}
</style>