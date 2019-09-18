<template>
  <div>
    <div class="six">
      <minisix
        class="six1"
        v-for="(item,index) in rows.data"
        :key="index"
        :img1="require(`../../assets/mall/`+item.img)"
        :message1="item.title1"
        :message2="item.title2"
        :message3="item.title3"
        :message4="item.title4"
        :message5="item.title5"
      ></minisix>
    </div>
  </div>
</template>
<script>
import MiniSix from "./MiniSix.vue";
import json from "../json/MiniSix.json";
export default {
  data() {
    return {
      rows: json
    };
  },
  components: {
    minisix: MiniSix
  }
};
</script>
<style>
.six {
  clear: both;
  display: flex;
  flex-wrap: wrap;
}
</style>