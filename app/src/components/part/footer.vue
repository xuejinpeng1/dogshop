<--!footer.vue 底部导航栏-->
<template>
  <div>
    <img :src="focused?selected:normal" />
  </div>
</template>
<script>
export default {
  props: {
    focused: false,
    selected: { default: "" },
    normal: { default: "" }
  }
};
</script>
<style scoped>
  img{
    width:1.5rem;
    height:1.5rem;
  }
</style>