<template>
  <div>
    <img :src="top">
    <span>{{tips}}</span>
    <img :src="arrow" class="arrow1">
  </div>
</template>
<script>
export default {
  props: {
    top: { default: "" },
    tips: { default: "" },
    arrow: { default: "" }
  }
};
</script>
<style scoped>
img{
  height:0.5rem;
}
div {
  padding: 0.1rem;
  position: relative;
  height:0.9rem
}
span {
  font: 500 0.3rem 华文楷体;
  position: absolute;
  color: #999999;
  right: 0.4rem;
  bottom: 0.15rem;
}
.arrow1 {
  height: 0.33rem;
  position: absolute;
  right: 0.15rem;
  bottom: 0.18rem;
}
</style>