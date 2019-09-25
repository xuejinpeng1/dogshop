<template>
  <div>
    <titleBar title="猫猫" ></titleBar>
    <div class="product-app">
    <div class="goods-item" v-for="(item,index) of arr" :key="index">
      <!-- 1.宠物图片 -->
      <img :src="require(`../../assets/pet/cat/${item.cimg}`)" />
      <!-- <img :src="`require(http://127.0.0.1:8080/pet1/dog/d01.jpg)`" class="noe"> -->
      <!-- 2.宠物名称 -->
      <p>{{item.ptype}}</p>
    </div>
    </div>
  </div>
</template>
<script>
import TitleBar from "./../message/TitleBar.vue";
import js from "../../assets/js/jquery-3.2.1.js";
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
    cat() {
      // 功能:获取狗狗列表
      // 1.创建url请求服务器地址
      var url = "cat";
      // 2.发送ajax请求(让服务器程序完成功能)
      this.axios.get(url).then(res => {;
        this.arr = res.data;
      });
    }
  },
  created() {
    this.cat();
  },
};
</script>
