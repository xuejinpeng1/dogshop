<template>
  <div class="grandfather">
    <img :src="bright" class="bright">
    <div class="father">
      <img :src="img1">
      <div>
        <div>
          <span>{{message1}}</span>
          <span>{{message2}}</span>
        </div>
        <div>
          <span>{{message4}}</span>
          <span>
            <s>{{message3}}</s>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    message1: { default: "" },
    message2: { default: "" },
    message3: { default: "" },
    message4: { default: "" },
    message5: { default: "" },
    img1: { default: "" },
    bright: { default: "" }
  }
};
</script>
<style scoped>
.grandfather {
  box-sizing: border-box;
  width: calc(100% / 3);
  border: 0.2rem solid white;
  border-left-width: 0.1rem;
  border-right-width: 0.1rem;
}
.father img {
  width: 100%;
}
.father div:first-child span:first-child,
.father div:nth-child(2) span:first-child {
  margin-left: 10%;
}
.father div:first-child {
  margin-bottom: 10%;
}
.father div:first-child span:first-child {
  font: bolder 0.3rem 微软雅黑;
  color: black;
}
.father div:first-child span:nth-child(2),
.father div:nth-child(2) {
  color: #fd8350;
  font: normal 0.2rem 等线 楷体;
}
.father div:nth-child(2) {
  color: #9f9f9f;
}
.father div:first-child span:nth-child(2),
.father div:nth-child(2) span:nth-child(2) {
  float: right;
  /* margin-right: 0.2rem; */
}
.grandfather{
  position: relative;
}
.bright{
  width:100%;
  position: absolute;
  top:0;
  left:0;
}
</style>