<template>
  <div @click="itemClick(id)">
    <!--h3>Message.vue 消息组件</h3-->
    <div class="rootstyle">
    <div class="left">
      <img :src="imgurl" class="imgstyle" />
      <p class="uname1">{{uname}}</p>
    </div>
    <div class="zhong">
      <div>
        <span class="title1">{{title}}</span>
        <span class="money1">{{money}}</span>
      </div>
      <div class="place1">{{place}}</div>
      <div>
        <span>在售{{number}}只</span>
        <span class="number1">
          担保交易
          <span>{{number1}}</span>只
        </span>
      </div>
    </div>
    <div class="right">
      <span>{{xing}}</span>
      <span>{{number2}}</span>
      <span>好评数</span>
    </div>
  </div>
   <div class="xh1">
      <three
        v-for="(item,index) in datas1.data1"
        :key="index"
        :imgurl1="require('../../assets/shop/111.png')"
        :id="item.id"
        :uname1="item.uname1"
        :money1="item.money1"
        :time1="item.time1"
      ></three>
      </div>
    
  </div>
</template>
<script>
import three from "./three"
import tp from "../json/three.json"
export default {
  props: {
    //接收父元素数据
    id: { default: "" },
    imgurl: { default: "" },
    uname: { type: String, default: "" },
    title: { type: String, default: "" },
    money: { type: String, default: "" },
    place: { type: String, default: "" },
    number: { default: "" },
    number1: { default: "" },
    number2: { default: "" },
    xing: { type: String, default: "" },
    itemClick: { type: Function }
  },
  data() {
    return {
      datas1:tp
    };
  },
   methods: {
      clickitem(id){
        console.log(id);
     } 
    },
    components:{
        "three":three
    }
   
};
</script>
<style scoped>
.rootstyle {
  display: flex;
  font-size: 0.2rem;
  padding: 0.2rem 0.1rem;
}
.left {
  width: 2rem;
  height: 1.8rem;
  position: relative;
}
.imgstyle {
  width: 1.5rem;
  height: 1.5rem;
}
.uname1 {
  position: absolute;
  font-size: 0.2rem;
  top: 0.9rem;
  left: 0.2rem;
  background: red;
  padding: 0.1rem;
  border-radius: 0.1rem;
}
.zhong,
.right {
  display: flex;
  flex-direction: column;
}
.zhong {
  width: 5rem;
}
.right {
  width: 2.5rem;
  text-align: right;
}
.zhong > div,
.right > span {
  padding: 0.1rem;
}

.title1 {
  font-weight: bold;
}
.money1 {
  margin-left: 0.25rem;
  background-color: red;
  padding: 0.05rem;
  border-radius: 0.05rem;
}
.place1 {
  font-size: 0.05rem;
}
.number1 {
  margin-left: 0.25rem;
}
.number1 > span {
  color: red;
}
.xh1{
  display: flex;
  justify-content: space-around;
}
</style>