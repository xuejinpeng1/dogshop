<template>
  <div @click="itemClick(sid)">
    <!--h3>Message.vue 消息组件</h3-->
    <div class="rootstyle">
      <div class="left">
        <img :src="simg" class="imgstyle">
        <p class="uname1">{{uname}}</p>
      </div>
      <div class="zhong">
        <div>
          <span class="title1">{{sname}}</span>
          <!-- <span class="money1">{{money}}</span> -->
        </div>
        <div class="place1">{{address}}</div>
        <div>
          <span>在售{{onsale}}只</span>
          <span class="number1">
            担保交易
            <span>{{guarantee}}</span>只
          </span>
        </div>
      </div>
      <div class="right">
        <img :src="require(`../../assets/shop/${star}`)" alt>
        <span>{{appraise}}</span>
        <span>好评数</span>
      </div>
    </div>
    <div class="xh1">
      <three
        v-for="item in datas1"
        :key="item.spid"
        :sp_img="`http://127.0.0.1:8080/pet/`+item.img"
        :spid="item.spid"
        :ptype="item.ptype"
        :sp_price="item.sp_price"
        :sp_time="item.sp_time"
      ></three>
      <three
        v-for="item in datas2"
        :key="item.spid"
        :sp_img="`http://127.0.0.1:8080/pet/`+item.img"
        :spid="item.spid"
        :ptype="item.ptype"
        :sp_price="item.sp_price"
        :sp_time="item.sp_time"
      ></three>
      <three
        v-for="item in datas3"
        :key="item.spid"
        :sp_img="`http://127.0.0.1:8080/pet/`+item.img"
        :spid="item.spid"
        :ptype="item.ptype"
        :sp_price="item.sp_price"
        :sp_time="item.sp_time"
      ></three>
    </div>
  </div>
</template>
<script>
import three from "./three";
// import tp from "../json/three.json"
export default {
  props: {
    //接收父元素数据
    sid: { default: "" },
    simg: { default: "" },
    uname: { type: String, default: "" },
    sname: { type: String, default: "" },
    // money: { type: String, default: "" },
    address: { type: String, default: "" },
    onsale: { default: "" },
    guarantee: { default: "" },
    appraise: { default: "" },
    star: { default: "" },
    itemClick: { type: Function }
  },
  data() {
    return {
      datas1: "",
      datas2: "",
      datas3: ""
    };
  },
  created() {
    this.shop2();
  },
  mounted() {},
  methods: {
    clickitem(id) {
      console.log(id);
    },
    //接口
    shop2() {
      var url = "shop2";
      this.axios.get(url, { params: { sname: this.sid } }).then(res => {
        // for (var i = 0; i < 2; i++) {
        this.axios.get("shop3", { params: { spid: res.data[0] } }).then(res => {
          for (var i = 0; i < res.data.length; i++) {
            if (res.data[i].sp_video === "") {
              var arr = res.data[i].sp_img;
              arr = arr.slice(2, -2);
              res.data[i].img = arr.split('","')[0];
            } else {
              res.data[i].img = res.data[i].sp_video;
            }
            this.datas1 = res.data;
          }
        });
        this.axios.get("shop3", { params: { spid: res.data[1] } }).then(res => {
          for (var i = 0; i < res.data.length; i++) {
            if (res.data[i].sp_video === "") {
              var arr = res.data[i].sp_img;
              arr = arr.slice(2, -2);
              res.data[i].img = arr.split('","')[0];
            } else {
              res.data[i].img = res.data[i].sp_video;
            }
            this.datas2 = res.data;
          }
        });
        this.axios.get("shop3", { params: { spid: res.data[2] } }).then(res => {
          for (var i = 0; i < res.data.length; i++) {
            if (res.data[i].sp_video === "") {
              var arr = res.data[i].sp_img;
              arr = arr.slice(2, -2);
              res.data[i].img = arr.split('","')[0];
            } else {
              res.data[i].img = res.data[i].sp_video;
            }
            this.datas3 = res.data;
          }
        });
        // }
      });
    }
  },
  components: {
    three: three
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
  padding:0.02rem 0.06rem 0.02rem 0.06rem;
  border-radius: 0.2rem;
}
.zhong,
.right {
  display: flex;
  flex-direction: column;
}
.zhong {
  width: 5rem;
  margin-bottom:0.25rem;
}
.right {
  width: 1.6rem;
  text-align: right;
}
.zhong > div,
.right > span {
  padding: 0.1rem;
}

.title1 {
  font-weight: bold;
}
.place1 {
  padding:0 !important;
  font-size: 0.05rem;
}
.number1 {
  margin-left: 0.25rem;
}
.number1 > span {
  color: red;
}
.xh1 {
  display: flex;
  justify-content: space-around;
  margin-bottom: 0.2rem;
}
.itemstyle {
  height: 4.3rem;
  border-bottom: 0.2rem solid rgba(206, 204, 204,0.7);
}
</style>