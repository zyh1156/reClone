<template>
  <section class="bac">
    <ct :ctxt="cobj"></ct>
    <!-- 产品详情 -->
    <div class="cbox0">
      <!-- 商品 -->
      <div class="box1 d-flex">
        <div class="box2 overflow-hidden">
          <img v-lazy="cl.thumbnail" alt />
        </div>
        <div class="box3">
          <div class="box4 font-weight-bold line-clamp2">{{cl.post_title}}</div>
          <div class="box5 d-flex justify-content-between">
            <div class="box6">购买数量：{{cl.num}}</div>
            <div class="box6">还可赠送：{{cl.k_num}}人</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 赠送列表 -->
    <div class="u2" v-if="glist.length>0">领取详情</div>
    <div class="give-ul d-flex flex-wrap">
      <div class="give-li" v-for="(gl,inx) in glist" v-bind:key="inx">
        <div class="u0">
          <img :src="gl.avatar" alt />
        </div>
        <div class="u1 text-truncate text-center">{{gl.user_nickname}}</div>
      </div>
      <div v-if="glist.length==0" class="w-100 text-center give-no">
        <div class="iconfont icon-liwu1"></div>
        <div>暂时没有好友接收赠送课程。</div>
        <div>点击下方链接，马上送出！</div>
      </div>
    </div>
    <!-- 链接地址 -->
    <div class="reshare">
      <div class="re0">
        <div @click="fztext" class="re2 text-center font-weight-bold">
          <div>点此复制链接</div>
          <div>轻松赠送课程</div>
          <!-- <span>http://zyhzyh.com</span> -->
        </div>
      </div>
      <div class="re1 text-center">(通过微信右上角分享效果也是一样的噢~)</div>
    </div>
  </section>
</template>
<script>
let id, key, goodsid, name, url2, userid;
import ct from "../cube/cube-title";
import { getCookie } from "../../core/cookie";
import share from "../../core/share";
export default {
  data() {
    return {
      cobj: {
        tit: "赠送详情"
      },
      cl: {},
      glist: []
    };
  },
  components: {
    ct
  },
  methods: {
    getData() {
      this.axios.post(
        "/api/user/user_friends/index_show.html",
        { id: id },
        res => {
          res = res.data.data;
          key = res.order.key;
          this.cl = res.order;
          this.glist = res.data;
          userid = getCookie("userid");
          url2 =
            location.origin +
            "/give/giveacc?giveid=" +
            id +
            "&givekey=" +
            key +
            "&user_pid=" +
            userid;
          share({
            title: res.order.post_title,
            imgUrl: res.order.thumbnail,
            link: url2
          });
        }
      );
    },
    fztext() {
      var textarea = document.createElement("input"); //创建input对象
      var currentFocus = document.activeElement; //当前获得焦点的元素
      var userid = getCookie("userid");
      document.body.appendChild(textarea); //添加元素
      //   textarea.value = location.href;
      textarea.value = url2;
      textarea.focus();
      if (textarea.setSelectionRange)
        textarea.setSelectionRange(0, textarea.value.length);
      //获取光标起始位置到结束位置
      else textarea.select();
      try {
        var flag = document.execCommand("copy"); //执行复制
        this.weui.alert("复制成功，快分享给你的好友吧~");
      } catch (eo) {
        var flag = false;
      }
      document.body.removeChild(textarea); //删除元素
      currentFocus.focus();
      return flag;
    }
  },
  mounted() {
    id = this.$route.query.giveid;
    this.getData();
  }
};
</script>
<style lang="scss" scoped>
.cbox0 {
  margin-top: $pardon;
  padding: $pardon;
  background-color: #fff;
}
.box2 {
  width: 280px;
  height: 161.5px;
  margin-right: $pardon;
  border-radius: 7px;
  img {
    width: 100%;
  }
}
.box4 {
  height: 75px;
}
.box3 {
  width: 370px;
  font-size: 26px;
  line-height: 1.4;
}
.box5 {
  margin-top: $pardon * 1.5;
  .box6 {
    color: #b5b5b5;
  }
}
.reshare {
  padding: $pardon;
  .re0 {
    padding: $pardon;
    background-color: #fff;
  }
  .re2 {
    font-size: 40px;
    padding: $pardon;
    background-color: #f4f4f4;
    color: $theme;
    line-height: 1.4;
    word-break: break-all;
  }
  .re1 {
    font-size: 22px;
    color: #999;
    padding: $pardon;
  }
}
.u2 {
  padding: $pardon/2 $pardon 0;
  background-color: #fff;
  font-size: 24px;
}
.give-ul {
  min-height: 500px;
  overflow: auto;
  //   padding: $pardon;
  background-color: #fff;
  .give-li {
    width: 100px;
    margin: 25px;
    .u0 {
      img {
        height: 100px;
        border-radius: 50px;
      }
    }
    .u1 {
      margin-top: 13px;
      color: #939393;
    }
  }
}
.give-no {
  color: #999;
  border-top: 2px solid #f0f0f0;
  line-height: 1.4;
  margin: 0 $pardon;
  .iconfont {
    font-size: 200px;
  }
}
</style>