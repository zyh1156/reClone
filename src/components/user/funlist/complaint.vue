<template>
  <section class="bac">
    <div class="tit">标题</div>
    <div class="box1 d-flex">
      <div class="b0 d-none">
        <img src="../../../assets/menu.jpg" alt />
      </div>
      <div class="b1">
        <div class="txt0 text-truncate">
          <span class="t0">[链接]</span>
          <span class="t1">{{cpdata.title}}</span>
        </div>
        <div class="txt1 d-none">创建者：</div>
      </div>
    </div>
    <div class="tit">投诉描述</div>
    <div class="box2">
      <div class="b0 position-relative">
        <textarea maxlength="500" v-model="cpdata.msg" placeholder="请输入投诉描述"></textarea>
        <div class="position-absolute num">{{cpdata.msg.length}}/500</div>
      </div>
      <div class="b1 d-none justify-content-between">
        <div>证据截图</div>
        <div class="txt1">0/4</div>
      </div>
      <div class="b2 d-flex">
        <div class="txt1">网页链接</div>
        <input placeholder="请填写网页链接" class="txt2" type="text" v-model="cpdata.url" value />
      </div>
    </div>
    <div class="tit">请填写您的手机号，方便我们联系：</div>
    <div class="box2">
      <div class="d-flex b3">
        <div class="txt1">姓名</div>
        <input placeholder="请输入姓名" v-model="cpdata.name" class="txt2" type="text" />
        <div class="txt3 text-right">*</div>
      </div>
      <div class="d-flex b3 b3t">
        <div class="txt1">手机号</div>
        <input placeholder="请输入手机号码" v-model="cpdata.phone" class="txt2" type="text" />
        <div class="txt3 text-right">*</div>
      </div>
      <div class="d-flex b3 b3t">
        <div class="txt1">校验码</div>
        <input placeholder="请输入校验码" v-model="cpdata.verify" class="txt2" type="text" />
        <div @click="changVer" class="txt3">
          <img :src="verImg" alt />
        </div>
      </div>
    </div>
    <div class="tocom">
      <div class="tocom2 position-fixed w-100">
        <div @click="tosubmit" class="tocom3 text-center">提交</div>
      </div>
    </div>
  </section>
</template>
<script>
import { getCookie } from "../../../core/cookie";
export default {
  data() {
    return {
      cpdata: {
        title: "",
        name: "",
        phone: "",
        verify: "",
        msg: "",
        url: ""
      },
      verImg: ""
    };
  },
  methods: {
    tosubmit() {
      let data = this.cpdata;
      if (data.msg.length == 0) {
        this.weui.alert("请输入投诉描述");
      } else if (!/^1[3456789]\d{9}$/.test(data.phone)) {
        this.weui.alert("请输入正确的手机号");
      } else if (data.verify.length == 0) {
        this.weui.alert("请输入验证码");
      } else {
        this.axios.post("/plugin/hz_msg_borad/do/addmsg.html", data, res => {
          console.log(res);
        });
      }
    },
    changVer() {
      this.verImg = "";
      setTimeout(() => {
        this.verImg =
          "http://t3.lcqingshu.com/new_captcha.html?height=38&width=160&font_size=20";
      }, 20);
    }
  },
  mounted() {
    this.cpdata.title = this.$route.query.title;
    this.cpdata.url = decodeURIComponent(this.$route.query.link);
    this.cpdata.name = getCookie("username");
    this.cpdata.phone = getCookie("usermobile");
    this.changVer();
  }
};
</script>
<style lang="scss" scoped>
.tit {
  font-size: 24px;
  color: #848483;
  padding: $pardon $pardon $pardon/2;
}
.box1 {
  background-color: #fff;
  padding: $pardon;
  .b0 {
    width: 110px;
    height: 110px;
    margin-right: 18px;
  }
  .b1 {
    width: 565px;
    .txt0 {
      .t0 {
        color: $theme;
        margin-right: 6px;
      }
    }
    .txt1 {
      margin-top: 19px;
      font-size: 30px;
    }
  }
}
.box2 {
  background-color: #fefefe;
  border-top: 2px solid #e9e9ea;
  border-bottom: 2px solid #e9e9ea;
  .b0 {
    textarea {
      width: 100%;
      resize: none;
      padding: $pardon;
      height: 305px;
      border: none;
      outline: none;
      line-height: 1.4;
    }
    .num {
      color: #a3a3a3;
      right: $pardon;
      bottom: $pardon;
      font-size: 24px;
    }
  }
  .b1 {
    margin-left: $pardon;
    border-top: 2px solid #e9e9ea;
    padding: 23px $pardon $pardon 0;
    height: 245px;
    .txt1 {
      color: #a3a3a3;
      font-size: 24px;
    }
  }
  .b2 {
    height: 80px;
    line-height: 80px;
    margin-left: $pardon;
    padding-right: $pardon;
    border-top: 2px solid #e9e9ea;
    .txt1 {
      width: 190px;
    }
    .txt2 {
      flex-grow: 1;
    }
    input {
      width: 100%;
      border: none;
      outline: none;
    }
  }
  .b3 {
    height: 80px;
    line-height: 80px;
    margin-left: $pardon;
    .txt1 {
      width: 190px;
      flex-shrink: 0;
    }
    .txt2 {
      flex-grow: 1;
      border: none;
      outline: none;
    }
    .txt3 {
      color: #8f8f8f;
      padding: 0 $pardon;
      width: 260px;
    }
  }
  .b3t {
    border-top: 2px solid #e9e9ea;
  }
}
.tocom {
  height: 140px;
  .tocom2 {
    padding: $pardon;
    left: 0;
    bottom: 0;
    .tocom3 {
      border-radius: 6px;
      height: 86px;
      color: #fff;
      line-height: 86px;
      font-size: 30px;
      font-weight: bold;
      border: 2px solid $theme-bor;
      background-image: linear-gradient(to right, $theme, $theme-bor);
    }
  }
}
</style>