<template>
  <div>
    <div class="xiala">
      <div @click="go">
        <span>全国</span>
        <img src="../../assets/shop/xiajiantou.png" />
      </div>
      <div @click="go1">
        <span>资质</span>
        <img src="../../assets/shop/xiajiantou.png" />
      </div>
      <div @click="go2">
        <span>信誉</span>
        <img src="../../assets/shop/xiajiantou.png" />
      </div>
    </div>
    <!-- 资质下拉内容 -->
    <div class="n1" id="nn1">
      <p>不限</p>
      <p>实名认证</p>
      <p>商家认证</p>
      <p>平台认证</p>
    </div>
    <div class="n2" id="nn2">
      <p>不限</p>
      <p>交易量</p>
      <p>好评数</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    go() {
      this.$router.push("/Di");
    },
    go1() {
      nn1.style.display = nn1.style.display == "none" ? "block" : "none";
    },
    go2() {
      nn2.style.display = nn2.style.display == "none" ? "block" : "none";
    }
  }
};
</script>
    
<style scoped>
.xiala {
  display: flex;
  justify-content: space-around;
  font-size: 0.3rem;
}
.xiala > div {
  padding: 0.1rem 0.7rem;
}
img {
  width: 0.25rem;
  height: 0.25rem;
}
/* 下拉框 */
.n1,
.n2 {
  position: fixed;
  top: 0.7rem;
  display: none;
  background: #fff;
  width: 100%;
  font-size: 0.2rem;
  border-bottom: 0.1rem solid #ddd;
}
.n1 > p,
.n2 > p {
  padding: 0.1rem;
}
</style>