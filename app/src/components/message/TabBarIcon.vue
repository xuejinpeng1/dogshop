<template>
<div class="imgstyle">
<!--图标-->
<input type="text" placeholder="想跟TA说点什么呢？">
<img src="../../../assets/message/t1.jpg"/>
<img src="../../../assets/message/t2.jpg"/>
<img src="../../../assets/message/t3.jpg"/>
<img src="../../../assets/message/t4.jpg"/>
<img src="../../../assets/message/t5.jpg"/>
<img src="../../../assets/message/t6.jpg"/>
</div>
</template>
<script>
export default {
    props:{
      focused:false,
      selectedImage:{default:""},
      normalImage:{default:""}
    }
}
</script>
<style scoped>
.imgstyle{
    width: 30px;
    height: 30px;
}
  /* 输入框 */
  .put{
    width: 100%;
    height: 1rem;
    font-size: 0.5rem;
  } 
</style>