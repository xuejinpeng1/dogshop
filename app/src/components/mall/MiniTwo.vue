<template>
  <div class="zhudaohang1" @click="jump">
    <div class="zhudaohang2">
      <img :src="img1" />
      <h3 style="margin-top:0.1rem;">{{leftTitle}}</h3>
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
  },
   methods: {
    jump: function() {
      this.$router.push("/Mpin")
    }
  }
};
</script>