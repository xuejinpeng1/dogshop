<template>
    <div>
      <titleBar title="求购信息"></titleBar>  
      <div class="text">
        <p>缴纳担保金商家方可享受与求购者在线沟通等权益</p>
        <mt-button @click="jumpBtn" class="btn">了解详情</mt-button>
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
       jumpBtn(){
           //功能:跳转页面
           this.$router.push("Ensure");
       }
       }
}
</script>
<style scoped>
  .text{
    width: 100%;
    background-color: antiquewhite
  }
  .text p{
    color: black;
    font-size: 0.5rem;
    margin:0 0.3rem;
    padding: 0.2rem 0;
  }
</style>