<template>
  <div class="zhudaohang1">
    <div class="zhudaohang2">
      <img :src="img1" />
      <h3>{{leftTitle}}</h3>
    </div>
  </div>
</template>
<style scoped>
.zhudaohang1 {
  width: 25%;
}
.zhudaohang2 {
  text-align: center;
  justify-content: center;
}
</style>
<script>
export default {
  props: {
    leftTitle: { default: "" },
    img1: { default: "" }
  }
};
</script>