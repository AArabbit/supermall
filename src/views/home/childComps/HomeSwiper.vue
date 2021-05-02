<template>
  <div>
    <swiper>
      <SwiperItem v-for="item in banners" :key="item.id">
        <a :href="item.link">
          <img :src="item.image" :alt="item.title" @load="imgLoad" />
        </a>
      </SwiperItem>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper/index";
export default {
  data() {
    return {
      isImgLoad: false
    };
  },
  props: {
    banners: {
      type: Array,
      default: [],
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    imgLoad() {
      // 节流, 取反是因为为true时才会继续执行
      if(!this.isImgLoad){
        this.$emit('imgLoad')
        this.isImgLoad = true
      }
      
    },
  },
};
</script>

<style  scoped>
img {
  width: 100%;
}
</style>