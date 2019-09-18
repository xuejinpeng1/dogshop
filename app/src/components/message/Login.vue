<!--Login.vue 用户登录组件-->
<template>
<div>
<h1 style="text-align:center;">快捷登录</h1>
<!--用户名输入框-->
<mt-field label="手机号:" placeholder="请输入手机号" v-model="uname"></mt-field>
<!--用户密码输入框-->
<mt-field label="验证码:" placeholder="请输入验证码" v-model="upwd"></mt-field>
<!--登录按钮 绑定事件-->
<mt-button size="large" @click="login">免注册登录</mt-button>  
</div>
</template>
<script>
export default {
data(){return {
    uname:"",
    upwd:""
}
},
methods:{
login(){
// 功能一：完成用户登录操作
// 1：获取用户名和密码
var u=this.uname;
var p=this.upwd;
// console.log(u+":"+p);
// 2: 创建正则表达式 3~12位置 字母数字
var re=/^1(3|4|5|7|8)\d{9}$/;
var reg=/^[0-9]{3,12}$/i;
// 3: 判断如何错误 用户名提示
if(!re.test(u)){
    this.$toast("手机号格式不正确");
    return;
}
// 4: 判断如何错误 密码提示
if(!reg.test(p)){
    this.$toast("密码格式不正确");
    return;
}
// 5: 发送ajax  axios
var url="login";
var obj={uname:u,upwd:p};                                                                   
this.axios.get(url,{params:obj}).then(res=>{
    // console.log(res.data.code);
  // 6: 接收服务器返回数据
  var code =res.data.code;
  if(code==-1){
      // 7: 失败 提示
      this.$messagebox("消息","手机号或密码有误");
  }else{
  // 8: 成功 跳转 
  this.$router.push("/Home"); 
  }
})

}
}
}
</script>