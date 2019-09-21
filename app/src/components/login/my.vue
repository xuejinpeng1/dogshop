<!-- 自定义组件 -->
<template>
  <!-- 根元素 -->
  <div>
    <!-- 快捷登录 -->
    <div class="head">
      <h3>编辑个人资料</h3>
      <img class="img1" src="../../assets/myself/10.png" alt />
    </div>
    <mt-field class="name" label="昵称 :" placeholder="请输入用户名"></mt-field>
    <span></span>
    <mt-popup v-model="popupVisible" position="bottom">vgyvgh </mt-popup>
  
  </div>
</template>
<script>
export default {
  data:{
    popupVisible:true
  }
};
</script>


<style scoped>
/* 账号登录***************** */
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
</style>
