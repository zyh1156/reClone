<template>
  <aside class="en-list">
    <router-link
      :to="{name:'enroll',params:{enrollid:123}}"
      v-for="i in 10"
      v-bind:key="i"
      class="en-li d-flex"
    >
      <div class="en-img overflow-hidden">
        <img src="../../assets/menu.jpg" alt />
      </div>
      <div
        class="en-con align-items-center align-content-around d-flex align-items-center flex-wrap"
      >
        <div class="txt0 font-weight-bold w-100">语文学习技巧公开课</div>
        <div class="txt1 w-100">免费技工技术文档</div>
        <div class="txt2 d-flex w-100 justify-content-between">
          <div>
            <div class="d-flex align-items-center">
              <div class="money">
                <span class="t1">￥</span>
                <span class="t2">0.01</span>
              </div>
              <div class="old-money">0.01</div>
            </div>
            <div class="address">
              <span class="iconfont icon-dingwei"></span>
              <span>距离1087.7km</span>
            </div>
          </div>
          <a href="/#/enroll/123" class="btn0 text-center">立即报名</a>
        </div>
      </div>
    </router-link>
  </aside>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.en-list {
  padding: $pardon/2 $pardon;
  .en-li:last-child {
    border-bottom: none;
  }
  .en-li:hover {
    text-decoration: none;
    background-color: #f8f8f8;
  }
  .en-li {
    padding: $pardon/2;
    border-bottom: 1px solid #e2e2e2;
    background-color: #fff;
    .en-img {
      width: 218px;
      height: 166.6px;
      border-radius: 7px;
      margin-right: 17px;
    }
    .en-con {
      width: 430px;
    }
    .txt0 {
      color: #2d2d2d;
      font-size: 28px;
    }
    .txt1 {
      color: #373737;
      font-size: 21px;
    }
    .txt2 {
      .money {
        color: $money;
        margin-right: 13px;
        .t1 {
          font-size: 16px;
        }
        .t2 {
          font-size: 21px;
        }
      }
      .old-money {
          color: #989898;
        font-size: 16px;
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
      font-size: 19px;
      width: 116px;
      height: 48px;
      line-height: 48px;
      border-radius: 32px;
      border: 1px solid $theme-bor;
      background-image: linear-gradient(to right, $theme, $theme-bor);
    }
  }
}
</style>