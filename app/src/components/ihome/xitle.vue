<template>
  <div>
    <img :src="top" />
    <span>{{tips}}</span>
    <img :src="arrow" class="arrow1" />
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
img {
  height: 0.45rem;
  z-index: 1;
  position: absolute;
}
div {
  padding: 0.1rem;
  position: relative;
  height: 0.45rem;
  margin-top: 0.3rem;
}
span {
  font: 650 0.23rem 华文楷体;
  position: absolute;
  right: 0.4rem;
  bottom: 0.16rem;
}
.arrow1 {
  height: 0.33rem;
  position: absolute;
  right: 0.15rem;
  bottom: 0.16rem;
}
</style>