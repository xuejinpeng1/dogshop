<template>
<div class="D">
   <titleBar title="金毛"></titleBar> 
   <div class="X">
       <img src="../../assets/pet/dog/d07.jpg">
    </div>
       <div class="XX">
       <p>简介:</p> 
       <p>金毛犬最早是一种寻回猎犬，英文名Golden Retriever，是比较现代并很流行的狗的品种，是一种单猎犬。</p>
       <p>饲养方法:</p>
       <p>金毛幼犬时可食用泡软的幼犬粮加适量钙粉，补充营养。成年后可换成犬粮食用，更换狗粮时不要一下子全换过来，每回掺一半新的食物，试个两、三天，逐渐增加新的分量，一周后再全用新的。平时，主人也可以在狗粮中添加清水煮的胡萝卜、鸡胸肉、鸡蛋黄等食物，既营养又美味。</p>
   </div>
</div>
</template>
<script>
import TitleBar from "./TitleBar.vue";
export default {
    components: {
        titleBar: TitleBar,
    }
}
</script>
<style scoped>
    .X{
        width: 100%;
        text-align: center;
    }
    .X img{
        width: 50%;
    }
    .XX{
        margin: 0.1rem;
    }
    .XX p{
        font-size: 0.3rem;
    }
    .XX :first-child{
        color: coral;
        margin: 0;
    }
    .XX :nth-child(3){
        color: coral;
        margin: 0;
    }
</style>