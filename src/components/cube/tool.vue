<template>
  <!-- 
    options:{
        teach:{
            thumbnail:微信头像
            post_title:微信昵称
            wx_name:微信号
            wx_wxm:微信二维码
        },
        follow:{
            fav:是否关注,
            id:需要关注的id，
            string:关键字
        },
        give:{
            type:购买类型,
            id:产品ID,
            money:产品价格
        }
    }
  -->

  <aside class="t0">
    <div id="showIOSDialog2" class="position-fixed tool-btn text-center">
      <div class="txt0 iconfont icon-icon_work"></div>
      <div class="txt1">更多</div>
    </div>
    <div id="dialogs">
      <div class="js_dialog" id="iosDialog2" style="display: none;">
        <div class="weui-mask"></div>
        <!-- 教师二维码：功能三 -->
        <div v-if="toteach" class="weixinImg">
          <div class="wxbox">
            <div class="d-flex">
              <div class="user-img">
                <img :src="options.teach.thumbnail" alt />
              </div>
              <div>
                <div class="t-name">{{options.teach.post_title}}</div>
                <div class="u-name">{{options.teach.wx_name}}</div>
              </div>
            </div>
            <div class="wx-img">
              <img :src="options.teach.wx_wxm" alt />
            </div>
          </div>
        </div>
        <!-- 赠送：功能五 -->
        <div v-if="togive" class="weixinImg">
          <div class="wxbox givebox">
            <div class="box0 text-center">豪爽赠送好友</div>
            <div class="box1">赠送数量</div>
            <div class="d-flex flex-wrap num-ul text-center">
              <div
                v-for="(gl,inx) in givelist"
                v-bind:key="inx"
                class="num-li"
                :class="{active:givedata.num==gl}"
                @click="changeNum(gl)"
              >{{gl}}</div>
            </div>
            <div class="d-flex box2 justify-content-between">
              <div class="bo0">豪爽赠送</div>
              <div class="bo1 d-flex text-center">
                <div @click="prev" class="a">-</div>
                <input v-model="givedata.num" class="text-center" type="text" />
                <div @click="plus" class="b">+</div>
              </div>
            </div>
            <div class="text-right box3">
              <div class="bo0">总计：{{givedata.money}}元</div>
              <div class="bo1">好友可免费领取，永久有效</div>
            </div>
            <div class="box4 text-center">
              <div @click="togivemoney" class="bo0">打包{{givedata.num}}份赠礼</div>
            </div>
          </div>
        </div>

        <div id="js_dialog_2" class="weui-half-screen-dialog">
          <!-- 主体 -->
          <div class="weui-half-screen-dialog__bd">
            <div class="d-flex flex-wrap t-box">
              <div
                @click="tapTool(inx,ml)"
                v-for="(ml,inx) in menuList"
                v-show="!ml.hide"
                v-bind:key="inx"
                class="t-con text-center"
              >
                <div class="t-ico iconfont" :class="ml.classObj"></div>
                <div class="t-txt">{{ml.text}}</div>
              </div>
            </div>
          </div>
          <!-- 底部 -->
          <div class="weui-half-screen-dialog__ft">
            <div class="close">关闭</div>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>
