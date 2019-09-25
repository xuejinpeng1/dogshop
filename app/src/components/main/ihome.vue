<template>
  <div class="ihome">
    <div id="top">
      <div style="background:white">
        <img :src="require('../../assets/icon/kefu.png')">
        <mt-search v-model="search" cancel-text="取消" placeholder="搜索宠物、商家、品牌"></mt-search>
        <img :src="require('../../assets/icon/zhuanfa.png')">
      </div>
    </div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in arr" :key="index">
        <img :src="require(`../../assets/csl/`+item.pimg)">
      </mt-swipe-item>
    </mt-swipe>
    <div class="wiki">
      <div>
        <img :src="require('../../assets/icon/nearby.png')">
        <span>附近</span>
      </div>
      <div>
        <router-link :to="{path:  '/dog'}">
          <img :src="require('../../assets/icon/dog.png')">
        </router-link>
        <span>狗狗</span>
      </div>
      <div>
        <router-link :to="{path:  '/cat'}">
          <img :src="require('../../assets/icon/cat.png')">
        </router-link>
        <span>猫猫</span>
      </div>
      <div>
        <router-link :to="{path:  '/mini'}">
          <img :src="require('../../assets/icon/mini.png')">
        </router-link>
        <span>小宠</span>
      </div>
      <div>
        <router-link :to="{path:  '/aquatic'}">
          <img :src="require('../../assets/icon/aquatic.png')">
        </router-link>
        <span>水宠</span>
      </div>
    </div>
    <div>
      <i-itle
        :top="require('../../assets/icon/icon1.png')"
        tips="更多"
        :arrow="require('../../assets/icon/right1.png')"
        class="gary"
      ></i-itle>
      <div class="sale">
        <sale
          v-for="(item,index) in onsale"
          :key="index"
          :message1="item.ptype"
          :message2="item.sp_price"
          :message3="item.sp_price2"
          :message4="item.sp_address"
          :img1="`http://127.0.0.1:8080/pet/`+item.img"
          :bright="require('../../assets/icon/tejia.png')"
        ></sale>
      </div>
    </div>
    <div>
      <i-itle
        :top="require('../../assets/icon/icon2.png')"
        tips="更多"
        :arrow="require('../../assets/icon/right1.png')"
        class="gary"
      ></i-itle>
      <div class="sale">
        <sale
          v-for="(item,index) in onnew"
          :key="index"
          :message1="item.ptype"
          :message2="item.sp_price"
          :img1="`http://127.0.0.1:8080/pet/`+item.img"
          :bright="require('../../assets/icon/none.png')"
        ></sale>
      </div>
    </div>
    <div>
      <div>
        <i-itle
          :top="require('../../assets/icon/icon3.png')"
          tips="平台审核,品质认证"
          :arrow="require('../../assets/icon/right1.png')"
          class="yellow"
        ></i-itle>
        <div class="sale change">
          <sale
            v-for="(item,index) in onbetter"
            :key="index"
            :message1="item.ptype"
            :message2="item.sp_price"
            :message3="item.sp_price2"
            :message4="item.sp_address"
            :img1="`http://127.0.0.1:8080/pet/`+item.img"
            :bright="require('../../assets/icon/jingpin.png')"
          ></sale>
        </div>
        <div style="margin-bottom:0.1rem">
          进入精品馆
          <img :src="require('../../assets/icon/right3.png')">
        </div>
      </div>
    </div>
    <div>
      <div>
        <i-itle
          :top="require('../../assets/icon/icon4.png')"
          tips="一宠一芯、纯种保证、30天保障"
          :arrow="require('../../assets/icon/right1.png')"
          class="yellow"
        ></i-itle>
        <div class="sale change">
          <sale
            v-for="(item,index) in onbest"
            :key="index"
            :message1="item.ptype"
            :message2="item.sp_price"
            :message3="item.sp_price2"
            :message4="item.sp_address"
            :img1="`http://127.0.0.1:8080/pet/`+item.img"
            :bright="require('../../assets/icon/gaoduan.png')"
          ></sale>
        </div>
        <div style="margin-bottom:0.1rem">
          进入高端馆
          <img :src="require('../../assets/icon/right3.png')">
        </div>
      </div>
    </div>
    <div style="text-align:center">
      <img :src="require('../../assets/icon/tuijian.png')">
      <div class="ishop">
        <ishop
          v-for="(item,index) of data"
          :key="index"
          :sid="item.sid"
          :sname="item.sname"
          :simg="`http://127.0.0.1:8080/touxiang/`+item.simg"
          :itemClick="clickitem"
          :uname="item.qualifications"
        ></ishop>
      </div>
    </div>
  </div>
