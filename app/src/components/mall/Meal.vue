<template>
  <div style="font-size:0.3rem">
    <div>
      <p class="title0" style="float:left" @click="jump">&lt;</p>
      <p class="title0">套餐</p>
      <br />
      <div class="title1" style="font-size: 1rem;
  font-weight: 800;color: #666;">
        <mt-navbar v-model="selected">
          <mt-tab-item id="1" class="title2" >猫咪</mt-tab-item>
          <mt-tab-item id="2" class="title2">小型犬</mt-tab-item>
          <mt-tab-item id="3" class="title2">中型犬</mt-tab-item>
          <mt-tab-item id="4" class="title2">大型犬</mt-tab-item>
        </mt-navbar>
      </div>
    </div>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1"></mt-tab-container-item>
      <mt-tab-container-item id="2"></mt-tab-container-item>
      <mt-tab-container-item id="3"></mt-tab-container-item>
      <mt-tab-container-item id="4"></mt-tab-container-item>
    </mt-tab-container>
    <minifive></minifive>
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
  margin: 0.5rem 0;
}
.title1>.title2 {
  font-size: 1rem;
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
      this.id.style.color = "#000";
    },
    jump: function() {
      this.$router.push("/Mall");
    }
  },
  data() {
    return {
      selected: "1"
    };
  }
};
</script>