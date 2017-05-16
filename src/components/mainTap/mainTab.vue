<template>
  <div class="page-tabbar">
    <div class="page-wrap">
      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="movie">
          <movie-Module></movie-Module>
        </mt-tab-container-item>
        <mt-tab-container-item id="theatre">
          <theatre></theatre>
        </mt-tab-container-item>
        <mt-tab-container-item id="own">
          <div class="page-part">
            <own></own>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

    <mt-tabbar v-model="selected" fixed class="tab">
      <mt-tab-item id="movie" class="tabBtn">
        <i class="icon ion-ionic"></i>
        <p class="tabName">电影</p>
      </mt-tab-item>
      <mt-tab-item id="theatre" class="tabBtn">
        <i class="icon ion-android-playstore"></i>
        <p class="tabName">影院</p>
      </mt-tab-item>
      <mt-tab-item id="own" class="tabBtn">
        <i class="icon ion-android-person"></i>
        <p class="tabName">我的</p>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabItem,TabContainer, TabContainerItem,Cell } from 'mint-ui';
  import Movie from '@/components/movie/Movie'
  import Theatre from '@/components/theatre/Theatre'
  import own from '@/components/own/own'
  import Hello from '@/components/Hello'
  export default {
    name: 'page-tabbar',
    components:{
      "mt-tabbar":Tabbar,
      "mt-tab-item":TabItem,
      "mt-tab-container":TabContainer,
      "mt-tab-container-item":TabContainerItem,
      "mt-cell":Cell,
      "movie-Module":Movie,
      "Hello":Hello,
      "theatre":Theatre,
      "own":own
    },
    data() {
      return {
        selected: 'movie'
      };
    }
  };
</script>

<style>
  .page-tabbar {
    overflow: hidden;
    height: 100vh;
  }

  .page-wrap {
    overflow: auto;
    height: 100%;
    /*padding-bottom: 100px;*/
  }
  .tab{
    width:100%;
    height:1.33rem;
    background-color:#f5f5f5;
    display: flex;
    position: absolute;
    bottom:0;
    left:0;
    flex-direction: row;

  }
  .tab .tabBtn {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 3px 0;
  }
  .tab a{
    font-size: 0.32rem;
    color: #6a6767;
    text-decoration: none;
    text-align: center;
  }
  .tab a:hover{
    text-decoration: none;

  }
  .tabName {
    line-height: 0.32rem;
  }
  .tab .tabBtn .icon {
    font-size: 0.8rem;
  }
</style>
