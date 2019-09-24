<template>
  <div @click="itemClick(spid)" class="one">
    <div>
      <div :style="{backgroundImage: 'url(' + sp_img + ')'}"></div>
    </div>
    <div>
      <p class="uname1">{{ptype}}</p>
      <span class="money1">{{sp_price}}</span>
      <span class="time1">{{sp_time}}</span>
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
.one {
  margin-top: 0.3rem;
  width: 2.3rem;
  height: 3rem;
  font-size: 0.2rem;
}
img {
  width: 2.3rem;
}
.uname1 {
  font-weight: 800;
}
.money1 {
  color: red;
  float:left
}
.time1 {
  float:right
}
.one div:first-child {
  display: inline-block;
  width: 2.2rem;
  height: 2.2rem;
  margin: 0 !important;
  background-size: 100% 100%; /* 背景图片同窗口完全自适应，但长宽可能会变形 */
  background-size: cover; /* 背景图片同窗口完全自适应，并且不变形 */
  background-position: center center;
}
.one div:nth-child(2){
  height:0.8rem;
  width:100%;
}
</style>