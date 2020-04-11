<template>
  <section class="bac position-relative">
    <!-- 背景层 -->
    <div :style="bac" class="bigbac position-absolute"></div>
    <!-- 内容层 -->
    <div class="com-body position-relative">
      <!-- 标题 -->
      <div class="com-panel">
        <div class="title align-items-center justify-content-between d-flex">
          <div class="cont-box">
            <div class="tit text-truncate font-weight-bold">{{acd.post_title}}</div>
            <div class="con d-flex">
              <div>{{acd.page_num}}内容</div>
              <div class="bor"></div>
              <div>{{acd.tuan_num}}成员</div>
            </div>
          </div>
          <router-link
            :to="{name:'share',query:{kc_id:acd.id,type:'article_post'}}"
            class="share-box text-center"
          >
            <span class="iconfont icon-fenxiang"></span>
            <span>邀请函</span>
          </router-link>
        </div>
        <div class="content align-items-center justify-content-between d-flex">
          <div class="cm-con text-center">
            <div class="num font-weight-bold">{{acd.page_num}}</div>
            <div>内容</div>
          </div>
          <div class="cm-con text-center">
            <div class="num font-weight-bold">{{acd.tuan_num}}</div>
            <div>成员</div>
          </div>
          <div class="cm-con text-center">
            <div class="num font-weight-bold">{{acd.tj_num}}</div>
            <div>精华</div>
          </div>
          <div class="cm-con text-center">
            <div class="num font-weight-bold">{{acd.post_hits}}</div>
            <div>人气</div>
          </div>
        </div>
      </div>
      <!-- 简介 -->
      <div class="com-panel">
        <div class="txt0 font-weight-bold">社区简介</div>
        <div class="txt1" v-html="acd.post_content"></div>
      </div>
      <!-- 圈主 -->
      <div class="mtp">
        <tea :teach="teach"></tea>
      </div>
      <!-- 内容 -->
      <div class="com-list">
        <div v-if="acd.is_pay==0" class="txt0 font-weight-bold">部分内容预览</div>
        <router-link
          :to="{name:'content',params:{contentid:cl.id}}"
          v-for="(cl,inx) in comlist"
          v-bind:key="inx"
          class="com-li"
        >
          <!-- 帖子信息栏 -->
          <div class="d-flex user">
            <div class="box0 position-relative">
              <img :src="cl.avatar" alt />
              <!-- <div class="position-absolute text-center sex iconfont icon-nan"></div> -->
            </div>
            <div class="box1">
              <div class="d-flex align-items-center b1-list">
                <div class="name">{{cl.user_nickname}}</div>
                <div v-if="cl.is_quan_boss" class="master">圈主</div>
                <!-- <div class="top">置顶</div> -->
                <!-- <div class="level">lv1</div> -->
              </div>
              <div class="time">{{cl.create_time}}</div>
            </div>
          </div>
          <!-- 标题栏 -->
          <div class="tit font-weight-bold">{{cl.post_title}}</div>
          <!-- 内容栏 -->
          <div class="con">
            <!-- 内容部分 -->
            <div v-html="cl.post_content"></div>
            <!-- 图片部分 -->
            <div class="d-flex flex-wrap">
              <div v-for="(ph,inx) in cl.photos" v-bind:key="inx">
                <div class="phbox">
                  <img v-lazy="ph.url" alt />
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <!-- 引导加入 -->
    <div v-if="acd.is_pay==0" class="guide">加入圈子，查看更多内容</div>
    <!-- 加入 -->
    <div
      v-if="acd.is_pay==0"
      class="bottom-btn position-fixed w-100 align-items-center justify-content-between d-flex"
    >
      <div class="money font-weight-bold">
        <div v-if="acd.isfree">免费</div>
        <div v-else>{{acd.price}}</div>
      </div>
      <div @click="gopay" class="now-in text-center">立即加入</div>
    </div>
    <div
      v-else
      class="bottom-btn position-fixed w-100 align-items-center justify-content-center d-flex"
    >
      <div class="now-in text-center">发起讨论</div>
    </div>
  </section>
