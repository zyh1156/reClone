<template>
  <!-- 
    options:{
        follow:是否关注
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
        <!-- 教师二维码：功能二 -->
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

        <div id="js_dialog_2" class="weui-half-screen-dialog">
          <!-- 主体 -->
          <div class="weui-half-screen-dialog__bd">
            <div class="d-flex justify-content-between flex-wrap t-box">
              <div
                @click="tapTool(inx,ml)"
                v-for="(ml,inx) in menuList"
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
      menuList: [
        {
          classObj: "icon-shouye",
          text: "首页",
          url: "/"
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
          text: "赠好友"
        },
        {
          classObj: "icon-shouye",
          text: "邀请卡"
        },
        {
          classObj: "icon-shouye",
          text: "邀请卡"
        }
      ]
    };
  },
  mounted() {
    this.addcon();
  },
  watch: {
    "options.follow"() {
      if (this.options.follow) {
        this.menuList[2].classObj.follow = true;
        this.menuList[2].text = "已收藏";
      }
    },
    toteach() {}
  },
  updated() {
    $(".weixinImg").on("click", function() {
      $(".weui-mask").click();
    });
    $(".wxbox").on("click",function(evt){
        evt.stopPropagation()
    })
  },
  props: ["options"],
  methods: {
    tapTool(x, y) {
      // 默认始终关闭
      this.toteach = false;
      if (x == 0) {
        // 返回首页
        this.$router.push("/");
      } else if (x == 1) {
        this.toteach = true;
        $(".t0 #js_dialog_2").removeClass("weui-half-screen-dialog_show");
      } else if (x == 2) {
        let id = this.options.followid,
          flag = this.menuList[2].classObj.follow;
        this.axios.post(
          "/api/user/Favorites/setFavorites.html",
          { object_id: id, table_name: "goods_post" },
          res => {
            //   切换文字
            this.menuList[2].text = flag ? "收藏" : "已收藏";
            //   切换样式
            this.menuList[2].classObj.follow = !flag;
          }
        );
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
  bottom: 115px;
  background-color: #fff;
  box-shadow: 0 0 10px $theme;
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
    background-color: #82d272;
  }
  .icon-shoucang {
    background-color: #e1e1e1;
  }
  .icon-shoucang.follow {
    background-color: #ee7800;
  }
  .t-con:nth-child(4) .t-ico {
    background-color: #eb5658;
  }
  .t-con:nth-child(5) .t-ico {
    background-color: #82b2f8;
  }
  .t-con:nth-child(6) .t-ico {
    background-color: #f4bd49;
  }
  .t-con:nth-child(7) .t-ico {
    background-color: #eb5658;
  }
  .t-con:nth-child(8) .t-ico {
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
</style>