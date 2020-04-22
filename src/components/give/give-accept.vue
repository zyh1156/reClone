<template>
  <section class="bac">
    <div class="acbox">
      <div class="txt0 font-weight-blod">您收到了一份礼物</div>
      <div class="txt1">
        <span>来自您的好友&nbsp;&nbsp;</span>
        <span class="user font-weight-bold">{{goods.user_nickname}}</span>
      </div>
      <div class="txt2">
        <img :src="goods.thumbnail" alt />
      </div>
      <div class="txt3 font-weight-bold">{{goods.post_title}}</div>
      <div class="txt4">
        <span>
          你的好友在
          <a href="/">{{goods.site_title}}</a>赠送了您一份课程，
        </span>
        <span>
          <a href="/">{{goods.site_title}}</a>是国内新兴的在线课程平台。
        </span>
      </div>
      <div class="txt5 text-center">
        <div v-if="goods.is_pay==0" @click="getgive" class="txt6 no font-weight-bold">收下礼物</div>
        <div v-else-if="goods.is_pay==1" @click="getgive2" class="txt6 font-weight-bold">已领取</div>
      </div>
    </div>
  </section>
</template>
<script>
let id, key, id2;
export default {
  data() {
    return {
      goods: {
        is_pay: 2
      },
      name: ""
    };
  },
  mounted() {
    id = this.$route.query.giveid;
    key = this.$route.query.givekey;
    document.title = "好友礼物";
    this.getData();
  },
  methods: {
    getData() {
      this.axios.post(
        "/api/user/user_friends/show.html",
        { id: id, key: key },
        res => {
          this.goods = res.data.data;
          id2 = res.data.data.id;
        }
      );
    },
    getgive() {
      let data = {
        key: key,
        id: id
      };
      this.axios.post(
        "/api/user/user_friends/addPost.html",
        data,
        res => {
          this.$router.push({ name: "goods", params: { goodsid: id2 } });
        },
        false,
        true
      );
    },
    getgive2() {
      this.$router.push({ name: "goods", params: { goodsid: id2 } });
    }
  }
};
</script>
<style lang="scss" scoped>
.acbox {
  background-color: $theme-bac;
  padding: 150px 50px;
  min-height: 100vh;
  .txt0 {
    color: $theme-bor;
    font-size: 50px;
  }
  .txt1 {
    margin-top: 35px;
    // font-size: 24px;
    // color: #d4dce7;
    .user {
      font-size: 40px;
    }
  }
  .txt2 {
    margin-top: 35px;
    height: 375px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .txt3 {
    margin-top: 30px;
    font-size: 40px;
    line-height: 1.6;
  }
  .txt4 {
    margin-top: 35px;
    font-size: 24px;
    line-height: 1.4;
    a {
      color: #007bff;
    }
  }
  .txt5 {
    margin-top: 80px;
    .txt6 {
      font-size: 40px;
      width: 400px;
      height: 100px;
      margin: 0 auto;
      line-height: 100px;
      color: #fff;
      border-radius: 6px;
      background-color: #a6a6a6;
    }
    .no {
      background: linear-gradient(to bottom, $theme, $theme-bor);
    }
  }
}
</style>