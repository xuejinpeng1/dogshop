<template>
       <div class="Second">
          <img :src="imgurl">
          <p>{{msg1}}</p>
          <p>{{msg2}}<span>{{msg3}}</span></p>
       </div>
</template>
<script>
export default {
    props:{
        imgurl:{default:""},
        msg1:{default:""},
        msg2:{default:""},
        msg3:{default:""}
    }
}
</script>
<style scoped>
/* 最外层父元素：弹性布局 */

/* 修饰当前宠物30% */
.Second{
    width: 50%;
    margin: 2px 0;
    box-sizing:border-box;    /*并排的带边框的框： */
    display: flex;  
    min-height: 30%;
    flex-direction: column;   /*规定灵活项目的方向*/
    padding: 0.2rem;  
}
/* 修饰当前商品中的图片 */
.Second img{
    width: 100%;
}
/* 种类 价格 地区 */
.Second p{
     display: flex;
  font-size: 0.1rem;
  font-weight: bold;
  margin:0;
  margin-left: 0.1rem;
  margin-bottom: 0.1rem;
}
.Second  p span{
  font-size: 0.2rem;
  margin-left: 18%;
  color: burlywood;
}
</style>