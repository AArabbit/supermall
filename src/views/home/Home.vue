<template>
  <div id="home">
    <Navbar class="navbar-info">
      <template v-slot:center><div>购物街</div></template>
    </Navbar>
    <HomeSwiper :banners="banners" />
    <RecommendsView :recommends="recommends" />
    <FeatureView />
    <TabControl class="tabPosi" :title="['流行', '新款', '精选']" />
    <GoodsList :goods="goods['pop'].list"/>
  </div>
</template>

<script>
import Navbar from "@/components/common/navbar/Navbar";
import TabControl from "@/components/content/tabControl/TabControl";

import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import RecommendsView from "@/views/home/childComps/RecommendsView";
import FeatureView from "@/views/home/childComps/FeatureView";
import GoodsList from '@/components/content/goodsList/GoodsList'

import { getHomeMultidata, getControlData } from "@/network/home";

export default {
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        sell: { page: 0, list: [] },
        new: { page: 0, list: [] },
        pop: { page: 0, list: [] },
      },
    };
  },
  components: {
    Navbar,
    TabControl,

    HomeSwiper,
    RecommendsView,
    FeatureView,
    GoodsList
  },
  created() {
    this.getHomeMultidata();
    this.getControlData('pop')
    this.getControlData('sell')
    this.getControlData('new')
    
  },
  // 封装请求
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },

    getControlData(type) {
  // 创建一个变量代表页数，让它等于goods里每一个数据的page+1，传入请求函数中
      const page = this.goods[type].page + 1
      getControlData(type, page).then(res => {
      console.log(res);
      this.goods[type].list.push(...res.data.data.list)
      this.goods[type].page += 1
    });
    }
  },
};
</script>

<style scoped>
.navbar-info {
  background-color: var(--color-tint);
  color: #ffff;

  position: sticky;
  top: 0;
  z-index: 9;
}

.tabPosi {
  position: sticky;
  top: 44px;
}
</style>