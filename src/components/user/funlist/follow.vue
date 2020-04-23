<template>
  <section class="bac">
    <ct :ctxt="cobj" v-if="type==0"></ct>
    <ct :ctxt="cobj2" v-if="type==1"></ct>
    <!-- 关注的老师 -->
    <div class="ful" v-if="type==0">
      <div class="fli" v-for="(f,inx) in flist" v-bind:key="inx">
        <div class="type0 d-flex align-items-center">
          <div class="box0">
            <img :src="f.thumbnail" alt />
          </div>
          <div class="box1">
            <div class="txt0">{{f.post_title}}</div>
            <div class="txt1">
              <!-- <span>帮你发挥天赋异禀</span> -->
            </div>
          </div>
          <div @click="unfollow(f)" class="box2 text-center">取消关注</div>
        </div>
        <div class="type1"></div>
      </div>
    </div>
    <!-- 收藏的课程 -->
    <div class="ful" v-if="type==1">
      <div class="fli" v-for="(f,inx) in flist" v-bind:key="inx">
        <div class="type1 d-flex">
          <div class="box0">
            <div class="img-box">
              <img :src="f.thumbnail" alt />
            </div>
            <div class="men-box text-center">
              <span class="iconfont icon-remen"></span>
              <span>25.7万</span>
            </div>
          </div>
          <div class="box1">
            <div class="txt1 line-clamp2">
              <span class="txt3">专栏</span>
              <span>{{f.post_title}}</span>
            </div>
            <div class="txt2 d-flex align-items-center justify-content-between">
              <div class="txt0">已更新11期</div>
              <div @click="unfollow(f)" class="box2 text-center">取消收藏</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 没有数据的时候 -->
    <div class="nodata-box">
      <div v-if="page.ojbk&&flist.length==0" class="nodata text-center">
        <div class="txt0 iconfont icon-wushuju"></div>
        <div class="txt1" v-if="type==0">还没有关注讲师</div>
        <div class="txt1" v-if="type==1">还没有收藏课程</div>
      </div>
    </div>
  </section>
</template>
<script>
import ct from "../../cube/cube-title";
export default {
  data() {
    return {
      type: 2,
      flist: [],
      page: {
        now: 0,
        max: 0,
        ojbk: false
      },
      cobj: {
        tit: "关注"
      },
      cobj2: {
        tit: "收藏"
      }
    };
  },
  components: {
    ct
  },
  methods: {
    getData(page) {
      this.page.now = page;
      let data = {
        page: page,
        table: this.type == 0 ? "teach_post" : "goods_post"
      };
      if (!this.page.ojbk) {
        this.axios.post("/api/user/profile/getFavorites.html", data, res => {
          if (page == 1) {
            this.flist = res.data.data.data;
          } else {
            this.flist = this.flist.concat(res.data.data.data);
          }
          this.page.max = res.data.data.last_page;
          this.page.ojbk = this.page.max <= page;
        });
      }
    },
    unfollow(id) {
      let data = {
        object_id: id.object_id,
        table_name: this.type == 0 ? "teach_post" : "goods_post"
      };
      this.axios.post("/api/user/Favorites/setFavorites.html", data, res => {
        this.getData();
      });
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
    this.type = this.$route.query.type;
    this.getData(1);
    this.scrollLoad();
  }
};
</script>
<style lang="scss" scoped>
.ftit {
  padding: 37px $pardon 10px;
}
.ful {
  padding: $pardon;
  .fli {
    border-radius: 5px;
    padding: $pardon;
    background-color: #fff;
    margin-bottom: $pardon;
    box-shadow: 10px 10px 10px #cfcfcf;
  }
}
.type0 {
  .box0 {
    img {
      width: 72px;
      height: 72px;
      border-radius: 36px;
    }
  }
  .box1 {
    padding: 0 15px;
    width: 410px;
    .txt0 {
      font-weight: bold;
      line-height: 45px;
    }
    .txt1 {
      margin-top: $pardon/2;
      color: #919191;
      font-size: 24px;
    }
  }
}
.type1 {
  .box0 {
    width: 215px;
    border-radius: 3px;
    overflow: hidden;
    margin-right: $pardon/2;
    .img-box {
      height: 129px;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .men-box {
      color: #9a9a9a;
      font-size: 22px;
      background-color: #f4f4f4;
      padding: 10px 0;
    }
  }
  .box1 {
    width: 410px;
    .txt0 {
      color: #919191;
      font-size: 24px;
    }
    .txt1 {
      font-weight: bold;
      line-height: 40px;
      height: 80px;
    }
    .txt2 {
      margin-top: 35px;
    }
    .txt3 {
      display: inline-block;
      padding: 2px;
      border: 2px solid #c0c0c0;
      border-radius: 4px;
      margin-right: 8px;
      font-size: 22px;
      line-height: 1.2;
    }
  }
}
.box2 {
  width: 160px;
  height: 56px;
  font-size: 26px;
  line-height: 56px;
  border-radius: 28px;
  border: 2px solid #b0b0b0;
}
.nodata-box {
  padding: $pardon;
}
</style>