<template>
  <div>
    <div class="nav_box" >
      <t-navbar v-model="active" class="nav" >
        <t-tabItem id="tab-container1" class="selectBtn">热映</t-tabItem>
        <t-tabItem id="tab-container2" class="selectBtn">待映</t-tabItem>
        <t-tabItem id="tab-container3" class="selectBtn">找片</t-tabItem>
      </t-navbar>
    </div>

    <div class="page-tab-container" >
      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
        <mt-tab-container-item id="tab-container1">
          <hotMovie></hotMovie>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
          <comingMovie></comingMovie>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
          <mt-cell v-for="n in 7" title="tab-container 3" key="$index"></mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
  import { Tabbar, TabItem,TabContainer, TabContainerItem,Cell,Button,Navbar } from 'mint-ui';
  import HotMovie from '@/components/hotMovie/hotMovie.vue'
  import comingMovie from '@/components/comingMovie/comingMovie.vue'

  export default {
    name: 'page-tab-container',
    components:{
      "mt-button":Button,
      "mt-tab-container":TabContainer,
      "mt-tab-container-item":TabContainerItem,
      "mt-cell":Cell,
      "hotMovie":HotMovie,
      "t-navbar":Navbar,
      "t-tabItem":TabItem,
      "comingMovie":comingMovie
    },
    data() {
      return {
        active: 'tab-container1'
      };
    },
    methods:{
      tabChange: function (index) {
        let j = parseInt(index) // 注意，需转化为整数
        console.log(j)
      }
    }
  };
</script>

<style lang="css" scoped>
  .item {
    display: inline-block;
  }

  .nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    /*position: static;*/
    width: 50%;

  }

  .link {
    color: inherit;
    padding: 20px;
    display: block;
  }
  .nav .selectBtn{
    color:#fff;
    display: block;
    font-size:16px;
    background-color: #B61F1B;
    text-decoration: none;
    text-align: center;
    height:30px;
    line-height:30px;
    padding: 10px 0;
    /*width: 30px;*/
  }
  .nav_box{
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #D43E37;
    padding: 10px;
  }
  .movie .nav_box .nav .is-selected{
    color:#b61f1b;
    background-color:#fff;
    border-bottom: none;
  }
</style>
