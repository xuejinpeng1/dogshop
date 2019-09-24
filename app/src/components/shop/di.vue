<template>
  <div id="app">
    <div @click="xx">
    <mt-index-list>
      <mt-index-section index="定位城市">
        <mt-cell title="杭州"></mt-cell>
      </mt-index-section>
        <mt-index-section index="热门城市">
          <mt-cell title="全国"></mt-cell>
          <mt-cell title="北京"></mt-cell>
          <mt-cell title="天津"></mt-cell>
          <mt-cell title="上海"></mt-cell>
          <mt-cell title="广州"></mt-cell>
          <mt-cell title="深圳"></mt-cell>
          <mt-cell title="武汉"></mt-cell>
          <mt-cell title="成都"></mt-cell>
          <mt-cell title="重庆"></mt-cell>
        </mt-index-section>
      <mt-index-section index="A">
        <mt-cell title="鞍山"></mt-cell>
        <mt-cell title="安阳"></mt-cell>
        <mt-cell title="安顺"></mt-cell>
      </mt-index-section>
      <mt-index-section index="B">
        <mt-cell title="保定"></mt-cell>
        <mt-cell title="亳州"></mt-cell>
        <mt-cell title="北京"></mt-cell>
      </mt-index-section>
      <mt-index-section index="C">
        <mt-cell title="长沙"></mt-cell>
        <mt-cell title="长春"></mt-cell>
        <mt-cell title="承德"></mt-cell>
        <mt-cell title="成都"></mt-cell>
        <mt-cell title="重庆"></mt-cell>
      </mt-index-section>
      <mt-index-section index="D">
        <mt-cell title="大连"></mt-cell>
        <mt-cell title="东营"></mt-cell>
        <mt-cell title="德州"></mt-cell>
      </mt-index-section>
      <mt-index-section index="E">
        <mt-cell title="鄂州"></mt-cell>
      </mt-index-section>
      <mt-index-section index="F">
        <mt-cell title="抚顺"></mt-cell>
        <mt-cell title="阜阳"></mt-cell>
        <mt-cell title="佛山"></mt-cell>
      </mt-index-section>
      <mt-index-section index="G">
        <mt-cell title="广州"></mt-cell>
        <mt-cell title="桂林"></mt-cell>
        <mt-cell title="贵阳"></mt-cell>
      </mt-index-section>
      <mt-index-section index="H">
        <mt-cell title="邯郸"></mt-cell>
        <mt-cell title="衡水"></mt-cell>
        <mt-cell title="哈尔滨"></mt-cell>
        <mt-cell title="杭州"></mt-cell>
        <mt-cell title="合肥"></mt-cell>
        <mt-cell title="衡阳"></mt-cell>
        <mt-cell title="海口"></mt-cell>
        <mt-cell title="汉中"></mt-cell>
      </mt-index-section>
      <mt-index-section index="J">
        <mt-cell title="济南"></mt-cell>
        <mt-cell title="荆州"></mt-cell>
      </mt-index-section>
      <mt-index-section index="K">
        <mt-cell title="开封"></mt-cell>
        <mt-cell title="昆明"></mt-cell>
      </mt-index-section>
      <mt-index-section index="L">
        <mt-cell title="廊坊"></mt-cell>
        <mt-cell title="辽阳"></mt-cell>
        <mt-cell title="丽水"></mt-cell>
        <mt-cell title="洛阳"></mt-cell>
        <mt-cell title="拉萨"></mt-cell>
      </mt-index-section>
      <mt-index-section index="M">
        <mt-cell title="牡丹江"></mt-cell>
      </mt-index-section>
      <mt-index-section index="N">
        <mt-cell title="南京"></mt-cell>
        <mt-cell title="宁波"></mt-cell>
      </mt-index-section>
      <mt-index-section index="P">
        <mt-cell title="莆田"></mt-cell>
        <mt-cell title="濮阳"></mt-cell>
      </mt-index-section>
      <mt-index-section index="Q">
        <mt-cell title="秦皇岛"></mt-cell>
        <mt-cell title="青岛"></mt-cell>
      </mt-index-section>
      <mt-index-section index="R">
        <mt-cell title="日照"></mt-cell>
      </mt-index-section>
      <mt-index-section index="S">
        <mt-cell title="石家庄"></mt-cell>
        <mt-cell title="沈阳"></mt-cell>
        <mt-cell title="厦门"></mt-cell>
        <mt-cell title="深圳"></mt-cell>
        <mt-cell title="上海"></mt-cell>
      </mt-index-section>
      <mt-index-section index="T">
        <mt-cell title="唐山"></mt-cell>
        <mt-cell title="天津"></mt-cell>
      </mt-index-section>
      <mt-index-section index="W">
        <mt-cell title="武汉"></mt-cell>
        <mt-cell title="乌鲁木齐"></mt-cell>
      </mt-index-section>
      <mt-index-section index="X">
        <mt-cell title="许昌"></mt-cell>
        <mt-cell title="西安"></mt-cell>
      </mt-index-section>
      <mt-index-section index="Y">
        <mt-cell title="银川"></mt-cell>
      </mt-index-section>
      <mt-index-section index="Z">
        <mt-cell title="张家口"></mt-cell>
        <mt-cell title="郑州"></mt-cell>
      </mt-index-section>
    </mt-index-list>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    this.e1();
  },
  data() {
    return {
      aa: false
    };
  },
  methods: {
    e1() {
      this.aa = true;
    },
    xx(e) {
      if(e.target.nodeName=="DIV"){
        if(e.target.children.length==1){
          var f=e.target.children[0].innerHTML;
        }else{
          var f=e.target.children[0].children[0].innerHTML;
        }
        this.$router.push({path:'/shop',query:{city:f}});
      }     
    }
  }
};
</script>
<style scoped>
/* 标签颜色 */
.mint-indexlist >>> p {
  background-color: #ddd;
  font-size: 0.5rem;
}
.mint-indexlist {
  margin-top: -5%;
}
</style>