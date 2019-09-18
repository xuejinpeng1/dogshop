<template>
<div class="itemStyle">
<titleBar title="交易指导"></titleBar>
<!-- 1.商品图片 -->
<div class="qq">
    <img @click="jumpInformation" src="../../assets/message/011.jpg">
    <img @click="jumpDuty" src="../../assets/message/022.jpg">
    <img @click="jumpMerchant" src="../../assets/message/033.jpg">
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
  height: 2.2rem;
  border-radius: 0.2rem;
  width: 6.6rem;
  margin-top: 0.2rem;
}
.qq{
  text-align: center;
}
</style>