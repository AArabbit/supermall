<template>
  <div class="tabControl">
    <div v-for="(item, index) in title" :key="item.id" 
    :class="{active: index === currentIndex}"
    @click="itemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
    }
  }
}
</script>

<style  scoped>
  .tabControl {
    display: flex;
    text-align: center;
    font-size: 15px;
    background-color: #fff;
    z-index: 9;
  }

  .tabControl div {
    flex: 1;
    height: 40px;
    line-height: 40px;
  }

  .active span {
    border-bottom: 1px solid var(--color-high-text);
    color: var(--color-tint);
    padding: 5px;
  }
</style>