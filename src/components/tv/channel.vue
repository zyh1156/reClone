<template>
  <section class="bac">
    <div class="lc-video position-relative overflow-hidden">
      <!-- 倒计时 -->
      <div
        v-if="tcd.ts_static==0"
        class="text-center djs-box align-content-center d-flex align-items-center flex-wrap"
        :style="djsbac"
      >
        <div class="w-100 txt1" v-if="djs.nolive">直播未开始</div>
        <div class="w-100" v-else>
          <div class="txt0">距离开播还有</div>
          <div class="txt1">
            <span class="txt2">{{djs.d}}</span>
            <span>天</span>
            <span class="txt2">{{djs.h}}</span>
            <span>:</span>
            <span class="txt2">{{djs.m}}</span>
            <span>:</span>
            <span class="txt2">{{djs.s}}</span>
          </div>
        </div>
      </div>
      <!-- 直播 -->
      <div v-show="tcd.ts_static!=0" id="player" class="qnplay"></div>
    </div>
    <!-- 菜单栏 -->
    <div class="position-relative">
      <menulist :mlist="menul" @tapset="tapMenu"></menulist>
      <div class="zlw d-flex position-absolute">
        <div>打赏</div>
      </div>
    </div>
    <!-- 流行标语 -->
    <div class="warn-text">
      <div class="wt-body">欢迎所有学员进入本直播间，互动聊天时请文明用语，禁止发布黄色,暴力,反动的言论，否则后果自行承担，一经查到永久封号！</div>
    </div>
    <div class="max-box overflow-auto">
      <!-- 聊天框 -->
      <div v-show="menuInx==0" class="lc-chat">
        <div v-for="(cl,inx) in chatList" v-bind:key="inx">
          <div v-if="cl.type=='bind'||cl.type=='close'" class="welcome-box text-center">
            <div class="msg">{{cl.message}}</div>
          </div>
          <div v-if="cl.type=='msg'" class="d-flex chat-box">
            <!-- 头像 -->
            <div class="img">
              <img :src="cl.avatar" alt />
            </div>
            <div class="con">
              <!-- 昵称 -->
              <div class="niko d-flex align-items-center">
                <!-- <span class="pz">管理员</span> -->
                <span>{{cl.user_nickname}}</span>
              </div>
              <!-- 消息内容 -->
              <div class="msg">{{cl.message}}</div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="menuInx==1" class="tcd-box">
        <div v-html="tcd.post_content"></div>
      </div>
      <div v-show="menuInx==2" class="kj-box">
        <div class="kj-body">
          <div class="kj-li" v-for="(f,inx) in tcd.files" v-bind:key="inx">
            <div>{{f.name}}</div>
            <a class="kj-xz" :href="f.url" target="_blank">下载</a>
          </div>
          <div v-if="tcd.nofiles" class="nodata text-center">
            <div class="txt0 iconfont icon-wushuju"></div>
            <div class="txt1">暂无课件</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 输入框 -->
    <form action="javascript:;" @submit="tomes">
      <div class="lc-input position-fixed w-100">
        <input maxlength="60" v-model="chatCon" type="text" placeholder="来说点什么吧..." />
      </div>
    </form>
    <div class="in-shadow"></div>
    <tool :options="tooloptions"></tool>
    <div class="humen">
      <div class="txt1">在线</div>
      <div class="txt2">{{count}}人</div>
    </div>
    <!-- <gift></gift> -->
  </section>
