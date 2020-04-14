<template>
  <section class="bac">
    <div class="cplist">
      <div class="d-flex cpbox" v-for="(cp,inx) in cplist" v-bind:key="inx">
        <div class="l-box flex-grow-1">
          <div class="txt0">{{cp.title}}</div>
          <div class="box1 txt1">
            <!-- <span>平台优惠券</span> -->
          </div>
          <div class="box1 text-truncate">
            <span class="txt1">适用范围：</span>
            <span class="txt2">{{cp.post_title}}</span>
          </div>
          <div class="box1">
            <span class="txt1">有效期至：</span>
            <span class="txt2">{{cp.endtime}}</span>
          </div>
        </div>
        <div class="r-box text-center d-flex justify-content-center align-content-center flex-wrap">
          <div class="cf w-100">
            <span class="txt0">￥</span>
            <span class="txt1 font-weight-bold">{{cp.price}}</span>
          </div>
          <div class="txt2">立即使用</div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      cplist: []
    };
  },
  methods: {
    getData() {
      this.axios.post("/api/home/red/index.html", {}, res => {
        console.log(res);
        this.cplist = res.data.data.data;
      });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
<style lang="scss" scoped>
.cplist {
  padding: 22px;
  .cpbox {
    margin-bottom: 18px;
    border-radius: 5px;
    overflow: hidden;
    border-left: 3px solid $theme;
  }
}
.l-box {
  width: 490px;
  background-color: #fff;
  padding: $pardon;
  position: relative;
  .box1 {
    padding-top: 16px;
    height: 40px;
    font-size: 24px;
  }
  .txt0 {
    font-weight: bold;
    margin-bottom: 10px;
  }
  .txt1 {
    color: #aaaaaa;
  }
  .txt2 {
    color: #838383;
  }
}
.r-box::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -10%;
  height: 120%;
  z-index: 100;
  border-left: 30px dotted #f0f0f0;
}
.r-box {
  width: 214px;
  position: relative;
  background-image: linear-gradient(to right bottom, $theme, $theme-bor);
  .cf {
    color: #fff;
  }
  .txt0 {
    font-size: 20px;
  }
  .txt1 {
    font-size: 38px;
  }
  .txt2 {
    margin-top: 24px;
    font-size: 24px;
    height: 50px;
    width: 150px;
    line-height: 50px;
    background-color: #fff;
    border-radius: 25px;
  }
}
</style>