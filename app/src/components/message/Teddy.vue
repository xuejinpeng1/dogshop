<template>
  <div>
      <titleBar title="泰迪"></titleBar>
      <top></top>
      <div class="X"  @click="jumpTd">
        <img src="../../assets/pet/dog/d01.jpg">
        <p>人气爆棚的聪明玩赏犬</p>
        <div class="XX">
          <img src="../../assets/message/000.jpg">
        </div>
      </div>
      <div class="XXX">
      <t
      v-for="(item,index) in rows.data"
      :key="index"
      :imgurl="require('../../assets/pet/dog/d01.jpg')"
      :msg1="item.uname"
      :msg2="item.site"
      :msg3="item.price"  
     ></t>
     </div>
  </div>
</template>
<script>
import TitleBar from "./TitleBar.vue";
import Top from "../shop/top.vue";
import t from "./teddy2.vue";
import teddy from "../json/teddy.json"
export default {
  components: {
    titleBar: TitleBar,
    top: Top,
    teddy:teddy,
    t:t
  },
  data() {
    return {
      rows: teddy
    };
  },
  methods: {
    jumpTd() {
      //功能:跳转页面
      this.$router.push("Td");
    },
  }
};
</script>
<style scoped>
/* 玩具犬 */
.X{
  display: flex;
  width: 100%;
  height: 1.5rem;
  padding-top: 0.2rem;
  padding-left: 0.3rem;
}
.X img{
  width: 1.2rem;
  height: 1.2rem;;
}
.X p{
  font-size: 0.3rem;
  padding: 0.2rem;
}
.XX img{
  margin-left: 90%;
  width: 0.8rem;
  height: 0.8rem;
  padding: 0.2rem;
}
/* 图片 */
.XXX{
  display: flex;
  flex-wrap: wrap;
  padding: 0.2rem;
  padding-top: 0;
}
</style>
