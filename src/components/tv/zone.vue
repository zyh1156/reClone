<template>
  <section  class="bac">
    <!-- banner图 -->
    <div class="banner overflow-hidden">
      <img src="../../assets/swiper/00.png" alt />
    </div>
    <!-- 标题 -->
    <div class="title">
      <div class="txt0 line-clamp2">寒假直播课寒假直播课寒假直播课寒假直播课寒假直播课寒假直播课寒假直播课寒假直播课寒假直播课</div>
      <div class="txt1">
        <span class="t0 font-weight-bold">2020年3月27日 15点03分</span>
        <span class="t1">11.76&nbsp;万人观看</span>
      </div>
    </div>
    <!-- 直播内容 -->
    <div class="live-con">
      <div class="tit font-weight-bold">直播介绍</div>
      <div class="con">
        <div>
          <img src="../../assets/swiper/01.png" alt />
        </div>
        <div>
          <img src="../../assets/swiper/02.png" alt />
        </div>
        <div>
          <img src="../../assets/swiper/03.png" alt />
        </div>
        <div>
          <img src="../../assets/swiper/04.png" alt />
        </div>
        <div>
          <img src="../../assets/swiper/05.png" alt />
        </div>
        <div>
          <img src="../../assets/swiper/06.png" alt />
        </div>
      </div>
    </div>
    <!-- 主播相关 -->
    <div class="about">
      <!-- 商店指路 -->
      <div class="d-flex toshop">
        <div class="ab-img overflow-hidden">
          <img src="../../assets/menu.jpg" alt />
        </div>
        <div class="ab-con">
          <div class="tit font-weight-bold line-clamp2">
            <span class="sip">#所属频道</span>
            <span>临川二中临川二中临川二中临川二中</span>
            <span>临川二中临川二中临川二中临川二中</span>
            <span>临川二中临川二中临川二中临川二中</span>
          </div>
          <div class="renew">已更新13期</div>
        </div>
      </div>
      <!-- 主播名字 -->
      <div class="d-flex meto align-items-center">
        <div class="me-img overflow-hidden">
          <img src="../../assets/menu.jpg" alt />
        </div>
        <div>
          <span>临川网校</span>
          <span>&nbsp;的直播间</span>
        </div>
      </div>
    </div>
    <!-- 进入直播间 -->
    <div>
      <div class="btns"></div>
      <router-link :to="{name:'channel'}" class="btnt w-100 position-fixed">
        <div class="tolive text-center">进入直播</div>
      </router-link>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.banner {
  height: 420px;
}
.title {
  padding: $pardon;
  background-color: #fefefe;
  .txt0 {
    font-size: 34px;
    line-height: 60px;
    height: 120px;
  }
  .txt1 {
    padding: $pardon/2 0;
    font-size: 20px;
    .t0 {
      color: $theme;
      padding-right: 14px;
      margin-right: 14px;
      border-right: 1px solid #757575;
    }
    .t1 {
      color: #878787;
    }
  }
}
.live-con {
  margin-top: 20px;
  padding: $pardon;
  background-color: #fefefe;
  .tit {
    padding-top: 8px;
  }
  .con {
    padding: $pardon/2 0;
    img {
      margin: $pardon/2 0;
    }
  }
}
.about {
  margin-top: 20px;
  padding: $pardon 0 $pardon $pardon;
  background-color: #fff;
  .toshop {
    padding-bottom: $pardon;
    border-bottom: 2px solid #f4f4f4;
    background: url(../../assets/right-ico2.png) 680px center no-repeat;
    background-size: auto 27px;
    .ab-img {
      width: 185px;
      height: 141px;
      border-radius: 4px;
      margin-right: $pardon/2;
    }
    .ab-con {
      width: 520px;
      padding-right: 85px;
      .tit {
        line-height: 35px;
        height: 70px;
        margin-top: 5px;
        .sip {
          color: #2575f5;
        }
      }
      .renew {
        margin-top: 20px;
        color: #9d9d9d;
      }
    }
  }
  .meto {
    padding: $pardon 0;
    .me-img {
      width: $pardon * 2;
      height: $pardon * 2;
      border-radius: $pardon;
      margin-right: $pardon/2;
    }
  }
}
.btns {
  height: 90px;
}
.btnt {
  left: 0;
  bottom: 0;
  padding: 7px $pardon;
  background-color: #fff;
  box-shadow: 0 -10px 10px #f2f2f2;
  .tolive {
    color: #fff;
    padding: 25px 0;
    border-radius: 4px;
    background-image: linear-gradient(to right, $theme-bor, $theme, $theme-bor);
  }
}
</style>