<template>
    <div>
    <div class="size1">信用优选商家</div>   
    <su
      class="itemstyle"
      v-for="(item,index) in datas.data"
      :key="index"
      :id="item.id"
      :itemClick="clickitem"
      :imgurl="require('../../assets/shop/11.png')"
      :uname="item.uname"
      :title="item.title"
      :money="item.money"
      :place="item.place"
      :number="item.number"
      :number1="item.number1"
      :number2="item.number2"
      :xing="item.xing"    
     ></su>
    
    </div>  
</template>
<script>
import su from "./s"
import youxuan from "../json/youxuan.json"
export default {
    data(){
        return{
            datas:youxuan, 
        }
    },
    created() {    
    },
    methods: {
      clickitem(id){
        console.log(id);
     } 
    },
    components:{
        "su":su
    }
}
</script>
<style scoped>
.size1{
    font-size: 0.25rem;
    padding:0.25rem 0.1rem;
    border-bottom:1px solid #ddd;
}

</style>

 