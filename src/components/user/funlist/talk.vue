<template>
  <section class="bac">
    <ct :ctxt="cobj"></ct>
    <!-- 内容 -->
    <div class="com-list">
      <div v-for="(cl,inx) in comlist" v-bind:key="inx" class="com-li position-relative">
        <div @click="del(cl.id)" class="tj position-absolute">
          <div class="iconfont icon-shanchu"></div>
        </div>
        <!-- 帖子信息栏 -->
        <div class="d-flex user">
          <div class="box0 position-relative">
            <img :src="user.avatar" alt />
          </div>
          <div class="box1">
            <div class="d-flex align-items-center b1-list">
              <div class="name">{{user.user_nickname}}</div>
              <div v-if="cl.is_quan_boss" class="master">圈主</div>
              <!-- <div class="top">置顶</div> -->
              <!-- <div class="level">lv1</div> -->
            </div>
            <div class="time">{{cl.create_time}}</div>
          </div>
        </div>
        <router-link :to="{name:'content',params:{contentid:cl.id,communityid:'user'}}">
          <!-- 标题栏 -->
          <div class="tit font-weight-bold">{{cl.post_title}}</div>
          <!-- 内容栏 -->
          <div class="con">
            <!-- 内容部分 -->
            <div class="line-clamp2" v-html="cl.post_content"></div>
            <!-- 图片部分 -->
            <div class="d-flex flex-wrap">
              <div v-for="(ph,inx) in cl.photos" v-bind:key="inx">
                <div class="phbox">
                  <img v-lazy="ph.url" alt />
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>

    <!-- 无效页 -->
    <div class="nodata-box">
      <div v-if="page.ojbk&&comlist.length==0" class="nodata text-center">
        <div class="txt0 iconfont icon-wushuju"></div>
        <div class="txt1">还没有发布话题</div>
      </div>
    </div>
  </section>
</template>
<script>
import ct from "../../cube/cube-title";
import { getCookie } from "../../../core/cookie";
export default {
  data() {
    return {
      comlist: [],
      user: {
        avatar: "",
        user_nickname: ""
      },
      page: {
        now: 0,
        max: 0,
        ojbk: false
      },
      cobj: {
        tit: "我的话题"
      }
    };
  },
  methods: {
    getData(page) {
      this.page.now = page;
      if (!this.page.ojbk) {
        this.axios.post(
          "/api/home/article/myitem.html",
          {
            page: page
          },
          res => {
            if (page == 1) {
              this.comlist = res.data.data.data;
            } else {
              this.comlist = this.comlist.concat(res.data.data.data);
            }
            this.page.max = res.data.data.last_page;
            this.page.ojbk = this.page.max <= page;
          }
        );
      }
    },
    del(x) {
      this.weui.confirm("话题删除后不可恢复，确定吗？", () => {
        this.axios.post("/api/home/article/itemdel.html", { id: x }, res => {
          this.weui.toast(res.data.msg, 1500);
          this.getData(1);
        });
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
    this.getData();
    this.user.avatar = getCookie("useravatar");
    this.user.user_nickname = getCookie("usernick");
    // 添加滚动监听
    document.addEventListener("scroll", this.scrollLoad);
  },
  components: {
    ct
  }
};
</script>
<style lang="scss" scoped>
.com-list {
  padding: $pardon;
  .txt0 {
    padding: $pardon 22px;
    background-color: #fff;
    border-bottom: 1px dashed #dedede;
  }
  .com-li {
    display: block;
    color: inherit;
    margin-bottom: $pardon;
    background-color: #fff;
    padding: 60px 22px 0;
    border-radius: $pardon/2;
    box-shadow: 0 10px 10px #ededed;

    .tj {
      top: $pardon;
      right: $pardon;
      font-size: 60px;
      color: var(--weui-RED);
    }
    .user {
      padding-bottom: 23px;
    }
    .tit {
      color: #232425;
      font-size: 28px;
      padding: 23px 0 15px;
    }
    .con {
      color: #5f5f5f;
      font-size: 26px;
      padding: $pardon/2 0 $pardon * 2;
      line-height: 36px;
    }
  }
  .box0 {
    margin-right: 20px;
    img {
      width: 78px;
      height: 78px;
      border-radius: 39px;
    }
    .sex {
      width: 25px;
      height: 25px;
      color: #fff;
      background-color: #91c4ef;
      left: 50px;
      top: 60px;
      font-size: 14px;
      line-height: 25px;
      border-radius: 25px;
    }
  }
  .box1 {
    padding-top: 6px;
    .b1-list {
      div {
        margin-right: 10px;
      }
    }
    .name {
      font-size: 28px;
    }
    .master,
    .top {
      border-radius: 4px;
      background-color: #f4d054;
      font-size: 23px;
      padding: 3px 17px;
    }
    .level {
      color: #fff;
      background-color: #333333;
      font-size: 14px;
      padding: 9px 22px;
      border-radius: 0 16px 16px 16px;
    }
    .time {
      color: #838383;
      margin-top: 22px;
      font-size: 20px;
    }
  }
}
</style>