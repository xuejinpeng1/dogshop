<!-- 自定义组件 -->
<template>
  <!-- 根元素 -->
  <div>
    <!-- 快速登录 -->
    <div class="head">
      <h3>快速登录</h3>
      <img class="img1" @click="mine" src="../../assets/myself/10.png" alt />
    </div>
    <!--手机号输入框-->
    <mt-field class="name" label="手机 :" placeholder="请输入手机号"></mt-field>
    <!--验证码输入框-->
    <mt-field class="pwd" label="验证码 :" placeholder="请输入验证码"></mt-field>
    <span class="s1" @click="login">用账号密码登录</span>
    <span class="s2">获取不到验证码?</span>
    <!-- 确定按钮 绑定事件 -->
    <mt-button class="btn" size="large">免费注册登录</mt-button>
    <!-- 其他方式登录 -->
    <div class="q">
      <p>———— 其他方式登录 ————</p>
      <img class="q_img" src="../../assets/myself/wx.png" alt />
      <img class="q_img" src="../../assets/myself/QQ.png" alt />
      <img class="q_img" src="../../assets/myself/zfb.png" alt />
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    mine() {
      this.$router.push("/myself");
    },
    login() {
      this.$router.push("/login");
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
/* 快速登录***************** */
.head {
  border-bottom: 0.5rem solid #f4f4f4;
  background-color: #fff;
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
/* 手机号输入框************************* */
.name,.pwd {
  border-bottom: 0.05rem solid #f4f4f4;
}
.name >>> .mint-cell-wrapper {
  font-size: 0.3rem;
}
.pwd >>> .mint-cell-wrapper {
  font-size: 0.3rem;
}
/* 用账号密码登录 */
.s1 {
  color: #ff5b00;
  font-size: 0.3rem;
  float: left;
  margin-left: 0.18rem;
}
/* 获取不到验证码? */
.s2 {
  color: #ff5b00;
  font-size: 0.3rem;
  float: right;
  margin-bottom: 0.5rem;
  margin-right: 0.3rem;
}
.s1,.s2{
    position: relative;
    top:0.2rem;
}
/*登录按钮 */
.btn {
  background-color: #ff5b00;
  color: #fff;
  width: 95%;
  margin: 0 auto;
  font-size: 0.3rem;
}
/* 其他方式登录 **********************/
.q {
  position: absolute;
  bottom: 0;
  transform: translateX(18%);
  margin-bottom:1rem;
}
p {
  font-size: 0.3rem;
  color: #aaa;
  text-align: center;
}
.q_img {
  width: 0.8rem;
  height: 0.8rem;
  margin: 0 0.5rem;
}
</style>