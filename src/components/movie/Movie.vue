<template>
  <div class="movie" >
    <div class="movieBox" :style="{height:boxHeight+'px'}">
      <movieTopTab></movieTopTab>
    </div>

  </div>
</template>

<script type="text/javascript">
import axios from 'axios'
import MovieItem from '@/components/movieItem/MovieItem.vue'
import Lunbo from '@/components/lunbo/Lunbo.vue'
import search from '@/components/search/search.vue'
import movieTopTab from '@/components/movieTopTab/movieTopTab.vue'
import { Toast } from 'mint-ui';
import { Indicator } from 'mint-ui';
import {AppConfig} from "../../util/serverConfig";

export default {
  name: 'Movie',
  components: {
    MovieItem,
    Lunbo,
    search,
    "movieTopTab":movieTopTab
  },
  data () {
    return {
      movies: [],
      boxHeight:300
    }
  },
  created () {
    this.boxHeight=window.screen.height-50;
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    });
    let params = {
      type: 'hot',//type:hot/coming
      offset: 0,
      limit:10
    };
    axios.get(AppConfig.url.getMovieList, {params}).then((res) => {
      console.log(res);
      if (res.status === 200) {
        this.movies = res.data.data.movies;
        Indicator.close();
      }
    })
  },
  methods : {
      itemClick:function(item){
        Toast('电影id:'+item);
//      alert(JSON.stringify(item));
//      this.$router.replace({ path: '/MovieDetail' })
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
