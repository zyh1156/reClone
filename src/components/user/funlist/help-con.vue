<template>
  <section>
    <div class="box0 font-weight-bold">{{hcon.post_title}}</div>
    <div class="box1">
      <span class="txt0">老师名字</span>
      <span class="txt1">{{hcon.timeString}}</span>
    </div>
    <div class="box2" v-html="hcon.post_content"></div>
  </section>
</template>
<script>
let id;
import dayjs from "dayjs";
export default {
  data() {
    return {
      hcon: {}
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
    margin-right: 22px;
  }
  .txt1 {
    color: #a3a3a3;
  }
}
.box2 {
  padding: $pardon;
}
</style>