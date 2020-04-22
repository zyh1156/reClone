<template>
  <section class="bac">
    <div class="box0 febor">
      <div class="box1 febor justify-content-between d-flex align-items-center">
        <div>头像</div>
        <div class="user-ico">
          <img :src="user.avatar" alt />
        </div>
      </div>
      <div class="box1 febor justify-content-between d-flex">
        <div>
          真实姓名
          <span class="req">*</span>
        </div>
        <div>
          <input v-model="user.truename" placeholder="输入您的真实姓名" type="text" class="text-right" />
        </div>
      </div>
      <!-- <div @click="selSex" class="box1 justify-content-between d-flex">
        <div>性别</div>
        <div id="showPicker">
          <span v-if="user.sex==1">男</span>
          <span v-else-if="user.sex==2">女</span>
          <span v-else>未知</span>
        </div>
      </div> -->
    </div>
    <div class="box2 febor">个性签名({{user.desc.length}}/20)</div>
    <div class="box3 febor">
      <textarea v-model="user.desc" maxlength="20" class="w-100"></textarea>
    </div>
    <div class="box4">
      <div @click="save" class="btn0 text-center font-weight-bold">保存</div>
    </div>
  </section>
</template>
<script>
import { setCookie, getCookie } from "../../../core/cookie";
import $ from "jquery";
export default {
  data() {
    return {
      user: {
        truename: "",
        desc: "",
        sex: 0
      }
    };
  },
  methods: {
    getData() {
      this.user = {
        truename: getCookie("username"),
        avatar: getCookie("useravatar"),
        desc: getCookie("userdesc"),
        // sex: getCookie("usersex")
      };
    },
    save() {
      if (this.user.truename.trim() == "") {
        this.weui.alert("姓名是必填项");
      } else {
        this.axios.post("/api/user/profile/editPost.html", this.user, res => {
          //   设置真实姓名
          setCookie("username", this.user.truename, 30);
          //   设置头像
          // setCookie("useravatar", res.data.data.user.avatar, 30);
          //   设置简介
          setCookie("userdesc", this.user.desc, 30);
          //   设置性别
        //   setCookie("usersex", this.user.sex, 30);
          this.weui.toast(res.data.msg, 1500);
          this.$router.push({ path: "/user" });
        });
      }
    },
    selSex() {
      let inx = this.user.sex;
      this.weui.picker(
        [
          {
            label: "未知",
            value: 0
          },
          {
            label: "男",
            value: 1
          },
          {
            label: "女",
            value: 2
          }
        ],
        {
          className: "custom-classname",
          container: "body",
          defaultValue: [inx],
        //     onChange: result => {
        //     this.user.sex = result[0].value;
        //   },
          onConfirm: result => {
            this.user.sex = result[0].value;
          },
          id: "showPicker"
        }
      );
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
<style lang="scss" scoped>
.febor {
  border-bottom: 1px solid #eaeaea;
}
.box0 {
  font-size: 26px;
  background: url(../../../assets/bac/psc.png) #fefefe;
  background-size: 375px auto;
  .box1 {
    padding: $pardon;
    margin-left: $pardon;
    .req {
      color: var(--weui-RED);
    }
    .user-ico {
      img {
        width: 70px;
        height: 70px;
        border-radius: 35px;
      }
    }
    input {
      width: 480px;
      border: none;
      outline: none;
      background-color: transparent;
    }
  }
}
.box2 {
  color: #939393;
  font-size: 24px;
  padding: $pardon $pardon $pardon/2;
}
.box3 {
  textarea {
    padding: $pardon;
    line-height: 1.4;
    height: 260px;
    border: none;
    outline: none;
    resize: none;
    background: url(../../../assets/bac/psc.png) #fefefe;
    background-size: 375px auto;
  }
}
.box4 {
  padding: 55px 38px;
  .btn0 {
    background-image: linear-gradient(to right bottom, $theme, $theme-bor);
    border: 1px solid $theme-bor;
    font-size: 32px;
    padding: $pardon;
    color: #fff;
    border-radius: 6px;
  }
}
</style>