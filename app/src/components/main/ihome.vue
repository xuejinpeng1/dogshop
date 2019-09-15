<template>
  <div class="ihome">
    <div id="top">
      <div style="background:white">
        <img :src="require('../../assets/icon/kefu.png')" />
        <mt-search v-model="search" cancel-text="取消" placeholder="搜索宠物、商家、品牌"></mt-search>
        <img :src="require('../../assets/icon/zhuanfa.png')" />
      </div>
    </div>
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img :src="require('../../assets/csl/carousel1.png')" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img :src="require('../../assets/csl/carousel2.png')" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img :src="require('../../assets/csl/carousel3.png')" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img :src="require('../../assets/csl/carousel4.png')" />
      </mt-swipe-item>
    </mt-swipe>
    <!-- <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non laboriosam eos voluptas id voluptates dicta, cum possimus asperiores aliquam vel placeat, beatae nesciunt alias blanditiis! Ab dolores eligendi nesciunt beatae ea explicabo ullam voluptates inventore numquam deserunt perspiciatis eaque illo neque molestias, sequi velit soluta veniam quia ducimus quidem quod a molestiae iusto perferendis! Quos explicabo recusandae animi, iusto unde incidunt illum quod ipsa perferendis laudantium voluptatibus placeat minus commodi sint adipisci. Error suscipit reiciendis voluptate sit, cupiditate odio animi! Voluptatem odit enim at in tenetur soluta quidem dicta labore id saepe deleniti natus totam, expedita corrupti sint esse non porro necessitatibus, quis harum. Nemo non saepe temporibus. Molestias quibusdam, sit placeat illum eligendi aliquam natus rem exercitationem. Excepturi suscipit, recusandae vero repellat similique facilis modi animi earum molestiae dignissimos iusto quo minus dolores hic ea perspiciatis nam, fugiat nostrum numquam! Alias nostrum illum dignissimos voluptates. Iste odit error laudantium, ad distinctio amet fugiat ipsa qui aspernatur optio enim natus nobis neque unde sunt sint nemo incidunt! Atque deleniti cumque laudantium facere explicabo fugit nisi! Eaque ducimus ipsam obcaecati itaque animi deserunt earum sunt pariatur! Non praesentium amet omnis asperiores, doloremque dignissimos! Obcaecati, temporibus. Voluptatibus mollitia repellat doloribus quod obcaecati iusto nam ea, ullam architecto itaque illum harum corrupti sunt? Voluptas esse, odio corrupti voluptatum aperiam officia expedita labore itaque perspiciatis ea facilis dolore repellendus iusto doloribus, aliquam minima quas? Ullam nam facilis, veritatis deleniti autem pariatur, amet et expedita sapiente odit magnam beatae ipsa. Nihil labore quam repellat veniam maxime magni hic aperiam modi quisquam, fugit consequuntur deleniti, velit enim! Molestiae magni dicta nam aliquid quod omnis id et eligendi adipisci? Officiis fuga minima ipsum amet, enim quae repellat expedita at, odio corporis magni, sunt nam veniam vel? Culpa deserunt quaerat, amet dolor soluta tempore fugit doloremque cum ea accusamus esse hic assumenda! Iste, nihil et at officiis, sed rem iusto placeat impedit nostrum reiciendis esse harum quisquam repudiandae. Quia illo doloribus consectetur! Tenetur dicta consequuntur nam labore quibusdam, quasi quisquam laboriosam possimus harum delectus debitis neque porro vitae modi libero nulla provident distinctio eligendi inventore placeat saepe perferendis reiciendis cupiditate velit. Doloribus ducimus soluta repudiandae voluptas sint est at esse ipsum vitae architecto officia iusto eos natus minima quam corrupti corporis impedit, exercitationem, deleniti veniam iure voluptatum. Dignissimos labore, nisi ducimus distinctio laborum quisquam deserunt porro voluptate, molestiae debitis quis quia ipsam aliquid molestias consequuntur sequi delectus consectetur corrupti. Quidem molestiae corrupti quo ullam asperiores, facilis similique adipisci nostrum unde itaque nulla ut sit natus quasi expedita debitis placeat porro obcaecati fuga modi soluta qui officia. Ab vero rerum sunt eos, voluptatem numquam similique blanditiis temporibus rem consequatur enim reiciendis magni. Sit, provident vel labore mollitia eos dicta odit est doloribus adipisci tempore facilis iure esse amet deserunt delectus molestias reiciendis iusto sint vero officia voluptatum modi? Illum beatae debitis nisi, inventore facere cum dicta quisquam ullam minima, nobis officiis aperiam obcaecati voluptates? Eos tempora optio autem corporis itaque nam assumenda, atque, amet asperiores placeat exercitationem, sapiente provident.</div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: ""
    };
  }
};
</script>
<style scoped>
.ihome {
  padding-top: 2.2rem;
}
.mint-search {
  width: 80%;
}
.mint-search >>> .mint-searchbar-core {
  /*输入框样式修改*/
  background: #eaeaea;
  border-radius: 1rem;
  text-align: center;
  padding: 0;
  font-size: 0.8rem;
}
.mint-search >>> .mint-searchbar {
  width: 100%;
}
.mint-search >>> .mint-searchbar,
.mint-search >>> .mint-searchbar-cancel {
  background: white;
  padding: 0;
  margin: 0;
  caret-color: red; /*光标颜色*/
}
.mint-search >>> .mintui-search:before {
  /*查询图标*/
  font-size: 1.6rem;
  content: "\E604";
  position: absolute;
  top: 0.1rem;
  left: 5%;
}
#top {
  height: 2.2rem;
  line-height: 2.2rem;
  position: fixed;
  top: 0;
  width: 100%;
}
#top div {
  height: 2.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
#top img {
  width: 1.8rem;
  height: 1.8rem;
}
.mint-swipe img {
  width: 100%;
}
.mint-swipe >>> .mint-swipe-indicators {
  position: absolute;
  bottom: 5%;
}
.mint-swipe,.mint-swipe img {
  height: 10rem;
}
</style>