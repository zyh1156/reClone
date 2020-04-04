<template>
  <div class="d-flex title-box align-items-center justify-content-between">
    <div @click="jumproom" class="img overflow-hidden">
      <img v-lazy="teach.thumbnail" alt />
    </div>
    <div @click="jumproom" class="name">
      <div class="txt0 font-weight-bold">{{teach.post_title}}</div>
      <div class="txt1">{{teach.post_favorites}}人关注&nbsp;&nbsp;{{teach.post_hits}}人气</div>
    </div>
    <div @click="fllow" class="fllow-btn text-center" :class="{'fllow-in':teach.is_fav==1}">
      <span v-if="teach.is_fav==1">已关注</span>
      <span v-else>+关注</span>
    </div>
  </div>
</template>
<script>
import axios from "../../core/axios";
export default {
  data() {
    return {};
  },
  props: ["teach"],
  methods: {
    jumproom() {
      this.$router.push({ name: "room", params: { roomid: this.teach.id } });
    },
    tofllow: function() {
      this.axios.post(
        "/api/user/Favorites/setFavorites.html",
        {
          object_id: this.teach.id,
          table_name: "teach_post",
          url: "/teach/" + this.teach.id
        },
        res => {
          this.weui.toast(res.data.msg, 1500);
          this.teach.is_fav = this.teach.is_fav == 1 ? 0 : 1;
        }
      );
    },
    fllow: function() {
      if (this.teach.is_fav == 1) {
        this.weui.confirm("您确定取消关注吗？", () => {
          this.tofllow();
        });
      } else {
        this.tofllow();
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.title-box {
  background-color: #fff;
  height: 114px;
  padding: 0 $pardon;
  border-bottom: 1px solid #ededed;
  box-shadow: 0 8px 8px #ededed;
}
.img {
  width: 72px;
  border: 1px solid #f8f8f8;
  border-radius: 36px;
  height: 72px;
}
.name {
  margin-left: 18px;
  width: 498px;
  .txt0 {
    color: #333;
    font-size: 30px;
  }
  .txt1 {
    color: #919191;
    font-size: 24px;
    margin-top: 20px;
  }
}
.fllow-btn {
  color: #fff;
  background-color: $theme;
  border: 1px solid $theme-bor;
  width: 108px;
  height: 58px;
  line-height: 58px;
  border-radius: 29px;
}
.fllow-in {
  background-color: #ccc;
  border-color: #b8b8b8;
}
</style>