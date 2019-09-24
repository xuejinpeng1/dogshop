<template>
  <div class="grandfather">
    <img :src="bright" class="bright">
    <div class="father">
      <p :style="{backgroundImage: 'url(' + img1 + ')'}"></p>
      <div>
        <div>
          <span>{{message1}}</span>
          <span style="position:absolute;right:0">￥{{message2}}</span>
        </div>
        <div>
          <span>{{message4}}</span>
          <span>
            <s ref="s">￥{{message3}}</s>
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
  },
  mounted() {
    if (this.$refs.s.innerHTML == "￥") {
      this.$refs.s.style.display = "none";
    }
  }
};
</script>
<style scoped>
.grandfather {
  box-sizing: border-box;
  width: calc(100% / 3);
  border: 0.1rem solid white;
  border-top-width: 0rem;
  border-left-width: 0.08rem;
  border-right-width: 0.08rem;
}
.father img {
  width: 100%;
}
.father div:first-child {
  margin-bottom: 10%;
}
.father div:first-child span:first-child {
  font: bolder 0.23rem 微软雅黑;
  color: black;
}
.father div:first-child span:nth-child(2),
.father div:nth-child(2) {
  color: #fd8350;
  font: normal 0.23rem 等线 楷体;
}
.father div:nth-child(2) {
  color: #9f9f9f;
}
.father div:first-child span:nth-child(2),
.father div:nth-child(2) span:nth-child(2) {
  float: right;
  /* margin-right: 0.2rem; */
}
.grandfather {
  position: relative;
}
.bright {
  height: 2.2rem;
  width: 2.2rem;
  position: absolute;
  top: 0;
  left: 0;
}
.father p {
  display: inline-block;
  width: 2.2rem;
  height: 2.2rem;
  margin: 0 !important;
  background-size: 100% 100%; /* 背景图片同窗口完全自适应，但长宽可能会变形 */
  background-size: cover; /* 背景图片同窗口完全自适应，并且不变形 */
  background-position: center center;
}
.father div:empty {
  margin-left: 0 !important;
  display: none;
}
.father span:empty {
  margin-left: 0 !important;
  display: none;
}
</style>