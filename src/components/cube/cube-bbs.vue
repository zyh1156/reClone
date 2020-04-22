<template>
  <!-- 圈子列表 -->
  <aside>
    <div class="list-content" v-for="(cb,inx) in cblist" v-bind:key="inx">
      <div class="panpel">
        <div class="img-box">
          <router-link :to="{name:'community',params:{'communityid':cb.id}}">
            <img v-lazy="cb.thumbnail" alt />
          </router-link>
        </div>
        <div class="content-box d-flex justify-content-between align-items-center">
          <div class="box0">
            <img v-lazy="cb.t_thumbnail" alt />
          </div>
          <div class="box1">
            <div class="txt0 font-weight-bold">{{cb.post_title}}</div>
            <div class="txt1 text-truncate">{{cb.t_name}}</div>
          </div>
          <router-link
            class="box2 text-center"
            :to="{name:'community',params:{'communityid':cb.id}}"
          >进入</router-link>
        </div>
        <div class="about-box d-flex">
          <div class="mr-90">
            <span class="iconfont icon-remen"></span>
            <span>{{cb.tuan_num}}&nbsp;成员</span>
          </div>
          <div>
            <span class="iconfont icon-dingdan"></span>
            <span>{{cb.page_num}}&nbsp;内容</span>
          </div>
        </div>
      </div>
    </div>
    <div v-if="nodata&&cblist.length==0" class="nodata text-center">
      <div class="txt0 iconfont icon-wushuju"></div>
      <div class="txt1">找不到更多数据</div>
    </div>
  </aside>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["cblist", "nodata"]
};
</script>
<style lang="scss" scoped>
.list-content {
  padding: $pardon/2 $pardon;
  .panpel {
    border-radius: 6px;
    background-color: #fefefe;
    padding: 27px 27px 0;
    .img-box {
      height: 385px;
      overflow: hidden;
      img {
        border-radius: 6px;
        width: 100%;
      }
    }
    .content-box {
      padding: 27px 0 24px 0;
      .box0 {
        img {
          width: 90px;
          height: 90px;
          border-radius: 45px;
        }
      }
      .box1 {
        width: 410px;
        .txt0 {
          font-size: 30px;
        }
        .txt1 {
          color: #9f9f9f;
          margin-top: 16px;
        }
      }
      .box2 {
        color: #232425;
        height: 48px;
        width: 115px;
        border-radius: 24px;
        line-height: 48px;
        border-radius: #f3ca3c;
        background-color: #f4d054;
      }
    }
    .about-box {
      border-top: 1px solid #f8f8f8;
      padding: 15px 5px 20px;
      height: 62px;
      color: #898989;
      font-size: 22px;
      line-height: 25px;
      .mr-90 {
        margin-right: 90px;
      }
      .iconfont {
        margin-right: 20px;
      }
    }
  }
}
</style>