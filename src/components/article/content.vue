<template>
  <section class="bac">
    <!-- 内容区 -->
    <div class="con-box">
      <!-- 头部 -->
      <div class="d-flex">
        <!-- 头像 -->
        <div class="user-ico">
          <img :src="user.avatar" alt />
        </div>
        <div>
          <!-- 昵称 -->
          <div class="nick">{{user.user_nickname}}</div>
          <!-- 时间 -->
          <div class="time">{{comd.create_time}}</div>
        </div>
      </div>
      <!-- 标题区 -->
      <div class="con-tit">{{comd.post_title}}</div>
      <!-- 内容区 -->
      <div class="con-con" v-html="comd.post_content"></div>
      <!-- 图片区 -->
      <div class="con-img d-flex flex-wrap">
        <div class="img-box" v-for="(ph,inx) in photos" v-bind:key="inx">
          <img :src="ph.url" alt />
        </div>
      </div>
    </div>
    <!-- 评论区 -->
    <div class="chat-box">
      <div class="db2-tit ctit" v-show="commentList.length!=0">评论</div>
      <div class="cul">
        <div class="cli position-relative" v-for="(com,inx) in commentList" v-bind:key="inx">
          <!-- 回复 -->
          <!-- <div @click="toreply(com)" class="reply">
            <span class="iconfont icon-icon_sms"></span>
            <span>回复</span>
          </div>-->
          <!-- 用户信息 -->
          <div class="d-flex">
            <div class="user-ico">
              <img :src="com.avatar" alt />
            </div>
            <div>
              <div class="user-name">{{com.full_name}}</div>
              <div class="user-time">{{com.create_time}}</div>
            </div>
          </div>
          <!-- 用户内容 -->
          <div class="user-cont">
            <div>{{com.content}}</div>
            <!-- <div class="user-reply">
              <span class="uname">Cytus</span>
              <span>：时尚大师大大</span>
            </div>-->
          </div>
        </div>
        <!-- 无人评论 -->
        <div class="nobb text-center" v-show="commentList.length==0">
          <div class="iconfont icon-edit"></div>
          <div class="txt0">暂时没人评论，快来</div>
          <div @click="nobb" class="txt1">发表评论</div>
        </div>
      </div>
    </div>
    <!-- 输入框 -->
    <div class="say-box">
      <div id="showIOSDialog2" class="sbox position-fixed w-100">
        <div class="noinput">说点什么...</div>
      </div>
    </div>

    <!-- 评论弹窗 -->
    <aside class="t1">
      <div id="dialogs">
        <div class="js_dialog" id="iosDialog2" style="display: none;">
          <div class="weui-mask"></div>
          <div id="js_dialog_2" class="weui-half-screen-dialog">
            <div class="d-flex justify-content-between align-items-center content-tit">
              <!-- 标题 -->
              <div class="db2-tit">
                <span>写下评论</span>
                <span class="znum">({{comments.content.length}}/200)</span>
              </div>
              <!-- 功能按钮 -->
              <div class="d-flex align-items-center">
                <div class="btn0 close">取消</div>
                <div class="btn1" @click="addComments">提交</div>
              </div>
            </div>
            <div class="content-box">
              <div>
                <textarea maxlength="200" v-model="comments.content" placeholder="好记性不如烂笔头"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
    <div v-show="readImg" class="swiper-box">
      <!-- 轮播图 -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(ph,inx) in photos" v-bind:key="inx">
            <img :src="ph.maxurl" alt />
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </section>
</template>
<script>
// 帖子页面
import $ from "jquery";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
let comid, mySwiper;
export default {
  data() {
    return {
      comd: {},
      user: {},
      comments: {
        object_id: "",
        table_name: "article_post",
        content: "",
        url: ""
      },
      commentList: [],
      readImg: false,
      photos: [],
      page: {
        now: 0,
        max: 0,
        ojbk: false
      }
    };
  },
  mounted() {
    comid = this.$route.params.contentid;
    this.comments.object_id = comid;
    this.comments.url = this.$route.path;
    this.addcon();
    this.getData();
    this.getComments(1);
    this.scrollLoad();
  },
  updated() {
    this.toSwiper();
    let that = this;
    $(".img-box")
      .off("click")
      .on("click", () => {
        this.readImg = true;
      });
  },
  methods: {
    toSwiper() {
      if (mySwiper) {
        mySwiper.destroy(false);
      }
      mySwiper = new Swiper(".swiper-container", {
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        }
      });
    },
    addcon() {
      // 轮播弹窗
      $(".swiper-box").on("click", res => {
        this.readImg = false;
      });
    //   $(".swiper-container").on("click", function(e) {
    //     e.stopPropagation();
    //   });
      // WeUI弹窗
      var $dialog1 = $(".t1 #js_dialog_1"),
        $dialog2 = $(".t1 #js_dialog_2"),
        $iosDialog2 = $(".t1 #iosDialog2");
      $("#showIOSDialog2").on("click", function() {
        // $iosDialog2.fadeIn(200);
        $iosDialog2.show();
        $dialog2.addClass("weui-half-screen-dialog_show");
      });
      $(".t1 #dialogs").on("click", ".weui-mask", function() {
        $(this)
          .parents(".js_dialog")
          .hide();
        $dialog1.removeClass("weui-half-screen-dialog_show");
        $dialog2.removeClass("weui-half-screen-dialog_show");
      });
      $(".t1 .close").on("click", function() {
        $(".weui-mask").click();
      });
    },
    getData() {
      let inx = 0;
      // 获得基础数据
      this.axios.post(
        "/api/home/article/item_show.html",
        { id: comid },
        res => {
          res = res.data.data;
          document.title = res.data.post_title;
          this.comd = res.data;
          this.user = res.user;
          this.photos = res.data.photos;
          if (this.photos && this.photos.length > 0) {
            this.photos.forEach(ele => {
              inx = ele.url.indexOf("-thumbnail300x300");
              if (inx > 0) {
                ele.maxurl = ele.url.slice(0, inx);
              } else {
                ele.maxurl = ele.url;
              }
            });
          }
        }
      );
    },
    getComments(page) {
      // 获得评论列表
      if (!this.page.ojbk) {
        this.page.now = page;
        this.axios.post(
          "/api/user/commentss/getComments.html",
          {
            object_id: comid,
            table_name: "article_post",
            page: page
          },
          res => {
            if (page == 1) {
              this.commentList = res.data.data.data;
            } else {
              this.commentList = this.commentList.concat(res.data.data.data);
            }
            this.page.max = res.data.data.last_page;
            this.page.ojbk = page >= this.page.max;
          }
        );
      }
    },
    nobb() {
      $("#showIOSDialog2").click();
    },
    addComments() {
      let data = this.comments;
      this.axios.post("/api/user/commentss/setComments.html", data, res => {
        $(".weui-mask").click();
        this.comments.content = "";
        this.page.ojbk = false;
        this.weui.toast(res.data.msg, 1500);
        this.getComments(1);
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
          this.getCommet(inx);
        }
      }
    }
    // toreply(com) {
    //   if (com) {
    //     this.comments.to_user_id = com.user_id;
    //     this.comments.parent_id = com.id;
    //   } else {
    //     this.comments.to_user_id = comd.user_id;
    //     this.comments.parent_id = "";
    //   }
    //   this.addComments();
    // }
  }
};
</script>
<style lang="scss" scoped>
.con-box {
  padding: 45px;
  background-color: #fff;
  .user-ico {
    margin-right: 20px;
    img {
      width: 80px;
      height: 80px;
      border-radius: 40px;
    }
  }
  .nick {
    font-weight: bold;
    margin-top: 5px;
  }
  .time {
    color: #9d9d9d;
    margin-top: 20px;
    font-size: 20px;
  }
  .con-tit {
    margin-top: 37px;
    font-weight: bold;
  }
  .con-con {
    color: #5f5f5f;
    font-size: 24px;
    margin-top: 10px;
    line-height: 1.4;
  }
  .con-img {
    margin-top: 22px;
    .img-box {
      margin: 8px;
      width: 200px;
      height: 200px;
      overflow: hidden;
      border-radius: 6px;
    }
  }
}
.chat-box {
  margin-top: 40px;
  padding: $pardon $pardon $pardon * 2;
  background-color: #fff;
  .ctit {
    margin-left: -$pardon;
  }
  .cul {
    .cli {
      border-top: 2px solid #e3e3e3;
      padding-top: $pardon;
    }

    .reply {
      color: #a9a9a9;
      cursor: pointer;
      position: absolute;
      right: $pardon/2;
      top: $pardon/2;
      font-size: 24px;
    }
  }
  .user-ico {
    margin-right: $pardon/2;
    img {
      width: 78px;
      height: 78px;
      border-radius: 39px;
    }
  }
  .user-name {
    margin-top: 12px;
    font-size: 30px;
    font-weight: bold;
  }
  .user-time {
    color: #a9a9a9;
    margin-top: 22px;
    font-size: 20px;
  }
  .user-cont {
    line-height: 1.4;
    padding: 25px 25px 25px 90px;
  }
  .user-reply {
    margin-top: 12px;
    font-size: 24px;
    .uname {
      color: #3b7def;
    }
  }
}
.say-box {
  height: 180px;
  .sbox {
    left: 0;
    bottom: 0;
    border-top: 2px solid #e3e3e3;
    padding: $pardon;
    background-color: #fff;
    box-shadow: 0 -10px 10px #f8f8f8;
    .noinput {
      color: #b2b2b2;
      font-size: 26px;
      padding: 22px;
      line-height: 38px;
      border: 2px solid #e3e3e3;
      border-radius: 43px;
      outline: none;
      background-color: #f8f8f8;
    }
  }
}

