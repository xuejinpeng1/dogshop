<!-- 自定义组件-->
<template>
  <!-- 根组件-->
  <div>
    <!-- 快捷登录 -->
    <div class="head">
      <h3>修改密码</h3>
      <img class="img1" @click="login" src="../../assets/myself/10.png" alt />
    </div>
    <!--用户名输入框-->
    <mt-field class="name" label="手机号" placeholder="请输入手机号"></mt-field>
    <!--用户密码输入框-->
    <mt-field class="pwd" label="验证码" placeholder="请输入验证码"></mt-field>
    <span>获取不到验证码?</span>
    <!-- 下一步按钮 绑定事件 -->
    <mt-button class="btn" size="large">下一步</mt-button>
  </div>
</template>
<script>
export default {
  methods: {
    login() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.head {
  border-bottom: 0.5rem solid #f4f4f4;
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
/* 手机号************************* */
.name,
.pwd {
  border-bottom: 0.05rem solid #f4f4f4;
}
.name >>> .mint-cell-wrapper {
  font-size: 0.3rem;
}
.pwd >>> .mint-cell-wrapper {
  font-size: 0.3rem;
}
/* 忘记密码 */
span {
  color: #ff5b00;
  font-size: 0.3rem;
  float: right;
  margin-bottom: 0.5rem;
  margin-right: 0.3rem;
  position: relative;
  top: 0.2rem;
}
/* 下一步按钮 */
.btn {
  background-color: #bcbcbc;
  color: #fff;
  width: 95%;
  margin: 0 auto;
  font-size: 0.3rem;
}
</style>