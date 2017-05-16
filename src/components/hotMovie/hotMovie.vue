<template>
  <div class="movie" >
    <div class="movieBox" :style="{height:boxHeight+'px'}">
      <search></search>
      <Lunbo></Lunbo>
      <div  v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10">

        <div @click="itemClick(item.id)" v-for="(item,index) in movies" key="index">
          <MovieItem :item="item" ></MovieItem>
        </div>
      </div>
    </div>

  </div>
</template>

<script type="text/javascript">
import axios from 'axios'
import MovieItem from '@/components/movieItem/MovieItem.vue'
import Lunbo from '@/components/lunbo/Lunbo.vue'
import search from '@/components/search/search.vue'
import { Toast } from 'mint-ui';
import { Indicator,InfiniteScroll  } from 'mint-ui';
import {AppConfig} from "../../util/serverConfig";

export default {
  name: 'Movie',
  components: {
    MovieItem,
    Lunbo,
    search,
    "v-infinite-scroll":InfiniteScroll
  },
  data () {
    return {
      movies: [],
      boxHeight:300,
      loading:false,
      page:0
    }
  },
  created () {
    this.boxHeight=window.screen.height-50;
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    });
  },
  methods : {
      getDate:function () {
        console.log(this.page)
        let params = {
          type: 'hot',//type:hot/coming
          offset: this.page*10,
          limit:10
        };
        axios.get(AppConfig.url.getMovieList, {params}).then((res) => {
          console.log(res);
        if (res.status === 200) {
          this.movies =this.movies.concat(res.data.data.movies);
          if(res.data.data.movies.length>0){
            this.page=this.page+1;
          }else {
            Toast({
              message: '没有更多数据',
              duration: 3000
            });
          }
          Indicator.close();
        }
       })
      },
      itemClick:function(item){
        this.$router.push({path: '/md', query: {id:item}});
      },
      loadMore:function() {
      this.loading = true;
        Indicator.open({
          text: '加载中...',
          spinnerType: 'fading-circle'
        });
        this.getDate();
        this.loading = false;
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  h1, h2 {
  font-weight: normal;
}
.movieBox {
  /*height:630px;*/
  overflow-y: scroll;
}
.movieBox>.movieItem:last-child {
  /*margin-bottom: 60px;*/
}



</style>
