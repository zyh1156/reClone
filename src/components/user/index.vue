<template>
  <section class="col-f8">
    <!-- 资料页 -->
    <div class="user-data position-relative">
      <div class="d-flex align-items-center">
        <!-- 头像 -->
        <div class="user-img">
          <img src="../../assets/menu.jpg" alt />
        </div>
        <!-- 资料 -->
        <div class="user-abo">
          <div class="d-flex align-items-center">
            <div class="font-weight-bold">Cytus</div>
            <div class="user-vip text-center">学习卡</div>
          </div>
          <div class="describe">一句话形容美丽的自己</div>
        </div>
      </div>
      <div class="sign position-absolute d-flex align-items-center">
        <div class="ico text-center d-flex justify-content-center align-items-center">
          <span class="iconfont icon-tuipiao"></span>
        </div>
        <div>签到中心</div>
      </div>
    </div>
    <!-- 功能背景 -->
    <div class="dpgo">
      <!-- 功能页 -->
      <div class="d-flex copgo">
        <div class="copbox text-center" v-for="(co,inx) in oplist" v-bind:key="inx">
          <div class="copico iconfont" :class="co.classObj"></div>
          <div class="coptxt">{{co.text}}</div>
        </div>
      </div>
      <!-- 开课 -->
      <div class="copbtn text-center font-weight-bold">
        <span>一键开课</span>
        <span class="iconfont icon-icon_circle_line"></span>
      </div>
    </div>
    <!-- 功能列表1 -->
    <div class="menu-list">
      <div class="menu-box" v-for="(m0,inx) in menu0" v-bind:key="inx">
        <span class="menu-ico iconfont" :class="m0.classObj"></span>
        <span class="menu-txt">{{m0.text}}</span>
      </div>
    </div>
    <!-- 功能列表2 -->
    <div class="menu-list">
      <div class="menu-box" v-for="(m1,inx) in menu1" v-bind:key="inx">
        <span class="menu-ico iconfont" :class="m1.classObj"></span>
        <span class="menu-txt">{{m1.text}}</span>
      </div>
    </div>
    <footer2></footer2>
  </section>
</template>
<script>
import footer2 from "../cube/footer";
export default {
  data() {
    return {
      oplist: [
        {
          text: "关注",
          classObj: {
            "icon-aixin": true
          }
        },
        {
          text: "收藏",
          classObj: {
            "icon-shoucang": true
          }
        },
        {
          text: "优惠券",
          classObj: {
            "icon-dianyingpiao": true
          }
        },
        {
          text: "订单记录",
          classObj: {
            "icon-dingdan": true
          }
        }
      ],
      menu0: [
        {
          text: "钱包",
          classObj: {
            "icon-icon_coinpurse_line": true
          }
        },
        {
          text: "分销记录",
          classObj: {
            "icon-icon_statistics": true
          }
        },
        {
          text: "消息",
          classObj: {
            "icon-icon_sms": true
          }
        }
      ],
      menu1: [
        {
          text: "联系客服",
          classObj: {
            "icon-icon_service": true
          }
        },
        {
          text: "帮助与反馈",
          classObj: {
            "icon-icon_shakehands": true
          }
        },
        {
          text: "设置",
          classObj: {
            "icon-icon_setting": true
          }
        }
      ]
    };
  },
  components: {
    footer2
  }
};
</script>
<style lang="scss" scoped>
.col-f8 {
  background-color: #f8f8f8;
}
.user-data {
  padding-top: 36px;
  .user-img {
    margin-left: 26px;
    img {
      width: 80px;
      height: 80px;
      border-radius: 40px;
    }
  }
  .user-abo {
    padding-left: 18px;
    .user-vip {
      color: #a56224;
      width: 78px;
      height: 34px;
      line-height: 34px;
      background-color: #eac88e;
      border-radius: 4px;
      margin-left: 10px;
    }
    .describe {
      color: #5a5a5a;
      font-size: 24px;
      margin-top: 8px;
    }
  }
  .sign {
    color: #ec6641;
    height: 72px;
    border-radius: 36px 0 0 36px;
    font-size: 25px;
    background-color: #f4e1db;
    padding: 0 16px 0 10px;
    top: 40px;
    right: 0;
    .ico {
      background-color: #ec6541;
      height: 50px;
      width: 50px;
      border-radius: 25px;
      margin-right: 10px;
      span {
        color: #fff;
        font-size: 28px;
      }
    }
  }
}
.dpgo {
  background-color: #f7f7f7;
  padding: 35px 27px 25px;
  .copgo {
    background-color: #fff;
    border-radius: 11px;
    padding: 38px 0 20px;
  }
  .copbtn {
    margin-top: 24px;
    color: #fff;
    background-color: #ec6541;
    box-shadow: 0 4px 16px 0 rgba(255, 90, 49, 0.4);
    font-size: 32px;
    height: 90px;
    line-height: 90px;
    border-radius: 45px;
    .iconfont{
      margin-left: 12px;
    }
  }
}
.copbox {
  width: 25%;
  .copico {
    color: #e94f25;
    font-size: 52px;
  }
  .coptxt {
    margin-top: 28px;
    font-size: 24px;
  }
}
.menu-list {
  background-color: #fff;
  padding-left: 12px;
  margin-bottom: 27px;
  .menu-box {
    border-top: 2px solid #f1f1f1;
    padding: 27px 0 27px 15px;
    font-size: 27px;
    background-image: url(../../assets/right-ico2.png);
    background-position:681px center;
    background-repeat: no-repeat;
    background-size:auto 22px;
  }
  .menu-box:hover{
    background-color: #f2f2f2;
  }
  .menu-ico {
    font-size: 32px;
  }
  .menu-txt{
    margin-left: 23px;
  }
}
</style>