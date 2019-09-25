    <!-- 自定义组件 -->
<template>
  <!-- 根元素 -->
  <div>
    <!-- 我的积分 -->
    <div class="head">
      <h3>我的积分</h3>
      <img @click="myself" class="img1" src="../../assets/myself/10.png" alt />
    </div>
    <!-- 黄色div -->
    <div class="yellow">
      <p class="p1">0</p>
      <p class="p2">可用积分</p>
    </div>
    <!-- 导航信息 -->
    <div class="nav">
      <div>
        <img id="jifen" src="../../assets/myself/jifen.png" alt />
        <span>积分明细</span>
        <img src="../../assets/myself/8.png" alt />
      </div>
    </div>
    <!-- 分享按钮 -->
    <div class="btn">
      <mt-button class="btn1" type="danger" size="large">分享赢积分</mt-button>
    </div>
    <img src="../../assets/myself/lan.png" alt="">
  </div>
</template>

<script>
export default {
    methods: {
        myself(){
            this.$router.go(-1)
        }
    },
};
</script>

<style scoped>
/* 我的积分***************** */
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
/* 黄色div区域**************** */
.yellow {
  background-color: #ffb70b;
  text-align: center;
  color: #fff;
}
.p1 {
  font-size: 0.8rem;
  display: inline-block;
  margin: 1rem 0 0 0;
}
.p2 {
  font-size: 0.25rem;
  padding-bottom: 0.5rem;
}
/* 积分明细*************** */
#jifen {
  float: left;
  margin-left: 0.3rem;
}
.nav div {
  height: 1.3rem;
}
/* 字体大小及内边距 */
.nav span {
  padding-left: 0.2rem;
  font-size: 0.35rem;
  position: relative;
  top: -10%;
}
/* 小箭头样式 */
.nav img {
  width: 0.5rem;
  height: 0.5rem;
  float: right;
  margin-top: 0.4rem;
}
/* 分享按钮***************** */
/* 完成按钮 */
.btn {
  padding: 0 0.3rem;
}
.mint-button--danger {
  color: #fff;
  background-color: #ffb70b;
}
</style>