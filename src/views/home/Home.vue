<template>
  <div id="home">
    <Navbar class="navbar-info">
      <template v-slot:center><div>购物街</div></template>
    </Navbar>
    <TabControl
        :title="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="TabControl1"
        class="tabControl"
        v-show="isTabContorShow"
      />

    <scroll
      class="content"
      ref="scroll"
      :probeType="3"
      @scroll="backTopScroll"
      :pullUpLoad="true"
      @pullingUp="pullUpLoad"
    >
      <HomeSwiper :banners="banners" @imgLoad="imgLoad"/>
      <RecommendsView :recommends="recommends" />
      <FeatureView />
      <TabControl
        :title="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="TabControl2"
      />
      <GoodsList :goods="showGoods" />
    </scroll>

    <BackTop @click="backClick" v-show="isBackTopShow" />
  </div>
</template>

<script>
import Navbar from "@/components/common/navbar/Navbar";
import TabControl from "@/components/content/tabControl/TabControl";
import Scroll from "@/components/content/scroll/Scroll";
import BackTop from "@/components/content/backTop/BackTop";

import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import RecommendsView from "@/views/home/childComps/RecommendsView";
import FeatureView from "@/views/home/childComps/FeatureView";
import GoodsList from "@/components/content/goodsList/GoodsList";

import { getHomeMultidata, getControlData } from "@/network/home";

export default {
  name: 'Home',
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        sell: { page: 0, list: [] },
        new: { page: 0, list: [] },
        pop: { page: 0, list: [] },
      },
      currentType: "pop",
      isBackTopShow: false,
      tabOffsetTop: 0,
      isTabContorShow: false
    };
  },
  components: {
    Navbar,
    TabControl,
    Scroll,
    BackTop,

    HomeSwiper,
    RecommendsView,
    FeatureView,
    GoodsList,
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  created() {
    this.getHomeMultidata();
    this.getHomelData("pop");
    this.getHomelData("sell");
    this.getHomelData("new");
  },
  // 封装请求
  methods: {
    /**
     * events
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.TabControl2.currentIndex = index
      this.$refs.TabControl1.currentIndex = index
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 700);
    },
    backTopScroll(position) {
      this.isBackTopShow = position.y < -1300;
      this.isTabContorShow = position.y < (-this.tabOffsetTop)
    },
    pullUpLoad() {
      this.getHomelData(this.currentType);
      // 重新计算高度
      this.$refs.scroll.scroll.refresh();
    },
    imgLoad() {
      this.tabOffsetTop = this.$refs.TabControl2.$el.offsetTop
    },
    /**
     * network
     */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    getHomelData(type) {
      // 获取页数
      let page = this.goods[type].page + 1;
      getControlData(type, page).then((res) => {
        const newList = res.data.data.list;
        this.goods[type].list.push(...newList);
        this.goods[type].page += 1;

        this.$refs.scroll.scroll.finishPullUp();
      });
    },
  },
};
</script>

<style scoped>
#home {
  height: 100vh;

  /* position: relative; */
}
.navbar-info {
  background-color: var(--color-tint);
  color: #ffff;

  position: relative;
  z-index: 9;
}

.tabControl {
  position: relative;
  z-index: 9;
}

.content {
  /* height: calc(100% -93px); */
  /* overflow: hidden; */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>