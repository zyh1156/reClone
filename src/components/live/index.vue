<template>
  <section>
    <search></search>
    <menulist :mlist="mlist"></menulist>
    <cl></cl>
    <foot></foot>
  </section>
</template>
<script>
import search from "../cube/search";
import menulist from "../cube/menulist";
import cl from "../cube/cube-live";
import foot from "../cube/footer";
export default {
  data() {
    return {
      mlist: [{ text: "话题" }, { text: "频道" }]
    };
  },
  components: {
    search,
    menulist,
    cl,
    foot
  }
};
</script>
<style lang="scss" scoped>
</style>