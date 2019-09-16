<template>
  <div>
<!-- <h1>多条消息组件 MessageList.vue</h1> 
<h1>将MessageList.vue临时改全局组件</h1>  
<h1>给组件分配访问路径 MessageList</h1>-->
    <div @click="jumpNews">
      <message
        class="itemStyle"
        v-for="(item,index) in rows.data"
        :key="index"
        :imgurl="require(`../../../assets/`+item.img)"
        :msg1="item.title"
        :msg2="item.subtitle"
        :msg3="item.time"
      ></message>
    </div>
  </div>
</template>
<script>
import Message from "./Message.vue";
// 1.1引入项目模拟数据文件
//自动将json文件数据转换成js对象
import json from "../json/messagelist.json";
 import js from "../js/jquery-3.2.1.js";
export default {
  data() {
    return {
      // 保存json中的数据
      rows: json
    };
  },
  components: {
    message: Message
  },
  methods: {
    jumpNews(e) {  
        if(e.target.nodeName=="DIV"){
        var index=$(e.target).index();
      //功能:跳转页面
      switch(index) {
        case 0: //功能:跳转页面
          this.$router.push("NewsList");
          break;
        case 1: //功能:跳转页面
          this.$router.push("Pom");
          break;
        case 2: //功能:跳转页面
          this.$router.push("official");
          break;
         case 3://功能:跳转页面
          this.$router.push("Counselor");
           break;
      }
      }
    }
  }
};
</script>
<style scoped>
.itemStyle {
  padding: 0.5rem;
  border-bottom: 1px solid #d9d9d9;
  margin-top: 0rem;
}
</style>