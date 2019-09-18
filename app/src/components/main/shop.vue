<template>
  <div class="all">
    <div class="top">
      <div>
        <top></top>
      </div>
    </div>
    <div>
      <huoye></huoye>
    </div>
    <div>
      <youxuan></youxuan>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  </div>
</template>
<script>
import top from "../shop/top.vue";
import huoye from "../shop/huoye.vue";
import youxuan from "../shop/youxuan.vue";
export default {
  data() {
    return {};
  },
  created() {},
  methods: {},
  components: {
    top: top,
    huoye: huoye,
    youxuan: youxuan
  }
};
</script>
<style scoped>
.all {
  position: relative;
}
.top {
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 999;
}
</style>