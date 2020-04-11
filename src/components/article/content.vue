<template>
  <section class="bac">
    <!-- 内容区 -->
    <div class="con-box">
      <!-- 头部 -->
      <div class="d-flex">
        <!-- 头像 -->
        <div class="user-ico">
          <img src="../../assets/menu.jpg" alt />
        </div>
        <div>
          <!-- 昵称 -->
          <div class="nick">Cytus</div>
          <!-- 时间 -->
          <div class="time">2020年4月11日</div>
        </div>
      </div>
      <!-- 标题区 -->
      <div class="con-tit">Seeeeeeeeb</div>
      <!-- 内容区 -->
      <div
        class="con-con"
      >完美的米波阵容打幽鬼，能打成这样完美的米波阵容打幽鬼，能打成这样完美的米波阵容打幽鬼，能打成这样完美的米波阵容打幽鬼，能打成这样完美的米波阵容打幽鬼，能打成这样完美的米波阵容打幽鬼，能打成这样</div>
      <!-- 图片区 -->
      <div class="con-img d-flex flex-wrap justify-content-around">
        <div class="img-box" v-for="i in 6" v-bind:key="i">
          <img src="../../assets/menu.jpg" alt />
        </div>
      </div>
    </div>
    <!-- 评论区 -->
    <div class="chat-box"></div>
    <!-- 输入框 -->
    <div class="say-box"></div>
  </section>
</template>
<script>
// 帖子页面
export default {
  data() {
    return {};
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.con-box {
  padding: 45px;
  background-color: #fff;
  .user-ico {
    margin-right: 20px;
    img {
      width: 80px;
      height: 80px;
      border-radius: 40px;
    }
  }
  .nick {
    font-weight: bold;
    margin-top: 5px;
  }
  .time {
    color: #9d9d9d;
    margin-top: 20px;
    font-size: 20px;
  }
  .con-tit {
    margin-top: 37px;
    font-weight: bold;
  }
  .con-con {
    color: #5f5f5f;
    font-size: 24px;
    margin-top: 10px;
    line-height: 1.4;
  }
  .con-img {
    margin-top: 22px;
    .img-box {
      margin: 8px;
      width: 200px;
      height: 200px;
      overflow: hidden;
      border-radius: 6px;
    }
  }
}
.chat-box {
}
.say-box {
}
</style>