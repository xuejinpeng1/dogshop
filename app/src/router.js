import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
//引入自定义组件
//import Exam01 from "./components/exam/Exam01.vue"
import Home from "./components/Home.vue"

Vue.use(Router)
export default new Router({
  routes: [
    //http://127.0.01:3001/#/
    {path:'/',component:HelloContainer},
    {path:'/Home',component:Home},
  ]
})
