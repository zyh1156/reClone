<template>
  <section>
    <div class="weui-cell weui-cell_active weui-cell_access" @click="tosel">
      <div class="weui-cell__bd">日期</div>
      <div class="weui-cell__ft"></div>
    </div>
  </section>
</template>
<script>
import "weui";
import weui from "weui.js";
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    tosel() {
      weui.picker(
        [
          {
            label: "1",
            value: "1"
          },
          {
            label: "2",
            value: "2"
          },
          {
            label: "3",
            value: "3"
          }
        ],
        [
          {
            label: "A",
            value: "A"
          },
          {
            label: "B",
            value: "B"
          },
          {
            label: "C",
            value: "C"
          }
        ],
        {
          defaultValue: ["3", "A"],
          onChange: function(result) {
            console.log(result);
          },
          onConfirm: function(result) {
            console.log(result);
          },
          id: "showDatePicker"
        }
      );
    }
  }
};
</script>
<style lang="scss" scoped>
</style>