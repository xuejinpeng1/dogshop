<template>
<div class="rootstyle">
<!--一条消息的子组件-->
<!--1.左侧 图片与标题-->
<div class="leftimgtxt">
<img :src="imgurl" class="imgstyle">
<!--1.2标题与子标题-->
<div class="rightOfImg">
    <span class="titleable">{{msg1}}</span>
    <span class="subtitle">{{msg2}}</span>
</div>
</div>
<!--2.右侧 时间-->
<span class="sendtime">{{msg3}}</span>
</div>
</template>
<script>
export default {
    props:{
        imgurl:{default:""},
        msg1:{default:""},
        msg2:{default:""},
        msg3:{default:""}
    }
}
</script>
<style scope>
/* 1.为根元素添加样式 弹性布局 */
.rootstyle{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.8rem;
    height: 0.2rem;
}
/* 2.左侧图片与文字区域 */
.leftimgtxt{
    display: flex;
}
/* 3.图片 */
.imgstyle{
    width: 0.9rem;
    height:0.9rem;
}
/* 4.标题与子标题按列排放 */
.rightOfImg{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 0.2rem;
}
/* 5.标题 */
.titleable{
    color: #000;
    font-size: 0.3rem;
    font-weight: bold;
}
/* 6.子标题 */
.subtitle{
    color: gray;
    margin-top: 0.1rem;
    font-size: 0.2rem
}
/* 右侧时间 */
.sendtime{
    color: gray;
    font-size: 0.2rem;
    margin-top: 0.5rem;
}
</style>
