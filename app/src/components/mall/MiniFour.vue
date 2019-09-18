<template>
  <div class="f2">
    <div>
      <img :src="img1" />
      <span>{{message1}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    message1: { default: "" },
    img1: { default: "" }
  }
};
</script>
<style scoped>
span {
  text-align: center;
  justify-content: center;
}
.f2{
  width:25%
}
</style>