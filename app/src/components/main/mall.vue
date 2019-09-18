<template>
  <div>
    <div class="two">
      <minitwo
        v-for="(item,index) in rows.data"
        :key="index"
        :img1="require(`../../assets/mall/`+item.img)"
        :leftTitle="item.title"
      ></minitwo>
    </div>
    <h4>套餐</h4>
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
    <h4>主粮</h4>
    <span>更多</span>
    <div>
      <minifive></minifive>
    </div>
  </div>
</template>
<script>
import MiniTwo from "./../mall/MiniTwo.vue";
import MiniThree from "./../mall/MiniThree.vue";
import MiniFour from "./../mall/MiniFour.vue";
import MiniFive from "./../mall/MiniFive.vue";
import json from "./../json/MiniTwo.json";
import json1 from "./../json/MiniThree.json";
import json2 from "./../json/MiniFour.json";
export default {
  data() {
    return {
      rows: json,
      rows1: json1,
      rows2: json2
    };
  },
  components: {
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
</style>