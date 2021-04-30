<template>
  <div>
    <swiper>
      <SwiperItem v-for="item in banners" :key="item.id">
        <a :href="item.link">
          <img :src="item.image" :alt="item.title" />
        </a>
      </SwiperItem>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper/index";
export default {
  props: {
    banners: {
      type: Array,
      default: []
    }
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style  scoped>
img {
  width: 100%;
}
</style>