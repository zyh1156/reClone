<template>
  <section>
    <div class="weui-form">
    <div class="weui-form__text-area">
      <h2 class="weui-form__title">表单结构</h2>
      <div class="weui-form__desc">展示表单页面的信息结构样式, 分别由头部区域/控件区域/提示区域/操作区域和底部信息区域组成。</div>
    </div>
    <div class="weui-form__control-area">
      <div class="weui-cells__group weui-cells__group_form">
        <div class="weui-cells__title">表单组标题</div>
        <div class="weui-cells weui-cells_form">
          <div class="weui-cell weui-cell_active">
            <div class="weui-cell__hd"><label class="weui-label">用户名(手机或邮箱)</label></div>
            <div class="weui-cell__bd">
                <input class="weui-input" v-model="params.username" placeholder="填写本人微信号">
            </div>
          </div>
          <div class="weui-cell weui-cell_active">
            <div class="weui-cell__hd"><label class="weui-label">密码</label></div>
            <div class="weui-cell__bd">
                <input class="weui-input" v-model="params.password" placeholder="填写本人微信号的昵称">
            </div>
          </div>
          <div class="weui-cell weui-cell_active">
            <div class="weui-cell__hd"><label class="weui-label">设备类型</label></div>
            <div class="weui-cell__bd">
                <input class="weui-input" v-model="params.device_type" placeholder="填写绑定的电话号码">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="weui-form__tips-area">
      <p class="weui-form__tips">
        表单页提示，居中对齐
      </p>
    </div>
    <div @click="toCon" class="weui-form__opr-area">
      <a class="weui-btn weui-btn_primary weui-btn_disabled" href="javascript:" id="showTooltips">确定</a>
    </div>
    <div class="weui-form__tips-area">
      <p class="weui-form__tips">
        表单页提示，居中对齐
      </p>
    </div>
    <div class="weui-form__extra-area">
      <div class="weui-footer">
        <p class="weui-footer__links">
          <a href="javascript:" class="weui-footer__link">底部链接文本</a>
        </p>
        <p class="weui-footer__text">Copyright © 2008-2019 weui.io</p>
      </div>
    </div>
  </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
        params:{
            username:"15387871422",
            password:"123456",
            device_type:"mobile"
        }
    };
  },
  methods:{
      toCon:async function(){
          let that=this,
          res=await this.axios.post("/api/user/public/login",this.params);
          console.log(res);
      }
  }
};
</script>
<style lang="scss" scoped>
</style>