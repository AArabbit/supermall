<template>
  <div class="goods">
    <GoodsListItem v-for="item in goods" 
    :key="item.titile" 
    :goodsItem="item"
    class="item"
    />
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style  scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .goods .item {
    width: 48%;
  }
</style>