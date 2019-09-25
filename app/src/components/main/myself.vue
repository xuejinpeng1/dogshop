<template>
  <!--自定义组件-->
  <div>
    <!--根元素 div-->
    <!-- 我的 -->
    <div>
      <h3 class="my">我的</h3>
      <img class="img1" src="../../assets/myself/1.png" />
    </div>
    <!-- 头像 -->
    <div class="head" @click="phone">
      <img class="img2" :src="require(`../../assets/myself/2.png`)" />
      <div class="head_text">
        <h4 ref="oq">点击头像登录</h4>
        <span>宠物市场购宠、售宠专业有保障</span>
      </div>
    </div>
    <!-- 积分 -->
    <div class="int">
      <div @click="int">
        <p class="p1">0分</p>
        <p class="p2">积分</p>
      </div>
      <div>
        <p class="p1" v-text="content"></p>
        <p class="p2">优惠券</p>
      </div>
    </div>
    <!-- 付款信息 -->
    <div class="info">
      <div v-for="(item,i) of temp" @click="router(i)" :key="i">
        <img :src="require(`../../assets/myself/${i+3}.png`)" />
        <span>{{item}}</span>
      </div>
    </div>
    <!-- 导航信息 -->
    <div class="nav">
      <div v-for="(item,i) of nav" :key="i">
        <span>{{item}}</span>
        <img src="../../assets/myself/8.png" alt />
      </div>
    </div>
    <!-- 发布黄色圆 -->
    <div class="radius">
      <img src="../../assets/myself/9.png" alt />
      <span>发布</span>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    this.check();
  },
  data() {
    return {
      name: ""
    };
  },
  // 页面加载中直接掉check()
  mounted() {
    // this.check();
  },
  methods: {
    wyd() {
      // 创建url请求服务器地址
      var url = "wyd";
      var id=window.sessionStorage.uid//1
      console.log(id)
      this.axios.get(url,{params:{id:id}}).then(res => {
        console.log(res.data)
        this.name = res.data[0];
        console.log(this.name);
        // ref更改h4内容
          var h4=this.$refs.oq;
          h4.innerHTML=this.name.iname;
          // 更改头像
          var img2 = document.getElementsByClassName("img2")[0];
          img2.setAttribute("src",require(`../../assets/myself/${this.name.uimg}`));
          // 更改优惠券
          var p1 = document.getElementsByClassName("p1")[0];
          this.content=`${this.name.iquan}张`;
      });
    },
    int() {
      if (window.sessionStorage.uid) {
        // 跳转int积分页面
        this.$router.push("int");
      } else {
        // 未登录跳转注册页面
        this.$router.push("/phone");
      }
    },
    router(i) {
      if (window.sessionStorage.uid) {
        this.$router.push({ path: "/wu", query: { tag: i } });
      } else {
        this.$router.push("/phone");
      }
    },
    check() {
      if (window.sessionStorage.uid) {
  
        this.wyd();
      }
    },
    phone() {
      if (window.sessionStorage.uid) {
        // 跳转更改头像页面
        this.$router.push("my");
      } else {
        // 未登录跳转注册页面
        this.$router.push("/phone");
      }
    }
  },
  data() {
    return {
      temp: ["待付款", "待发货", "已发货", "待评价", "退款"],
      nav: [
        "切换身份",
        "我的收藏",
        "绑定微信",
        "购宠协议",
        "用户帮助",
        "客服热线"
      ],
      content: "0张"
    };
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
/* 我的********************** */
.my {
  text-align: center;
  font-size: 0.4rem;
  margin-top: 0.5rem;
}
.img1 {
  /*设置标志的大小*/
  float: right;
  width: 0.5rem;
  height: 0.5rem;
  position: relative;
  top: -0.5rem;
  left: -0.3rem;
}
/* 头像*************************** */
.head {
  /*头像div*/
  margin: 0.5rem;
  margin-bottom: 0;
}
.head_text {
  /* 头像下的字体样式 */
  position: relative;
  top: -1.3rem;
  left: 1.5rem;
}
.head_text span {
  position: relative;
  top: -0.6rem;
}
.head > .img2 {
  /*用户默认头像*/
  width: 1.1rem;
  height: 1.1rem;
}
.head_text h4 {
  font-size: 0.35rem;
  margin: 0px;
}
.head_text span {
  font-size: 0.25rem;
  color: #aaa;
}
/* 积分********************* */
.int {
  /*积分*/
  display: flex;
  justify-content: center;
  position: relative;
  top: -1rem;
}
.int div {
  margin: 0 auto;
}
.int div .p1 {
  /* 积分字体大小样式 */
  font-size: 0.35rem;
  color: #000;
}
.int div .p2 {
  /* 积分字体大小样式 */
  font-size: 0.25rem;
  color: #aaa;
  margin-top: 0.3rem;
}
/* 付款信息**********************/
.info {
  /*上线边框 */
  border-top: 0.1rem solid #f4f4f4;
  border-bottom: 0.1rem solid #f4f4f4;
  display: flex;
  justify-content: space-between;
  margin-top: -0.75rem;
}
/* 付款信息图片大小 */
.info img {
  width: 0.5rem;
  height: 0.5rem;
  display: block;
  padding: 0.6rem 0.3rem 0rem 0.3rem;
}
/* 字体样式 */
.info span {
  font-size: 0.3rem;
  display: block;
  text-align: center;
  padding-bottom: 0.6rem;
  font-weight: bold;
  margin-top: 0.2rem;
}
/* 导航信息************************ */
/* 导航div样式 */
.nav div {
  border-bottom: 0.02rem solid #f4f4f4;
  height: 1.5rem;
}
/* 字体大小及内边距 */
.nav span {
  padding: 0 0.5rem;
  padding-left: 0.2rem;
  font-size: 0.36rem;
  font-weight: 500;
}
/* 小箭头样式 */
.nav img {
  width: 0.6rem;
  height: 0.6rem;
  float: right;
  margin-top: 0.45rem;
}
/* 发布黄色圆 **********************/
/* div样式 */
.radius {
  width: 1rem;
  height: 1rem;
  background-color: #fac537;
  border-radius: 50%;
  position: fixed;
  bottom: 13%;
  left: 43%;
  /* text-align: center; */
}
/* 加号样式 */
.radius img {
  width: 0.4rem;
  height: 0.4rem;
  position: relative;
  top: -0.4rem;
  left: 0.3rem;
}
/* 字体大小 */
.radius span {
  font-size: 0.2rem;
  position: relative;
  top: -0.15rem;
  left: -0.12rem;
}
</style>