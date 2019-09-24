<template>
  <div>
    <div class="bt">
      <span>活跃商家</span>
    </div>
    <div class="mm">
      <top
        v-for="(item,index) of data"
        :key="index"
        :sid="item.sid"
        :sname="item.sname"
        :simg="`http://127.0.0.1:8080/touxiang/`+item.simg"
        :itemClick="clickitem"
        :uname="item.qualifications"
      ></top>
    </div>
  </div>
</template>
<script>
import top2 from "./top2";
//负责引入json文件
// import top2json from "../json/huoye.json";
export default {
  data() {
    return {
      // datas:top2json
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
    top: top2
  }
};
</script>
<style scoped>
.mm {
  display: flex;
  overflow-x: scroll;
}
.bt {
  margin-top: 0.5rem;
  border-top: 0.01rem solid #ddd;
  border-bottom: 0.01rem solid #ddd;
  font-size: 0.25rem;
  padding: 0.25rem 0.15rem;
}
</style>

