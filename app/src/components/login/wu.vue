<!-- 自定义组件 -->
<template>
  <!-- 根元素 -->
  <div>
    <!-- 快捷登录 -->
    <div class="head">
<<<<<<< HEAD
      <h3 id="h3" v-text="content"></h3>
=======
      <h3>账号登录</h3>
>>>>>>> 4a92514d55ca4f125dbf110f4e4c9b9925b12f9a
      <img @click="myself" class="img1" src="../../assets/myself/10.png" alt />
    </div>
    <!-- 暂无数据图片 -->
    <div>
        <img class="img2" src="../../assets/myself/wu.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
<<<<<<< HEAD
  data() {
    return {
      content:["待付款","待发送","已发货","待评价","退款"]
    }
  },
=======
>>>>>>> 4a92514d55ca4f125dbf110f4e4c9b9925b12f9a
    methods:{
        myself(){
           this.$router.push("/myself");
        }
<<<<<<< HEAD
    },
    created() {
      var url=document.location.href;
      var tag=url.split("=")[1];
      console.log(tag)
      if(tag==0){
        var h3 = document.getElementById("h3");
        this.content=this.content[0]
      }else if(tag==1){
        this.content=this.content[1];
      }
      else if(tag==2){
        this.content=this.content[2];
      }
      else if(tag==3){
        this.content=this.content[3];
      }
      else if(tag==4){
        this.content=this.content[4];
      }
    },
=======
    }
>>>>>>> 4a92514d55ca4f125dbf110f4e4c9b9925b12f9a
}
</script>


<style scoped>
    /* 账号登录***************** */
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
/* 暂无数据图片 */
.img2{
    width:100%;
    height:11.5rem;
}
</style>