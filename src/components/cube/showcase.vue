<!-- 
datas:{
    name:"",
    list:{
        id:"",
        thumbnail:"",//配图
        post_title:"",//标题
        price:"",//原价
        money:"",//现价
    },
    type:0
}
 -->
<template>
  <article>
    <!-- 竖排章节 -->
    <div v-if="datas.type!=1" class="course-box">
      <!-- 标题部分 -->
      <div
        v-if="datas.name.length>0"
        class="course-title d-flex align-items-center justify-content-between"
      >
        <div class="title">{{datas.name}}</div>
        <div class="remore">查看更多</div>
      </div>
      <!-- 课程部分 -->
      <router-link
        :to="{name:'wares',params:{waresid:dl.id}}"
        v-for="(dl,inx) in datas.list"
        v-bind:key="inx"
        class="course-body d-block"
      >
        <div class="course-body2 d-flex">
          <!-- 左边 -->
          <div class="cour-left overflow-hidden position-relative text-center">
            <div class="cl-img overflow-hidden">
              <img v-lazy="dl.thumbnail" alt />
            </div>
            <div class="w-100 position-absolute cl-men">
              <span class="iconfont icon-remen"></span>
              <span>{{dl.post_hits}}人</span>
            </div>
          </div>
          <!-- 右边 -->
          <div class="cour-right">
            <div class="cr-text line-clamp2">{{dl.post_title}}</div>
            <div class="cr-money d-flex justify-content-between">
              <div class="renew">已更新109期</div>
              <div v-if="dl.free" class="cr-free">免费</div>
              <div v-else>
                <span v-if="dl.zk_endtime>0" class="money0">￥{{dl.price}}</span>
                <span class="money1">
                  <span>￥&nbsp;</span>
                  <span class="money2">{{dl.money[0]}}</span>
                  <span>.{{dl.money[1]}}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
    <!-- 横排章节 -->
    <div v-if="datas.type==1" class="course-box2">
      <!-- 标题部分 -->
      <div
        v-if="datas.name.length>0"
        class="course-title d-flex align-items-center justify-content-between"
      >
        <div class="title">{{datas.name}}</div>
        <div class="remore">查看更多</div>
      </div>
      <!-- 课程部分 -->
      <div class="d-flex flex-wrap justify-content-between">
        <!-- begin -->
        <router-link
          :to="{name:'wares',params:{waresid:dl.id}}"
          v-for="(dl,inx) in datas.list"
          v-bind:key="inx"
          class="course-body2 d-block"
        >
          <div class="position-relative">
            <div class="cr-img">
              <img v-lazy="dl.thumbnail" alt />
            </div>
            <div class="position-absolute play-num">
              <span class="iconfont icon-play-circle"></span>
              <span>{{dl.post_hits}}次</span>
            </div>
          </div>
          <div class="cr-text line-clamp2">{{dl.post_title}}</div>
          <div class="money-box">
            <span v-if="dl.free" class="cr-free">免费</span>
            <div v-else>
              <span class="money1">
                <span>￥&nbsp;</span>
                <span class="money2">{{dl.money[0]}}</span>
                <span>.{{dl.money[1]}}</span>
              </span>
              <span v-if="dl.zk_endtime>0" class="money0">￥{{dl.price}}</span>
            </div>
          </div>
        </router-link>
        <!-- end -->
      </div>
    </div>
    <div v-if="datas.list.length==0" class="no-content text-center">
      <div class="txt0 iconfont icon--lumingpai"></div>
      <div class="txt1">找不到更多数据</div>
    </div>
  </article>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    ChangeDate() {
      let data = this.datas.list,
        i;
      for (i = 0; i < data.length; i++) {
        data[i].price = parseFloat(data[i].price);
        data[i].money = parseFloat(data[i].money);
        data[i].free = false;
        if (data[i].money == 0 || isNaN(data[i].money)) {
          data[i].free = true;
          data[i].money = "免费";
        } else {
          data[i].onzk = data[i].price > data[i].price;
          data[i].price = data[i].price.toFixed(2);
          data[i].money = data[i].money.toFixed(2).split(".");
        }
      }
    }
  },
  props: ["datas"],
  watch: {
    "datas.list": {
      immediate: true,
      handler: function(newV, oldV) {
        this.ChangeDate();
      }
    }
  }
};
</script>
<style lang="scss" scoped>
article {
  padding: $pardon/2 $pardon;
  background-color: #f7f7f7;
}
.cr-free {
  color: $money;
  font-weight: 700;
}

.money0 {
  color: #919191;
  font-size: 15px;
  text-decoration: line-through;
  padding: 0 $pardon/3;
}
.money1 {
  color: $money;
  font-size: 16px;
  font-weight: bold;
  .money2 {
    font-size: 20px;
  }
}
.course-box {
  padding: $pardon/2;
  background-color: #fff;
  border-radius: 10px;
  .course-title {
    padding: $pardon/2;
    border-bottom: 2px solid #f6f6f6;
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
    text-decoration: none;
    background-color: #f8f8f8;
  }
  .course-body:last-child .course-body2 {
    border-bottom: none;
  }
  .course-body {
    padding: 0 $pardon/2;
    .cour-left {
      width: 212px;
      height: 162px;
      border-radius: 5px;
      .cl-img {
        height: 127.2px;
        img {
          width: 100%;
        }
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
        color: #343434;
        height: 78px;
      }
      .cr-money {
        margin-top: 50px;
        .renew {
          font-size: 22px;
          color: #999999;
        }
      }
    }
  }
  .course-body2 {
    padding: $pardon/2 0;
    border-bottom: 2px solid #f6f6f6;
  }
  .cr-text {
    color: #343434;
    font-size: 28px;
    line-height: 1.43;
  }
}

.course-box2 {
  .course-title {
    padding: $pardon/2 0;
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
    width: 334px;
    border-radius: 10px;
    background-color: #fff;
    overflow: hidden;
    margin: $pardon/2 0;
    .cr-img {
      height: 172px;
      overflow: hidden;
      img {
        width: 100%;
      }
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
      color: #343434;
      padding: 17px 18px 0 18px;
      height: 93px;
    }

    .money-box {
      padding: 21px;
    }
  }
  .cr-text {
    color: #343434;
    font-size: 28px;
    line-height: 1.43;
  }
}
.no-content {
//   filter: opacity(0);
  padding: $pardon/2;
  background-color: #fff;
  border-radius: 10px;
  height: calc(100vh - 300px);
  color: #9f9f9f;
  .txt0{
      font-size: 300px;
  }
  .txt1{
      margin-top: 40px;
      font-size: 40px;
  }
}
</style>