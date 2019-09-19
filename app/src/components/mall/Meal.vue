<template>
  <div style="font-size:0.3rem">
    <div>
      <p class="title0" style="float:left">&lt;</p>
      <p class="title0">套餐</p>
      <br />
      <div class="title1">
        <span class="title2" @click="change">猫咪</span>
        <span class="title2" @click="change">小型犬</span>
        <span class="title2" @click="change">中型犬</span>
        <span class="title2" @click="change">大型犬</span>
      </div>
    </div>
    <div>
      <minifive></minifive>
    </div>
  </div>
</template>
<style scoped>
.title0 {
  text-align: center;
  font-weight: 800;
  font-size: 26px;
  margin: 0;
}
.title1 {
  margin: 1.5rem 0;
}
.title2 {
  font-size: 20px;
  font-weight: 800;
  color: #666;
  padding: 0 0.3rem;
  margin-bottom: 0.2rem;
}
</style>
<script>
import MiniFive from "./MiniFive.vue";
export default {
  components: {
    minifive: MiniFive
  },
  methods: {
    change: function() {
      span.color = "#000";
    }
  }
};
</script>