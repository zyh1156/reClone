<template>
  <section class="bac">
    <!-- 标题 -->
    <div class="rtit">
      <input v-model="acd.title" class="w-100" type="text" placeholder="输入标题效果更好哦~" />
    </div>
    <!-- 内容 -->
    <div class="rcon">
      <!-- 评论区 -->
      <div class="txt-box">
        <textarea v-model="acd.content" class="w-100" placeholder="输入内容..."></textarea>
      </div>
      <!-- 图片区 -->
      <div class="img-box d-flex flex-wrap">
        <div class="img-body position-relative" v-bind:key="inx" v-for="(il,inx) in imgList">
          <img :src="il" alt />
          <div @click="del(inx)" class="del position-absolute iconfont icon-shanchu"></div>
        </div>
        <div @click="toupload" v-if="imgList.length<6&&upbtn" class="img-body addBtn">
          <span class="iconfont icon-zengjia"></span>
        </div>
      </div>
    </div>
    <!-- 发布按钮 -->
    <div class="rbtn w-100 position-fixed">
      <div @click="addAC" class="gorel text-center">发布</div>
    </div>
  </section>
</template>
<script>
var loadjs = require("loadjs");
let loading;
import axios from "axios";
import { getCookie } from "../../core/cookie";
export default {
  data() {
    return {
      acd: {
        parent_id: "",
        title: "",
        content: "",
        thumbnail: []
      },
      imgList: [],
      upbtn: false
    };
  },
  methods: {
    addAC() {
      if (this.acd.title.trim() == "") {
        this.weui.alert("标题不能为空。");
      } else {
        loading = this.weui.loading("获取中");
        let token = getCookie("token");
        axios
          .post("/api/home/article/addArticle.html", this.acd, {
            headers: {
              "XX-Token": token,
              "XX-Device-Type": "mobile"
              // "XX-Api-Version": "1.0.0"
            }
          })
          .then(
            res => {
              loading.hide();
              this.weui.toast(res.data.msg, 1500);
              this.$router.push({
                name: "content",
                params: { contentid: res.data.data }
              });
            },
            res => {
              loading.hide();
            }
          );
      }
    },
    addUp() {
      let that = this;
      loadjs("http://res.wx.qq.com/open/js/jweixin-1.6.0.js", () => {
        this.axios.post(
          "/api/home/wx_tool/share.html",
          { url: location.href },
          res => {
            res = res.data.data;
            wx.config(res.jsdk); // false：调试关闭
            wx.ready(function() {
              wx.checkJsApi({
                jsApiList: [
                  "chooseImage",
                  "previewImage",
                  "uploadImage",
                  "downloadImage"
                ],
                success: function(res) {
                  if (res.checkResult.getLocation == false) {
                    this.weui.alert(
                      "你的微信版本太低，不支持微信JS接口，请升级到最新的微信版本！"
                    );
                  } else {
                    that.upbtn = true;
                  }
                }
              });
            });
          },
          true
        );
      });
    },
    toupload() {
      let that = this,
        num = 6 - this.imgList.length, //总数量
        localIds, //本地IDs
        length, //本地数量
        i, //当前上传索引
        serverId; //服务器ID
      if (num < 1) {
        return;
      }
      wx.chooseImage({
        count: num,
        sizeType: ["compressed"],
        success: function(res) {
          localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
          length = localIds.length;
          i = 0;
          if (length == 0) {
            return;
          }
          function upload() {
            wx.uploadImage({
              localId: localIds[i],
              isShowProgressTips: 1,
              success: function(res) {
                that.imgList.push(localIds[i]);
                that.acd.thumbnail.push(res.serverId);
                i++;
                if (i < length) {
                  upload();
                } else {
                  localIds = [];
                }
              }
            });
          }
          upload();
        }
      });
    },
    del(inx) {
      this.imgList.splice(inx, 1);
      this.acd.thumbnail.splice(inx, 1);
    }
  },
  mounted() {
    this.acd.parent_id = parseInt(this.$route.params.communityid);
    this.addUp();
  }
};
</script>
<style lang="scss" scoped>
.rtit {
  padding: 0 $pardon;
  background-color: #fff;
  input {
    font-weight: bold;
    line-height: 1.4;
    border: none;
    outline: none;
    padding: $pardon 0;
    border-bottom: 2px solid #dedede;
  }
}
.rcon {
  background-color: #fff;
  .txt-box {
    padding: $pardon;
  }
  textarea {
    border: none;
    outline: none;
    height: 235px;
    resize: none;
    padding: 0 10px;
  }
  .img-box {
    min-height: 134px;
    padding: $pardon/2;
    .img-body {
      width: 214px;
      height: 214px;
      margin: $pardon/2;
      border-radius: 10px;
      overflow: hidden;
      img {
        width: 100%;
      }
      .del {
        top: 0;
        right: 0;
        padding: 10px;
        font-size: 40px;
        color: var(--weui-RED);
      }
    }
    .addBtn {
      line-height: 214px;
      text-align: center;
      color: #b2b2b2;
      font-size: 100px;
      border: 2px solid #b2b2b2;
    }
  }
  .fun-btn {
    font-size: 40px;
    .iconfont {
      padding: $pardon;
    }
  }
}
.rbtn {
  left: 0;
  bottom: 0;
  padding: $pardon 30px;
  box-shadow: 0 -10px 10px #f8f8f8;
  .gorel {
    color: #fff;
    font-size: 34px;
    height: 100px;
    line-height: 100px;
    background-image: linear-gradient(to right, $theme, $theme-bor);
    border-radius: 50px;
  }
}
</style>