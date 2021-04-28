<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
}
</script>

<style  scoped>
  .nav-bar {
    display: flex;
    height: 44px;
    text-align: center;
    vertical-align: middle;
    line-height: 44px;
  }

  .nav-bar .left,
  .nav-bar .right {
    width: 60px;
    /* background-color: blue; */
  }

  .nav-bar .center {
    flex: 1;
    /* background-color: rebeccapurple; */
  }
</style>