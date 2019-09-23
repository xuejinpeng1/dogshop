<template>
  <div class="dd2">
    <div @click="itemClick(id)" class="pic1">
      <img :src="simg" class="img1" />
      <p class="uname1">{{uname}}</p>
      <p class="span1">{{sname}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    id: { default: "" },
    simg: { default: "" },
    uname: { type: String, default: "" },
    sname: { type: String, default: "" },
    itemClick: { type: Function }
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.pic1 {
  width: 1.49rem;
  height: 2rem;
  position: relative;
  padding: 0.15rem;
  text-align: center;
}
.img1 {
  width: 1.2rem;
  height: 1.2rem;
}
.uname1 {
  position: absolute;
  font-size: 0.2rem;
  font-weight: 700;
  top: 0.87rem;
  /* left: 50%; */
  left:0.315rem;
  /* transform: translateX(-50%); */
  background: red;
  padding: 0.1rem;
  border-radius: 0.1rem;
  color:white;
}
.span1 {
  font:bolder 0.2rem 黑体;
}
</style>

