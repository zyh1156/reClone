<template>
  <section class="bac">
    <!-- 标题 -->
    <div class="rtit">
      <input class="w-100" type="text" placeholder="输入标题效果更好哦~" />
    </div>
    <!-- 内容 -->
    <div class="rcon">
      <div>
        <textarea class="w-100" placeholder="输入内容..."></textarea>
      </div>
      <!-- 按钮区 -->
      <div class="fun-btn">图</div>
    </div>
    <!-- 发布按钮 -->
    <div class="rbtn w-100 position-fixed">
      <div class="gorel text-center">发布</div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {};
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
  padding: $pardon $pardon;
  background-color: #fff;
  textarea {
    border: none;
    outline: none;
    height: 235px;
    resize: none;
    padding: 0 10px;
  }
  .fun-btn {
    margin-top: 135px;
  }
}
.rbtn {
  left: 0;
  bottom:0;
  padding: $pardon 30px;
  box-shadow: 0 -10px 10px #f8f8f8;
  .gorel {
      font-size: 34px;
      height: 100px;
      line-height: 100px;
      background-color: #f4d054;
      border-radius: 50px;
  }
}
</style>