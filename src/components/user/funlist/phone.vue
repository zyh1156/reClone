<template>
  <section class="bac">
    <aside>
      <div class="d-flex rw-menu position-fixed w-100">
        <div @click="reload" class="rw-re0 position-absolute d-flex align-items-center">
          <span class="iconfont icon-icon_left"></span>
          <span>返回</span>
        </div>
        <div class="rw-re2 text-center w-100">绑定手机</div>
      </div>
      <div class="menu-shadow"></div>
    </aside>
    <div>
      <!-- 更换手机 -->
      <div v-show="menuInx==0" class="text-center box0">
        <!-- logo -->
        <div class="txt0">
          <div class="iconfont icon-icon_mobilephone"></div>
        </div>
        <!-- 手机号 -->
        <div class="txt1 font-weight-bold">
          <span>你的手机号：</span>
          <span>{{this.phone}}</span>
        </div>
        <!-- 备注 -->
        <div class="txt2">如号码已变更，请点击下方“更换手机号”</div>
        <!-- 更换 -->
        <div @click="menuInx=1" class="txt3 d-inline-block font-weight-bold">更换手机号</div>
      </div>
      <!-- 填写验证码 -->
      <div v-show="menuInx==1" class="box1">
        <div class="page form_vcode js_show">
          <div class="weui-form">
            <div class="weui-form__text-area">
              <h2 class="weui-form__title">短信验证</h2>
              <div class="weui-form__desc">请填写手机号及短信验证码</div>
            </div>
            <div class="weui-form__control-area">
              <div class="weui-cells__group weui-cells__group_form">
                <div class="weui-cells weui-cells_form">
                  <div class="weui-cell weui-cell_active">
                    <div class="weui-cell__hd">
                      <label class="weui-label">手机号</label>
                    </div>
                    <div class="weui-cell__bd">
                      <input
                        class="weui-input"
                        type="text"
                        pattern="[0-9]*"
                        placeholder="请输入手机号"
                        v-model="user.mobile"
                        maxlength="12"
                        @input="checkin"
                        @change="checkin"
                      />
                    </div>
                  </div>
                  <div class="weui-cell weui-cell_active weui-cell_vcode">
                    <div class="weui-cell__hd">
                      <label class="weui-label">验证码</label>
                    </div>
                    <div class="weui-cell__bd">
                      <input
                        autofocus
                        class="weui-input"
                        type="text"
                        pattern="[0-9]*"
                        id="js_input"
                        placeholder="输入验证码"
                        maxlength="6"
                        @input="checkin"
                        @change="checkin"
                        v-model="user.verification_code"
                      />
                    </div>
                    <div class="weui-cell__ft">
                      <button
                        @click="getver"
                        class="weui-btn weui-btn_default weui-vcode-btn"
                      >{{timeString}}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="weui-form__opr-area">
              <div @click="settel" class="weui-btn weui-btn_primary" :disabled="!checkF">确定</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ct from "../../cube/cube-title";
import { getCookie, setCookie, checkCookie } from "../../../core/cookie";
export default {
  data() {
    return {
      phone: "",
      cobj: {
        tit: "绑定手机"
      },
      menuInx: 0,
      user: {
        mobile: "",
        verification_code: ""
      },
      checkF: false,
      timeString: "获取验证码"
    };
  },
  components: {
    ct
  },
  mounted() {
    if (checkCookie("usermobile")) {
        this.menuInx=0;
      this.phone = getCookie("usermobile");
    } else {
        this.menuInx=1;
    }
  },
  methods: {
    toClock() {
      let time = 60,
        clock = setInterval(() => {
          time--;
          if (time <= 0) {
            this.timeString = "获取验证码";
          } else {
            this.timeString = time + "秒后可发送";
          }
        }, 1000);
    },
    reload() {
      if (this.menuInx == 1) {
        this.menuInx = 0;
      } else {
        this.$router.go(-1);
      }
    },
    getver() {
      let phone = this.user.mobile;
      if (!/^1[3456789]\d{9}$/.test(phone)) {
        this.weui.alert("请输入正确的手机号");
      } else if (this.timeString == "获取验证码") {
        this.axios.post(
          "/api/user/verification_code/send.html",
          { username: phone },
          res => {
            this.weui.toast(res.data.msg, 1500);
            this.toClock();
          }
        );
      }
    },
    checkin() {
      let phone = this.user.mobile,
        ver = this.user.verification_code;
      if (/^1[3456789]\d{9}$/.test(phone) && ver.length == 6) {
        this.checkF = true;
      } else {
        this.checkF = false;
      }
    },
    settel() {
      let phone = this.user.mobile;
      if (this.checkF) {
        this.axios.post(
          "/api/user/profile/bindingMobile.html",
          this.user,
          res => {
            this.weui.toast(res.data.msg, 1500);
            //   设置手机号
            setCookie("usermobile", phone, 30);
            this.$router.go();
          },
          false,
          true
        );
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.rw-menu {
  left: 0;
  top: 0;
  background: #fff;
  box-shadow: 0 10px 10px $theme-bac;
  z-index: 250;
  height: 92px;
  line-height: 40px;
  .rw-re0 {
    top: 0;
    left: 0;
    padding: $pardon $pardon/2;
  }
  .rw-re1 {
    top: 0;
    right: 0;
    color: inherit;
    padding: $pardon $pardon/2;
  }
  .rw-re2 {
    font-weight: bold;
    padding: $pardon $pardon/2;
  }
  .iconfont {
    margin-right: $pardon/2;
    font-size: 40px;
  }
}
.menu-shadow {
  height: 94px;
}
.box0 {
  padding-top: 150px;
  .txt0 {
    font-size: 110px;
  }
  .txt1 {
    font-size: 34px;
    margin-top: 65px;
  }
  .txt2 {
    color: #838383;
    margin-top: 35px;
    font-size: 22px;
  }
  .txt3 {
    margin-top: 480px;
    color: $theme-bor;
    font-size: 30px;
    padding: 20px 90px;
    background: #fff;
  }
}
.box1 {
  .weui-form,
  .weui-cells {
    font-size: 28px;
    background-color: transparent;
  }
  .weui-vcode-btn {
    font-size: 28px;
    background-color: #fff;
  }
  .weui-label {
    margin: 0;
  }
  .weui-btn[disabled] {
    color: #aaa;
    background-color: #fff;
  }
}
</style>