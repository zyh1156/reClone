<template>
  <section class="h-max">
    <!-- 签到合计 -->
    <div class="d-flex panel-top">
      <div class="w-50 text-center">
        <div class="tit">连续签到</div>
        <div class="days">
          <span class="big font-weight-bold">1</span>
          <span>天</span>
        </div>
      </div>
      <div class="w-50 text-center">
        <div class="tit">累计学习</div>
        <div class="days">
          <span class="big font-weight-bold">0</span>
          <span>小时</span>
        </div>
      </div>
    </div>
    <!-- 奖学金 -->
    <div class="scholar text-center">
      <div class="txt1">我的奖学金</div>
      <div class="txt2">
        <span>￥</span>
        <span class="money font-weight-bold">10.00</span>
      </div>
      <div class="font-weight-bold btn-play">立即使用</div>
    </div>
    <!-- 日历 -->
    <div class="panpel-calendar">
      <Calendar :markDateMore="dateArr" v-on:changeMonth="changeDate"></Calendar>
    </div>
    <!-- 任务 -->
    <div></div>
  </section>
</template>
<script>
import Calendar from "vue-calendar-component";
import dayjs from "dayjs";
export default {
  data() {
    return {
      dateArr: []
    };
  },
  components: {
    Calendar
  },
  methods: {
    clickDay(data) {},
    changeDate(data) {},
    getDate(month, flag) {
      this.axios.post("/api/user/index/qdList.html", { month: month }, res => {
        // 判断今天有没有签到
        if (flag) {
          let now = dayjs().format("YYYY-MM-DD"),
            arr = res.data.data.data,
            flag2 = true,
            i;
          for (i = 0; i < arr.length; i++) {
            if (arr[i].create_time == now) {
              flag2 = false;
            }
            this.$set(this.dateArr, i, {
              date: arr[i].create_time,
              className: "mark0"
            });
          }
          if (flag2) {
            this.dateQD();
          }
        }
      });
    },
    dateQD() {
      // 去签到
      this.axios.post(
        "/api/user/index/qdAdd.html",
        {},
        res => {
          this.weui.toast(res.data.msg, 1500);
        },
        true
      );
    },
    checkQD(arr) {}
  },
  mounted() {
    let month = dayjs().format("YYYY-MM");
    this.getDate(month, true);
  }
};
</script>
<style lang="scss" scoped>
.h-max {
  height: 100vh;
  background-color: #f2f3f3;
  background: url(/assets/user/headerTop.a664892.png) no-repeat center -20px;
  background-size: 100% auto;
}
.panel-top {
  .tit {
    color: rgba(255, 255, 255, 0.8);
    padding-top: 36px;
  }
  .days {
    padding-top: 26px;
    color: #fff;
    font-size: 22px;
    .big {
      font-size: 36px;
      padding-right: 12px;
    }
  }
}
.scholar {
  margin: 35px 30px 0;
  background-color: #fff;
  border-radius: 16px;
  padding: 35px;
  box-shadow: 10px 10px 10px $theme-bac;
  .txt1 {
    font-size: 30px;
  }
  .txt2 {
    margin-top: 24px;
    font-size: 18px;
    color: #e15241;
    .money {
      font-size: 38px;
    }
  }
  .btn-play {
    margin: 42px 0 0 0;
    color: #fff;
    border-radius: 45px;
    padding: 28px 0;
    font-size: 32px;
    letter-spacing: 3px;
    background-image: linear-gradient(to bottom, $theme, $theme-bor);
  }
}
.panpel-calendar {
  padding: 27px;
  overflow: hidden;
  border-radius: 16px;
}
</style>