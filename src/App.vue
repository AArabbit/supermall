<template>
  <div id="app">
    <mainTabBar></mainTabBar>
  </div>
</template>

<script>
import mainTabBar from "@/components/content/mainTabBar/mainTabBar";
export default {
  props: {
    // 取消走势图横向滑动默认事件
    stopPrev: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    mainTabBar,
  },
  methods: {
    start(e) {
      if (this.stopPrev) {
        e.preventDefault();
      }
    },
  },
};
</script>

<style scoped>
@import "./assets/css/base.css";
</style>
