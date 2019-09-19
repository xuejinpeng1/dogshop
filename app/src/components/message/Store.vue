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
          <mt-cell/>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-cell/>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <mt-cell/>
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

</style>