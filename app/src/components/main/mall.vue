<template>
  <div style="font-size:0.3rem">
    <div class="top">
      <div class="page-tabbar">
        <titleBar title="商城"></titleBar>
      </div>
    </div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in arr" :key="index">
        <img :src="require(`../../assets/csl/`+item.pimg)" />
      </mt-swipe-item>
    </mt-swipe>
    <div class="two">
      <minitwo
        v-for="(item,index) in rows.data"
        :key="index"
        :img1="require(`../../assets/mall/`+item.img)"
        :leftTitle="item.title"
      ></minitwo>
    </div>
    <h4 style="float:left">套餐</h4>
    <div class="three">
      <minithree
        class="three1"
        v-for="(item,index) in rows1.data"
        :key="index"
        :img1="require(`../../assets/mall/`+item.img)"
        :message1="item.title"
        :message2="item.subtitle"
      ></minithree>
    </div>
    <h4>品牌</h4>
    <div class="four">
      <minifour
        class="four1"
        v-for="(item,index) in rows2.data"
        :key="index"
        :img1="require(`../../assets/mall/`+item.img)"
        :message1="item.title"
      ></minifour>
    </div>
    <h4 style="float:left">主粮</h4>
    <span style="float:right">更多</span>
    <div>
      <minifive></minifive>
    </div>
  </div>
</template>
<script>
import TitleBar from "../message/TitleBar.vue";
import MiniTwo from "./../mall/MiniTwo.vue";
import MiniThree from "./../mall/MiniThree.vue";
import MiniFour from "./../mall/MiniFour.vue";
import MiniFive from "./../mall/MiniFive.vue";
import json from "./../json/MiniTwo.json";
import json1 from "./../json/MiniThree.json";
import json2 from "./../json/MiniFour.json";
export default {
  created() {
    // 当前组建创建成功回调函数
    this.csl();
  },
  data() {
    return {
      rows: json,
      rows1: json1,
      rows2: json2,
      arr: ""
    };
  },
  methods: {
    csl() {
      // 功能:获取当前用户购物车列表
      // 1.创建url请求服务器地址
      var url = "csl2";
      // 2.发送ajax请求(让服务器程序完成功能)
      this.axios.get(url).then(res => {
        this.arr = res.data;
        console.log(this.arr);
      });
    }
  },
  components: {
    titleBar: TitleBar,
    minitwo: MiniTwo,
    minithree: MiniThree,
    minifour: MiniFour,
    minifive: MiniFive
  }
};
</script>
<style scoped>
body {
  margin: 0;
  padding: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
  font-size: 0.4rem;
}
h4{
  margin-bottom:0.2rem;
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
  height: 3rem;
}
.mint-swipe{
  margin-bottom:0.3rem;
}
.two {
  display: flex;
  flex-direction: row;
}
.three {
  clear: both;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
.three > div {
  width: 50%;
}
.four {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
}
.page-tabbar {
  overflow: hidden; /*元素溢出隐藏*/
  overflow: auto; /* 溢出数据显示滚动条 */
  margin-bottom: 0.2rem;
}
.top {
  padding-top: 0.5rem !important;
}
.page-head {
  display: block;
  text-align: center;
}

</style>