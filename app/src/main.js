import Vue from 'vue'
import App from './App.vue'
import router from './router'
//1.引入第三方组件库mint-ui
//1.1完成引入所有组件
import MintUI from "mint-ui"
//1.2单击引入mint-ui样式文件
import "mint-ui/lib/style.css"
//1.3将mint-ui 注册vue
Vue.use(MintUI)
//1.4引入图标字体文件
//import "./font/iconfont.css"

//1.5引入轮播图
// import { Swipe, SwipeItem } from 'mint-ui';
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);

//2.1引入axios库
import axios from "axios"
//2.3 配置请求时保存session信息
axios.defaults.withCredentials = true;
//2.4 配置请求基础路径
axios.defaults.baseURL = "http://127.0.0.1:8080/"
//注意：地址栏必须写127.0.0.1...,如果写localhost报错
//2.5注册
Vue.prototype.axios = axios;


// 引入rem
import rem from "./rem.js";
// 注册 rem
Vue.use(rem)
Vue.config.productionTip=false;


//功能：使用vuex保存共享数据
//引入第三方模块
import Vuex from "vuex"
//注册实力(先注册再创建存储对象)
Vue.use(Vuex)
//创建存储对象
var store = new Vuex.Store({
  state: {//集中管理数据方法
    age: 23,
    list: [1, 2, 3, 5],
    car: "骑手"
  },
  mutations: {
    updateCar(state) {
      state.car = "夏利"
    },
    updateAge(state, age) {
      state.age = age
    },
    clear(state) {
      state.age = 0
    }
  },
  getters: {//集中获取数据函数
    getAge(state) {//特殊:所有函数都有参数
      return state.age
    },
    getList(state) {//特殊:所有函数都有参数
      return state.list
    },
    getCar(state) {//特殊:所有函数都有参数
      return state.car
    }
  },
  actions: {//集中保存异步修改数据函数
    modifyAge: (context) => {//异步调用clear
      setTimeout(() => {
        //异步调用mutations中定义函数
        //完成异步修改数据的功能
        context.commit("clear")
      }, 500)
    }
  }
})
//将存储对象添加vue实例作为属性
new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')