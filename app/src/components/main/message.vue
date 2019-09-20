<template>
  <div class="top">
    <div class="page-tabbar">
      <!--调用子组件-->
      <!-- 顶部导航条 -->
      <titleBar title="消息"></titleBar>
      <messageList @click="jump"></messageList>
    </div>
  </div>
</template>
<script>
import TitleBar from "../message/TitleBar.vue";
import MessageList from "../message/MessageList.vue";
export default {
  data() {
    return {
      active: "message"
    };
  },
  components: {
    titleBar: TitleBar,
    messageList: MessageList
  },
  methods: {
    jump() {
      console.log(111);
    }
  }
};
</script>

<style scoped>
.page-tabbar {
  overflow: hidden; /*元素溢出隐藏*/
  overflow: auto; /* 溢出数据显示滚动条 */
  margin-bottom: 0.2rem;
}
.page-head {
  display: block;
  text-align: center;
}
</style>