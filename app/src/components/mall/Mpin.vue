<template>
  <div style="font-size:0.3rem">
    <div class="title">
      <p class="title0" style="float:left" @click="jump">&lt;</p>
      <p class="title0" style="margin-left:2.8rem">商城</p>
      <br />
      <div class="title1">
        <div @click="go">
          <span>品种</span>
          <img src="../../assets/mall/xiajiantou.png" />
        </div>
        <div @click="go1">
          <span>类别</span>
          <img src="../../assets/mall/xiajiantou.png" />
        </div>
        <div @click="go2">
          <span>全部</span>
          <img src="../../assets/mall/xiajiantou.png" />
        </div>
      </div>
    </div>
    <!--下拉内容 -->
    <div class="n1" id="nn1">
      <p>全部</p>
      <p>狗狗</p>
      <p>猫猫</p>
    </div>
    <div class="n2" id="nn2">
      <p>全部</p>
      <p>宠粮</p>
      <p>零食</p>
      <p>营养品</p>
      <p>玩具用品</p>
      <p>服务</p>
      <p>套餐</p>
    </div>
    <div class="n3" id="nn3" style="height:200%">
      <p>全部</p>
      <p>皇家</p>
      <p>冠能</p>
      <p>巅峰</p>
      <p>谷登</p>
      <p>拜耳</p>
      <p>福来恩</p>
      <p>红狗</p>
      <p>卫仕</p>
      <p>醇粹</p>
      <p>小佩</p>
      <p>伯纳天纯</p>
      <p>蓝犀</p>
      <p>路斯</p>
      <p>美滋元</p>
      <p>耐格乐</p>
      <p>顽皮</p>
      <p>逸诺</p>
      <p>亿味净</p>
      <p>渴望</p>
      <p>巴西淘淘</p>
      <p>纽顿</p>
      <p>GO</p>
      <p>大宠爱</p>
      <p>维克</p>
      <p>法瑞特</p>
      <p>麦德氏</p>
      <p>日清</p>
      <p>蒙贝</p>
      <p>美国辉瑞</p>
      <p>forpet</p>
      <p>威隆</p>
      <p>金盾</p>
      <p>众诚方源</p>
      <p>Joypet</p>
      <p>MAG</p>
      <p>AMO</p>
      <p>乐福</p>
      <p>大玛仕</p>
    </div>
    <div style="margin-top:0.8rem;display:flex">
      <minifive></minifive>
    </div>
  </div>
</template>
<style scoped>
.title {
  width: 100%;
  background-color: #fff;
  display: flex;
  position: fixed;
  margin-top: -0.82rem;
  /* margin-bottom: 0.3rem; */
}
.title0 {
  text-align: center;
  font-weight: 800;
  font-size: 0.4rem;
  margin: 0;
}
.title1 {
    width: 100%;
  clear: both;
  position: fixed;
  display: flex;
  background-color: #eee;
  margin-top: 0.43rem;
}
.title1 div {
  padding: 0.3rem 0.7rem;
}
.title1 span {
  font-size: 0.3rem;
}
.title2 {
  font-size: 20px;
  font-weight: 800;
  color: #666;
  padding: 0 0.8rem;
  margin-bottom: 0.2rem;
}
img {
  width: 0.25rem;
  height: 0.25rem;
}
.n1,
.n2,
.n3 {
  margin-top:0.5rem;
  position: fixed;
  top: 0.7rem;
  display: none;
  background: #eee;
  width: 100%;
  font-size: 0.25rem;
  border-bottom: 0.1rem solid #ddd;
}
.n1 > p,
.n2 > p,
.n3 > p {
  padding: 0.1rem;
}
</style>
<script>
import MiniFive from "./MiniFive.vue";
export default {
  components: {
    minifive: MiniFive
  },
  methods: {
    go1() {
      nn2.style.display = nn2.style.display == "none" ? "block" : "none";
    },
    go2() {
      nn3.style.display = nn3.style.display == "none" ? "block" : "none";
    },
    go() {
      nn1.style.display = nn1.style.display == "none" ? "block" : "none";
    },
    jump: function() {
      this.$router.push("/Mall")
    }
  }
};
</script>