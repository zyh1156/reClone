<template>
  <!-- 活动列表 -->
  <aside class="en-list">
    <router-link
      :to="{name:'act',params:{actid:e.id}}"
      v-for="(e,inx) in enlist"
      v-bind:key="inx"
      class="en-li d-flex"
    >
      <div class="en-left overflow-hidden">
        <div class="en-img overflow-hidden">
          <img :src="e.thumbnail" alt />
        </div>
        <div class="en-time">{{e.endtime}}</div>
      </div>
      <div
        class="en-con position-relative align-items-center align-content-around d-flex align-items-center flex-wrap"
      >
        <div class="txt0 line-clamp2 font-weight-bold w-100">{{e.post_title}}</div>
        <div class="txt1 w-100">{{e.name}}</div>
        <div class="txt2 d-flex w-100 justify-content-between">
          <div>
            <div class="d-flex align-items-center">
              <div class="money">
                <span class="t1">￥</span>
                <span class="t2">{{e.price}}</span>
              </div>
              <!-- <div class="old-money">0.01</div> -->
            </div>
            <!-- <div class="address">
              <span class="iconfont icon-dingwei"></span>
              <span>距离1087.7km</span>
            </div>-->
          </div>
        </div>
        <div v-if="e.outime" class="outime btn0 text-center position-absolute">已结束</div>
        <router-link
          v-else
          class="btn0 text-center position-absolute"
          :to="{name:'act',params:{actid:e.id}}"
        >立即报名</router-link>
      </div>
    </router-link>
    <div v-if="nodata&&enlist.length==0" class="nodata text-center">
      <div class="txt0 iconfont icon-wushuju"></div>
      <div class="txt1">找不到更多数据</div>
    </div>
  </aside>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["enlist", "nodata"]
};
</script>
<style lang="scss" scoped>
.en-list {
  padding: $pardon/2 $pardon;
  .en-li:last-child {
    border-bottom: none;
  }
  .en-li:hover {
    background-color: #f8f8f8;
  }
  .en-li {
    padding: $pardon/2;
    border-bottom: 1px solid #e2e2e2;
    background-color: #fff;
    .en-left {
      border-radius: 7px;
      width: 218px;
      margin-right: 17px;
      .en-img {
        height: 130.6px;
      }
      .en-time {
        color: #838383;
        background-color: #f4f4f4;
        border-top: 1px solid #f6f6f6;
        height: 5.333vw;
        bottom: 0;
        font-size: 24px;
        text-align: center;
        line-height: 5.333vw;
      }
    }
    .en-con {
      width: 430px;
    }
    .txt0 {
      color: #2d2d2d;
      font-size: 28px;
      line-height: 1.4;
      height: 76px;
    }
    .txt1 {
      color: #373737;
      font-size: 24px;
    }
    .txt2 {
      .money {
        color: $money;
        margin-right: 13px;
        font-weight: 700;
        .t1 {
          font-size: 20.8px;
        }
        .t2 {
          font-size: 26px;
        }
      }
      .old-money {
        color: #919191;
        font-size: 20.8px;
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
      font-size: 20px;
      width: 116px;
      height: 48px;
      bottom: 0;
      right: 0;
      line-height: 48px;
      border-radius: 32px;
      border: 1px solid $theme-bor;
      background-image: linear-gradient(to right, $theme, $theme-bor);
    }
    .outime {
      background: #ccc;
      border-color: #b8b8b8;
    }
  }
}
</style>