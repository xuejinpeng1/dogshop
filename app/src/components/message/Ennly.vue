<template>
  <div class="txt">
    <!-- 1.宠物图片 -->
    <img src="../../assets/pet/dog/d00.jpg">
    <p>金毛(公)</p>
    <div class="goods-item" v-for="(item,index) of arr" :key="index">
      <!-- 2.宠物生日 -->
      <p>{{item.birth}}</p>
      <!-- 2.宠物生日 -->
      <p>{{item.birth}}</p>
      <!-- 3.发布 -->
      <p>{{item.prelease}}</p>
      <!-- 4.品级 -->
      <p>{{item.grade}}</p>
      <!-- 5.描述 -->
      <p>{{item.pdescribe}}</p>
      <!-- 6.配送 -->
      <p>{{item.delivery}}</p>
      <!-- 7.服务 -->
      <img src="../../assets/pet/dog/d00.jpg">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: ""
    };
  },
  methods: {
    Ennly() {
      // 功能:获取pet_details列表
      // 1.创建url请求服务器地址
      var url = "Ennly";
      // 2.发送ajax请求(让服务器程序完成功能)
      this.axios.get(url).then(res => {
        this.arr = res.data;
      });
    }
  },
  created() {
    this.Ennly();
  }
};
</script>
<style scoped>
.txt {
  width: 100%;
  text-align: center;
}
.txt img {
  width: 100%;
}
</style>