.db2-tit::before {
  position: absolute;
  left: 18px;
  height: 50%;
  width: 8px;
  background-image: linear-gradient(to right, $theme, $theme-bor);
  content: "";
  top: 25%;
  border-radius: 4px;
}
.db2-tit {
  color: #121212;
  padding: $pardon 35px;
  position: relative;
  line-height: 1;
}
.content-tit {
  margin-top: $pardon;
  .znum {
    margin-left: 22px;
    color: #949494;
    font-size: 22px;
  }
  .btn0 {
    color: $theme;
  }
  .btn1 {
    color: #fff;
    background-color: $theme;
    border: 1px solid $theme-bor;
    height: 60px;
    line-height: 60px;
    text-align: center;
    padding: 0 35px;
    border-radius: 30px;
    margin: 0 36px 0 20px;
  }
}
.content-box {
  padding: 0 $pardon $pardon;
  textarea {
    width: 100%;
    height: 380px;
    border: none;
    outline: none;
    line-height: 1.4;
    resize: none;
    padding: 10px;
  }
}

.nobb {
  padding: $pardon 0;
  line-height: 1.4;
  .iconfont {
    font-size: 200px;
    color: $theme-bac;
  }
  .txt1 {
    color: #fff;
    margin-top: $pardon;
    border-radius: 10px;
    display: inline-block;
    padding: $pardon/2 $pardon * 1.5;
    background-image: linear-gradient(to right, $theme, $theme-bor);
  }
}
.swiper-box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 200;
  background-color: rgba(0, 0, 0, 0.86);
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
  }
}
</style>