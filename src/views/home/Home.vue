<template>
  <div id="home">
    <Navbar class="navbar-info">
      <template v-slot:center><div>购物街</div></template>
    </Navbar>
  </div>
</template>

<script>
import Navbar from "@/components/common/navbar/Navbar";
import {getHomeMultidata} from '../../network/home'

export default {
  data() {
    return {
      banner: [],
      recommend: []
    }
  },
  components: {
    Navbar
  },
  beforeCreate() {
    getHomeMultidata().then(res => {
      console.log(res);
      this.banner = res.data.data.banner.list
      this.recommend = res.data.data.recommend.list
    })
  },
};
</script>

<style  scoped>
.navbar-info {
  background-color: var(--color-tint);
  color: #ffff;
}
</style>