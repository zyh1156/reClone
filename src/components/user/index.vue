<template>
  <section>
    <!-- 基础资料 -->
    <div>
      <!-- 头像 -->
      <div></div>
      <!-- 昵称 -->
      <div>
        <div>
          <div>Cytus</div>
          <div>学习卡</div>
        </div>
        <div>一句话形容美丽的自己</div>
      </div>
      <!-- 签到 -->
      <div>
        <div></div>
        <div>签到中心</div>
      </div>
    </div>
    <!-- 基础功能 -->
    <div class="d-flex text-center basic">
      <!-- 关注 -->
      <div>
        <div>
          <span class="iconfont icon-aixin"></span>
        </div>
        <div>关注</div>
      </div>
      <!-- 收藏 -->
      <div>
        <div>
          <span class="iconfont icon-shoucang"></span>
        </div>
        <div>收藏</div>
      </div>
      <!-- 优惠券 -->
      <div>
        <div>
          <span class="iconfont icon-dianyingpiao"></span>
        </div>
        <div>优惠券</div>
      </div>
      <!-- 订单记录 -->
      <div>
        <div>
          <span class="iconfont icon-dingdan"></span>
        </div>
        <div>订单记录</div>
      </div>
    </div>
    <!-- 一件开课 -->
    <div>
      <div class="text-center onetap">
          <span>一键开课</span>
          <span class="iconfont icon-icon_circle_line"></span>
      </div>
    </div>
    <!-- 功能点1 -->
    <div>
      <div>钱包</div>
      <div>分销记录</div>
      <div>我的笔记本</div>
      <div>我的勋章</div>
      <div>消息</div>
    </div>
    <!-- 功能点2 -->
    <div>
      <div>联系客服</div>
      <div>帮助与反馈</div>
    </div>
    <fter></fter>
  </section>
</template>
<script>
import fter from "../cube/footer";
export default {
  data() {
    return {};
  },
  components: {
    fter
  }
};
</script>
<style lang="scss" scoped>
.basic {
  margin: 0 28px;
  .iconfont {
    color: #ff582f;
    font-size: 56px;
  }
}
.onetap{
    height: 100px;
    padding: 30px 0;
    border-radius: 50px;
    margin: 0 28px;
    font-size: 40px;
    font-weight: bold;
    color: #fff;
    background-color: #ff5a31;
    .iconfont{
        margin-left: 8px;
        font-size: 40px;
    }
}
</style>