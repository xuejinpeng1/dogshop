<template>
  <div>
    <titleBar title="店铺详情"></titleBar>
    <div class="title">
      <div class="text">
        <img src="../../assets/message/h1.jpg">
      </div>
      <div class="txt">
        <div class="textFirst">
          <span>杭州幂幂猫屋</span>
        </div>
        <div class="textScoend">
          <span>平台认证</span>
          <span>实地考察</span>
          <span>已缴押金</span>
        </div>
        <div class="textThird"></div>
        <div class="textfourth">
          <span>浙江省杭州拱墅区德胜新村89幢1单元101室(路边小院门口有标牌)</span>
        </div>
      </div>
    </div>
    <div class="page-navbar">
      <!-- navbar -->
      <mt-navbar class="page-part" v-model="selected">
        <mt-tab-item id="1">宠物</mt-tab-item>
        <mt-tab-item id="2">评价</mt-tab-item>
        <mt-tab-item id="3">简介</mt-tab-item>
      </mt-navbar>
      <!-- tabcontainer -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
        <div class="First">
          <span>交易担保数量:
          <span>46</span>
          </span>
          <a href="">什么是担保交易?</a>
        </div>
        <div class="XXX">
        <div class="Second">
          <img src="../../assets/message/h/h11.png">
          <p>金毛</p>
          <p>￥1980<span>浙江&nbsp;杭州</span></p>
       </div>
       <div class="Second">
          <img src="../../assets/message/h/h12.png">
          <p>金毛</p>
          <p>￥1980<span>浙江&nbsp;杭州</span></p>
       </div>
       </div>
        <div class="XXX">
        <div class="Second">
          <img src="../../assets/message/h/h13.png">
          <p>金毛</p>
          <p>￥1980<span>浙江&nbsp;杭州</span></p>
       </div>
       <div class="Second">
          <img src="../../assets/message/h/h14.png">
          <p>金毛</p>
          <p>￥1980<span>浙江&nbsp;杭州</span></p>
       </div>
       </div>
        <div class="XXX">
        <div class="Second">
          <img src="../../assets/message/h/h15.png">
          <p>金毛</p>
          <p>￥1980<span>浙江&nbsp;杭州</span></p>
       </div>
       <div class="Second">
          <img src="../../assets/message/h/h16.png">
          <p>金毛</p>
          <p>￥1980<span>浙江&nbsp;杭州</span></p>
       </div>
       </div>
        <div class="XXX">
        <div class="Second">
          <img src="../../assets/message/h/h17.png">
          <p>金毛</p>
          <p>￥1980<span>浙江&nbsp;杭州</span></p>
       </div>
       <div class="Second">
          <img src="../../assets/message/h/h18.png">
          <p>金毛</p>
          <p>￥1980<span>浙江&nbsp;杭州</span></p>
       </div>
       </div>
        <div class="XXX">
        <div class="Second">
          <img src="../../assets/message/h/h19.png">
          <p>金毛</p>
          <p>￥1980<span>浙江&nbsp;杭州</span></p>
       </div>
       <div class="Second">
          <img src="../../assets/message/h/h20.png">
          <p>金毛</p>
          <p>￥1980<span>浙江&nbsp;杭州</span></p>
       </div>
       </div>
       <div class="XXX">
        <div class="Second">
          <img src="../../assets/message/h/h21.png">
          <p>金毛</p>
          <p>￥1980<span>浙江&nbsp;杭州</span></p>
       </div>
       <div class="Second">
          <img src="../../assets/message/h/h22.png">
          <p>金毛</p>
          <p>￥1980<span>浙江&nbsp;杭州</span></p>
       </div>
       </div>
       <div class="XXX">
        <div class="Second">
          <img src="../../assets/message/h/h23.png">
          <p>金毛</p>
          <p>￥1980<span>浙江&nbsp;杭州</span></p>
       </div>
       <div class="Second">
          <img src="../../assets/message/h/h24.png">
          <p>金毛</p>
          <p>￥1980<span>浙江&nbsp;杭州</span></p>
       </div>
       </div>
       <div class="XXX">
        <div class="Second">
          <img src="../../assets/message/h/h25.png">
          <p>金毛</p>
          <p>￥1980<span>浙江&nbsp;杭州</span></p>
       </div>
       <div class="Second">
          <img src="../../assets/message/h/h26.png">
          <p>金毛</p>
          <p>￥1980<span>浙江&nbsp;杭州</span></p>
       </div>
       </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
        <div class="X">
           <img src="../../assets/message/h/j1.png"> 
           <img src="../../assets/message/h/j2.png"> 
           <img src="../../assets/message/h/j3.png"> 
           <img src="../../assets/message/h/j4.png"> 
           <img src="../../assets/message/h/j5.png"> 
           <img src="../../assets/message/h/j6.png"> 
           <img src="../../assets/message/h/j7.png"> 
           <img src="../../assets/message/h/j8.png"> 
        </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
        <div class="Third">
          <p>杭州幂幂猫屋</p>
          <span>地址:浙江杭州拱墅区德胜新村89幢1单元101室(路边小院门]口有标牌)</span>
          <p>简介:我们幂幂猫舍是杭州宠来乐电子商务有限公司旗下的

      经国际猫办CFA和中国猫协CAAC注册的正规猫舍。在杭州拱墅区，  西湖区，萧山区等地都有自己的繁殖销售场所。主要繁殖英国短毛猫，  蓝猫，  折耳猫,  美国短毛猫，加菲猫，布偶猫和曼基康短腿猫等系列品种。同时，我们还有繁殖各类犬种的犬舍哦。杭州同城朋友拍下我们可以免费送到家。也可以自提。外地朋友也是可以安排运输哦</p>
       <img src="../../assets/message/h/h1.png">
        <img src="../../assets/message/h/h2.png">
         <img src="../../assets/message/h/h3.png">
          <img src="../../assets/message/h/h4.png">
           <img src="../../assets/message/h/h5.png">
            <img src="../../assets/message/h/h6.png">
        </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<script>
