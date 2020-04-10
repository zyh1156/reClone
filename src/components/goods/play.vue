<template>
  <section class="bac">
    <!-- 视频 -->
    <div v-show="pd.post_type==1">
      <div id="player" class="qnplay"></div>
    </div>
    <!-- 音频 -->
    <div v-show="pd.post_type==2">
      <div class="audio">
        <!-- 背景图 -->
        <div class="thumbnail overflow-hidden">
          <img :src="pd.thumbnail" alt />
        </div>
        <!-- 播放器 -->
        <div class="audio-con">
          <audio id="audioer"></audio>
        </div>
        <!-- 控制部分 -->
        <div class="position-relative">
          <!-- 时间 -->
          <div class="time-box position-absolute">{{mp3.m0}}:{{mp3.s0}}/{{mp3.m1}}:{{mp3.s1}}</div>
          <!-- 按钮 -->
          <div class="control d-flex align-items-center justify-content-center">
            <div
              @click="tojump(pd.pre_id)"
              :class="{'no-tap':pd.pre_id==0}"
              class="f0 c0 iconfont icon-previous"
            ></div>
            <div v-show="mp3.play" class="f1 c1 iconfont icon-poweroff-circle-fill"></div>
            <div v-show="!mp3.play" class="f1 c2 iconfont icon-play-circle-fill"></div>
            <div
              @click="tojump(pd.next_id)"
              :class="{'no-tap':pd.next_id==0}"
              class="f0 c3 iconfont icon-nextsong"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 详情 -->
    <div class="pd-box">
      <!-- 标题 -->
      <div class="pd-tit position-relative">
        <div class="tit font-weight-bold">{{pd.post_title}}</div>
        <div class="num">{{pd.post_hits}}&nbsp;人次</div>
        <!-- 邀请按钮 -->
        <div class="position-absolute share">
          <span class="iconfont icon-fenxiang"></span>
          <span>邀请</span>
        </div>
      </div>
      <cg :wd="wd" :mlinx="menuInx" @tojv="jumpv"></cg>
      <shopt :teach="teach"></shopt>
      <tool :options="tooloptions"></tool>
      <cpay :limitTime="limitTime" :wd="wd"></cpay>
    </div>
  </section>
