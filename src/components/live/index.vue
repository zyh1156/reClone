<template>
  <section>
    <menulist :mlist="mlist"></menulist>
    <div class="live-list">
        <div class="live-li d-flex" v-bind:key="i" v-for="i in 10">
            <div class="li-img overflow-hidden position-relative">
                <div class="position-absolute status">回放</div>
                <div class="position-absolute user">临川网校</div>
                <img src="../../assets/menu.jpg" alt="">
            </div>
            <div class="li-con d-flex flex-wrap align-content-around">
                <div class="txt0 w-100 font-weight-bold line-clamp2">人工智能究</div>
                <div class="txt1 w-100">2020年3月27日 14点17分</div>
                <div class="txt2 w-100">12.30万人观看</div>
            </div>
        </div>
    </div>
    <foot></foot>
  </section>
</template>
<script>
import menulist from "../cube/menulist";
import foot from "../cube/footer"
export default {
  data() {
    return {
      mlist: [{ text: "话题" }, { text: "频道" }]
    };
  },
  components: {
    menulist,foot
  }
};
</script>
<style lang="scss" scoped>
.live-list{
    padding: $pardon/2 $pardon;
    background-color: #fff;
    .live-li:last-child{
        border-bottom: none;
    }
    .live-li{
        padding: $pardon/2 0;
        border-bottom: 1px solid #f3f3f3;
        .li-img{
            width: 280px;
            height: 214px;
            border-radius: 4px;
            margin-right: $pardon/2;
            .status{
                color: #fff;
                left: 11px;
                top: 11px;
                font-size: 16px;
                padding: 6px 8px;
                border-radius: 4px;
                background-image: linear-gradient(to right bottom,#ffca45,#f1a139);
            }
            .user{
                font-size: 18px;
                color: #fff;
                width: 100%;
                padding:11px;
                left: 0;
                bottom: 0;
                background-color: rgba(0,0,0,.4);
            }
        }
        .li-con{
            width: 400px;
            .txt0{
                font-size: 24px;
                line-height: 1.4;
                height: 68px;
            }
            .txt1{
                font-size: 20px;
                color: #808080;
                height: 20px;
            }
            .txt2{
                font-size: 20px;
                color: #aeaeae;
                height: 20px;
            }
        }
    }
}
</style>