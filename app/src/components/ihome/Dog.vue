<template>
  <div>
    <titleBar title="狗狗"></titleBar>
    <div class="product-app">
    <div class="goods-item" v-for="(item,index) of arr" :key="index">
      <!-- 1.宠物图片 -->
      <img :src="require(`../../assets/pet/dog/${item.dimg}`)" />
      <!-- <img :src="`require(http://127.0.0.1:8080/pet1/dog/d01.jpg)`" class="noe"> -->
      <!-- 2.宠物名称 -->
      <p>{{item.ptype}}</p>
    </div>
    </div>
  </div>
</template>
<script>
import TitleBar from "./../message/TitleBar.vue";
export default {
  components: {
    titleBar: TitleBar
  },
  data() {
    return {
      arr: "",
    };
  },
  methods: {
    dog() {
      // 功能:获取狗狗列表
      // 1.创建url请求服务器地址
      console.log(111)
      var url = "dog";
      // 2.发送ajax请求(让服务器程序完成功能)
      this.axios.get(url).then(res => {
        // console.log(res.data[0].pimg);
        // console.log(console.log(JSON.stringify(res.data)));
        // this.arr = JSON.stringify(res.data);
        this.arr = res.data;
        console.log(this.arr);
        console.log(this.arr[1].dimg);
      });
    }
  },
  created() {
    this.dog();
  }
};
</script>
<style scoped>
/* 1.最外层父元素：弹性布局 */
.product-app{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0.3rem;
}
/* 2.修饰当前宠物35% */
.goods-item{
    width: 30%;
    margin: 2px 0;
    box-sizing:border-box;    /*并排的带边框的框：*/
    display: flex;
    flex-direction: column;   /*规定灵活项目的方向*/
    min-height: 30%;
    padding: 0.2rem;  
}
/* 3.修饰当前商品中的图片 */
.goods-item img{
    width: 100%;
}
.goods-item p {
  margin: 0;
  font-size: 0.3rem;
}
</style>
