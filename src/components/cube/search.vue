<template>
  <!-- 搜索框 -->
  <article class="search-box">
    <div v-if="type==1">
      <input
        type="text"
        @change="rekeyword"
        v-model="keyword"
        class="search-body text-center"
        :placeholder="ptxt2"
      />
    </div>
    <a v-else href="/entry" class="search-body d-flex align-items-center justify-content-center">
      <span>
        <img src="../../assets/search-ico.png" alt />
      </span>
      <span>搜索课程</span>
    </a>
  </article>
</template>
<script>
export default {
  data() {
    return {
      keyword: "",
      ptxt2: this.ptxt || "搜索课程"
    };
  },
  methods: {
    rekeyword() {
      this.$emit("rekey", this.keyword);
    }
  },
  props: ["type", "ptxt"]
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
    padding: 16px 29px;
    border-radius: 29px;
    img {
      height: 26px;
      margin-right: 18px;
    }
  }

  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
  }
}
</style>