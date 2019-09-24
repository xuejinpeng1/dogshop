<template>
  <div>
    <div class="six">
      <minisix
        class="six1"
        v-for="(item,index) in rows"
        :key="index"
        :img1="require(`../../assets/mall/`+item.gimg)"
        :message1="item.g_name"
        :message2="item.g_details"
        :message3="item.g_price"
         message4="会员价"
        :message5="item.g_price2"
      ></minisix>
    </div>
  </div>
</template>
<script>
import MiniSix from "./MiniSix.vue";
import json from "../json/MiniSix.json";
export default {
  data() {
    return {
      // rows: []
      rows: ""
    };
  },
  created() {
     this.loadMore();
   },
  components: {
    minisix: MiniSix
  },
  methods:{
     loadMore() {
      // 功能:获取当前用户购物车列表
      // 1.创建url请求服务器地址
      var url = "comt";
      // 2.发送ajax请求(让服务器程序完成功能)
      this.axios.get(url).then(res => {
        this.rows = res.data;
        console.log(this.rows);
      });
    }
  }
};
</script>
<style>
.six {
  clear: both;
  display: flex;
  flex-wrap: wrap;
  background-color: #eee;
}
</style>