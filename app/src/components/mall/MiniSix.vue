<template>
  <div class="f3">
    <div style="padding-bottom:0.1rem;margin-bottom:0.3rem">
      <img :src="img1" />
      <div>
        <h4 style="height:44px;">{{message1}}</h4>
        <div style="color:#666;font-size:14px;height:32px">{{message2}}</div>
        <span style="color:red;float:left;padding-right:10px;">
          <b>{{message3}}</b>
        </span>
        <span
          style="color:#FF8B2A;border:1px solid #f00;border-radius:5px;font-size:0.25rem;"
        >{{message4}}</span>
        <span style="float:right;color:#666">
          <s style="margin-right:25%">{{message5}}</s>
        </span>
      </div>
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
<style scoped>
p {
  margin: 0.2rem 0;
}
h4 {
  margin-bottom: 0.2rem;
  font-family: "黑体";
}
.f3 div{
  margin-left: 0.1rem;
}
</style>