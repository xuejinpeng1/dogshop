<template>
  <div>
    <titleBar title="狗狗"></titleBar>
       
    <div class="goods-item" v-for="(item,index) of arr" :key="index">
      <!-- 1.商品图片 -->
      <img :src="require(`../../assets/pet/dog/${item.dimg}`)" />
      <!-- <img :src="require(`../../assets/myself/${i+3}.png`)" />       -->
      <!-- <img :src="`require(http://127.0.0.1:8080/pet1/dog/d01.jpg)`" class="noe"> -->
      <!-- 2.商品名称 -->
      <p>{{item.ptype}}</p>
    </div>
  </div>
</template>s
<script>
import TitleBar from "./TitleBar.vue";
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
.goods-item img {
  width: 35%;
}
.goods-item p {
  margin: 0;
  font-size: 0.3rem;
}
</style>
