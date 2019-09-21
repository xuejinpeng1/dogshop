<template>
<div class="itemStyle">
<titleBar title="交易指导"></titleBar>
    <!-- 1.商品图片 -->
<div>
    <img @click="jumpInformation" src="../../../assets/011.jpg">
    <img @click="jumpDuty" src="../../../assets/022.jpg">
    <img @click="jumpMerchant" src="../../../assets/033.jpg">
</div>
</div>
</template>
<script>
import TitleBar from "./TitleBar.vue";
export default {
  components: {
    titleBar: TitleBar
  },
  methods: {
       jumpInformation(){
           //功能:跳转页面
           this.$router.push("Information");
       },
        jumpDuty(){
           //功能:跳转页面
           this.$router.push("Duty");
       },
        jumpMerchant(){
           //功能:跳转页面
           this.$router.push("Merchant");
       }
       }
};
</script>
<style scoped>
.itemStyle img {
  height: 5rem;
  border-radius: 0.5rem;
  width: 100%;
  margin-top: 0.7rem;
}
</style>