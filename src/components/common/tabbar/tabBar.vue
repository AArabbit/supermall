<template>
  <div class="tabbar">
    <slot></slot>
    <miniTabBar></miniTabBar>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
.tabbar {
  display: flex;
  background-color: #f3f3f3;
  width: 100%;

  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
}
</style>