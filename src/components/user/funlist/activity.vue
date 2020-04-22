<template>
  <section class="bac">
    <ct :ctxt="cobj"></ct>
    <div class="box0">
      <div v-for="(or,inx) in orList" v-bind:key="inx">
        <router-link
          class="box1 d-flex justify-content-between"
          :to="{name:'goods',params:{actid:or.id}}"
        >
          <div class="con0 position-relative">
            <div class="txt0 line-clamp2">{{or.post_title}}</div>
            <div class="txt3">{{or.create_time}}</div>
            <div class="d-none con2 w-100 position-absolute">
              <div class="txt1">10%</div>
              <div class="txt2 w-100 position-relative"></div>
            </div>
          </div>
          <div class="con1 overflow-hidden">
            <img :src="or.thumbnail" alt />
          </div>
        </router-link>
      </div>

      <!-- 无效页 -->
      <div class="nodata-box">
        <div v-if="page.ojbk&&orList.length==0" class="nodata text-center">
          <div class="txt0 iconfont icon-wushuju"></div>
          <div class="txt1">还没有参加活动</div>
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
        tit: "我的活动"
      },
      orList: [],
      page: {
        now: 0,
        max: 0,
        ojbk: false
      }
    };
  },
  methods: {
    getData(page) {
      this.page.now = page;
      this.axios.post(
        "/api/user/profile/getkclist.html",
        {
          table: "act_post",
          page: page
        },
        res => {
          if (page == 1) {
            this.orList = res.data.data.data;
          } else {
            this.orList = this.orList.concat(res.data.data.data);
          }
          this.page.max = res.data.data.last_page;
          this.page.ojbk = this.page.max <= page;
        }
      );
    },
    scrollLoad() {
      let scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight; //document的滚动高度
      let nowScotop =
        document.documentElement.clientHeight || document.body.clientHeight; //可视区高度
      let wheight =
        document.documentElement.scrollTop || document.body.scrollTop; //已滚动高度

      //   是否快滚到底
      if (nowScotop >= scrollHeight - wheight * 1.1) {
        // 页数是否拉满
        if (this.page.now < this.page.max) {
          let inx = this.page.now + 1;
          //获取数据
          this.getData(inx);
        }
      }
    }
  },
  mounted() {
    this.getData(1);
    // 添加滚动监听
    document.addEventListener("scroll", this.scrollLoad);
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
    font-weight: bold;
    color: initial;
  }
  .txt3 {
    margin-top: 24px;
    color: gray;
    font-size: 24px;
  }
}
.con1 {
  width: 218px;
  height: 125px;
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