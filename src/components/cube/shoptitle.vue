<template>
  <aside class="d-flex title-box align-items-center justify-content-between">
      <div class="img overflow-hidden">
          <img src="../../assets/menu.jpg" alt="">
      </div>
      <div class="name">
          <div class="txt0 font-weight-bold">松果学院</div>
          <div class="txt1">3042人关注 27.9万人气</div>
      </div>
      <div class="fllow text-center">+关注</div>
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
.title-box{
    height: 114px;
    padding: 0 $pardon;
    border-bottom: 1px solid #ededed;
    box-shadow: 0 8px 8px #ededed;
}
.img{
    width: 72px;
    border: 1px solid #f8f8f8;
    border-radius: 36px;
    height: 72px;
}
.name{
    margin-left: 18px;
    width: 498px;
    .txt0{
        font-size: 28px;
    }
    .txt1{
        color: #919191;
        font-size: 20px;
        margin-top: 20px;
    }
}
.fllow{
    color: #fff;
    font-size: 22px;
    background-color: $theme;
    border: 1px solid $theme-bor;
    width: 108px;
    height: 58px;
    line-height: 58px;
    border-radius: 29px;
}
</style>