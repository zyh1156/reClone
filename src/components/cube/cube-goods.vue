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
        <div class="db2-tit font-weight-bold position-relative">
          <div>精选学生心得</div>
          <div id="showIOSDialog2" class="position-absolute user-edit">
            <span class="iconfont icon-chuangzuo"></span>
            <span>记录我的心得</span>
          </div>
        </div>
        <div class="db2-body">
          <div class="db2-con" v-for="(wf,inx) in wares.feel" v-bind:key="inx">
            <!-- 头部 -->
            <div class="user d-flex align-items-center justify-content-between">
              <!-- 昵称 -->
              <div class="d-flex align-items-center">
                <div class="user-img">
                  <img v-lazy="wf.img" alt />
                </div>
                <div class="db2-niko font-weight-bold">{{wf.niko}}</div>
              </div>
              <!-- 点赞 -->
              <div>
                <span class="iconfont icon-dianzan"></span>
                <span>{{wf.agrees}}</span>
              </div>
            </div>
            <!-- 内容 -->
            <div class="db2-content">{{wf.content}}</div>
            <!-- 课程 -->
            <div class="db2-schedule">
              <span class="iconfont icon-dingdan"></span>
              <span>{{wf.schedule}}</span>
            </div>
            <!-- 日期 -->
            <div class="db2-date d-flex justify-content-between">
              <!-- 日程 -->
              <div>{{wf.date}}</div>
              <!-- 转发 -->
              <div>
                <span class="iconfont icon-fenxiang"></span>
                <span>分享</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 弹窗 -->

    <aside class="t1">
      <div id="dialogs">
        <div class="js_dialog" id="iosDialog2" style="display: none;">
          <div class="weui-mask"></div>
          <div id="js_dialog_2" class="weui-half-screen-dialog">
            <div class="d-flex justify-content-between align-items-center content-tit">
              <!-- 标题 -->
              <div class="db2-tit">
                <span>记录心得</span>
                <span class="znum">({{convey.length}}/200)</span>
              </div>
              <!-- 功能按钮 -->
              <div class="d-flex align-items-center">
                <div class="btn0 close">取消</div>
                <div class="btn1" @click="toComment">提交</div>
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
import ss from "./stepstone";
import $ from "jquery";
export default {
  data() {
    return {
      mlinx2: this.mlinx,
      schedule: [],
      feel: [],
      menuList: [
        { text: "课程介绍" },
        { text: "听课列表" },
        { text: "学员心得" }
      ],
      menuInx: [0],
      convey: "",
      wares: {
        //   介绍列表
        feel: [
          {
            niko: "鸿雁",
            img: require("../../assets/menu.jpg"),
            agrees: 2,
            content:
              "美国新增近4000例 韩国罕见新冠病例 欧盟主席感谢中国 留学生硬闯小区 安徽解除封闭管理 法国新增1404例 古巨基儿子正面照 北京新增报告2例 香奈儿宣布停产 德国确诊病例破万 美股第五次熔断 国际油价逼近20$ 道指重回20000点 纽约监狱员工确诊",
            schedule: "数据录入：身份证号，日期是乱码？原因在这里",
            date: "2020年3月20日 15点48分"
          },
          {
            niko: "鸿雁",
            img: require("../../assets/menu.jpg"),
            agrees: 2,
            content:
              "美国新增近4000例 韩国罕见新冠病例 欧盟主席感谢中国 留学生硬闯小区 安徽解除封闭管理 法国新增1404例 古巨基儿子正面照 北京新增报告2例 香奈儿宣布停产 德国确诊病例破万 美股第五次熔断 国际油价逼近20$ 道指重回20000点 纽约监狱员工确诊",
            schedule: "数据录入：身份证号，日期是乱码？原因在这里",
            date: "2020年3月20日 15点48分"
          }
        ]
      }
    };
  },
  methods: {
    getitem: async function() {
      if (this.schedule.length == 0) {
        //获取听课列表
        let data = await this.axios.post("/api/home/goods/getitem.html", {
          kc_id: this.wd.kc_id
        });
        if (data.data.code == 1) {
          this.schedule = data.data.data;
        }
      }
    },
    getCommet: async function() {
      if (this.feel.length == 0) {
        let data = await this.axios.post(
          "/api/user/commentss/getComments.html",
          { object_id: this.wd.kc_id, table_name: "goods_post", url: "hrpp" }
        );
        console.log(data);
      }
    },
    setMenu(val) {
      if (val[0] == 1) {
        this.getitem();
      } else if (val[0] == 2) {
        this.getCommet();
      }
      this.menuInx = val[0];
    },
    jumpv(vid) {
      this.$emit("tojv", vid);
    },
    toComment: async function() {
      let that = this,
        data = {
          object_id: this.wd.kc_id,
          table_name: "goods_post",
          content: this.convey,
          url: location.pathname + location.search,
          parent_id: "",
          user_id: this.wd.user_id
        };
      if (this.convey.length == 0) {
        this.weui.alert("内容不为空。");
      } else {
        let res = await this.axios.post(
          "/api/user/commentss/setComments.html",
          data
        );
        //   评论成功
        if (res.data.code == 1) {
          $(".weui-mask").click();
          this.weui.toast(res.data.msg, 3000);
        } else {
          this.weui.alert(res.data.msg);
        }
      }
    },
    addcon() {
      // WeUI弹窗
      var $dialog1 = $(".t1 #js_dialog_1"),
        $dialog2 = $(".t1 #js_dialog_2"),
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
        $dialog1.removeClass("weui-half-screen-dialog_show");
        $dialog2.removeClass("weui-half-screen-dialog_show");
      });
      $(".t1 .close").on("click", function() {
        $(".weui-mask").click();
      });
    }
  },
  components: {
    menul,
    ss
  },
  props: ["wd", "mlinx"],
  mounted() {
    this.addcon();
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
  height: 30px;
  width: 8px;
  background-image: linear-gradient(to right, $theme, $theme-bor);
  content: "";
  top: 25.5px;
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
          font-size: 24px;
          line-height: 1.33;
        }
        .txt1 {
          color: #808080;
          margin-top: 42px;
          font-size: 24px;
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
      font-size: 24px;
      background-color: $theme-bac;
      top: $pardon/2;
      right: $pardon;
      .iconfont {
        margin-right: $pardon/2;
      }
    }
    .db2-body {
      padding: 0 18px 18px;
    }
    .db2-con {
      background-color: #f8f8f8;
      padding: 27px;
      border-radius: 12px;
      margin-bottom: 18px;
    }
    .user .iconfont {
      margin-right: 8px;
    }
    .user-img {
      width: 64px;
      height: 64px;
      border: 1px solid #fff;
      margin-right: $pardon/2;
      img {
        border-radius: 32px;
      }
    }
    .db2-content {
      margin-top: 27px;
      line-height: 1.54;
    }
    .db2-schedule {
      color: #989898;
      margin-top: 20px;
      font-size: 24px;
      .iconfont {
        margin-right: 10px;
      }
    }
    .db2-date {
      color: #989898;
      margin-top: 27px;
      font-size: 20px;
      .iconfont {
        margin-right: 8px;
      }
    }
  }
}
.content-tit {
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
</style>