</template>
<script>
import Sale from "../ihome/sale.vue";
import itle from "../ihome/xitle.vue";
import iShop from "../shop/top2.vue";
import "../../assets/a.css"
export default {
  created() {
    // 当前组建创建成功回调函数
    this.csl(); //轮播图
    this.sale(); //特价
    this.new(); //新品
    this.better(); //精品
    this.best(); //高端
    this.shop1();
  },
  data() {
    return {
      search: "",
      // arr: [{"pid":1,"pimg":"carousel1.png"},{"pid":2,"pimg":"carousel2.png"},{"pid":3,"pimg":"carousel3.png"},{"pid":4,"pimg":"carousel4.png"}]
      arr: "",
      onsale: "",
      onnew: "",
      onbetter: "",
      onbest: "",
      data: []
    };
  },
  methods: {
    sale() {
      // console.log(this.onsale);
      var url = "sale";
      this.axios.get(url).then(res => {
        this.onsale = res.data;
        for (var i = 0; i < this.onsale.length; i++) {
          if (this.onsale[i].sp_video === "") {
            var arr = this.onsale[i].sp_img;
            arr = arr.slice(2, -2); //sp31.jpg","sp32.jpg","sp33.jpg","sp34.jpg","sp35.jpg
            //console.log(arr.split('","')); ////["sp71.jpg", "sp72.jpg", "sp73.jpg"]
            this.onsale[i].img = arr.split('","')[0]; //sp71.jpg
            // console.log(this.onsale[i].img);
          } else {
            this.onsale[i].img = this.onsale[i].sp_video;
          }
        }
      });
    },
    new() {
      var url = "new";
      this.axios.get(url).then(res => {
        this.onnew = res.data;
        for (var i = 0; i < this.onnew.length; i++) {
          if (this.onnew[i].sp_video === "") {
            var arr = this.onnew[i].sp_img;
            arr = arr.slice(2, -2);
            this.onnew[i].img = arr.split('","')[0];
          } else {
            this.onnew[i].img = this.onnew[i].sp_video;
          }
        }
      });
    },
    better() {
      var url = "better";
      this.axios.get(url).then(res => {
        // console.log(res.data);
        this.onbetter = res.data;
        for (var i = 0; i < this.onbetter.length; i++) {
          if (this.onbetter[i].sp_video === "") {
            var arr = this.onbetter[i].sp_img;
            arr = arr.slice(2, -2);
            this.onbetter[i].img = arr.split('","')[0];
          } else {
            this.onbetter[i].img = this.onbetter[i].sp_video;
          }
        }
        var xx = []; //创建一个数组存放随机better的数据
        for (var i = 0; i < 6; i++) {
          var random = Math.floor(Math.random() * this.onbetter.length);
          xx = xx.concat(this.onbetter.splice(random, 1)); //每一次随机添加后将这条数据在原数组中删除,避免重复
        }
        this.onbetter = xx;
      });
    },
    best() {
      var url = "best";
      this.axios.get(url).then(res => {
        this.onbest = res.data;
        for (var i = 0; i < this.onbest.length; i++) {
          if (this.onbest[i].sp_video === "") {
            var arr = this.onbest[i].sp_img;
            arr = arr.slice(2, -2);
            this.onbest[i].img = arr.split('","')[0];
          } else {
            this.onbest[i].img = this.onbest[i].sp_video;
          }
        }
        var xx = [];
        for (var i = 0; i < 6; i++) {
          var random = Math.floor(Math.random() * this.onbest.length);
          xx = xx.concat(this.onbest.splice(random, 1));
        }
        this.onbest = xx;
      });
    },
    csl() {
      // 功能:获取当前用户购物车列表
      // 1.创建url请求服务器地址
      var url = "csl1";
      // 2.发送ajax请求(让服务器程序完成功能)
      this.axios.get(url).then(res => {
        // this.arr = JSON.stringify(res.data);
        this.arr = res.data;
      });
    },
    shop1() {
      var url = "shop1";
      this.axios.get(url).then(res => {
        this.data = res.data;
        for (var i = 0; i < this.data.length; i++) {
          if (res.data[i].qualifications[1] == 1) {
            this.data[i].qualifications = "平台认证";
          } else if (res.data[i].qualifications[3] == 1) {
            this.data[i].qualifications = "实地考察";
          } else if (res.data[i].qualifications[5] == 1) {
            this.data[i].qualifications = "已缴押金";
          } else if (res.data[i].qualifications[7] == 1) {
            this.data[i].qualifications = "实名认证";
          }
        }
        var xx = [];
        for (var i = 0; i < 8; i++) {
          var random = Math.floor(Math.random() * this.data.length);
          xx = xx.concat(this.data.splice(random, 1));
        }
        this.data = xx;
      });
    },
    clickitem(id) {
      console.log(id);
    }
  },
  components: {
    sale: Sale,
    'i-itle': itle,
    ishop: iShop
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
  z-index: 9999;
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
.wiki img,
.wiki a {
  width: 0.8rem;
  height: 0.8rem;
  margin-bottom: 18%;
}
.wiki > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  font: 0.2rem 微软雅黑 楷体;
}
.sale {
  /* white-space: nowrap; */
  display: -webkit-box;
  /* display: flex; */
  overflow-x: auto;
}
.change {
  display: flex;
  flex-wrap: wrap;
}
.sale::-webkit-scrollbar {
  display: none;
}

/* .sale .father:not(:first-child){
  margin-left: 0 !important;
} */
.span > div:first-child {
  color: #999999;
}
.yellow {
  /*字色*/
  color: #ff9f09 !important;
}
.gary {
  color: #999999;
}
div.sale ~ div {
  color: #ff6e17;
  font: 500 0.25rem 黑体;
  display: flex;
  justify-content: center;
}
div.sale ~ div img {
  height: 0.3rem;
  width: 0.3rem;
}
.ishop {
  display: flex;
  flex-flow: wrap;
}
.ishop > img {
  display: block;
}
</style>