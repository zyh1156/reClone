<template>
  <section class="bac">
    <ct :ctxt="cobj"></ct>
    <div class="box0">
      <div v-for="inx in 10" v-bind:key="inx" class="box1 d-flex justify-content-between">
        <div class="con0 position-relative">
          <div class="txt0 line-clamp2">诗刊是看是看诗刊是看是看诗刊是看是看诗刊是看是看</div>
          <div class="d-none con2 w-100 position-absolute">
            <div class="txt1">10%</div>
            <div class="txt2 w-100 position-relative"></div>
          </div>
        </div>
        <div class="con1 overflow-hidden">
          <img src="../../../assets/menu.jpg" alt />
        </div>
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
        tit: "我的学习"
      }
    };
  },
  methods: {
    getData() {
      this.axios.post(
        "/api/user/profile/getgo.html",
        {
          table: "goods_post"
        },
        res => {
          console.log(res);
        }
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
.box0 {
  padding: $pardon;
  .box1 {
    padding: $pardon;
    background-color: #fff;
    margin-bottom: $pardon;
    border-radius: 3px;
  }
}
.con0 {
  width: 410px;
  .txt0 {
    height: 76px;
    line-height: 1.4;
  }
}
.con1 {
  width: 218px;
  height: 122px;
  border-radius: 3px;
  img {
    width: 100%;
  }
}
.con2 {
  left: 0;
  bottom: 0;
  .txt1 {
    font-size: 16px;
  }
  .txt2 {
    background-color: #efefef;
    margin-top: 12px;
    height: 4px;
    border-radius: 2px;
  }
  .txt2::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 4px;
    width: 10%;
    border-radius: 2px;
    background-color: #f4bb44;
  }
}
</style>