<template>
  <div class="dd2">
    <div @click="itemClick(id)" class="pic1">
       <img :src="simg" class="img1"/>
       <p class="uname1">{{uname}}</p>
       <p class="span1">{{sname}}</p>
    </div>
    </div>
</template>
<script>
export default {
  props:{
    id:{default:""},
    simg:{default:""},
    uname:{type:String,default:""},
    sname:{type:String,default:""},
    itemClick:{type:Function}
  },
  data(){
    return {}
  }
}
</script>
<style scoped>
    .pic1{
        width:2rem; 
        height:2.6rem; 
        position: relative;
        padding:0.15rem;
    }
    .img1{width:1.5rem;height:1.5rem;}
    .uname1{position: absolute;
             font-size: 0.25rem;
             top:1.2rem;
             left:0.25rem;
             background:red;
             padding:0.1rem;
             border-radius: 0.1rem
          }
    .span1{font-size:0.3rem}
</style>

