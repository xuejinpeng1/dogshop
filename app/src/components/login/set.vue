<template>
  <div>
    <!-- 设置 -->
    <div class="head">
      <h3>设置</h3>
      <img class="img1" src="../../assets/myself/10.png" alt />
    </div>
    <!-- 导航信息 -->
    <div class="nav" @click="a">
      <div v-for="(item,i) of nav" :key="i" :data-set="i">
        <span>{{item}}</span>
        <img src="../../assets/myself/8.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            nav:["修改密码","帮助反馈","关于我们"]
        }
    },
    methods: {
        a(e){
            if(e.target.dataset.set==0){
                this.$router.push("/forget")
            }
        }
    },
}
</script>

<style scoped>
.img1 {
  /* 左箭头样式 */
  width: 0.6rem;
  height: 0.6rem;
  display: inline-block;
  position: absolute;
  top: 0.7rem;
}
.head h3 {
  /* 字体样式 */
  font-size: 0.4rem;
  text-align: center;
  margin-bottom: 0.5rem;
  margin-top: 0.7rem;
}
/* 导航信息************************ */
/* 导航div样式 */
.nav div {
  border-bottom: 0.02rem solid #f4f4f4;
  height: 1.5rem;
}
/* 字体大小及内边距 */
.nav span {
  padding: 0 0.5rem;
  padding-left: 0.2rem;
  font-size: 0.36rem;
  font-weight: 500;
}
/* 小箭头样式 */
.nav img {
  width: 0.6rem;
  height: 0.6rem;
  float: right;
  margin-top: 0.45rem;
}
</style>