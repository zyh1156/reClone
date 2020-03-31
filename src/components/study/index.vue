<template>
  <section>
    <!-- 资料 -->
    <div class="user-data">
      <div class="user-top position-relative d-flex align-items-center">
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
        <a class="position-absolute sign d-flex align-items-center" href="/user/signin">
          <span class="iconfont icon-icon_calendar"></span>
          <span>学习日历</span>
          <span class="position-absolute lfl">领福利</span>
        </a>
      </div>
      <!-- 标语 -->
      <div class="slogan font-weight-bold">今天的努力，都是为了明天的成长。</div>
    </div>
    <!-- 菜单栏 -->
    <div class="menu-top">
      <div>最近学习</div>
    </div>
    <!-- 进度 -->
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
.sign {
  right: 3px;
  color: #fff;
  background-color: #363943;
  padding: 0 23px;
  border-radius: 36px;
  height: 72px;
  .iconfont {
    font-size: 36px;
    margin-right: 16px;
  }
  .lfl {
    white-space: nowrap;
    font-size: 18px;
    padding: 7px 9px;
    background-color: #ec6541;
    top: -16px;
    right: -24px;
    border-radius: 16px 16px 16px 0;
  }
}
.slogan {
  margin-top: 27px;
  font-size: 28px;
  padding: 50px 55px;
  background-color: #fefefe;
  border-radius: 10px;
}
.menu-top {
  color: #333333;
  padding: 16px 30px;
  background-color: #fefefe;
}
.top-body {
  background-color: #f8f8f8;
  padding: 30px;
  .top-cont{
      padding: 30px;
  }
}
</style>