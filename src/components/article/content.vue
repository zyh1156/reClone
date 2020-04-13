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
    <div class="chat-box">
      <div class="ctit">评论</div>
      <div class="cul">
        <div class="cli" v-for="i in 10" v-bind:key="i">
          <!-- 用户信息 -->
          <div class="d-flex">
            <div class="user-ico">
              <img src="../../assets/menu.jpg" alt />
            </div>
            <div>
              <div class="user-name">Cytus</div>
              <div class="user-time">2020年4月13日13:13:46</div>
            </div>
          </div>
          <!-- 用户内容 -->
          <div class="user-cont">
            <div>三国演义三国演义三国演义三国演义三国演义三国演义三国演义</div>
            <div class="user-reply">
              <span class="uname">Cytus</span>
              <span>：时尚大师大大</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 输入框 -->
    <div class="say-box">
      <div class="sbox position-fixed w-100">
        <input type="text" placeholder="说点什么..." maxlength="60" class="w-100" />
      </div>
    </div>
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
  margin-top: 40px;
  padding: $pardon $pardon 180px;
  background-color: #fff;
  .ctit {
    padding: 25px 0 35px;
  }
  .cul {
    .cli {
      border-top: 2px solid #e3e3e3;
      padding-top: $pardon;
    }
  }
  .user-ico {
    margin-right: $pardon/2;
    img {
      width: 78px;
      height: 78px;
      border-radius: 39px;
    }
  }
  .user-name {
    margin-top: 12px;
    font-size: 30px;
    font-weight: bold;
  }
  .user-time {
    color: #a9a9a9;
    margin-top: 22px;
    font-size: 20px;
  }
  .user-cont {
    line-height: 1.4;
    padding: 25px 25px 25px 90px;
  }
  .user-reply{
    margin-top: 12px;
    font-size: 24px;
    .uname{
      color: #3b7def;
    }
  }
}
.say-box {
  height: 180px;
  .sbox {
    left: 0;
    bottom: 0;
    border-top: 2px solid #e3e3e3;
    padding: $pardon;
    background-color: #fff;
    box-shadow: 0 -10px 10px #f8f8f8;
    input {
      font-size: 26px;
      padding: 22px;
      line-height: 38px;
      border: 2px solid #e3e3e3;
      border-radius: 43px;
      outline: none;
      background-color: #f8f8f8;
    }
  }
}
</style>