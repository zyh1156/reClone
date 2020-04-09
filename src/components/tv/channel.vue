<template>
  <section class="bac">
    <!-- 视频框 -->
    <div class="lc-video position-relative overflow-hidden">
      <div id="player" class="qnplay"></div>
    </div>
    <menulist :mlist="menul"></menulist>
    <!-- 聊天框 -->
    <div class="lc-chat overflow-auto">
      <div v-for="(cl,inx) in chatList" v-bind:key="inx">
        <div v-if="cl.type=='bind'" class="welcome-box text-center">
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
    <!-- 输入框 -->
    <form action="javascript:;" @submit="tomes">
      <div class="lc-input position-fixed w-100">
        <input maxlength="60" v-model="chatCon" type="text" placeholder="来说点什么吧..." />
      </div>
    </form>
    <tool></tool>
  </section>
</template>
<script>
import $ from "jquery";
import menulist from "../cube/menulist"
import tool from "../cube/tool";
var roomId = 1;
var token = "090dd7df1a1e19de04b522f6d9e0b0b9c9679c81244cc65bb2c2060e4a8d8de0";
var ws = new WebSocket("ws://192.168.1.92:7272");
export default {
  data() {
    return {
      chatCon: "",
      chatList: [],
      menul:[{text:"聊天"},{text:"详情"},{text:"课件"},{text:"关注"}]
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
        that.chatCon = "";
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
        res = res.data.data.data;
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
        poster:val.thumbnail,
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
    }
  },
  mounted() {
    this.setChat();
    this.getData();
  },
  components: {
    tool
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
.lc-chat {
  height: calc(100vh - 400px);
  background-color: #f5f6f6;
  padding: 18px 18px 118px;
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
        background-color: #fff;
        padding: 10px;
        border-radius: 6px;
        font-size: 26px;
      }
    }
  }
}
.lc-input {
  bottom: 0;
  left: 0;
  padding: $pardon/2;
  background-color: #fff;
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
</style>