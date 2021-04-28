<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="isActive"><slot name="item-img-active"></slot></div>
    <div v-else><slot name="item-img"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  computed: {
    itemClick() {
      this.$router.push(this.path)
    },
    isActive() {
      return this.$route.path.indexOf(this.path) != -1
    },
    activeStyle() {
      return this.isActive ? {color:this.activeColor} : {}
    }
  }
};
</script>

<style>
.tabbar-item {
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 15px;
}
.tabbar-item img{
  height: 29px;
  vertical-align: middle;
  margin-top: 3px;
}
</style>