<template>
  <div class="f3">
    <div>
      <img :src="img1" />
      <h4 style="height:0.35rem;">{{message1}}</h4>
      <p style="color:#666;font-size:14px">{{message2}}</p>
      <span style="color:red;float:left;padding-right:10px;">
        <b>{{message3}}</b>
      </span>
      <span style="color:red;border:1px solid #f00;border-radius:5px;">{{message4}}</span>
      <span style="float:right;color:#666">
        <s>{{message5}}</s>
      </span>
    </div>
  </div>
</template>
<style>
.f3 {
  width: 50%;
}
</style>
<script>
export default {
  props: {
    message1: { default: "" },
    message2: { default: "" },
    message3: { default: "" },
    message4: { default: "" },
    message5: { default: "" },
    img1: { default: "" }
  }
};
</script>