<template>
  <div>
    <!-- 购宠协议 -->
    <div class="head">
      <h3>购宠协议 - 红格宠物</h3>
      <img @click="myself" class="img1" src="../../assets/myself/10.png" alt />
    </div>
    <!-- 协议 -->
    <div class="xy">
        <img class="img2" src="../../assets/myself/xy.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
    methods:{
        myself(){
            this.$router.push("/myself");
        }
    }
}
</script>

<style scoped>
.head{
    position: fixed;
    top:0rem;
    left:0rem;
    background-color:#fff;
    width:100%;
}
.img1 {
  /* 左箭头样式 */
  width: 0.6rem;
  height: 0.6rem;
  display: inline-block;
  position: absolute;
  top: 0.7rem;
}
.head h3 {
  /* 字体样式 */
  font-size: 0.4rem;
  text-align: center;
  margin-bottom: 0.5rem;
  margin-top: 0.7rem;
}
/*协议 **************** */
.xy{
    margin-top:1.3rem;
}
.img2{
    width:100%;
}
</style>