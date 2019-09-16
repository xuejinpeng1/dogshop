import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
//引入自定义组件
//import Exam01 from "./components/exam/Exam01.vue"
import Home from "./components/Home.vue"

// login
//1:引入自定义组件 login.vue
import login from "./components/login/login.vue"
//2:引入自定义组件 forget.vue
import forget from "./components/login/forget.vue"



import Home3 from "./components/mini/Home.vue"
import Home4 from "./components/mini/Home2.vue"
import MiniTwo from "./components/mini/minizi/MiniTwo.vue"
import MiniFive from "./components/mini/minizi/MiniFive.vue"

import Home2 from "./components/message/Home.vue"
import MessageList from "./components/message/common/MessageList.vue"
import NewsList from "./components/message/common/NewsList.vue"
import Information from "./components/message/common/Information.vue"
import Duty from "./components/message/common/Duty.vue"
import Merchant from "./components/message/common/Merchant.vue"
import Official from "./components/message/common/Official.vue"
import Login from "./components/message/common/Login.vue"
import Counselor from "./components/message/common/Counselor.vue"
import Pom from "./components/message/common/Pom.vue"
import Ensure from "./components/message/common/Ensure.vue"

Vue.use(Router)
export default new Router({
  routes: [
    //http://127.0.01:3001/#/
    { path: '/', component: HelloContainer },
    { path: '/Home', component: Home },
    { path: '/forget', component: forget },
    { path: '/login', component: login },
    {path:'/MiniFive',component:MiniFive},
    {path:'/MiniTwo',component:MiniTwo},
    {path:'/Home3',component:Home3},
    {path:'/Home4',component:Home4},

    {path:'/Ensure',component:Ensure},
    {path:'/Pom',component:Pom},
    {path:'/Counselor',component:Counselor},
    {path:'/Login',component:Login},
    {path:'/Official',component:Official},
    {path:'/Merchant',component:Merchant},
    {path:'/Duty',component:Duty},
    {path:'/Information',component:Information},
    {path:'/NewsList',component:NewsList},
    {path:'/MessageList',component:MessageList},
    {path: '/Home2', component:Home2},
  ]
})
