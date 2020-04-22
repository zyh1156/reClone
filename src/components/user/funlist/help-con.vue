<template>
  <section>
    <ct :ctxt="cobj"></ct>
    <div class="box0 font-weight-bold">{{hcon.post_title}}</div>
    <div class="box1">
      <span class="txt1">{{hcon.timeString}}</span>
      <span class="txt0">{{hcon.post_hits}}人已看</span>
    </div>
    <div class="box2" v-html="hcon.post_content"></div>
  </section>
</template>
<script>
let id;
import dayjs from "dayjs";
import ct from "../../cube/cube-title";
export default {
  data() {
    return {
      hcon: {},
      cobj: {}
    };
  },
  mounted() {
    id = this.$route.params.helpid;
    this.getData();
  },
  methods: {
    getData() {
      this.axios.post("/api/home/portal/show.html", { id: id }, res => {
        this.hcon = res.data.data;
        this.hcon.timeString = dayjs(res.data.data.create_time * 1000).format(
          "YYYY-MM-DD HH:mm:ss"
        );
      });
    }
  },
  components: {
    ct
  }
};
</script>
<style lang="scss" scoped>
.box0 {
  padding: 40px $pardon 20px;
  font-size: 38px;
  line-height: 1.4;
}
.box1 {
  padding: 20px $pardon;
  font-size: 24px;
  .txt0 {
    color: #56668e;
  }
  .txt1 {
    margin-right: 22px;
    color: #a3a3a3;
  }
}
.box2 {
  padding: $pardon;
}
</style>