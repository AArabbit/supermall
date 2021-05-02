<template>
  <div class="warpper" ref="warpper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import ObserveDOM from "@better-scroll/observe-dom";
import ObserveImage from '@better-scroll/observe-image'
BScroll.use(Pullup).use(ObserveDOM).use(ObserveImage);
export default {
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.warpper, {
      click: true,
      observeDOM: true,
      ObserveImage: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });

    // 监听滚动距离
    this.scroll.on('scroll', (position) => {
      this.$emit('scroll', position)
    }),
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    })
  },
  methods: {
    // 单独提取scrollTo方法
    scrollTo(x, y, time=300) {
      this.scroll.scrollTo(x, y, time)
    }
  }
};

</script>

<style  scoped>
</style>