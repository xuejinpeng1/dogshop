<template>
  <div>
    <div class="size1">信用优选商家</div>
    <su
      class="itemstyle"
      v-for="(item,index) in data"
      :key="index"
      :sid="item.sid"
      :itemClick="clickitem"
      :simg="`http://127.0.0.1:8080/touxiang/`+item.simg"
      :uname="item.qualifications"
      :sname="item.sname"
      :address="item.address"
      :onsale="item.onsale"
      :guarantee="item.guarantee"
      :appraise="item.appraise"
      :star="item.star==50?'star1.png':(item.star>=40?'star4.png':(item.star>=30?'star3.png':'star2.png'))"
    ></su>
    <!-- :money="item.money" -->
  </div>
</template>
<script>
import su from "./s";
import youxuan from "../json/youxuan.json";
export default {
  data() {
    return {
      data: []
    };
  },
  created() {
    this.shop1();
  },
  methods: {
    clickitem(id) {
      console.log(id);
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
        
      });
    }
  },
  components: {
    su: su
  }
};
</script>
<style scoped>
.size1 {
  font-size: 0.25rem;
  padding: 0.25rem 0.1rem;
  border-bottom: 1px solid #ddd;
}
</style>

 