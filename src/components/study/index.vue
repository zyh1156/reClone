<template>
  <section>
    <!-- 资料 -->
    <div class="user-data">
      <div class="user-top d-flex align-items-center">
        <div class="user-img">
          <img src="../../assets/menu.jpg" alt />
        </div>
        <div class="user-abo">
          <div class="niko font-weight-bold">Cytus</div>
          <div class="level d-flex align-items-center">
            <span class="txt0 d-inline-block iconfont icon-icon_attestation"></span>
            <span class="txt1 d-inline-block position-relative">LV.2</span>
          </div>
        </div>
        <div>
          <span></span>
          <span>学习日历</span>
        </div>
      </div>
      <!-- 标语 -->
      <div class="slogan font-weight-bold">今天的努力，都是为了明天的成长。</div>
      <!-- 菜单栏 -->
      <div></div>
    </div>
    <!-- 进度 -->
    <div></div>
    <footer2></footer2>
  </section>
</template>
<script>
import footer2 from "../cube/footer";
export default {
  data() {
    return {};
  },
  components: {
    footer2
  }
};
</script>
<style lang="scss" scoped>
.user-data {
  padding: 27px;
  background-color: #6f737f;
}
.user-img {
  img {
    width: 80px;
    height: 80px;
    border-radius: 40px;
  }
}
.user-top {
  color: #fff;
}
.user-abo {
  margin-left: 18px;
  .niko {
    font-size: 28px;
  }
  .level {
    margin-top: 10px;
    .txt0 {
      width: 30px;
      height: 30px;
      background-color: #d8b488;
      text-align: center;
      line-height: 30px;
      border-radius: 15px;
      font-size: 20px;
      z-index: 10;
    }
    .txt1 {
      border-radius: 0 3px 3px 0;
      background-color: #e5cca9;
      padding: 4px 8px 4px 20px;
      font-size: 16px;
      height: 24px;
      overflow: hidden;
      left: -15px;
    }
  }
}
  .slogan {
    margin-top: 27px;
    font-size: 28px;
    padding: 50px 55px;
    background-color: #fefefe;
    border-radius: 10px;
  }
</style>