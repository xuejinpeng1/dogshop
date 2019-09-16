<!-- 自定义组件 -->
<template>
  <!-- 根元素 -->
  <div>
    <!-- 快捷登录 -->
    <div class="head">
      <h3>账号登录</h3>
      <img src="../../assets/myself/10.png" alt />
    </div>
    <!--用户名输入框-->
    <mt-field class="name" label="用户名" placeholder="请输入用户名" v-model="uname"></mt-field>
    <!--用户密码输入框-->
    <mt-field class="pwd" label="密码" placeholder="请输入密码" v-model="upwd"></mt-field>
    <span>忘记密码?</span>
    <!-- 确定按钮 绑定事件 -->
    <mt-button class="btn" size="large" @click="login">确定</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      uname: "",
      upwd: ""
    };
  },
  methods: {
    login() {
      // 功能一：完成用户登录操作
      // 1：获取用户名和密码
      var u = this.uname;
      var p = this.upwd;
      // console.log(u+":"+p);
      // 2: 创建正则表达式 3~12位置 字母数字
      var re = /^1(3|4|5|7|8)\d{9}$/;
      var reg = /^[0-9]{3,12}$/i;
      // 3: 判断如何错误 用户名提示
      if (!re.test(u)) {
        this.$toast("手机号格式不正确");
        return;
      }
      // 4: 判断如何错误 密码提示
      if (!reg.test(p)) {
        this.$toast("密码格式不正确");
        return;
      }
      // 5: 发送ajax  axios
      var url = "login";
      var obj = { uname: u, upwd: p };
      this.axios.get(url, { params: obj }).then(res => {
        // console.log(res.data.code);
        // 6: 接收服务器返回数据
        var code = res.data.code;
        if (code == -1) {
          // 7: 失败 提示
          this.$messagebox("消息", "手机号或密码有误");
        } else {
          // 8: 成功 跳转
          this.$router.push("/Home");
        }
      });
    }
  }
};
</script>  

<style scoped>
/* 账号登录***************** */
.head {
  border-bottom: 0.5rem solid #f4f4f4;
}
img {
  /* 左箭头样式 */
  width: 0.6rem;
  height: 0.6rem;
  display: inline-block;
  position: absolute;
  top: 0.4rem;
}
.head h3 {
  /* 字体样式 */
  font-size: 0.4rem;
  text-align: center;
}
/* 用户名输入框************************* */
.name {
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
}
/* 确定按钮 */
.btn {
  background-color: #ff5b00;
  color: #fff;
  width: 95%;
  margin: 0 auto;
  font-size: 0.3rem;
}
</style>
