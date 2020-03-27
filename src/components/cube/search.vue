<template>
  <!-- 搜索框 -->
  <article class="search-box">
    <a href="/#/search" class="search-body d-flex align-items-center justify-content-center">
      <span>
        <img src="../../assets/search-ico.png" alt />
      </span>
      <span>搜索课程/专栏/直播间</span>
    </a>
  </article>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
// 搜索框
.search-box {
  padding: $pardon/2 $pardon;
  background-color: #fff;
  .search-body {
    color: #c4c4c4;
    font-size: 24px;
    background-color: #f8f8f8;
    height: 58px;
    padding: 16px 0;
    border-radius: 29px;
    img {
      height: 26px;
      margin-right: 18px;
    }
  }
}
</style>