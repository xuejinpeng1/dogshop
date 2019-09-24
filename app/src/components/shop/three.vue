<template>
    <div>
      <div @click="itemClick(spid)" class="one">
        <img :src="sp_img">
        <span class="uname1">{{ptype}}</span>
        <div>
          <span class="money1">{{sp_price}}</span>
          <span class="time1">{{sp_time}}</span>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  props: {
    //接收父元素数据
    spid: { default: "" },
    sp_img: { default: "" },
    ptype: { type: String, default: "" },
    sp_price: { default: "" },
    sp_time: { type: String, default: "" },
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