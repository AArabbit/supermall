<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.id">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      // 数组或对象使用函数
      default() {
        return []
      }
    }
  }
}
</script>

<style  scoped>
  .recommend{
    display: flex;
    text-align: center;
    padding: 10px 0 30px;
    font-size: 14px;
    border-bottom: 10px solid #EEEEEE;
  }

  .recommend img{
    width: 85%;
    margin-bottom: 10px;
  }
</style>