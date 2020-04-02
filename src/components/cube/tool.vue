<template>
  <aside class="t0">
    <div id="showIOSDialog2" class="position-fixed tool-btn text-center">
      <div class="txt0 iconfont icon-icon_work"></div>
      <div class="txt1">更多</div>
    </div>
    <div id="dialogs">
      <div class="js_dialog" id="iosDialog2" style="display: none;">
        <div class="weui-mask"></div>
        <div id="js_dialog_2" class="weui-half-screen-dialog">
          <!-- 主体 -->
          <div class="weui-half-screen-dialog__bd">
            <div class="d-flex justify-content-between flex-wrap t-box">
              <a
                :href="ml.url"
                v-for="(ml,inx) in menuList"
                v-bind:key="inx"
                class="t-con text-center"
              >
                <div class="t-ico iconfont" :class="ml.classObj"></div>
                <div class="t-txt">{{ml.text}}</div>
              </a>
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
          classObj: "icon-shoucang",
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
  methods: {
    addcon() {
      // WeUI弹窗
      var $dialog1 = $(".t0 #js_dialog_1"),
        $dialog2 = $(".t0 #js_dialog_2"),
        $iosDialog2 = $(".t0 #iosDialog2");
      $(".t0 #showIOSDialog2").on("click", function() {
        $iosDialog2.show();
        $dialog2.addClass("weui-half-screen-dialog_show");
      });
      $(".t0 #dialogs").on("click", ".weui-mask", function() {
        $(this)
          .parents(".js_dialog")
          .hide();
        $dialog1.removeClass("weui-half-screen-dialog_show");
        $dialog2.removeClass("weui-half-screen-dialog_show");
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
  cursor: pointer;
  color: #999;
  width: 98px;
  height: 98px;
  border-radius: 49px;
  right: $pardon;
  bottom: $pardon * 5;
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
      font-size: 22px;
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
  .t-con:nth-child(3) .t-ico {
    background-color: #e1e1e1;
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
</style>