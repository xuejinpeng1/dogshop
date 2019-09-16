<template>
  <div class="ihome">
    <div id="top">
      <div style="background:white">
        <img :src="require('../../assets/icon/kefu.png')">
        <mt-search v-model="search" cancel-text="取消" placeholder="搜索宠物、商家、品牌"></mt-search>
        <img :src="require('../../assets/icon/zhuanfa.png')">
      </div>
    </div>
    <mt-swipe :auto="1500">
      <mt-swipe-item>
        <img :src="require('../../assets/csl/carousel1.png')">
      </mt-swipe-item>
      <mt-swipe-item>
        <img :src="require('../../assets/csl/carousel2.png')">
      </mt-swipe-item>
      <mt-swipe-item>
        <img :src="require('../../assets/csl/carousel3.png')">
      </mt-swipe-item>
      <mt-swipe-item>
        <img :src="require('../../assets/csl/carousel4.png')">
      </mt-swipe-item>
    </mt-swipe>
    <div class="wiki">
      <div><img :src="require('../../assets/icon/nearby.png')"><span>附近</span></div>
      <div><img :src="require('../../assets/icon/dog.png')"><span>狗狗</span></div>
      <div><img :src="require('../../assets/icon/cat.png')"><span>猫猫</span></div>
      <div><img :src="require('../../assets/icon/mini.png')"><span>小宠</span></div>
      <div><img :src="require('../../assets/icon/aquatic.png')"><span>水宠</span></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: ""
    };
  }
};
</script>
<style scoped>
.ihome {
  padding-top: 2.4rem;
}
.mint-search {
  width: 80%;
}
.mint-search >>> .mint-searchbar-core {
  /*输入框样式修改*/
  background: #eaeaea;
  border-radius: 1rem;
  text-align: center;
  padding: 0;
  font-size: 0.8rem;
}
.mint-search >>> .mint-searchbar {
  width: 100%;
}
.mint-search >>> .mint-searchbar,
.mint-search >>> .mint-searchbar-cancel {
  background: white;
  padding: 0;
  margin: 0;
  caret-color: red; /*光标颜色*/
}
.mint-search >>> .mintui-search:before {
  /*查询图标*/
  font-size: 1.6rem;
  content: "\E604";
  position: absolute;
  top: 0.1rem;
  left: 5%;
}
#top {
  height: 2.2rem;
  line-height: 2.2rem;
  position: fixed;
  top: 0.2rem;
  width: 100%;
  z-index: 200;
}
#top div {
  height: 2.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
#top img {
  width: 1.8rem;
  height: 1.8rem;
}
.mint-swipe img {
  width: 100%;
}
.mint-swipe >>> .mint-swipe-indicators {
  position: absolute;
  bottom: 5%;
}
.mint-swipe,
.mint-swipe img {
  height: 10rem;
}
.mint-swipe{
  margin-top:0.2rem
}
.wiki{
  display: flex;
  justify-content:space-around;
  align-items: center;
  margin-top:1.2rem;
}
.wiki img{
  width:3rem;
  margin-bottom:0.3rem; 
}
.wiki div{
  display: flex;
  flex-direction: column;
  align-items: center;
  font:0.9rem 微软雅黑 楷体;
}
</style>