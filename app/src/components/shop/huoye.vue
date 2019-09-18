<template>
    <div>
      <div class="bt">
      <span>活跃商家</span>
      </div>
    <div class="mm">
    <top
      v-for="(item,index) in datas.data"
      :key="index"
      :id="item.id"
      :uname="item.uname"
      :title="item.title"
      :simage="require('../../assets/shop/11.png')" 
      :itemClick="clickitem"
     >
     </top>
     </div>
    </div>
</template>
<script>
import top2 from "./top2"
//负责引入json文件
import top2json from "../json/huoye.json"
export default {
  data(){
    return {
      datas:top2json
    }
  },
  created(){},
  methods: {
     clickitem(id){
      console.log(id);
    }
  },
  components:{
    "top":top2
  }
}
</script>
<style scoped>
.mm{
    display: flex;
       overflow-x: scroll;
}
.bt{
    margin-top: 0.5rem;
    border-top:0.01rem solid #ddd;
    border-bottom:0.01rem solid #ddd;
    font-size:0.25rem;
    padding:0.25rem 0.15rem;
    }
</style>

