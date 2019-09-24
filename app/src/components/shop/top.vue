<template>
  <div>
   <div class="xiala">
      <div @click="go">
        <span>全国</span>
        <img src="../../assets/shop/xiajiantou.png" />
      </div>
      <div @click="go1">
        <span id="w1">资质</span>
        <img src="../../assets/shop/xiajiantou.png" />
      </div>
      <div @click="go2">
        <span id="w2">信誉</span>
        <img src="../../assets/shop/xiajiantou.png" />
      </div> 
   </div>
      <!-- 资质下拉内容 -->
      <div id="nn1" @click="q1">
        <p>不限</p>
        <p>实名认证</p>
        <p>商家认证</p>
        <p>平台认证</p>
      </div>
      <div id="nn2" @click="q2">
        <p>不限</p>
        <p>交易量</p>
        <p>好评数</p>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    go(){
      this.$router.push('/Di')
    },
    go1(){
      nn1.style.display=(nn1.style.display=='none'? 'block':'none');
    },
    go2(){
      nn2.style.display =(nn2.style.display=='none'? 'block':'none');
    },
    q1(e){
      nn1.style.display='none';
      w1.innerHTML=e.target.innerHTML
    },
    q2(e){
      nn2.style.display="none";
      w2.innerHTML=e.target.innerHTML
    }
  },
};
</script>
    
<style scoped>

.xiala{
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-size: 0.3rem;
}
.xiala > div {
  padding: 0.1rem 0.6rem;;
}
img {
  width: 0.25rem;
  height: 0.25rem;
}
/* 下拉框 */
#nn1,#nn2{
  position: fixed;
  top:0.7rem;
  display: none;
  background:#fff;
  width: 100%;
  font-size:0.2rem;
  border-bottom:0.1rem solid #ddd;
}
#nn1>p,#nn2>p{
  padding:0.1rem;
}
</style>