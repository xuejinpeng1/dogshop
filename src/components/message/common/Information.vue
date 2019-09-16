<template>
<div class="inforStyle">
<titleBar title="交易必读-红格宠物"></titleBar>
    <!-- 1.商品图片 -->
<div class="inforImg">
    <img src="../../../assets/1.jpg">
</div>
<div class="textFirst">
  <span class="textSpan">担保交易介绍</span>
  <ul>
    <li>宠物市场为您打造一个面向全国的宠物销售平台，让您更便捷的购买销售宠物</li>
    <li>买卖双方私下交易造成自身权益损失，导致的纠纷与平台无关</li>
    <li>卖家被用户举报，已经证实做永久封号处理，并保留追究造成权力的损失</li>
  </ul>
</div>
<div class="textSecond">
  <span class="textSpan">常见问题</span>
  <p class="textp">1 如何使用宠物市场交易平台?</p>
  <p>买卖双方通过饲料了解宠物细节，通过担保交易付款(私下交易无任何保障)，卖家发货(汽运、空运货买家自提)，平台提供资金担保，担保期结束后平台打款至卖家指定账户</p>
  <p class="textp">2 宠物配送方式与费用?</p>
  <p>交易之前，买卖双方根据各自地理位置确定配送方式，距离较近的可以选择自提或汽车运输配送，距离较远的可以通过飞机空运发货，(空运 费用600人民币左右、由航空公司收取)，选择空运发货的需要买家自己前往目的地机场提取宠物，具体物流方式与费用可以同卖家协商，宠物市场不参与具体的物流配送。</p>
  <p class="textp">3 商家要求微信或支付宝私下付款靠谱吗?</p>
  <p> 私下交易属于个人行为，不享受平台任何保障，存在被诈骗和后期维权风险，据平台统计98%的私下交易最终产生纠纷。</p>
  <p class="textp">4 在宠物市场购买宠物和其它平台有什么不一样?</p>
  <p>您通过宠物市场担保交易购宠资金将由平台托管，宠物发货10天后，若您无任何异议，这笔款项才会转至卖家账户，最大限度保障您的资金安全。</p>
  <p class="textp">5 商家不按时发货怎么办?</p>
  <p>卖家超过3天不发货，平台将自动退款至买家支付账户，3次未按期发货的卖家将被永久封号</p>
  <p class="textp">6宠物到家生病如何处理?</p>
  <p> 如果宠物狗在担保期内检测出犬瘟、细小、犬钩螺旋、肝炎、流感等高至死率疾病的，宠物猫检测出猫瘟热、猫艾滋、猫鼻支等高至死率疾病的可提供持有正规行业许可证的宠物医院出具的相关诊断报告(需加盖医院公章)在平台担保期限内申请退款或赔偿，平台确认属实的可赔偿或退款。</p>
  <p class="textp">7 收到宠物与描述严重不符怎么办?</p>
  <p>收到宠物与描述严重不符，可提供相关证据(私聊记录、商家提供的视频、照片、单据等)申请退款，平台确认属实的支持退款,(用户终端设备显示和宠物实际的合理色差不在理赔范围)</p>
  <p class="textp">8 宠物未发货不想要了可以申请退款吗?</p>
  <p>宠物活体销售原则上一经出售，除健康问题不接受退款的，如果买家实在由于个人何题儿么外的可以和实家协商，卖家不同意退款的，平台支持卖家最高收取宠物交易金额(不含运费)的20%作为补偿，补偿卖家已发生成本和耽误销售产生的损失。</p>
</div>
<div class="textLast">红格宠物Copyright◎2017沪ICP备10011451号-20</div>
</div>
</template>
<script>
import TitleBar from "./TitleBar.vue";
export default {
  components: {
    titleBar: TitleBar
  },
};
</script>
<style scoped>
.inforImg img {
  height: 4rem;
  width: 100%;
}
.textSpan{
  color: blue;
  margin-left: 0.5rem;
  margin-top: 0.3rem;
  font-size: 0.8rem;
}
.textFirst ul li{
  font-size:  0.5rem;
    margin-right: 0.5rem;
}
.textSecond .textp{
  font-size: 0.6rem;
  color: orangered;
  margin-left: 0.3rem;
}
.textSecond p{
  margin-right: 0.5rem;
  font-size:  0.5rem;
  margin-left: 0.8rem;
}
.textLast{
  text-align: center;
  font-size: 0.3rem;
}
</style>