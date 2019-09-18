<template>
    <div>
      <div @click="itemClick(id)" class="one">
        <img :src="imgurl1">
        <span class="uname1">{{uname1}}</span>
        <div>
          <span class="money1">{{money1}}</span>
          <span class="time1">{{time1}}</span>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  props: {
    //接收父元素数据
    id: { default: "" },
    imgurl1: { default: "" },
    uname1: { type: String, default: "" },
    money1: { type: String, default: "" },
    time1: { type: String, default: "" },
    itemClick: { type: Function }
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
  .one{
      margin-top:0.3rem;
      width:2.3rem;
      height:3rem;
      font-size:0.2rem;
  }
  img{width:2.3rem;}
  .uname1{font-weight:800;}
  .money1{color:red}
  .time1{margin-left:0.2rem;}
</style>