<template>
    <div>
      <titleBar title="宠物官方市场"></titleBar>  
      <div class="text">
        <p><span>温馨提示:</span>平台付款即享受10天健康担保期,担保期内如遇到犬瘟、细小可申请退款,严重货不对版情况平台支持买家退货;切勿私下微信付款,无任何保障且后期极难维权,容易受骗。</p>
        </div>
    </div>
</template>
<script>
import TitleBar from "./TitleBar.vue";
export default {
  components: {
    titleBar: TitleBar
  }
}
</script>
<style scoped>
 .text{
    width: 100%;
    height: 1.4rem;
    background-color: bisque;
  }
  .text p span{
    color: coral;
  }
  .text p{
    color: black;
    font-size: 0.25rem;
    margin:0 0.3rem;
    padding: 0.2rem 0;
  }
</style>