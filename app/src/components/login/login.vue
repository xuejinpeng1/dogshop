<!-- 自定义组件 -->
<template>
  <!-- 根元素 -->
  <div>
    <!-- 快捷登录 -->
    <div class="head">
      <h3>账号登录</h3>
      <img class="img1" @click="phone" src="../../assets/myself/10.png" alt />
    </div>
    <!--用户名输入框-->
    <mt-field class="name" label="用户名 :" placeholder="请输入用户名" v-model="uname"></mt-field>
    <!--用户密码输入框-->
    <mt-field class="pwd" label="密码 :" placeholder="请输入密码" v-model="upwd"></mt-field>
    <span @click="forget">忘记密码?</span>
    <!-- 确定按钮 绑定事件 -->
    <mt-button class="btn" size="large" @click="login">确定</mt-button>
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
  created() {
    this.check();
  },
  data() {
    return {
      uname: "",
      upwd: ""
    };
  },
  methods: {
    check() {
      if (window.sessionStorage.uid) {
        console.log(111)
      } else {
        console.log(222);
      }
    },
    phone() {
      this.$router.push("/phone");
    },
    forget() {
      this.$router.push("/forget");
    },
    login() {
      // 功能一：完成用户登录操作
      // 1：获取用户名和密码
      var u = this.uname;
      var p = this.upwd;
      // console.log(u+":"+p);
      // 2: 创建正则表达式 3~12位置 字母数字
      var re = /^1(2|3|4|5|7|8)\d{9}$/;
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
          console.log(res.data)
          window.sessionStorage.uid = res.data[0].id;
          console.log(window.sessionStorage.uid)
          this.$router.push("/Home");
        }
      });
    }
  }
};
</script>  

<style scoped>
* {
  margin: 0;
  padding: 0;
}
/* 账号登录***************** */
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
/* 用户名输入框************************* */
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
/* 确定按钮 */
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
