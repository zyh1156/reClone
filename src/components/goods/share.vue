<template>
  <section>
    <!-- 大图 -->
    <div class="big-box d-flex align-items-center">
      <img :src="bigimg" alt />
    </div>
    <!-- 小图 -->
    <div class="small-box">
      <div class="img-text text-center">长按上方图片分享给好友</div>
      <div class="img-box w-100 overflow-auto d-flex flex-nowrap">
        <div
          class="img-con flex-shrink-0"
          @click="getBigImg(il.url)"
          v-for="(il,inx) in imglist"
          v-bind:key="inx"
        >
          <img :class="{'active':selInx==il.url}" :src="il.image" alt />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      bigimg: "",
      imglist: [],
      selInx: 0
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.axios.post("/api/user/index/getadthumb.html", {}, res => {
        this.imglist = res.data.data;
        // 加载完成后获取第一个
        this.selInx = res.data.data[0].url;
        this.getBigImg(res.data.data[0].url);
      });
    },
    getBigImg(x) {
      this.selInx = x;
      let data = {
        user_id: this.$store.state.userid,
        kc_id: this.$route.query.kc_id,
        bj_id: x,
        table_name:this.$route.query.type
      };
      this.axios.post("/api/user/index/getsharethumb.html", data, res => {
        this.bigimg = res.data.data;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.big-box {
  padding: 0 94px;
  min-height: calc(100vh - 200px);
  img {
    width: 100%;
    border-radius: 18px;
  }
}
.small-box {
  height: 200px;
}
.img-text {
  color: #fff;
  background-color: $theme;
  padding: 15px 0;
  font-size: 26px;
}
.img-box {
  .img-con {
    padding: 14px;
  }
  img {
    width: 96px;
    height: 96px;
    border: 4px solid #fff;
    border-radius: 4px;
  }
  .active {
    border-color: $theme-bor;
  }
}
</style>