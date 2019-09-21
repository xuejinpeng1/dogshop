<template>
  <div>
    <img :src="top">
    <span>{{tips}}></span>
  </div>
</template>
<script>
export default {
  props: {
    top: { default: "" },
    tips: { default: "" }
  }
};
</script>
<style scoped>
div{padding: 0.1rem;}
  span{
    font:500 0.3rem 华文楷体;
    color:#999999;
    margin-left:4rem;
  }
</style>