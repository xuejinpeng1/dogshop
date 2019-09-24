<template>
  <div class="page-head">
    <!--组件 顶部导航条-->
    <div class="title"  @click="back">
      <img src="../../assets/message/00.jpg">
      <p>{{Title}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    Title: { default: "" }
  },
  methods:{
    back(){
        this.$router.go(-1);//返回上一层
    },
},
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
  width: 7rem;
  align-items: center; /* 垂直居中 */
  height: 0.5rem;
  color: #000;
  font-size: 0.4rem;
  justify-content: center;
  font-weight: bold;
  margin-bottom: 0.3rem;
  padding-top: 0.5rem ;
}
.title {
  width: 100%;
  display: flex;
  line-height: 0.5rem;
}
.title img {
  width: 5%;
  height: 5%;
  padding-left: 0.1rem;
  margin-top:0.1rem
}
.title p {
  width: 85%;
  text-align: center;
}
</style>