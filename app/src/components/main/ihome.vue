<template>
  <div class="ihome">
    <div id="top">
      <div style="background:white">
        <img :src="require('../../assets/icon/kefu.png')" />
        <mt-search v-model="search" cancel-text="取消" placeholder="搜索宠物、商家、品牌"></mt-search>
        <img :src="require('../../assets/icon/zhuanfa.png')" />
      </div>
    </div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in arr" :key="index">
        <img :src="require(`../../assets/csl/`+item.pimg)" />
      </mt-swipe-item>
      <!-- <mt-swipe-item>
        <img :src="require('../../assets/csl/carousel1.png')">
      </mt-swipe-item>
      <mt-swipe-item>
        <img :src="require('../../assets/csl/carousel2.png')">
      </mt-swipe-item>
      <mt-swipe-item>
        <img :src="require('../../assets/csl/carousel3.png')">
      </mt-swipe-item>
      <mt-swipe-item>
        <img :src="require('../../assets/csl/carousel4.png')">
      </mt-swipe-item>-->
    </mt-swipe>
    <div class="wiki">
      <div>
        <img :src="require('../../assets/icon/nearby.png')" />
        <span>附近</span>
      </div>
      <div>
        <img :src="require('../../assets/icon/dog.png')" />
        <span>狗狗</span>
      </div>
      <div>
        <img :src="require('../../assets/icon/cat.png')" />
        <span>猫猫</span>
      </div>
      <div>
        <img :src="require('../../assets/icon/mini.png')" />
        <span>小宠</span>
      </div>
      <div>
        <img :src="require('../../assets/icon/aquatic.png')" />
        <span>水宠</span>
      </div>
    </div>
    <div class="sale">
      <sale
        v-for="(item,index) in rows.data"
        :key="index"
        :img1="require(`../../assets/message/`+item.sp_img)"
        :message1="item.ptype"
        :message2="item.sp_price"
        :message3="item.sp_price2"
        :message4="item.sp_address"
      ></sale>
    </div>
  </div>
</template>
<script>
import Sale from "../ihome/sale.vue";
export default {
  created() {
    // 当前组建创建成功回调函数
    this.csl();
  },
  data() {
    return {
      search: "",
      // arr: [{"pid":1,"pimg":"carousel1.png"},{"pid":2,"pimg":"carousel2.png"},{"pid":3,"pimg":"carousel3.png"},{"pid":4,"pimg":"carousel4.png"}]
      arr: "",
      rows: {
        data: [
          {
            sp_img: "4.jpg",
            ptype: "金狗",
            sp_price: 2000,
            sp_price2: 4000,
            sp_address: "河南 新乡"
          },
          {
            sp_img: "4.jpg",
            ptype: "金狗",
            sp_price: 2000,
            sp_price2: 4000,
            sp_address: "河南 新乡"
          },
          {
            sp_img: "4.jpg",
            ptype: "金狗",
            sp_price: 2000,
            sp_price2: 4000,
            sp_address: "河南 新乡"
          },
          {
            sp_img: "4.jpg",
            ptype: "金狗",
            sp_price: 2000,
            sp_price2: 4000,
            sp_address: "河南 新乡"
          },
          {
            sp_img: "4.jpg",
            ptype: "金狗",
            sp_price: 2000,
            sp_price2: 4000,
            sp_address: "河南 新乡"
          },
          {
            sp_img: "4.jpg",
            ptype: "金狗",
            sp_price: 2000,
            sp_price2: 4000,
            sp_address: "河南 新乡"
          }
        ]
      }
    };
  },
  methods: {
    csl() {
      // 功能:获取当前用户购物车列表
      // 1.创建url请求服务器地址
      var url = "csl1";
      // 2.发送ajax请求(让服务器程序完成功能)
      this.axios.get(url).then(res => {
        // console.log(res.data[0].pimg);
        // console.log(console.log(JSON.stringify(res.data)));
        // this.arr = JSON.stringify(res.data);
        this.arr = res.data;
        console.log(this.arr);
      });
    }
  },
  components: {
    sale: Sale
  }
};
</script>
<style scoped>
.ihome {
  padding-top: 0.9rem;
}
.mint-search {
  width: 80%;
}
.mint-search >>> .mint-searchbar-core {
  /*输入框样式修改*/
  height: 0.6rem;
  background: #eaeaea;
  border-radius: 0.6rem;
  text-align: center;
  padding: 0;
  font-size: 0.3rem;
}
.mint-search >>> .mint-searchbar {
  width: 100%;
}
.mint-search >>> .mint-searchbar,
.mint-search >>> .mint-searchbar-cancel {
  font-size: 0.3rem;
  background: white;
  padding: 0;
  margin: 0;
  caret-color: red; /*光标颜色*/
}
.mint-search >>> .mintui-search:before {
  /*查询图标*/
  font-size: 0.4rem;
  content: "\E604";
  position: absolute;
  top: 22%;
  left: 5%;
}
#top {
  height: 0.9rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 200;
}
#top div {
  height: 0.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0.2rem 0 0.2rem 0;
}
#top img {
  width: 0.5rem;
  height: 0.5rem;
}
.mint-swipe img {
  width: 100%;
}
.mint-swipe >>> .mint-swipe-indicators {
  position: absolute;
  bottom: 5%;
}
.mint-swipe,
.mint-swipe img {
  height: 3rem;
}
.wiki {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 5%;
}
.wiki img {
  width: 0.8rem;
  height: 0.8rem;
  margin-bottom: 18%;
}
.wiki div {
  display: flex;
  flex-direction: column;
  align-items: center;
  font: 0.2rem 微软雅黑 楷体;
}
.sale {
  /* white-space: nowrap; */
  display: -webkit-box;
  overflow-x: auto;
}
.sale::-webkit-scrollbar {
  display: none;
}

/* .sale .father:not(:first-child){
  margin-left: 0 !important;
} */
</style>