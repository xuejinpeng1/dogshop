import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
//1:引入自定义组件 mine.vue
import mine from "./components/exam/mine.vue"
//2:引入自定义组件 login.vue
import login from "./components/exam/login.vue"

Vue.use(Router)
export default new Router({
  routes: [
    { path: '/login', component:login},
    { path: '/mine', component:mine},
    { path: '/', component: HelloContainer },
  ]
})