<script>
import $ from "jquery";
export default {
  data() {
    return {
      toteach: false,
      togive: false,
      givelist: [1, 2, 4, 10, 20, 50],
      givedata: {
        is_firends: 1,
        num: 1
      },
      menuList: [
        {
          classObj: "icon-shouye",
          text: "首页",
          url: "/"
        },
        {
          classObj: "icon-laoshi",
          text: "教师"
        },
        {
          classObj: "icon-icon_service",
          text: "咨询"
        },
        {
          classObj: { "icon-shoucang": true, follow: false },
          text: "收藏"
        },
        {
          classObj: "icon-fenxiang",
          text: "邀请卡"
        },
        {
          classObj: "icon-tanhao",
          text: "投诉"
        },
        {
          classObj: "icon-lipinka",
          text: "赠好友",
          hide: true
        }
      ]
    };
  },
  mounted() {
    if (this.$store.state.togive == 2) {
      this.$store.state.togive = 0;
      this.$router.push({ path: "/give" });
    }
    this.addcon();
  },
  watch: {
    "options.follow"() {
      if (this.options.follow.fav) {
        this.menuList[3].classObj.follow = true;
        this.menuList[3].text = "已收藏";
      }
    },
    "options.give"() {
      this.givedata.table = this.options.give.type;
      this.givedata.object_id = this.options.give.id;
      this.givedata.money = this.options.give.money;
      if (!this.givedata.table) this.menuList[6].hide = false;
    }
  },
  updated() {
    $(".weixinImg")
      .off("click")
      .on("click", function() {
        $(".weui-mask").click();
      });
    $(".wxbox")
      .off("click")
      .on("click", function(evt) {
        evt.stopPropagation();
      });
  },
  props: ["options"],
  methods: {
    tapTool(x, y) {
      // 默认始终关闭
      this.toteach = false;
      this.togive = false;
      if (x == 0) {
        // 返回首页
        this.$router.push("/");
      } else if (x == 1) {
        this.$router.push({
          name: "room",
          params: { roomid: this.options.teach.id }
        });
      } else if (x == 2) {
        //   咨询
        this.toteach = true;
        $(".t0 #js_dialog_2").removeClass("weui-half-screen-dialog_show");
      } else if (x == 3) {
        //   收藏
        let id = this.options.follow.id,
          flag = this.menuList[3].classObj.follow,
          txt = this.options.follow.string;
        this.axios.post(
          "/api/user/Favorites/setFavorites.html",
          { object_id: id, table_name: txt },
          res => {
            //   切换文字
            this.menuList[3].text = flag ? "收藏" : "已收藏";
            if (!flag) {
              this.weui.toast(res.data.msg, 1500);
            }
            //   切换样式
            this.menuList[3].classObj.follow = !flag;
          }
        );
      } else if (x == 4) {
        //邀请卡
        this.$router.push({
          name: "share",
          query: { kc_id: this.options.give.id, type: this.options.give.type }
        });
      } else if (x == 5) {
        let title = this.options.give.title || this.options.give.follow;
        title = title.slice(0, 40);
        let link = encodeURIComponent(location.href);
        this.$router.push({
          name: "complaint",
          query: { title: title, link: link }
        });
      } else if (x == 6) {
        //   咨询
        this.togive = true;
        $(".t0 #js_dialog_2").removeClass("weui-half-screen-dialog_show");
      }
    },
    addcon() {
      // WeUI弹窗
      var $dialog1 = $(".t0 #js_dialog_1"),
        $dialog2 = $(".t0 #js_dialog_2"),
        $iosDialog2 = $(".t0 #iosDialog2"),
        that = this;
      $(".t0 #showIOSDialog2").on("click", function() {
        that.toteach = false;
        that.togive = false;
        $iosDialog2.show();
        $dialog2.addClass("weui-half-screen-dialog_show");
      });
      $(".t0 #dialogs").on("click", ".weui-mask", function() {
        $(this)
          .parents(".js_dialog")
          .hide();
        $dialog1.removeClass("weui-half-screen-dialog_show");
        $(".t0 #js_dialog_2").removeClass("weui-half-screen-dialog_show");
      });
      $(".t0 .close").on("click", function() {
        $(".weui-mask").click();
      });
    },
    changeNum(num) {
      this.givedata.num = num;
      this.givedata.money = (num * this.options.give.money).toFixed(2);
    },
    prev() {
      let num = this.givedata.num;
      num = num > 1 ? num - 1 : num;
      this.changeNum(num);
    },
    plus() {
      let num = this.givedata.num + 1;
      this.changeNum(num);
    },
    togivemoney() {
      this.$store.state.togive = 1;
      this.axios.post("/api/user/order/to_pay.html", this.givedata, res => {
        if (res.data.data == 0) {
          this.weui.toast(res.data.msg, 1500);
          this.$router.go();
        } else {
          this.$router.push({
            name: "pay",
            query: { orderid: res.data.data }
          });
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.tool-btn {
  z-index: 125;
  cursor: pointer;
  color: #999;
  width: 98px;
  height: 98px;
  border-radius: 49px;
  right: $pardon;
  bottom: 215px;
  background-color: #fff;
  box-shadow: 0 0 10px $theme;
  transition: bottom 0.8s;
  .txt0 {
    margin-top: 17px;
    font-size: 37px;
  }
  .txt1 {
    margin-top: 7px;
    font-size: 20px;
  }
}
.t-box {
  padding: 20px 25px;
  .t-con {
    margin: 10px 12.5px;
    padding: 10px 12.5px;
    .t-txt {
      color: #636363;
      font-size: 26px;
      margin-top: 16px;
    }
    .t-ico {
      width: 108px;
      height: 108px;
      border-radius: 12px;
      font-size: 55px;
      color: #fff;
      line-height: 108px;
    }
  }
  .t-con:hover {
    cursor: pointer;
    border-radius: 6px;
    background-color: #eee;
  }
  .t-con:nth-child(1) .t-ico {
    background-color: #eb5658;
  }
  .t-con:nth-child(2) .t-ico {
    background-color: #50735b;
  }
  .t-con:nth-child(3) .t-ico {
    background-color: #82d272;
  }
  .icon-shoucang {
    background-color: #e1e1e1;
  }
  .icon-shoucang.follow {
    background-color: #ee7800;
  }
  .t-con:nth-child(5) .t-ico {
    background-color: #eb5658;
  }
  .t-con:nth-child(6) .t-ico {
    background-color: #82b2f8;
  }
  .t-con:nth-child(7) .t-ico {
    background-color: #f4bd49;
  }
  .t-con:nth-child(8) .t-ico {
    background-color: #eb5658;
  }
  .t-con:nth-child(9) .t-ico {
    background-color: #eb5658;
  }
}
.close {
  cursor: pointer;
  border-top: 1px solid #f4f4f4;
  color: #484848;
  font-size: 30px;
  padding: 34px 0;
}
// 微信二维码
.weixinImg {
  position: fixed;
  z-index: 1025;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .wxbox {
    background-color: #fff;
    padding: 40px;
    border-radius: 12px;
  }
  .user-img {
    width: 116px;
    margin-right: 20px;
    img {
      border-radius: 9px;
    }
  }
  .t-name {
    margin-top: 20px;
    font-size: 30px;
    font-weight: bold;
  }
  .u-name {
    margin-top: 24px;
    color: #727272;
    font-size: 24px;
  }
  .wx-img {
    img {
      width: 520px;
    }
  }
}
.givebox {
  width: 600px;
  .box0 {
    color: $theme-bor;
    font-size: 30px;
  }
  .box1 {
    color: #939393;
    margin-top: 35px;
    font-size: 22px;
  }
  .num-ul {
    margin: 14px -22px;
    .num-li {
      width: 150px;
      margin: 16px 18px;
      border-radius: 6px;
      height: 58px;
      line-height: 54px;
      font-size: 24px;
      border: 2px solid #939393;
    }
    .active {
      color: #fff;
      background-color: $theme;
      border-color: $theme-bor;
    }
  }
  .box2 {
    margin-top: 14px;
    padding-bottom: $pardon;
    border-bottom: 2px solid #f7f7f7;
    .bo0 {
      color: #939393;
      font-size: 22px;
    }
    .bo1 {
      border: 2px solid #e6e6e6;
      border-radius: 6px;
      .a {
        border-right: 2px solid #e6e6e6;
      }
      .b {
        border-left: 2px solid #e6e6e6;
      }
      div {
        color: $theme-bor;
        width: 56px;
      }
      input {
        width: 90px;
      }
      div,
      input {
        height: 50px;
        line-height: 50px;
        border: none;
        outline: none;
      }
    }
  }
  .box3 {
    color: #8f8f8f;
    padding: 20px 0 30px;
    border-bottom: 2px solid #f7f7f7;
    .bo0 {
      font-size: 22px;
    }
    .bo1 {
      font-size: 26px;
      margin-top: $pardon/2;
    }
  }
  .box4 {
    padding-top: $pardon;
    .bo0 {
      color: #fff;
      height: 78px;
      line-height: 78px;
      border-radius: 8px;
      background-color: $theme;
      border: 1px solid $theme-bor;
    }
  }
}
</style>