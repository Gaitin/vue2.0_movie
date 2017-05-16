<template>
  <div class="theatre">
    <mt-header fixed  title="影院">
      <router-link to="/" slot="left">
        <mt-button icon="arrow">北京</mt-button>
      </router-link>
      <mt-button icon="search" slot="right"></mt-button>
    </mt-header>

    <div class="theatreBox" :style="{height:boxHeight+'px'}">
      <Lunbo></Lunbo>
      <div @click="itemClick(item.id)" v-for="(item,index) in theatre" key="index">
        <div class="cinema-container">
          <div class="cinema-name text-ellipsis">{{item.nm}}</div>
          <div class="price theme-color">
            <span class="num">{{item.referencePrice}}</span>
            <span>元起</span>
          </div>
          <div>
            <p class="address text-ellipsis">{{item.addr}}</p>
          </div>
          <div class="dis">{{item.distance}}m</div>
          <div class="tag-list">
            <div>座</div>
            <div>杜比全景声厅</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script type="text/javascript">
  import axios from 'axios'
  import {AppConfig} from "../../util/serverConfig";
  import Lunbo from '@/components/lunbo/Lunbo.vue'
  import { Indicator,Header  } from 'mint-ui';

  export default {
    name: 'Movie',
    components: {
      Lunbo,
      Indicator,
      "mt-header":Header
    },
    data () {
      return {
        theatre: [],
        boxHeight:300,
        transitionName: 'slide-left'
      }
    },
    beforeRouteUpdate (to, from, next) {
      debugger
      console.log(to)
      console.log(from)
      console.log(next)
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      next()
    },
    created () {
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
//      console.log(window.screen.height);
      this.boxHeight=window.screen.height-60;
      axios.get(AppConfig.url.getTheatreList).then((res) => {
        console.log(res)
        if (res.status === 200) {
          this.theatre = res.data.data['朝阳区'];
          Indicator.close();
        }
      })
    },
    methods : {
      itemClick:function(item){
      alert(JSON.stringify(item));
//        this.$router.replace({ path: '/MovieDetail' })
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .theatreBox{
    /*height:630px;*/
    overflow-y: scroll;
    margin-top: 1rem;
  }
  .cinema-container {
    font-size: .35rem;
    padding: .25rem 0;
    margin-left: .32rem;
    color: #666;
    position: relative;
    /*line-height: 1.2;*/
    overflow: hidden;
    border-bottom: 1px solid #E6E6E6;
  }
  .cinema-container .cinema-name {
    font-size: .4rem;
    color: #000;
    display: inline-block;
    max-width: 5.7rem;
    float: left;
  }
  .text-ellipsis {
    white-space: nowrap;
  }
  .theme-color, .time-line .showday.active a {
    color: #e54847;
  }
  .price .num {
    font-size: .34rem;
  }
  .cinema-container .price {
    float: left;
    display: inline-block;
    margin-left: .2rem;
    font-size: .22rem;
    line-height: .5rem;

  }
  .cinema-container .address {
    margin-top: .1rem;
    padding-top: .1rem;
    margin-right: 1rem;
    width: 6rem;
    display: inline-block;
  }
  .text-ellipsis {
    white-space: nowrap;
  }
  .movie-content p, .movie-name, .text-ellipsis, body p {
    text-overflow: ellipsis;
  }

  .hidden-xy, .movie-content p, .movie-cover, .movie-name, .text-ellipsis {
    overflow: hidden;
  }
  .cinema-container .dis {
    position: absolute;
    top: .94rem;
    right: .24rem;
    color: #999;
  }
  .cinema-container .tag-list div {
    margin-top: .2rem;
    display: inline-block;
    padding: .06rem;
    border: 1px solid #589DAF;
    border-radius: .08rem;
    margin-right: .03rem;
    font-size: .22rem;
    color: #589DAF;
  }
  .theatre .mint-header{
    background-color:#D43E37;
  }

</style>
