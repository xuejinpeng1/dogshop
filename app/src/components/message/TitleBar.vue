<template>
  <div class="page-head">
    <!--组件 顶部导航条-->
    <div class="title">
      <img src="../../assets/message/00.jpg">
      <p>{{Title}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    Title: { default: "" }
  }
};
</script>
<style scoped>
p {
  padding: 0;
  margin: 0;
}
.page-head {
  display: flex;
  /* position: fixed; */
  width: 100%;
  align-items: center; /* 垂直居中 */
  height: 0.5rem;
  color: #000;
  font-size: 0.4rem;
  justify-content: center;
  font-weight: bold;
  margin-bottom: 0.3rem;
  padding: 0;
}
.title {
  width: 100%;
  display: flex;
  line-height: 0.5rem;
}
.title img {
  width: 6%;
  height: 6%;
}
.title p {
  width: 90%;
  text-align: center;
}
</style>