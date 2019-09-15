<!-- 自定义组件 -->
<template>
  <!-- 根元素 -->
  <div>
    <!-- 快捷登录 -->
    <div class="head">
      <h3>账号登录</h3>
      <img src="../../img/10.png" alt />
    </div>
    <!--用户名输入框-->
    <mt-field  class="name" label="用户名" placeholder="请输入用户名"></mt-field>
    <!--用户密码输入框-->
    <mt-field  class="pwd" label="密码" placeholder="请输入密码"></mt-field>
    <span>忘记密码?</span>
    <mt-button class="btn" size="large">确定</mt-button>
  </div>
</template>
<script>
</script>  

<style scoped>
        /* 账号登录***************** */
.head{
    border-bottom:0.5rem solid #f4f4f4;
}
img {
    /* 左箭头样式 */
  width: 0.6rem;
  height: 0.6rem;
  display: inline-block;
  position: absolute;
  top:0.55rem;
}
.head h3 {
    /* 字体样式 */
  font-size: 0.5rem;
  text-align: center;
}
/* 用户名输入框 */
.name{
    border-bottom:0.05rem solid #f4f4f4;
}
/* 忘记密码 */
span{
    color:#ff5b00;
    font-size:0.4rem;
    float: right;
    margin-bottom: 0.5rem;
    margin-right: 0.3rem;
}
/* 确定按钮 */
.btn{
    background-color:#ff5b00;
    color:#fff;
}
.name>>>.mint-cell-wrapper{
  font-size:0.4rem;
}
.pwd>>>.mint-cell-wrapper{
  font-size:0.4rem;
}
</style>
