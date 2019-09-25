<!-- 自定义组件 -->
<template>
  <!-- 根元素 -->
  <div>
    <!-- 快捷登录 -->
    <div class="head">
      <h3>编辑个人资料</h3>
      <img @click="myself" class="img1" src="../../assets/myself/10.png" alt />
    </div>
    <mt-field class="name" label="昵称 :" placeholder="王痒痒"></mt-field>
    <span class="sp1">头像 :</span>
    <span class="sp2" @click="tan">点击更换头像</span>
    <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
    <div class="img">
      <img class="img2" src="../../assets/myself/wyd.png" />
    </div>
    <div class="btn">
      <mt-button class="btn1" type="danger" size="large">完成</mt-button>
    </div> 
  </div>
</template>
<script>
export default {
  data() {
    return {
      sheetVisible: false,
      actions: [{ name: "拍摄" }, { name: "从相册中选取" }]
    };
  },
  methods: {
    myself(){
      this.$router.go(-1);
    },
    tan() {
      this.sheetVisible = true;
    }
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
/* 更换头像文本样式 */
.sp1 {
  font-size: 0.33rem;
  margin-left: 0.2rem;
}
.sp2 {
  font-size: 0.33rem;
  color: #aaa;
  margin-left: 1rem;
}
/* 头像图片 */
.img{
  border-radius: 50%;
  width:1.3rem;
  height:1.3rem;
  overflow: hidden;
  display: inline-block;
  margin-left:1.1rem;
}
.img2{
  width:1.3rem;
  height:1.3rem;
}
/* 完成按钮 */
.btn{
  padding:0 0.3rem;
}
.btn1{
  margin-top:1rem;
}
</style>