import TitleBar from "./TitleBar.vue";
export default {
  name: "page-navbar",
  components: {
    titleBar: TitleBar
  },
  data() {
    return {
      selected: "1"
    };
  },
  methods: {

  }
};
</script>
<style scoped>
/* 头像 */
.text {
  display: inline-block;
}
.title {
  display: flex;
}
.text img {
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  margin-left: 0.2rem;
}
/* 头像右侧 */
/* 父元素 */
.txt {
  margin-left: 0.2rem;
}
/* 昵称 */
.textFirst {
  font-size: 0.3rem;
  font-weight: bold;
}
/* 认证 */
.textScoend {
  font-size: 0.2rem;
  color: #fff;
  margin-top: 0.1rem;
}
.textScoend span {
  font-size: 0.2rem;
  color: #fff;
  margin-right: 0.2rem;
  background-color: burlywood;
}
/* 精灵图 */
.textThird {
  width: 24%;
  height: 20%;
  background: url(../../assets/message/h2.png) 53% -46%;
  margin-top: 0.1rem;
}
/* 地址 */
.textfourth {
  font-size: 0.2rem;
  margin-top: 0.1rem;
}
/* 中间 */
.item {
  display: flex;
  justify-content: space-around;
  margin-top: 0.3rem;
}
.item span {
  font-size: 0.3rem;
}
.page-navbar {
  margin-top: 0.2rem;
}
/* 导航条 */

.mint-navbar >>> .mint-tab-item-label {
  font-size: 0.3rem;
}
/* 担保交易 */
.First{
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 0.3rem;
}
.First{
  font-size: 0.25rem;
}
.First a{
    text-decoration: none;  
    color: cornflowerblue;
}
.First span span{
  color: burlywood;
}
/* 宠物  图片 */
.XXX{
  display: flex;
}
.Second img{
  width: 99%;
  height: 80%;
  margin-top: 0.1rem;
}
/* 种类 价格 地区 */
.Second p{
  font-size: 0.2rem;
  font-weight: bold;
  margin:0;
  margin-left: 0.1rem;
  margin-bottom: 0.1rem;
}
.Second :nth-child(3){
  color: burlywood;
}
.Second  p span{
  font-size: 0.2rem;
  margin-left: 50%;
  color: #000;
}
/* 评价 */
.X img{
  width: 100%;
}
/* 简介 */
.Third{
  font-size: 0.3rem;
  margin: 0.2rem;
  color: grey
}
/* 简介 图片 */
.Third img{
  width: 100%;  
}
</style>