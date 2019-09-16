<template>
  <!--Home.vue 入口全局组件-->
  <div class="home">
    <div class="content">
      <!--3:切换面板列表-->
      <mt-tab-container class="page-tabbar-container" v-model="active">
        <mt-tab-container-item id="ihome">
          <ihome></ihome>
        </mt-tab-container-item>
        <mt-tab-container-item id="shop">
          <shop></shop>
        </mt-tab-container-item>
        <mt-tab-container-item id="mall">
          <mall></mall>
        </mt-tab-container-item>
        <mt-tab-container-item id="message">
          <message></message>
        </mt-tab-container-item>
        <mt-tab-container-item id="myself">
          <myself></myself>
        </mt-tab-container-item>
      </mt-tab-container>
      <!-- 底部导航栏 -->
      <mt-tabbar v-model="active" fixed>
        <!-- 每个按钮绑定事件,将点击函数带的参数与子组件Footer的数组下标进行比较 -->
        <mt-tab-item id="ihome" @click.native="changePage(0)">
          <page
            :normal="require('../assets/icon/home1.png')"
            :selected="require('../assets/icon/home2.png')"
            :focused="footer[0].isSelect"
          ></page>首页
        </mt-tab-item>
        <mt-tab-item id="shop" @click.native="changePage(1)">
          <page
            :normal="require('../assets/icon/shop1.png')"
            :selected="require('../assets/icon/shop2.png')"
            :focused="footer[1].isSelect"
          ></page>商家
        </mt-tab-item>
        <mt-tab-item id="mall" @click.native="changePage(2)">
          <page
            :normal="require('../assets/icon/mall1.png')"
            :selected="require('../assets/icon/mall2.png')"
            :focused="footer[2].isSelect"
          ></page>商城
        </mt-tab-item>
        <mt-tab-item id="message" @click.native="changePage(3)">
          <page
            :normal="require('../assets/icon/message1.png')"
            :selected="require('../assets/icon/message2.png')"
            :focused="footer[3].isSelect"
          ></page>消息
        </mt-tab-item>
        <mt-tab-item id="myself" @click.native="changePage(4)">
          <page
            :normal="require('../assets/icon/myself1.png')"
            :selected="require('../assets/icon/myself2.png')"
            :focused="footer[4].isSelect"
          ></page>我的
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>
<script>
import Footer from "./part/footer.vue";
import Ihome from "./main/ihome.vue";
import Shop from "./main/shop.vue";
import Mall from "./main/mall.vue";
import Message from "./main/message.vue";
import Myself from "./main/myself.vue";
export default {
  data() {
    return {
      //面板中显示子组件id
      active: "ihome",
      //底部导航数组(给函数选择用的)
      footer: [
        { isSelect: true },
        { isSelect: false },
        { isSelect: false },
        { isSelect: false },
        { isSelect: false }
      ]
    };
  },
  methods: {
    changePage(n) {
      //循环footer数组中的内容,判断当前选择是否和其内容中的相等
      //将当前选择为true(相等),其他同项改为false
      for (var i = 0; i < this.footer.length; i++) {
        if (n == i) {
          this.footer[i].isSelect = true;
        } else {
          this.footer[i].isSelect = false;
        }
      }
    }
  },
  components: {
    page: Footer,
    ihome: Ihome,
    shop: Shop,
    mall: Mall,
    message: Message,
    myself: Myself
  }
};
</script>
<style scoped>
.home {
  overflow: hidden !important;
}
.content {
  overflow: auto;
  padding-bottom: 51px;
}
.mint-tabbar > .mint-tab-item.is-selected {
  color: #ecaf08;
}
</style>