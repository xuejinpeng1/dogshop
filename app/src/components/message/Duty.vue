<template>
<div class="inforStyle">
<titleBar title="责任声明-红格宠物"></titleBar>
<!-- 1.商品图片 -->
<div class="inforImg">
    <img src="../../assets/message/2.jpg">
</div>
<div class="text">
  <span class="textSpan">责任声明</span>
  <ul>
    <li>为保障买卖双方权益，交易之前需要特别注意:
      <p>1)请用<span>担保交易支付</span>，资金可退回。私下交易遇到诈骗，平台不承担相关责任。</p>
      <p>2)请用宠物市场<span>私聊</span>工具进行充分沟通，私聊证明可以作为售后仲裁的重要凭证。通过微信沟通并造成损失的，平台不承担相关责任。</p>
    </li>
    <li>对商家打着低价、诚信等口号去欺骗用户，“宠物市场”官方平台会将商家资料<span>提交至公安机关</span>，全力协助买家维护权益。</li>
    <li>宠物市场致力于打造-一个安全、公开、透明的宠物交易平台，竭诚为用户服务，为规范化的市场交易做贡献是我们的不断追求!</li>
  </ul>
</div>
<div class="textLast">红格宠物Copyright C 2017沪ICP备10011451号-20</div>
</div>
</template>
<script>
import TitleBar from "./TitleBar.vue";
export default {
  components: {
    titleBar: TitleBar
  },
}
</script>
<style scoped>
/* 图片 */
  .inforImg img {
  height: 2rem;
  width: 100%;
}  
/* 责任声明 绿色 */
.textSpan{
  color: #6ea056;
  margin-left: 0.2rem;
  font-size: 0.4rem;
}
.text ul{
  margin: 0;
}
.text ul li{
    font-size:  0.3rem;
    margin-right:  0.5rem;
}
.text ul li span{
  color: #6ea056;
}
.textLast{
  text-align: center;
  font-size: 0.2rem;
}
</style>