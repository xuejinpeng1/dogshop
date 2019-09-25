<template>
  <div>
    <titleBar title="小宠" ></titleBar>
    <div class="product-app">
    <div class="goods-item" v-for="(item,index) of arr" :key="index">
      <!-- 1.宠物图片 -->
      <img :src="require(`../../assets/pet/mini/${item.mimg}`)" />
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
    mini() {
      var url = "mini";
      this.axios.get(url).then(res => {;
        this.arr = res.data;
      });
    }
  },
  created() {
    this.mini();
  }
};
</script>
