<template>
  <section class="search-box">
    <!-- 搜索框 -->
    <div class="d-flex align-items-center justify-content-between">
      <label class="search-body">
        <input type="text" placeholder="搜索课程/专栏/直播间" />
      </label>
      <div class="search-btn text-center">搜索</div>
    </div>
    <!-- 标题 -->
    <div class="search-tit font-weight-bold">热门搜索</div>
    <!-- 热搜 -->
    <div>
      <div
        class="d-flex popular justify-content-between"
        v-for="(p,inx) in popular"
        v-bind:key="inx"
      >
        <div>
          <span class="aa font-weight-bold">{{inx+1}}</span>
          <span class="bb">{{p.text}}</span>
        </div>
        <div class="cc">
            <span class="iconfont icon-remen"></span>
            <span>{{p.num}}</span>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      popular: [
        {
          text: "2021年世俱杯延期",
          num: "12w"
        },
        {
          text: " 韩国罕见新冠病例",
          num: "10w"
        },
        {
          text: " 马图伊迪感染新冠",
          num: "9w"
        },
        {
          text: "  意大利新增4207",
          num: "4w"
        },
        {
          text: " 澳航取消国际航班",
          num: "3w"
        },
        {
          text: "  美国新增近4000",
          num: "2.1w"
        },
        {
          text: " 内蒙确诊病例清零",
          num: "1.8w"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
section{
    background-color: #fff;
}
.search-box {
  padding: 18px 27px;
}
// 搜索框
.search-body {
  background: #f8f8f8 url(../../assets/search-ico.png) no-repeat 18px center;
  background-size: 28px;
  padding: 0 62px;
  height: 60px;
  width: 560px;
  border-radius: 30px;
  margin: 0;
  input {
    height: 100%;
    width: 100%;
    background-color: transparent;
    outline: none;
    border: none;
  }
}
.search-btn {
  width: 115px;
  height: 58px;
  line-height: 58px;
  color: #fff;
  background-color: #ec6541;
  border: 1px solid #e94e24;
  border-radius: 29px;
}
.search-tit {
  font-size: 32px;
  padding-top: 46px;
}
.popular {
  margin-top: 55px;
  span{
      display: inline-block;
  }
  .aa{
      padding: 10px 27px;
      color: #595959;
  }
  .bb{

  }
  .cc{
      color: #919191;
      .iconfont{
          color: #ee8263;
          padding-right: 10px;
      }
  }
}
</style>