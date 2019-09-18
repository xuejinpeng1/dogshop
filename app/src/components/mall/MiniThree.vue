<template>
  <div class="f11">
    <div>
      <span>{{message1}}</span>
      <span class="p1">{{message2}}</span>
    </div>
    <div>
      <img :src="img1" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    message1: { default: "" },
    message2: { default: "" },
    img1: { default: "" }
  }
};
</script>
<style scoped>
.f1 div span {
  text-align: center;
  justify-content: center;
}
.p1 {
  font-size: 10px;
}

.f11 {
  display: flex;
}
.f11 > div:first-child {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: auto;
}
.f11 > div:nth-child(2) {
  flex: auto;
  /* align-items: center */
  line-height: 100%;

}
</style>