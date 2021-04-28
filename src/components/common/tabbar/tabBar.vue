<template>
  <div class="tabbar">
    <slot></slot>
    <miniTabBar></miniTabBar>
  </div>
</template>

<script>
export default {
  components: {
  }
};
</script>

<style>
.tabbar {
  display: flex;
  background-color: #f3f3f3;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>