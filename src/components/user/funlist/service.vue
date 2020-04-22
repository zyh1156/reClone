<template>
  <section class="bac">
    <ct :ctxt="cobj"></ct>
    <div class="box0 text-center">
      <!-- 头像 -->
      <!-- <div class="b0"></div> -->
      <!-- 名字 -->
      <div class="b1">{{sd.site_name}}</div>
      <!-- 微信号 -->
      <div class="b2">{{sd.site_wx}}</div>
      <!-- 微信二维码 -->
      <div class="b3">
        <div>
          <img :src="sd.site_wxm" alt />
        </div>
        <div class="b4">(长按图片保存)</div>
      </div>
    </div>
    <div class="box1">
      <!-- 电话 -->
      <div>
        <span>联系电话：</span>
        <a :href="sd.totel">{{sd.site_tel}}</a>
      </div>
      <!-- 邮箱 -->
      <div class="b1">
        <span>电子邮箱：</span>
        <a :href="sd.toemail">{{sd.site_admin_email}}</a>
      </div>
    </div>
  </section>
</template>
<script>
import ct from "../../cube/cube-title";
export default {
  data() {
    return {
      cobj: {
        tit: "联系客服"
      },
      sd: {}
    };
  },
  methods: {
    getData() {
      this.axios.post(
        "/api/home/index/setting.html",
        {},
        res => {
          this.sd = res.data.data;
          this.sd.totel = "tel:" + this.sd.site_tel;
          this.sd.toemail = "mailto:" + this.sd.site_admin_email;
        },
        true
      );
    }
  },
  mounted() {
    this.getData();
  },
  components: {
    ct
  }
};
</script>
<style lang="scss" scoped>
section {
  background-image: url(../../../assets/bac/psc.png);
}
.box0 {
  padding: 75px 0 0 0;
  line-height: 2;
  .b1 {
    font-size: 30px;
    font-weight: bold;
  }
  .b3 {
    padding: 75px 90px 0;
    height: 720px;
  }
  .b4{
      color: #aaa;
      font-size: 20px;
  }
}
.box1 {
  padding-left: $pardon;
  line-height: 2;
}
</style>