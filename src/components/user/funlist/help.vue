<template>
  <section class="bac">
    <ct :ctxt="cobj"></ct>
    <div class="tit"></div>
    <div class="q-ul">
      <router-link
        :to="{name:'help',params:{helpid:hl.id}}"
        class="d-block q-li"
        v-bind:key="inx"
        v-for="(hl,inx) in hlist"
      >{{hl.post_title}}</router-link>
    </div>
  </section>
</template>
<script>
import ct from "../../cube/cube-title"
export default {
  data() {
    return {
      hlist: [],
      cobj:{
          tit:"帮助与反馈"
      }
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.axios.post("/api/home/portal/page.html", {}, res => {
        this.hlist = res.data.data.data;
      });
    }
  },
  components: {
    ct
  }
};
</script>
<style lang="scss" scoped>
.tit {
  padding: 22px $pardon;
}
.q-ul {
  padding-left: $pardon;
  background-color: #fff;
  .q-li {
    padding: $pardon $pardon $pardon 0;
    border-bottom: 1px solid #f3f3f3;
    background: url(../../../assets/right-ico2.png) no-repeat 680px center;
    background-size: auto 24px;
    color: inherit;
    font-weight: bold;
  }
}
</style>