</template>
<script>
import $ from "jquery";
import menulist from "../cube/menulist";
// import gift from "./gift";
import tool from "../cube/tool";
import { getCookie } from "../../core/cookie";
import share from "../../core/share";
let roomid, token, userid, usernick, useravatar;
var ws = new WebSocket("ws://" + location.host + ":7272");
var loadjs = require("loadjs");
export default {
  data() {
    return {
      djsbac: {},
      chatCon: "",
      chatList: [],
      menul: [
        { text: "聊天" },
        { text: "详情" },
        { text: "课件" },
        { text: "打赏" }
      ],
      menuInx: 0,
      tcd: {},
      count: 1,
      tooloptions: {
        fllows: false,
        teach: {}
      },
      djs: {
        d: 0,
        h: 0,
        m: 0,
        s: 0,
        nolive: false
      }
    };
  },
  methods: {
    tomes() {
      var msg = this.chatCon.slice(0, 60);
      let obj = JSON.stringify({
        room: roomid,
        token: token,
        type: "msg",
        msg: msg
      });
      ws.send(obj);
    },
    setChat() {
      let that = this;
      ws.onopen = function() {
        // console.info("与服务端连接成功");
        //ws.send('有新用户来了\n');//相当于发送一个初始化信息
        //console.info("向服务端发送心跳包字符串");
        //setInterval(show,3000);
      };
      ws.onConnect = function(e) {};
      ws.onmessage = function(e) {
        //   将事件添加到消息列表
        let obj = JSON.parse(e.data);
        that.chatList.push(obj);
        // 清空输入框
        that.chatCon = "";
        if (obj.type == "bind" || obj.type == "close") {
          // 刷新人数
          that.count = obj.count;
        } else if (obj.type == "msg") {
          // 滚动聊天框
          let h = $(".lc-chat").height();
          $(".max-box").animate(
            {
              scrollTop: h
            },
            400
          );
        }
        switch (obj.type) {
          case "init": //绑定用户
            obj = JSON.stringify({
              room: roomid,
              user_nickname: usernick,
              avatar: useravatar,
              user_id: userid,
              type: "bind",
              msg: "绑定"
            });
            ws.send(obj);
            break;
          case "bind": //绑定用户成功后回调，刷新当前总人数
            break;
          case "close": //有人退出了，刷新当前总人数
            break;
          default:
            //发评论
            break;
        }
      };
    },
    getData() {
      this.axios.post(
        "/api/home/tv/player.html",
        { id: roomid },
        res => {
          if (res.data.code == 0) {
            this.$router.push({ name: "zone", params: { zoneid: roomid } });
          }
          // 赋值讲师
          this.$set(this.tooloptions, "teach", res.data.data.teach);
          // 赋值关注
          res = res.data.data.data;
          share({
            title: res.post_title,
            desc: res.post_excerpt,
            imgUrl: res.thumbnail
          });
          let follow = {
            fav: res.is_fav == 1,
            id: res.id,
            string: "tv_post"
          };
          this.$set(this.tooloptions, "follow", follow);
          this.tcd = res;
          if (!res.files) {
            this.tcd.nofiles = true;
          }
          this.djsbac.backgroundImage = "url(" + res.thumbnail + ")";
          switch (res.ts_static) {
            case 0:
              this.toStatus0(res);
              break;
            default:
              loadjs("https://sdk-release.qnsdk.com/qiniu-web-player-1.2.3.js", () => {
                this.toStatus1(res);
              });
              break;
          }
        },
        true,
        true
      );
    },
    toStatus0(val) {
      let now = new Date().getTime(),
        end = val.starttime * 1000,
        obj,
        last,
        clock;
      if (now < end) {
        clock = setInterval(() => {
          now += 88;
          if (now >= end) {
            // 时间到了以后刷新页面
            clearInterval(clock);
            this.$router.go();
          }
          var d = parseInt((end - now) / (24 * 60 * 60 * 1000));
          var h = parseInt(
            ((end - now) % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
          );
          var m = parseInt(((end - now) % (60 * 60 * 1000)) / (60 * 1000));
          var s = (((end - now) % (60 * 1000)) / 1000).toFixed(2);
          this.djs = {
            d: addzero(d),
            h: addzero(h),
            m: addzero(m),
            s: addzero(s),
            nolive: false
          };
        }, 88);
      } else {
        this.djs.nolive = true;
      }
      function addzero(x) {
        return x < 10 ? "0" + x : x;
      }
    },
    toStatus1(val, str) {
      let container = document.getElementById("player");
      let url = val.ts_static == 1 ? val.look_url : val.huifang_url;
      let player = new QPlayer({
        url: url,
        poster: val.thumbnail,
        container: container,
        defaultViewConfig: {
          // 播放器默认展示方式
          showControls: true
        },
        isLive: val.ts_static == 1,
        loggerLevel: 3
      });
      //   播放控件展示方式
      player.on("play", function() {
        this.config.defaultViewConfig.showControls = false;
      });
      player.on("pause", function() {
        this.config.defaultViewConfig.showControls = true;
      });
      player.on("error", () => {
        this.tcd.ts_static = 0;
        this.djs.nolive = true;
      });
    },
    gunText() {
      // 滚动字幕
      let a = $(".wt-body"),
        w0 = a.width(),
        w1 = window.innerWidth,
        i = w1;
      setInterval(() => {
        i--;
        if (i < -(w0 + w1)) {
          i = w1;
        }
        a.css({ transform: "translateX(" + i + "px)" });
      }, 20);
    },
    tapMenu(val) {
      this.menuInx = val[0];
    },
    getChat() {
      let arr = [];
      this.axios.post(
        "/api/home/tv/getRoomComment.html",
        { room_id: roomid },
        res => {
          arr = res.data.data.data;
          for (let i = 0; i < arr.length; i++) {
            arr[i].type = "msg";
            this.chatList.unshift(arr[i]);
          }
          setTimeout(() => {
            // 滚动聊天框
            let h = $(".lc-chat").height();
            $(".max-box").animate(
              {
                scrollTop: h
              },
              400
            );
          }, 200);
        }
      );
    }
  },
  mounted() {
    roomid = this.$route.params.zoneid;
    token = getCookie("token");
    userid = getCookie("userid");
    usernick = getCookie("usernick");
    useravatar = getCookie("useravatar");
    this.getChat();
    this.setChat();
    this.gunText();
    this.getData();
  },
  components: {
    tool,
    menulist
    // gift
  },
  updated() {
    $(".tool-btn").css("bottom", "23.5vw");
  }
};
</script>
<style lang="scss" scoped>
.lc-video {
  height: 432.7px;
  border-bottom: 2px solid #dbdde1;
  box-shadow: 0 6px 6px #dedede;
}
.qnplay {
  height: 100%;
}
.welcome-box {
  margin: 8px;
  .msg {
    display: inline-block;
    padding: 10px 20px;
    font-size: 20px;
    border-radius: 24px;
    background-color: #fff;
  }
}
.max-box {
  height: calc(100vh - 432px - 46px -79px);
  .tcd-box {
    padding: $pardon $pardon 90px;
  }
}
.lc-chat {
  min-height: 100%;
  background: url("../../assets/bac/tvbac.jpg");
  background-attachment: fixed;
  background-size: 100% auto;
  padding: $pardon/2 $pardon/2 $pardon/2 + 100;
  .chat-box {
    padding: 9px 0;
    .img {
      padding-right: 18px;
      img {
        width: 62px;
        height: 62px;
        border-radius: 31px;
      }
    }
    .con {
      width: 650px;
      .niko {
        margin-top: 10px;
        color: #969696;
        height: 38px;
        font-size: 24px;
        .pz {
          border-radius: 4px;
          color: #fff;
          padding: 6px 10px;
          background-color: #50b1e1;
          margin-right: 8px;
        }
      }
      .msg {
        margin-top: 6px;
        line-height: 36px;
        background-color: $theme-bor;
        padding: 10px;
        border-radius: 6px;
        font-size: 26px;
        display: inline-block;
        position: relative;
      }
      .msg::before {
        content: "";
        border-color: transparent $theme-bor transparent transparent;
        border-width: 10px;
        border-style: solid;
        left: -18px;
        position: absolute;
        top: 3px;
      }
    }
  }
}
.lc-input {
  bottom: 0;
  left: 0;
  z-index: 10;
  padding: $pardon/2;
  background-color: #fff;
  background-image: url(../../assets/bac/psc.png);
  box-shadow: 0 -6px 6px #dedede;
  input {
    width: 100%;
    border: 2px solid #e2e2e2;
    border-radius: 6px;
    font-size: 26px;
    line-height: 2.3;
    padding: 0 10px;
  }
}
.warn-text {
  position: relative;
  z-index: 500;
  padding: 10px;
  font-size: 26px;
  white-space: nowrap;
  color: #682f00;
  overflow: hidden;
  background-color: #fbeac2;
}
.humen {
  position: fixed;
  right: 20px;
  bottom: 100px;
  width: 114px;
  text-align: center;
  font-size: 24px;
  color: #fff;
  .iconfont {
    margin-right: 6px;
  }
  div {
    display: inline-block;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .txt1 {
    padding: 5px 10px 0;
    border-radius: $pardon/2 $pardon/2 0 0;
  }
  .txt2 {
    padding: 1px 10px 5px;
    border-radius: $pardon/2;
    width: 114px;
  }
}
.kj-box {
  padding: $pardon $pardon/2;
  .kj-body {
    .kj-li {
      height: 86px;
      position: relative;
      font-weight: bold;
      padding: $pardon;
      background: #fff;
      border-bottom: 4px solid #f8f8f8;
    }
    .kj-xz {
      position: absolute;
      font-size: 24px;
      right: 21px;
      top: 21px;
      z-index: 10;
      padding: 10px;
      background-image: linear-gradient(to right, $theme, $theme-bor);
      border-radius: 6px;
      color: #fff;
      font-weight: normal;
    }
  }
}
.zlw {
  top: 0;
  right: 0;
  width: 25%;
  height: 69px;
  z-index: 120;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-image: linear-gradient(to right, $theme, $theme-bor);
  .ti {
    width: 32px;
    height: 32px;
    margin-right: 6px;
    background-size: auto 100%;
    background-image: url(../../assets/bac/Aegis.png);
    background-position-x: 0px;
    animation: tixiu 3s steps(23) infinite;
  }
}
.djs-box {
  height: 100%;
  background-color: #010001;
  background-size: 100% auto;
  background-position: center;
  color: #fff;
  line-height: 2.4;
  .txt1 {
    font-size: 50px;
    font-weight: bold;
    span {
      margin: 0 10px;
    }
  }
}
@keyframes tixiu {
  from {
    background-position-x: 0px;
  }
  to {
    background-position-x: -736px;
  }
}
</style>