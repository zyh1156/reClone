<template>
  <!-- 直播列表 -->
  <aside class="live-list">
    <router-link
      :to="{name:'zone',params:{zoneid:c.id}}"
      class="live-li d-flex"
      v-bind:key="inx"
      v-for="(c,inx) in clist"
    >
      <div class="li-img overflow-hidden position-relative">
        <div
          class="position-absolute status"
          :class="{'status0':c.ts_static==0,'status1':c.ts_static==1,'status2':c.ts_static==3}"
        >
        <span v-if="c.ts_static==0">未开始</span>
        <span v-if="c.ts_static==1">直播中</span>
        <span v-if="c.ts_static==3">回放</span>
        </div>
        <div class="position-absolute user">{{c.truename}}</div>
        <img v-lazy="c.thumbnail" alt />
      </div>
      <div class="li-con d-flex flex-wrap align-content-around">
        <div class="txt0 w-100 font-weight-bold line-clamp2">{{c.post_title}}</div>
        <div class="txt1 w-100">{{c.starttime}}</div>
        <div class="txt2 w-100">{{c.post_hits}}人观看</div>
      </div>
    </router-link>
    <div v-if="nodata&&clist.length==0" class="nodata text-center">
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
  props: ["clist","nodata"]
};
</script>
<style lang="scss" scoped>
.live-list {
  padding: $pardon/2 $pardon;
  .live-li:last-child {
    border-bottom: none;
  }
  .live-li:hover {
    cursor: pointer;
    background-color: #f8f8f8;
  }
  .live-li {
    background-color: #fff;
    padding: $pardon/2;
    border-bottom: 1px solid #f3f3f3;
    .li-img {
      width: 280px;
      height: 167px;
      border-radius: 4px;
      margin-right: $pardon/2;
      .status {
        color: #fff;
        left: 11px;
        top: 11px;
        font-size: 20px;
        padding: 6px 8px;
        border-radius: 4px;
      }
      .status0 {
        background-image: linear-gradient(to right bottom, #3ed6b6, #05d380);
      }
      .status1 {
        background-image: linear-gradient(to right bottom, #76b3f9, #408ae7);
      }
      .status2 {
        background-image: linear-gradient(to right bottom, #ffca45, #f1a139);
      }
      .user {
        font-size: 20px;
        color: #fff;
        width: 100%;
        padding: 11px;
        left: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.4);
      }
      img{
          width: 100%;
      }
    }
    .li-con {
      width: 400px;
      .txt0 {
        color: #212529;
        line-height: 1.4;
        height: 76px;
      }
      .txt1 {
        font-size: 24px;
        color: #808080;
        height: 20px;
      }
      .txt2 {
        font-size: 24px;
        color: #aeaeae;
        height: 20px;
      }
    }
  }
}
</style>