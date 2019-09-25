<template>
  <div>
    <!-- 卖家认证 -->
    <div class="head">
      <h3>卖家认证</h3>
      <img @click="myself"  class="img1" src="../../assets/myself/10.png" alt />
    </div>
    <!-- 1.商品图片 -->
    <div class="qq">
      <img src="../../assets/myself/tu1.png">
      <img src="../../assets/myself/tu2.png">
      <img src="../../assets/myself/tu3.png">
    </div>
  </div>
</template>
<script>
export default {
    methods: {
        myself(){
            this.$router.go(-1);
        }
    },
};
</script>

<style scoped>
/* 卖家认证 */
.head {
  position: fixed;
  top: 0rem;
  left: 0rem;
  background-color: #fff;
  width: 100%;
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
/* 图片 */
.qq img {
  height: 2.2rem;
  border-radius: 0.2rem;
  width: 6.6rem;
  margin-top: 0.2rem;
}
.qq {
  text-align: center;
  margin-top:1.5rem;
}
</style>