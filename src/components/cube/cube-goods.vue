<template>
  <!-- 课程表 -->
  <!-- 内容部分 -->
  <article class="regrays">
    <!-- 标题 -->
    <div class="d-flex top-body">
      <menul :mlist="menuList" :meuninx="mlinx2" @tapset="setMenu"></menul>
    </div>
    <!-- 内容 -->
    <div class="desc-body">
      <!-- 课程介绍 -->
      <div v-show="menuInx==0" class="db-box0">
        <div v-html="wd.post_content"></div>
      </div>
      <!-- 听课列表 -->
      <div v-show="menuInx==1" class="db-box1">
        <div
          v-for="(ws,inx) in schedule"
          class="db-cont d-flex align-items-center justify-content-between"
          v-bind:key="inx"
          @click="jumpv(ws.id)"
        >
          <div class="txt-panpel">
            <!-- 标题 -->
            <div class="txt0">
              <span
                class="iconfont"
                v-bind:class="[{'icon-shipin':ws.post_type==1},{'icon-yinle':ws.post_type==2}]"
              ></span>
              <span>{{ws.type}}：{{ws.post_title}}</span>
            </div>
            <!-- 时长 -->
            <div class="txt1" :class="{'islook':ws.is_look==1}">
              <span class="iconfont icon-shijian"></span>
              <span v-if="ws.is_look==1">
                <span>立即试</span>
                <span v-if="ws.post_type==1">看</span>
                <span v-else>听</span>
              </span>
              <span v-else>{{ws.file_time}}</span>
            </div>
          </div>
          <div class="img-panpel overflow-hidden position-relative">
            <img v-lazy="ws.thumbnail" alt />
            <div v-if="ws.is_look==1" class="ico position-absolute iconfont icon-play-circle-fill"></div>
          </div>
        </div>
      </div>
      <!-- 学员心得 -->
      <div v-show="menuInx==2" class="t1 db-box2">
        <!-- 有人评论 -->
        <div v-show="!feelStatus||feel.length>0" class="db2-tit font-weight-bold position-relative">
          <div>学生评论</div>
          <div id="showIOSDialog2" class="position-absolute user-edit">
            <span class="iconfont icon-chuangzuo"></span>
            <span>我要评论</span>
          </div>
        </div>
        <!-- 无人评论 -->
        <div class="nobb text-center" v-show="feelStatus&&feel.length==0">
          <div class="iconfont icon-edit"></div>
          <div class="txt0">暂时没人评论，快来</div>
          <div @click="nobb" class="txt1">发表评论</div>
        </div>
        <!-- 评论列表 -->
        <div class="db2-body">
          <div class="db2-con" v-for="(wf,inx) in feel" v-bind:key="inx">
            <!-- 头部 -->
            <div class="user d-flex align-items-center justify-content-between">
              <!-- 昵称 -->
              <div class="d-flex align-items-center">
                <div class="user-img">
                  <img v-lazy="wf.avatar" alt />
                </div>
                <div class="db2-niko font-weight-bold">{{wf.full_name}}</div>
              </div>
              <!-- 点赞 -->
              <div class="d-none">
                <span class="iconfont icon-dianzan"></span>
                <span>{{wf.like_count}}</span>
              </div>
            </div>
            <!-- 内容 -->
            <div class="db2-content">{{wf.content}}</div>
            <!-- 课程 -->
            <div v-if="wf.t_full_name" class="db2-schedule">
              <span class="txt0">[讲师回复]：</span>
              <span class="txt1">{{wf.c_content}}</span>
            </div>
            <!-- 日期 -->
            <div class="db2-date d-flex justify-content-between">
              <!-- 日程 -->
              <div>{{wf.create_time}}</div>
              <!-- 回复 -->
              <div v-if="wd.is_teach==1&&!wf.t_full_name" @click="toreply(wf)" class="reply">
                <span class="iconfont icon-icon_sms"></span>
                <span>回复</span>
              </div>
            </div>
          </div>
          <div v-if="zing" class="zloading d-flex justify-content-center align-items-center">
            <div class="icon">
              <img src="../../assets/gif/psb.gif" alt />
            </div>
            <div>加载中</div>
          </div>
        </div>
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
                <span class="znum">({{convey.length}}/200)</span>
              </div>
              <!-- 功能按钮 -->
              <div class="d-flex align-items-center">
                <div class="btn0 close">取消</div>
                <div class="btn1" @click="sendComment">提交</div>
              </div>
            </div>
            <div class="content-box">
              <div>
                <textarea maxlength="200" v-model="convey" placeholder="好记性不如烂笔头"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  </article>
