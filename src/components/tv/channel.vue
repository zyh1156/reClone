<template>
  <section class="bac">
    <!-- 视频框 -->
    <div class="lc-video position-relative overflow-hidden">
      <div id="player" class="qnplay"></div>
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
        <st></st>
      </div>
      <div v-show="menuInx==2" class="kj-box">
        <div class="kj-body">
          <div class="kj-li" v-for="(f,inx) in tcd.files" v-bind:key="inx">
            <div>{{f.name}}</div>
            <a class="kj-xz" :href="f.url" target="_blank">下载</a>
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
import st from "../cube/stepstone";
var roomId = 1;
var token = "090dd7df1a1e19de04b522f6d9e0b0b9c9679c81244cc65bb2c2060e4a8d8de0";
var ws = new WebSocket("ws://192.168.1.92:7272");
export default {
  data() {
    return {
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
      }
    };
  },
  methods: {
    tomes() {
      var msg = this.chatCon.slice(0, 60);
      ws.send(
        '{"room":' +
          roomId +
          ',"token":"' +
          token +
          '","type":"msg","msg":"' +
          msg +
          '"}'
      );
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
        let obj = JSON.parse(e.data);
        that.chatList.push(obj);
        // 清空输入框
        that.chatCon = "";
        if (obj.type == "bind" || obj.type == "close") {
          that.count = obj.count;
        } else if (obj.type == "msg") {
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
            ws.send(
              '{"room":' +
                roomId +
                ',"user_nickname":"人生无味","avatar":"http://thirdwx.qlogo.cn/mmopen/vi_32/jib4NtzQJTqfz1xjg3qJPcxK92nfJttjXpmeAY3oJ81u5M5pX8cWRqAwD67u1ibnaokMlwPHcjwWmLpJB04mKcfw/132","type":"bind","msg":"绑定"}'
            );
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
      let id = this.$route.params.zoneid;
      this.axios.post("/api/home/tv/player.html", { id: id }, res => {
        // 赋值讲师
        this.$set(this.tooloptions, "teach", res.data.data.teach);
        // 赋值关注
        res = res.data.data.data;
        let follow = {
          fav: res.is_fav == 1,
          id: res.id,
          string: "tv_post"
        };
        this.$set(this.tooloptions, "follow", follow);
        this.tcd = res;
        switch (res.ts_static) {
          case 0:
            this.toStatus0(res);
            break;
          case 1:
            this.toStatus1(res);
            break;
          default:
            this.toStatus3(res);
            break;
        }
      });
    },
    toStatus0(val) {
      console.log(val);
    },
    toStatus1(val) {
      console.log(val);
      let container = document.getElementById("player");
      let player = new QPlayer({
        url: val.look_url,
        poster: val.thumbnail,
        container: container,
        defaultViewConfig: {
          // 播放器默认展示方式
          showControls: true
        },
        // isLive: true,
        loggerLevel: 3
      });
    },
    toStatus3(val) {
      console.log(val);
    },
    gunText() {
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
    }
  },
  mounted() {
    this.setChat();
    this.getData();
    this.gunText();
  },
  components: {
    tool,
    menulist,st
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
@keyframes tixiu {
  from {
    background-position-x: 0px;
  }
  to {
    background-position-x: -736px;
  }
}
</style>