<template>
  <section>
    <!-- 标题部分 -->
    <div class="box0 overflow-hidden position-relative">
      <img src="../../assets/swiper/00.png" alt />
      <div class="text-center tip position-absolute">热门</div>
      <div class="bt0 text-center font-weight-bold position-absolute">限时优惠</div>
      <div class="bt1 position-absolute">距离优惠结束还有多久</div>
    </div>
    <!-- 价格部分 -->
    <div class="money-pean">
      <div class="tit">英语进阶版报名</div>
      <div class="tit2">英语进阶版报名</div>
      <div class="money-box justify-content-between align-items-end d-flex">
        <div>
          <span class="txt0">￥</span>
          <span class="txt1 font-weight-bold">0.01</span>
          <span class="txt2">689.00</span>
        </div>
        <div class="text-center">
          <div class="txt3 iconfont icon-shoucang1"></div>
          <div class="txt4">收藏</div>
        </div>
      </div>
    </div>
    <!-- 广告 -->
    <div class="en-ads align-items-center d-flex justify-content-between">
      <div class="pan1 d-flex align-items-center">
        <span class="txt0 iconfont icon-lipinka"></span>
        <span class="txt1">自购省钱，推荐赚钱</span>
      </div>
      <div class="pan2">去加入</div>
    </div>
    <!-- 分享 -->
    <div class="en-share">
      <div class="tit">他们都在逛</div>
      <div class="con d-flex align-items-center justify-content-between">
        <div class="ens-user d-flex">
          <div class="ens-li position-relative">
            <img src="../../assets/menu.jpg" alt />
          </div>
          <div class="ens-li position-relative">
            <img src="../../assets/menu.jpg" alt />
          </div>
          <div class="ens-li position-relative">
            <img src="../../assets/menu.jpg" alt />
          </div>
          <div class="ens-li position-relative">
            <img src="../../assets/menu.jpg" alt />
          </div>
          <div class="ens-li position-relative">
            <img src="../../assets/menu.jpg" alt />
          </div>
          <div class="ens-li position-relative text-center ens-more">...</div>
        </div>
        <div class="ens-btn">分享</div>
      </div>
    </div>
    <!-- 名片 -->
    <div class="en-visi">
      <div class="ev-body">
        <div class="tit d-flex justify-content-between">
          <div class="txt0">名片</div>
          <div class="txt1">更多</div>
        </div>
        <div class="con d-flex align-items-center justify-content-between">
          <div class="d-flex">
            <div class="user">
              <img src="../../assets/menu.jpg" alt />
            </div>
            <div class="data">
              <div class="name">默认机构</div>
              <div class="addr">亚夏大</div>
            </div>
          </div>
          <div class="links text-center d-flex">
            <div class="ico0 iconfont icon-dianhua"></div>
            <div class="ico1 iconfont icon-ditu"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 内容介绍 -->
    <div class="en-panel">
      <div class="title align-items-center d-flex justify-content-center">
        <div class="active">
          <span>内容介绍</span>
        </div>
        <div>
          <span>购买须知</span>
        </div>
      </div>
      <div class="content">
        <div>新冠肺炎疫情近日在西班牙迅速蔓延，24日上午该国统计的死亡人数超过2000人，相比3天前的1002人死亡增加了一倍多。由于死亡人数的不断增加，西班牙首都马德里的一处溜冰场也变为了一个临时停尸房。</div>
        <div>综合CNN、路透社24日报道，马德里自治区主席办公室对媒体表示，西班牙紧急军事部队正把新冠肺炎死者的遗体运往马德里欧达列萨区(Hortaleza)一处名为“冰宫”的溜冰场。当地政府表示，这是一项“临时和非常的措施”，旨在减轻死者家属的痛苦以及马德里医院的负担。</div>
      </div>
      <div class="en-shadow"></div>
    </div>
    <!-- 报名 -->
    <div class="d-flex text-center now-btn position-fixed">
      <!-- 首页 -->
      <a href="/#/" class="inx">
        <div class="iconfont icon-shouye"></div>
        <div>首页</div>
      </a>
      <!-- 我的 -->
      <a href="/#/user" class="me">
        <div class="iconfont icon-icon_boss"></div>
        <div>我的</div>
      </a>
      <!-- 立即报名 -->
      <div class="bm font-weight-bold text-center">立即报名</div>
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
.box0 {
  height: 450px;
  color: #fff;
  .tip {
    width: 38px;
    height: 50px;
    line-height: 32px;
    background-color: #4071cd;
    top: 0;
    left: 14px;
    font-size: 24px;
    z-index: 10;
  }
  .tip::after {
    z-index: -1;
    content: "";
    left: 0;
    bottom: -38px;
    position: absolute;
    border: 19px solid #4071cd;
    border-bottom-color: transparent;
  }
  .bt0 {
    width: 205px;
    height: 86px;
    font-size: 32px;
    line-height: 85px;
    bottom: 0;
    left: 0;
    z-index: 10;
    background-image: linear-gradient(to right, $theme,$theme-bor);
  }
  .bt0::after {
    content: "";
    position: absolute;
    right: -43px;
    top: 0;
    border-top: 43px solid transparent;
    border-right: 21.5px solid transparent;
    border-bottom: 43px solid $theme-bor;
    border-left: 21.5px solid $theme-bor;
  }
  .bt1 {
    text-align: right;
    width: 100%;
    height: 72px;
    right: 0;
    bottom: 0;
    padding-right: 19px;
    line-height: 72px;
    font-size: 20px;
    background-image: linear-gradient(to right, $theme, $theme-bor);
  }
}
.money-pean {
  padding: 35px 27px;
  .tit {
    font-size: 32px;
  }
  .tit2 {
    color: #9b9b9b;
    margin-top: 22px;
  }
  .money-box {
    margin-top: 17px;
    .txt0 {
      color: $money;
      font-size: 16px;
    }
    .txt1 {
      color: $money;
      margin-left: 6px;
      font-size: 32px;
    }
    .txt2 {
      color: #989898;
      margin-left: 12px;
      font-size: 16px;
      text-decoration: line-through;
    }
    .txt3 {
      color: #ddd;
      font-size: 42px;
    }
    .txt4 {
      color: #a0a0a0;
      margin-top: 16px;
    }
  }
}
.en-ads {
  color: #b2863a;
  height: 80px;
  background-color: #f8f6ef;
  .pan1 {
    padding-left: 22px;
    .txt0 {
      font-size: 32px;
      margin-right: 12px;
    }
    .txt1 {
      font-style: oblique;
    }
  }
  .pan2 {
    padding: 27px 57px 27px 30px;
    background: #f2eee5 url(../../assets/right-ico.png) no-repeat 110px center;
    background-size: 24px;
  }
}
.en-share {
  padding: 27px 27px 0;
  .tit {
    font-size: 22px;
  }
  .con {
    padding: 27px 0;
    border-bottom: 1px solid #e0e0e0;
    .ens-user {
      .ens-li {
        width: 62px;
        height: 62px;
        border-radius: 31px;
        border: 2px solid #fff;
        overflow: hidden;
      }
      .ens-more {
        color: #bbb;
        line-height: 42px;
        background-color: #f1f1f1;
      }
      .ens-li:nth-child(1) {
        z-index: 12;
      }
      .ens-li:nth-child(2) {
        z-index: 10;
        left: -17px;
      }
      .ens-li:nth-child(3) {
        z-index: 8;
        left: -34px;
      }
      .ens-li:nth-child(4) {
        z-index: 6;
        left: -51px;
      }
      .ens-li:nth-child(5) {
        z-index: 4;
        left: -68px;
      }
      .ens-li:nth-child(6) {
        z-index: 2;
        left: -85px;
      }
    }
    .ens-btn {
        color: #fff;
      font-size: 20px;
      padding: 18px 36px;
      border-radius: 29px;
      background-color: $theme;
      border: 1px solid $theme-bor;
    }
  }
}
.en-visi {
  padding: 18px 0;
  background-color: #f4f4f4;
  .ev-body {
    padding: 0 27px;
    background-color: #fff;
    .tit {
      padding: 24px 0;
      font-size: 20px;
      border-bottom: 1px solid #e2e2e2;
      .txt1 {
        padding-right: 24px;
        color: #969696;
        background: url(../../assets/right-ico2.png) no-repeat 50px center;
        background-size: 20px 20px;
      }
    }
    .con {
      padding: 27px 0;
      .user {
        width: 80px;
        height: 80px;
        border-radius: 40px;
        overflow: hidden;
        margin-right: 15px;
      }
      .data {
        .name {
          margin-top: 7px;
        }
        .addr {
          margin-top: 18px;
          font-size: 20px;
          color: #a3a3a3;
        }
      }
      .links {
        color: #fff;
        div {
          width: 64px;
          height: 64px;
          border-radius: 32px;
          line-height: 64px;
          font-size: 32px;
        }
        .ico0 {
          background-color: #76bc43;
          margin-right: 17px;
        }
        .ico1 {
          background-color: #5099ea;
        }
      }
    }
  }
}
.en-panel {
  .title {
    padding: 27px 0;
    border-bottom: 1px solid #e2e2e2;
    div {
      color: #a8a8a8;
      margin: 0 37px;
      font-size: 22px;
      position: relative;
    }
    .active {
      font-size: 24px;
      color: #000;
    }
    span {
      position: relative;
      z-index: 10;
    }
    .active::after {
      z-index: 5;
      content: "";
      position: absolute;
      height: 7px;
      width: 94px;
      bottom: -5px;
      left: 1px;
      background-color: $theme;
    }
  }
  .content {
    padding: 27px;
    font-size: 22px;
    line-height: 2;
  }
}
.en-shadow {
  height: 140px;
  background-color: #f8f8f8;
}
.now-btn {
  bottom: 0;
  left: 0;
  width: 100%;
  height: 82px;
  background-color: #fff;
  box-shadow: 0 -10px 10px #f2f2f2;
  a {
    color: #2f2f2f;
    width: 140px;
  }
  .iconfont {
    font-size: 35px;
    margin: 4px 0 10px;
  }
  .bm {
      color: #fff;
    width: 470px;
    background-color: $theme;
    font-size: 28px;
    padding: 27px 0;
  }
}
</style>