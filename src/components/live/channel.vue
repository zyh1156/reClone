<template>
  <section>
    <!-- 视频框 -->
    <div class="lc-video position-relative overflow-hidden">
      <img src="../../assets/swiper/00.png" alt />
    </div>
    <!-- 聊天框 -->
    <div class="lc-chat overflow-auto">
      <div v-for="i in 10" v-bind:key="i" class="d-flex chat-box">
        <!-- 头像 -->
        <div class="img">
          <img src="../../assets/menu.jpg" alt />
        </div>
        <div class="con">
          <!-- 昵称 -->
          <div class="niko d-flex align-items-center">
            <span class="pz">管理员</span>
            <span>有利达拉斯</span>
          </div>
          <!-- 消息内容 -->
          <div class="msg">习近平应询详细介绍了中方为打好疫情防控阻击战采取的举措习近平应询详细介绍了中方为打好疫情防控阻击战采取的举措</div>
        </div>
      </div>
    </div>
    <!-- 输入框 -->
    <div class="lc-input position-fixed w-100">
      <input type="text" placeholder="来说点什么吧..." />
    </div>
    <tool></tool>
  </section>
</template>
<script>
import tool from "../cube/tool";
export default {
  data() {
    return {};
  },
  components: {
    tool
  }
};
</script>
<style lang="scss" scoped>
.lc-video {
  height: 320px;
  border-bottom: 2px solid #dbdde1;
  box-shadow: 0 6px 6px #dedede;
}
.lc-chat {
  height: calc(100vh - 320px);
  background-color: #f5f6f6;
  padding: 18px 18px 118px;
  .chat-box {
    padding: 9px 0;
    .img {
      padding-right: 18px;
      img {
        width: 62px;
        height: 62px;
        border-radius: 31px;
      }
    }
    .con {
      width: 650px;
      .niko {
        margin-top: 10px;
        color: #969696;
        height: 38px;
        .pz {
          border-radius: 4px;
          color: #fff;
          padding: 6px 10px;
          background-color: #50b1e1;
          margin-right: 8px;
        }
      }
      .msg {
        margin-top: 6px;
        line-height: 36px;
        background-color: #fff;
        padding: 10px;
        border-radius: 6px;
      }
    }
  }
}
.lc-input {
  bottom: 0;
  left: 0;
  padding: $pardon/2;
  background-color: #fff;
  box-shadow: 0 -6px 6px #dedede;
  input {
    width: 100%;
    border: 2px solid #e2e2e2;
    border-radius: 6px;
    font-size: 26px;
    line-height: 2.3;
    padding: 0 10px;
  }
}
</style>