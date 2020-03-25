<template>
  <article class="gray-pack">
    <div>
      <!-- 单个章节 -->
      <div v-if="datas.type!=1" class="course-box">
        <!-- 标题部分 -->
        <div class="course-title d-flex align-items-center justify-content-between">
          <div class="title">{{datas.name}}</div>
          <div class="remore">查看更多</div>
        </div>
        <!-- 课程部分 -->
        <div v-for="(dl,inx) in datas.list" v-bind:key="inx" class="course-body d-flex">
          <!-- 左边 -->
          <div class="cour-left overflow-hidden position-relative text-center">
            <div class="cl-img">
              <img v-lazy="dl.thumbnail" alt />
            </div>
            <div class="w-100 position-absolute cl-men">
              <span class="iconfont icon-remen"></span>
              <span>2355人</span>
            </div>
          </div>
          <!-- 右边 -->
          <div class="cour-right">
            <div class="cr-text line-clamp2">{{dl.post_title}}</div>
            <div class="cr-money d-flex justify-content-between">
              <div class="renew">已更新109期</div>
              <div>
                <span v-if="dl.onzk" class="money0">￥&nbsp;{{dl.price}}</span>
                <span class="money1">
                  ￥&nbsp;
                  <span class="money2">{{dl.money[0]}}</span>
                  .{{dl.money[1]}}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 免费章节 -->
      <div v-if="datas.type==1" class="course-box2">
        <!-- 标题部分 -->
        <div class="course-title d-flex align-items-center justify-content-between">
          <div class="title">{{datas.name}}</div>
          <div class="remore">查看更多</div>
        </div>
        <!-- 课程部分 -->
        <div class="d-flex flex-wrap justify-content-between">
          <div v-for="(dl,inx) in datas.list" v-bind:key="inx" class="course-body2">
            <div class="position-relative">
              <div class="cr-img">
                <img v-lazy="dl.thumbnail" alt />
              </div>
              <div class="position-absolute play-num">
                <span class="iconfont icon-play-circle"></span>
                <span>386次</span>
              </div>
            </div>
            <div class="cr-text line-clamp2">{{dl.post_title}}</div>
            <div class="cr-free">免费</div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  data() {
    return {
      dataRe: this.datas
    };
  },
  methods: {
    ChangeDate() {
      let data = this.datas,
        i;
      console.log(data.list.length);
      for (i = 0; i < data.list.length; i++) {
        data.list[i].price = parseFloat(data.list[i].price);
        data.list[i].money = parseFloat(data.list[i].money);
        data.list[i].onzk = data.list[i].price > data.list[i].price;
        data.list[i].price = data.list[i].price.toFixed(2);
        data.list[i].money = data.list[i].money.toFixed(2).split(".");
      }
    }
  },
  props: ["datas"],
  watch: {
    datas: {
      immediate: true,
      handler: function(newV, oldV) {
        this.ChangeDate();
      }
    }
  },
  mounted() {
    console.log(this.datas);
  }
};
</script>
<style lang="scss" scoped>
.course-box:last-child {
  margin-bottom: 0;
}
.course-box {
  padding: 10px 17px;
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 32px;
  .course-title {
    padding: 14.5px 14.5px;
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
  .course-body:hover {
    background-color: #f8f8f8;
  }
  .course-body {
    border-top: 2px solid #f6f6f6;
    padding: 25px 10px 25px;
    .cour-left {
      width: 212px;
      height: 162px;
      border-radius: 5px;
      .cl-img {
        height: 122px;
      }
      .cl-men {
        color: #838383;
        background-color: #f4f4f4;
        border-top: 1px solid #f6f6f6;
        height: 40px;
        bottom: 0;
        line-height: 40px;
        .iconfont {
          margin-right: 8px;
          font-size: 26px;
        }
      }
    }
    .cour-right {
      width: 430px;
      padding: 0 0 0 20px;
      .cr-text {
        height: 78px;
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
  .cr-text {
    font-size: 28px;
    line-height: 1.43;
    font-weight: bold;
  }
}

.course-box2 {
  .course-title {
    padding: 14.5px 10px 0;
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
  .course-body2 {
    width: 335px;
    border-radius: 10px;
    background-color: #fff;
    overflow: hidden;
    margin-top: 27px;
    .cr-img {
      height: 172px;
      overflow: hidden;
    }
    .play-num {
      left: 18px;
      bottom: 8px;
      color: #fff;
      font-size: 22px;
      .iconfont {
        margin-right: 12px;
      }
    }
    .cr-text {
      padding: 17px 18px 0 18px;
      height: 93px;
    }
    .cr-free {
      color: #da2b16;
      font-size: 21px;
      padding: 22px 18px;
    }
  }
  .cr-text {
    font-size: 28px;
    line-height: 1.43;
    font-weight: bold;
  }
}
</style>