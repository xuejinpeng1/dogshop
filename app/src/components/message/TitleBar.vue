<template>
<div class="page-head">
<!--组件 顶部导航条-->
<span>{{Title}}</span>
</div>
</template>
<script>
export default {
     props:{
        Title:{default:""}
    }
}
</script>
<style scoped>
.page-head{
    display: flex;
    /* position: fixed; */
    width: 100%;
    align-items: center;/* 垂直居中 */
    height: 0.3rem;
    color: #000;
    font-size: 0.4rem;
    justify-content: center;
    font-weight: bold;
    margin-bottom: 0.3rem;
}   
</style>