</template>
<script>
import cg from "../cube/cube-goods";
import cpay from "../cube/cube-pay";
import shopt from "../cube/shoptitle";
import $ from "jquery";
import tool from "../cube/tool";
import dayjs from "dayjs";
import { setCookie, getCookie } from "../../core/cookie";
let clock, startTime;
export default {
  data() {
    return {
      pd: {},
      wd: {
        rate_goods_money: "",
        money2: [0, 0]
      },
      teach: {},
      limitTime: false,
      mp3: {
        play: false,
        m0: "00",
        s0: "00",
        m1: "00",
        s1: "00"
      },
      menuInx: [1],
      tooloptions: {
        follow: false
      }
    };
  },
  components: {
    cg,
    cpay,
    shopt,
    tool
  },
  methods: {
    getData: function() {
      // 获取数据
      let id = this.$route.query.id;
      if (id == undefined) {
        this.$router.push("/");
      } else {
        this.axios.post(
          "/api/home/goods/itemshow.html",
          {
            id: id
          },
          res => {
            let data = res.data.data.data;
            document.title = data.post_title;
            this.pd = data;
            this.getGood(data.goods_id);
            if (data.post_type == 1) {
              this.toplay(data);
            } else {
              this.toaudio(data);
            }
          }
        );
      }
    },
    toplay(play) {
      // 添加视频播放器
      let that = this;
      let container = document.getElementById("player");
      let player = new QPlayer({
        url: play.play_url,
        container: container,
        defaultViewConfig: {
          // 播放器默认展示方式
          showControls: true
        },
        loggerLevel: 3
      });
      //   播放控件展示方式
      player.on("play", function() {
        this.config.defaultViewConfig.showControls = false;
        // 记录开始时间
        startTime = new Date().getTime();
      });
      player.on("pause", function() {
        this.config.defaultViewConfig.showControls = true;
      });
      //   获取当前播放时间
      player.on("timeupdate", function() {
        //   记录结束时间
        clock = parseInt((new Date().getTime() - startTime) / 1000);
        // 写入cookie
        if (clock > 59) {
          let data = {
            id: play.id,
            end_play_time: parseInt(this.currentTime),
            look_time: clock,
            is_player_rate: parseInt((this.currentTime / this.totalTime) * 100),
            create_time: dayjs().format("YYYY-MM-DD"),
            toajax: false
          };
          setCookie("playtime", JSON.stringify(data));
        }
      });
    },
    toaudio(audio) {
      let music = document.querySelector("audio"),
        that = this,
        time;
      // 设置播放地址
      music.src = that.pd.play_url;
      //获取当前时长
      $("audio").on("timeupdate", function() {
        time = parseInt(music.currentTime);
        that.mp3.m0 = addzero(parseInt(time / 60));
        that.mp3.s0 = addzero(time % 60);
        //   记录结束时间
        clock = parseInt((new Date().getTime() - startTime) / 1000);
        // 写入cookie
        if (clock > 59) {
          let data = {
            id: audio.id,
            end_play_time: parseInt(music.currentTime),
            look_time: clock,
            is_player_rate: parseInt(
              (music.currentTime / music.duration) * 100
            ),
            create_time: dayjs().format("YYYY-MM-DD"),
            toajax: false
          };
          setCookie("playtime", JSON.stringify(data));
        }
      });
      //获取总播放时长
      $("audio").on("canplay", function() {
        // 获取播放时间
        time = parseInt(music.duration);
        that.mp3.m1 = addzero(parseInt(time / 60));
        that.mp3.s1 = addzero(time % 60);
      });
      //    播放按钮
      $(".f1.c2").on("click", function() {
        music.play();
        that.mp3.play = true;
        // 记录开始时间
        startTime = new Date().getTime();
      });
      //    暂停按钮
      $(".f1.c1").on("click", function() {
        music.pause();
        that.mp3.play = false;
      });
      //   记录播放数据
      //   强迫症
      function addzero(x) {
        return x < 10 ? "0" + x : x;
      }
    },
    getGood: function(gid) {
      // 获取商品详情
      this.axios.post("/api/home/goods/show.html", { id: gid }, res => {
        this.wd = res.data.data.data;
        let follow = {
          fav: res.data.data.data.is_fav == 1,
          id: res.data.id,
          string: "tv_post"
        };
        this.$set(this.tooloptions, "follow", follow);
        // 赋值讲师
        this.$set(this.tooloptions, "teach", res.teach);
        this.teach = res.data.data.teach;
        if (res.data.data.data.zk_endtime < new Date().getTime() / 1000) {
          this.limitTime = false;
        } else {
          this.limitTime = true;
        }
      });
    },
    jumpv(vid) {
      this.$router.push({ name: "play", query: { id: vid } });
      this.$router.go();
    },
    tojump(vid) {
      if (vid != 0) {
        this.jumpv(vid);
      }
    }
  },
  mounted() {
    //获取播放器信息
    this.getData();
  }
};
</script>
<style lang="scss" scoped>
.qnplay {
  width: 100%;
  height: 432.7px;
}
.audio {
  padding: $pardon;
  background-color: #fff;
  .thumbnail {
    border-radius: 7px 7px 0 0;
    img {
      width: 100%;
    }
  }
  .time-box {
    color: #fff;
    font-size: 22px;
    height: 30px;
    width: 160px;
    text-align: center;
    line-height: 30px;
    border-radius: 15px;
    left: -$pardon/2;
    top: -15px;
    background-color: #333333;
  }
  .control {
    //   此处iconfont带内边距
    color: $theme;
    box-shadow: 10px 10px 7px #f3f3f3, -10px 10px 7px #f3f3f3;
    border-radius: 0 7px 7px 0;
    padding: $pardon 0;
    .f0 {
      font-size: 100px;
      margin: 0 $pardon;
    }
    .f1 {
      font-size: 120px;
    }
    .no-tap {
      color: $theme-bac;
    }
  }
}
.pd-tit {
  background-color: #fff;
  padding: $pardon * 1.37 $pardon;
  .tit {
    font-size: 32px;
  }
  .num {
    color: #7b7b7b;
    margin-top: 38px;
  }
  .share {
    top: 95px;
    right: 0;
    color: #fff;
    padding: $pardon/2 $pardon $pardon/2 $pardon/2;
    background-image: linear-gradient(to right, $theme, $theme-bor);
    border-radius: 25.5px 0 0 25.5px;
    .iconfont {
      margin-right: $pardon/2;
    }
  }
}
</style>