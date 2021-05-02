<template>
  <div class="goodsItem">
    <img class="itemImg" :src="goodsItem.show.img" :alt="goodsItem.title"/>
    <div class="goodsInfo">
      <p>{{ goodsItem.title }}</p>
      <span class="orgPrice">{{ goodsItem.orgPrice }}</span>
      &nbsp;
      <span class="cfav">
        <img src="@/assets/img/common/collect.svg">
        {{ goodsItem.cfav }}
        </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style  scoped>
.goodsItem .itemImg {
  width: 100%;
  border-radius: 8px;
}
.goodsInfo {
  font-size: 13px;
  margin-top: 5px;
  text-align: center;
}

.goodsInfo p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.goodsInfo .orgPrice {
  color: var(--color-high-text);
}

.cfav img {
  width: 16px;
  height: 30px;
  margin: 0;
  padding-bottom: 5px;
  vertical-align: middle;
}
/* 
.goodsItem::after {
  content: "";
  height: 50px;
  display: block;
} */
</style>