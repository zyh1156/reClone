<template>
  <aside>
    <div id="showIOSDialog2" class="position-fixed tool-btn text-center">
      <div class="txt0 iconfont icon-icon_work"></div>
      <div class="txt1">更多</div>
    </div>
    <div id="dialogs">
      <div class="js_dialog" id="iosDialog2" style="display: none;">
        <div class="weui-mask"></div>
        <div id="js_dialog_2" class="weui-half-screen-dialog">
          <div class="weui-half-screen-dialog__hd">
            <div class="d-none weui-half-screen-dialog__hd__side">
              <button style="display: none;" class="weui-icon-btn">
                返回
                <i class="weui-icon-back-arrow-thin"></i>
              </button>
              <button class="weui-icon-btn">
                关闭
                <i class="weui-icon-close-thin"></i>
              </button>
            </div>
            <div class="weui-half-screen-dialog__hd__main">
              <strong class="weui-half-screen-dialog__title">标题</strong>
              <span class="weui-half-screen-dialog__subtitle">标题</span>
            </div>
            <div class="d-none weui-half-screen-dialog__hd__side">
              <button class="weui-icon-btn">
                更多
                <i class="weui-icon-more"></i>
              </button>
            </div>
          </div>
          <div class="weui-half-screen-dialog__bd">
            <p class="weui-half-screen-dialog__desc">辅助描述内容，可根据实际需要安排</p>
            <p class="weui-half-screen-dialog__tips">辅助提示内容，可根据实际需要安排</p>
          </div>
          <div class="weui-half-screen-dialog__ft">
            <a href="javascript:" class="weui-btn weui-btn_default">辅助操作</a>
            <a href="javascript:" class="weui-btn weui-btn_primary">主操作</a>
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
    return {};
  },
  mounted() {
    var $dialog1 = $("#js_dialog_1"),
      $dialog2 = $("#js_dialog_2"),
      $iosDialog1 = $("#iosDialog1"),
      $iosDialog2 = $("#iosDialog2");
    $("#showIOSDialog2").on("click", function() {
      $iosDialog2.fadeIn(200);
      $dialog2.addClass("weui-half-screen-dialog_show");
    });
    $("#dialogs").on("click", ".weui-mask", function() {
      $(this)
        .parents(".js_dialog")
        .fadeOut(200);
      $dialog1.removeClass("weui-half-screen-dialog_show");
      $dialog2.removeClass("weui-half-screen-dialog_show");
    });
  }
};
</script>
<style lang="scss" scoped>
.tool-btn {
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
</style>