</template>
<script>
// 社区页面
import tea from "../cube/shoptitle";
let comid;
export default {
  data() {
    return {
      // 背景图
      bac: {},
      //   基本信息
      acd: { id: 0 },
      //   教师信息
      teach: {},
      //   话题列表
      comlist: []
    };
  },
  mounted() {
    comid = this.$route.params.communityid;
    this.getDate();
    this.getcom();
  },
  methods: {
    getDate() {
      this.axios.post("/api/home/article/show.html", { id: comid }, res => {
        res = res.data.data;
        this.acd = res.data;
        this.acd.isfree = parseFloat(res.data.price <= 0);
        this.teach = res.teach;
        this.bac = {
          backgroundImage: "url(" + res.data.thumbnail + ")"
        };
      });
    },
    getcom() {
      this.axios.post("/api/home/article/item.html", { id: comid }, res => {
        this.comlist = res.data.data.data;
      });
    },
    gopay() {
      let data = {
        table: "article_post",
        object_id: comid,
        is_firends: 0,
        num: 1
      };
      this.axios.post("/api/user/order/to_pay.html", data, res => {
        if (res.data.data == 0) {
          this.$router.push({ name: "community", params: { communityid: id } });
        } else {
          this.$router.push({ name: "pay", query: { orderid: res.data.data } });
        }
      });
    }
  },
  components: {
    tea
  }
};
</script>
<style lang="scss" scoped>
.bigbac {
  background-size: 100% auto;
  height: 285px;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 0;
}
.com-body {
  z-index: 5;
  padding: 186px 27px 127px;
  .com-panel {
    background-color: #fefefe;
    border-radius: 4px;
    margin-top: 27px;
    padding: 0 22px;
    .txt0 {
      padding: 55px 0 50px;
      font-size: 30px;
    }
    .txt1 {
      padding: 0 0 45px 0;
    }
  }
  .title {
    padding: 48px 0 35px;
    .img-box {
      img {
        width: 110px;
        height: 110px;
        border-radius: 55px;
      }
    }
    .cont-box {
      width: 450px;
      .tit {
        font-size: 32px;
      }
      .con {
        color: #9e9e9e;
        margin-top: 28px;
        font-size: 22px;
        .bor {
          margin: 0 19px;
          border-left: 2px solid #9e9e9e;
        }
      }
    }
    .share-box {
      width: 140px;
      height: 60px;
      line-height: 60px;
      border-radius: 30px;
      color: #fff;
      font-size: 22px;
      background-image: linear-gradient(to right, #f3cb53, #efa84c);
      .iconfont {
        margin-right: 4px;
      }
    }
  }
  .content {
    border-top: 2px solid #f0f0f0;
    .cm-con {
      width: 25%;
      padding: 50px 0 55px;
      .num {
        margin-bottom: 24px;
        font-size: 28px;
      }
    }
  }
  .admin {
    padding-top: 23px;
    padding-bottom: 23px;
    .user-img {
      margin-right: 20px;
      img {
        width: 80px;
        height: 80px;
        border-radius: 40px;
      }
    }
    .user-time {
      margin-top: 15px;
      color: #c0c0c0;
      font-size: 22px;
    }
  }
}

.com-list {
  margin-top: $pardon;
  .txt0 {
    padding: $pardon 22px;
    background-color: #fff;
    border-bottom: 1px dashed #dedede;
  }
  .com-li {
    display: block;
    color: inherit;
    margin-bottom: $pardon;
    background-color: #fff;
    padding: 60px 22px 0;
    border-radius: $pardon/2;
    box-shadow: 0 10px 10px #ededed;
    .user {
      padding-bottom: 23px;
    }
    .tit {
      font-size: 28px;
      padding: 23px 0 15px;
    }
    .con {
      color: #5f5f5f;
      font-size: 26px;
      padding: $pardon/2 0 $pardon * 2;
      line-height: 36px;
    }
  }
  .box0 {
    margin-right: 20px;
    img {
      width: 78px;
      height: 78px;
      border-radius: 39px;
    }
    .sex {
      width: 25px;
      height: 25px;
      color: #fff;
      background-color: #91c4ef;
      left: 50px;
      top: 60px;
      font-size: 14px;
      line-height: 25px;
      border-radius: 25px;
    }
  }
  .box1 {
    padding-top: 6px;
    .b1-list {
      div {
        margin-right: 10px;
      }
    }
    .name {
      font-size: 28px;
    }
    .master,
    .top {
      border-radius: 4px;
      background-color: #f4d054;
      font-size: 23px;
      padding: 3px 17px;
    }
    .level {
      color: #fff;
      background-color: #333333;
      font-size: 14px;
      padding: 9px 22px;
      border-radius: 0 16px 16px 16px;
    }
    .time {
      color: #838383;
      margin-top: 22px;
      font-size: 20px;
    }
  }
}
.bottom-btn {
  left: 0;
  bottom: 0;
  z-index: 10;
  background-color: #fff;
  padding: 18px 40px;
  box-shadow: 0 -10px 10px #e2e2e2;
  .money {
    color: #e7572a;
    font-size: 32px;
  }
  .now-in {
    border: 1px solid #f3c93b;
    background-color: #f4d054;
    width: 300px;
    height: 64px;
    line-height: 64px;
    border-radius: 32px;
  }
}
.mtp {
  margin-top: $pardon;
}
.guide {
  margin-top: -70px;
  padding-bottom: 140px;
  text-align: center;
  color: #888;
  font-size: 24px;
}
.phbox {
  margin: 8px;
  width: 200px;
  height: 200px;
  border-radius: 6px;
  overflow: hidden;
  img {
    width: 100%;
  }
}
</style>