import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"

//引入自定义组件home(晨)
import Home from "./components/Home.vue"

//login(彦东)
//1:引入自定义组件 login.vue
import login from "./components/login/login.vue"
import forget from "./components/login/forget.vue"
// import mine from "./components/login/mine.vue"(放到main下的/message,接口删掉了)
import phone from "./components/login/phone.vue"
import wu from "./components/login/wu.vue"
import my from "./components/login/my.vue"
import myself from "./components/main/myself.vue"
import int from "./components/login/int.vue"



//mall(江江)
import Meal from "./components/mall/Meal.vue"
import Mall from "./components/main/mall.vue"
import Mpin from "./components/mall/Mpin.vue"
import MiniTwo from "./components/mall/MiniTwo.vue"
import MiniFive from "./components/mall/MiniFive.vue"

//message(玉洁)
import MessageList from "./components/message/MessageList.vue"
import NewsList from "./components/message/NewsList.vue"
import Information from "./components/message/Information.vue"
import Duty from "./components/message/Duty.vue"
import Merchant from "./components/message/Merchant.vue"
import Official from "./components/message/Official.vue"
import Counselor from "./components/message/Counselor.vue"
import Pom from "./components/message/Pom.vue"
import Ensure from "./components/message/Ensure.vue"
import Store from "./components/message/Store.vue"
import Dog from "./components/ihome/Dog.vue"
import Teddy from "./components/message/Teddy.vue"
import Td from "./components/message/Td.vue"
import Golden from "./components/message/Golden.vue"
import Gd from "./components/message/Gd.vue"
import Ennly from "./components/message/Ennly.vue"


//shop(金鹏)
import Top from "./components/shop/top.vue"
import Di from "./components/shop/di.vue"
import Huoye from "./components/shop/huoye.vue"
import Youxuan from "./components/shop/youxuan.vue"
import Shop from "./components/main/shop.vue"

Vue.use(Router)
export default new Router({
  routes: [
    //http://127.0.01:3001/#/
    { path: '/', component: HelloContainer },
    { path: '/Home', component: Home },

    { path: '/phone', component: phone },
    { path: '/int' , component:int},
    { path: '/forget', component: forget },
    { path: '/myself', component: myself },
    { path: '/login', component: login },
    { path: '/my', component: my },
    { path: '/wu', component: wu },

    { path: '/MiniFive', component: MiniFive },
    { path: '/MiniTwo', component: MiniTwo },
    { path: '/Meal', component: Meal },
    { path: '/Mpin', component: Mpin },
    { path: '/Mall', component: Mall },
    
    { path: '/Store', component: Store },
    { path: '/Ensure', component: Ensure },
    { path: '/Pom', component: Pom },
    { path: '/Counselor', component: Counselor },
    { path: '/Official', component: Official },
    { path: '/Merchant', component: Merchant },
    { path: '/Duty', component: Duty },
    { path: '/Information', component: Information },
    { path: '/NewsList', component: NewsList },
    { path: '/MessageList', component: MessageList },
    { path: '/Dog', component: Dog },
    { path: '/Teddy',component: Teddy},
    { path: '/Td',component:Td},
    { path: '/Golden',component:Golden},
    { path: '/Gd',component:Gd},
    { path: '/Ennly',component:Ennly},  

    { path: '/Shop', component: Shop },
    { path: '/Youxuan', component: Youxuan },
    { path: '/Huoye', component: Huoye },
    { path: '/Di', component: Di },
    { path: '/Top', component: Top }
  ]
})
