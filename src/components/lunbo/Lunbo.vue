<template>
  <div class="lunbo">
    <mt-swipe :auto="5000"  :show-indicators="false">
      <mt-swipe-item><img class="pic" src="../../assets/images/lunbotu/31adab018bc69ababdf16d6997f8217573264.jpg.webp"></mt-swipe-item>
      <mt-swipe-item><img class="pic" src="../../assets/images/lunbotu/54ef97efd24a7cc4551c7f7127543f5356916.jpg.webp"></mt-swipe-item>
      <mt-swipe-item><img class="pic" src="../../assets/images/lunbotu/5788fadc7eba31900b8963cf6b2bc3f486388.jpg.webp"></mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
//  import Vue from 'vue'
  import { Swipe, SwipeItem } from 'mint-ui';

export default {
  name: 'lunbo',
  components: {
    'mt-swipe': Swipe,
    'mt-swipe-item': SwipeItem
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.pic{
  width: 100%;
  height: 100%;
}
.lunbo{
  height:2rem;
}
</style>
