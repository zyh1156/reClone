<template>
  <section>
    <header2></header2>
    <showCase :datas="caseData"></showCase>
  </section>
</template>
<script>
import header2 from "../cube/header";
import showCase from "../cube/showcase";
export default {
  data() {
    return {
        caseData:{}
    };
  },
  components: {
    header2,
    showCase
  }
};
</script>
<style lang="scss" scoped>
</style>