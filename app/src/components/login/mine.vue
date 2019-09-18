<template>
  <!--自定义组件-->
  <div>
    <!--根元素 div-->
    <!-- 我的 -->
    <div>
      <h3 class="my">我的</h3>
      <img class="img1" src="../../assets/myself/1.png" />
    </div>
    <!-- 头像 -->
    <div @click="phone" class="head">
      <img class="img2" src="../../assets/myself/2.png" />
      <div class="head_text">
        <h4>点击头像登录</h4>
        <span>宠物市场购宠、售宠专业有保障</span>
      </div>
    </div>
    <!-- 积分 -->
    <div class="int">
      <div>
        <p class="p1">0分</p>
        <p class="p2">积分</p>
      </div>
      <div>
        <p class="p1">0张</p>
        <p class="p2">优惠券</p>
      </div>
    </div>
    <!-- 付款信息 -->
    <div class="info">
      <div v-for="(item,i) of temp" :key="i">
        <img :src="require(`../../assets/myself/${i+3}.png`)" />
        <span>{{item}}</span>
      </div>
    </div>
    <!-- 导航信息 -->
    <div class="nav">
      <div v-for="(item,i) of nav" :key="i">
        <span>{{item}}</span>
        <img src="../../assets/myself/8.png" alt />
      </div>
    </div>
    <!-- 发布黄色圆 -->
    <div class="radius">
      <img src="../../assets/myself/9.png" alt />
      <span>发布</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      temp: ["待付款", "待发货", "已发货", "待评价", "退款"],
      nav: [
        "切换身份",
        "我的收藏",
        "绑定微信",
        "购宠协议",
        "用户帮助",
        "客服热线"
      ]
    };
  },
  methods: {
    phone(){
        this.$router.push("/phone");
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
/* 我的********************** */
.my {
  font-size: 0.4rem;
  text-align: center;
  margin-bottom: 0.5rem;
  margin-top: 0.7rem;
}
.img1 {
  /*设置标志的大小*/
  float: right;
  width: 0.5rem;
  height: 0.5rem;
  position: relative;
  top: -0.98rem;
  left: -0.3rem;
}
/* 头像*************************** */
.head {
  /*头像div*/
  margin: 0.5rem;
  margin-bottom: 0;
}
.head_text {
  /* 头像下的字体样式 */
  position: relative;
  top: -1.15rem;
  left: 1.3rem;
}
.head_text span {
  position: relative;
  top: -0.6rem;
}
.head > .img2 {
  /*用户默认头像*/
  width: 1.1rem;
  height: 1.1rem;
}
.head_text h4 {
  font-size: 0.35rem;
  margin: 0px;
}
.head_text span {
  font-size: 0.28rem;
  color: #aaa;
}
/* 积分********************* */
.int {
  /*积分*/
  display: flex;
  justify-content: center;
  position: relative;
  top: -1rem;
}
.int div {
  margin: 0 auto;
}
.int div .p1 {
  /* 积分字体大小样式 */
  font-size: 0.35rem;
}
.int div .p2 {
  /* 积分字体大小样式 */
  font-size: 0.3rem;
  color:#aaa;
  margin-top:0.2rem;
}
/* 付款信息**********************/
.info {
  /*上边框 */
  border-top: 0.1rem solid #f4f4f4;
  border-bottom: 0.1rem solid #f4f4f4;
  display: flex;
  justify-content: space-between;
  margin-top:-0.9rem;
}
/* 付款信息图片大小 */
.info img {
  width: 0.5rem;
  height: 0.5rem;
  display: block;
  padding: 0.6rem 0.3rem 0.3rem 0.3rem;
}
/* 字体样式 */
.info span {
  font-size: 0.3rem;
  display: block;
  text-align: center;
  padding-bottom: 0.6rem;
}
/* 导航信息************************ */
/* 导航div样式 */
.nav div {
  border-bottom: 0.05rem solid #f4f4f4;
  height: 1.3rem;
}
/* 字体大小及内边距 */
.nav span {
  /* padding: 0 0.5rem; */
  padding-left: 0.2rem;
  font-size: 0.38rem;
  position: relative;
  top:-10%;
}
/* 小箭头样式 */
.nav img {
  width: 0.5rem;
  height: 0.5rem;
  float: right;
  margin-top: 0.4rem;
}
/* 发布黄色圆 **********************/
/* div样式 */
.radius {
  width: 1rem;
  height: 1rem;
  background-color: #ffbd49;
  border-radius: 50%;
  position: fixed;
  bottom: 13%;
  left: 43%;
  /* text-align: center; */
}
/* 加号样式 */
.radius img {
  width: 0.5rem;
  height: 0.5rem;
  position: relative;
  top: -0.3rem;
  left: 0.25rem;
}
/* 字体大小 */
.radius span {
  font-size: 0.25rem;
  position: relative;
  top: -0.1rem;
  left: -0.26rem;
}
</style>