</template>
<script>
import menul from "./menulist";
import $ from "jquery";
import axios from "axios";
import { getCookie } from "../../core/cookie";
export default {
  data() {
    return {
      mlinx2: this.mlinx,
      //课程
      schedule: [],
      //评论列表
      feel: [],
      menuList: [
        { text: "课程介绍" },
        { text: "听课列表" },
        { text: "学生评论" }
      ],
      menuInx: [0],
      //   评论
      convey: "",
      //   评论类型
      feelType: false,
      //    评论数据
      feelData: {},
      //    评论获取状态
      feelStatus: false,
      //   页面
      feelPage: {
        nowpage: 0,
        maxpage: 0
      },
      zing: false
    };
  },
  methods: {
    getitem: function() {
      if (this.schedule.length == 0) {
        //获取听课列表
        this.axios.post(
          "/api/home/goods/getitem.html",
          {
            kc_id: this.wd.kc_id
          },
          res => {
            this.schedule = res.data.data;
          }
        );
      }
    },
    // 获取评论
    getCommet: function(page) {
      this.feelPage.nowpage = page;
      let that = this;
      if (!this.feelStatus) {
        this.zing = true;
        this.axios.post(
          "/api/user/commentss/getComments.html",
          {
            object_id: this.wd.kc_id,
            table_name: "goods_post",
            page: page
          },
          res => {
            this.zing = false;
            // 合并数组
            this.feel = this.feel.concat(res.data.data.data);
            this.feelPage.maxpage = res.data.data.last_page;
            // 监听是否加载完
            if (page < this.feelPage.maxpage) {
              this.feelStatus = false;
            } else {
              this.feelStatus = true;
            }
          },
          true
        );
      }
    },
    setMenu(val) {
      if (val[0] == 1) {
        this.getitem();
      } else if (val[0] == 2) {
        this.getCommet(1);
      }
      this.menuInx = val[0];
    },
    jumpv(vid) {
      this.$emit("tojv", vid);
    },
    // 去回复
    toreply(wf) {
      this.feelType = true;
      $(".t1 #showIOSDialog2").click();
      this.feelData = {
        parent_id: wf.id, //回复者ID
        to_user_id: wf.user_id //发给谁
      };
    },
    //发送评论
    sendComment: function() {
      let data = {
        object_id: this.wd.kc_id,
        table_name: "goods_post",
        content: this.convey,
        url:this.$route.path,
        parent_id: "",
        to_user_id: this.wd.user_id
      };
      if (this.feelType) {
        data.parent_id = this.feelData.parent_id; //发给谁
        data.to_user_id = this.feelData.to_user_id; //发给谁
      }
      if (this.convey.length == 0) {
        this.weui.alert("内容不能为空。");
      } else {
        this.axios.post("/api/user/commentss/setComments.html", data, res => {
          //   评论成功
          if (res.data.code == 1) {
            $(".weui-mask").click();
            this.convey = "";
            this.weui.toast(res.data.msg, 1500);
            this.feelStatus = false;
            this.getCommet(1);
          } else {
            this.weui.alert(res.data.msg);
          }
        });
      }
    },
    nobb() {
      $(".t1 #showIOSDialog2").click();
    },
    addcon() {
      // WeUI弹窗
      this.feelType = false;
      var $dialog2 = $(".t1 #js_dialog_2"),
        $iosDialog2 = $(".t1 #iosDialog2");
      $(".t1 #showIOSDialog2").on("click", function() {
        // $iosDialog2.fadeIn(200);
        $iosDialog2.show();
        $dialog2.addClass("weui-half-screen-dialog_show");
      });
      $(".t1 #dialogs").on("click", ".weui-mask", function() {
        $(this)
          .parents(".js_dialog")
          .hide();
        $dialog2.removeClass("weui-half-screen-dialog_show");
      });
      $(".t1 .close").on("click", function() {
        $(".weui-mask").click();
      });
    },
    scrollLoad() {
      let scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight; //document的滚动高度
      let nowScotop =
        document.documentElement.clientHeight || document.body.clientHeight; //可视区高度
      let wheight =
        document.documentElement.scrollTop || document.body.scrollTop; //已滚动高度
      //   读取评论列表
      if (this.menuInx == 2) {
        //   是否快滚到底
        if (nowScotop >= scrollHeight - wheight * 1.1) {
          // 页数是否拉满
          if (this.feelPage.nowpage < this.feelPage.maxpage) {
            let inx = this.feelPage.nowpage + 1;
            //获取数据
            this.getCommet(inx);
          }
        }
      }
    }
  },
  components: {
    menul
  },
  props: ["wd", "mlinx"],
  mounted() {
    this.addcon();
    // 添加滚动监听
    document.addEventListener("scroll", this.scrollLoad);
  }
};
</script>
<style lang="scss" scoped>
.regrays {
  padding: $pardon 0 0;
}
.top-body {
  background-color: #fefefe;
  border-bottom: 1px solid #f7f7f7;
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
.desc-body {
  background-color: #fafafa;
  .db-box0 {
    padding: 16px 27px;
    img {
      margin-bottom: 16px;
    }
  }
  .db-box1 {
    padding: $pardon/2 $pardon;
    background-color: #fefefe;
    .db-cont {
      background-color: #f8f8f8;
      padding: 27px;
      margin: $pardon/2 0;
      border-radius: 5px;
      .txt-panpel {
        width: 390px;
        .iconfont {
          margin-right: 10px;
        }
        .txt0 {
          color: #0a0a0a;
          line-height: 1.4;
        }
        .txt1 {
          color: #808080;
          margin-top: 42px;
          font-size: 26px;
        }
        .islook {
          font-weight: 700;
          color: $theme;
        }
      }
      .img-panpel {
        width: 218px;
        height: 128px;
        overflow: hidden;
        border: 1px solid #fff;
        border-radius: 6px;
        .ico {
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          text-align: center;
          line-height: 128px;
          font-size: 54px;
          color: $theme;
          border-radius: 6px;
          background-color: rgba(0, 0, 0, 0.3);
        }
      }
    }
  }
  .db-box2 {
    background-color: #fefefe;
    .user-edit {
      width: 226px;
      height: 54px;
      font-weight: normal;
      text-align: center;
      line-height: 54px;
      border-radius: 27px;
      color: $theme-bor;
      background-color: $theme-bac;
      top: $pardon/2;
      right: $pardon;
      .iconfont {
        margin-right: $pardon/2;
      }
    }
    .db2-body {
      padding: 0 $pardon $pardon;
    }
    .db2-con {
      background-color: #f8f8f8;
      padding: $pardon;
      border-radius: 12px;
      margin: 0 0 $pardon/2;
    }
    .user .iconfont {
      margin-right: 8px;
    }
    .user-img {
      width: 64px;
      height: 64px;
      margin-right: $pardon/2;
      img {
        border-radius: 32px;
        border: 1px solid #fff;
      }
    }
    .db2-content {
      margin-top: $pardon/2;
      line-height: 1.4;
    }
    .db2-schedule {
      color: #989898;
      margin-top: 20px;
      word-break: break-all;
      line-height: 1.4;
      .txt0 {
        color: $theme-bor;
      }
    }
    .db2-date {
      color: #989898;
      margin-top: $pardon/2;
      font-size: 24px;
      .iconfont {
        margin-right: 8px;
      }
    }
  }
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
.reply {
  cursor: pointer;
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
.zloading {
  color: #989898;
  padding: $pardon;
  .icon {
    margin-right: $pardon/2;
    img {
      width: 28px;
    }
  }
}
</style>