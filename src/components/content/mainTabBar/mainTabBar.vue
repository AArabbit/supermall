<template>
  <tabBar>

    <tabBarItem path='/home' activeColor="deeppink">
      <template v-slot:item-text>
        <div>首页</div>
      </template>
      <template v-slot:item-img>
        <img src="@/assets/img/tabbar/home.svg" alt="首页">
      </template>
      <template v-slot:item-img-active>
        <img src="@/assets/img/tabbar/home_active.svg" alt="首页">
      </template>
    </tabBarItem>

    <tabBarItem  path='/category' activeColor="deeppink">
      <template v-slot:item-text>
        <div>分类</div>
      </template>
      <template v-slot:item-img>
        <img src="@/assets/img/tabbar/category.svg" alt="首页">
      </template>
      <template v-slot:item-img-active>
        <img src="@/assets/img/tabbar/category_active.svg" alt="首页">
      </template>
    </tabBarItem>

    <tabBarItem path='/shopcart' activeColor="deeppink">
      <template v-slot:item-text>
        <div>购物车</div>
      </template>
      <template v-slot:item-img>
        <img src="@/assets/img/tabbar/shopcart.svg" alt="首页">
      </template>
      <template v-slot:item-img-active>
        <img src="@/assets/img/tabbar/shopcart_active.svg" alt="首页">
      </template>
    </tabBarItem>

    <tabBarItem path='/profile' activeColor="deeppink">
      <template v-slot:item-text>
        <div>我的</div>
      </template>
      <template v-slot:item-img>
        <img src="@/assets/img/tabbar/profile.svg" alt="首页">
      </template>
      <template v-slot:item-img-active>
        <img src="@/assets/img/tabbar/profile_active.svg" alt="首页">
      </template>
    </tabBarItem>

  </tabBar>
  <router-view></router-view>
</template>

<script>
import tabBar from '@/components/common/tabbar/tabBar'
import tabBarItem from '@/components/common/tabbar/tabBarItem'
export default {
  components: {
    tabBar,
    tabBarItem,
  },
};
</script>

<style>
</style>