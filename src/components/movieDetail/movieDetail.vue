<template>
  <div class="movieDetail">
   <div class="header">
     <mt-header >
       <router-link to="/" slot="left">
         <i class="icon ion-android-arrow-back"></i>
       </router-link>
       <router-link to="/" slot="right">
         <i class="icon ion-share"></i>
       </router-link>
     </mt-header>
   </div>
    <div class="infoBox" v-model="MovieDetailModel">
      <div class="infoB1">
        <div class="infoB1L">
          <div class="imgbox">
            <img class="Himg"  v-lazy="MovieDetailModel.img" alt="">
            <i class="play-icon"></i>
          </div>
        </div>
        <div class="infoB1R">
          <div class="infoB1RT">{{MovieDetailModel.nm}}</div>
          <div class="infoB1RW">{{MovieDetailModel.wish}}人想看</div>
          <div class="infoB1RType">{{MovieDetailModel.cat}}
            <div class="small3D" v-if="MovieDetailModel.ver!='2D'"><span>3D</span><span>IMAX</span></div>
          </div>
          <div class="infoB1RCountry">{{MovieDetailModel.src}}/{{MovieDetailModel.dur}}分钟</div>
          <div class="infoB1RDate">{{MovieDetailModel.rt}}</div>
        </div>
      </div>
      <div class="infoB2">
        <div class="btnBug">
          <mt-button size="large" type="danger">立即购买</mt-button>
          <p class="movieDet">
            {{ MovieDetailModel.dra | replacePra }}
          </p>
        </div>
      </div>
    </div>
    <div class="movieShow" v-model="MovieDetailModel">
      <video :src="MovieDetailModel.vd" controls="controls" style="height: 210px;width: 100%">
        您的浏览器不支持 video 标签。
      </video>
    </div>
    <div class="mediaBox">
      <div class="mediaTitle">媒体库</div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="i in MovieDetailModel.photos">
            <img :src="replaceHtml(i)" class="mediaimg" alt="">
          </div>
        </div>
        <div class="swiper-scrollbar"></div>
      </div>

    </div>
    <div class="comment" >
      <div class="commentHeader">
        短评
      </div>
      <div class="commentItem" v-for="i in CommentResponseModel.hcmts">
        <div class="startBox"><span class="star" :class="selectStar(i.score)"></span><span>{{i.time}}</span></div>
        <div class="commentBody">
          {{i.content}}
        </div>
        <div class="commentFoot">
          <div class="avater"><img v-lazy="i.avatarurl" class="avaicon"></div>
          <div class="comname">{{i.nickName}} <span>购</span></div>
          <div class="comcomit">
            <span><i class="icon ion-ios-heart"></i>{{i.approve}}</span>
            <span><i class="icon ion-android-textsms"></i>{{i.reply}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import { Header,Button,Swipe,SwipeItem,Indicator,Toast,Lazyload  } from 'mint-ui';
  import {AppConfig} from "../../util/serverConfig";
  import Swiper from '../../../static/swiper/swiper-3.4.2.min';
  require('../../../static/swiper/swiper-3.4.2.min.css');
  export default {
  name: 'movieDetail',
  components:{
    "detail-Header":Header,
    "mt-button":Button,
    "mt-swipe":Swipe,
    "mt-swipe-item":SwipeItem,
    "v-lazy":Lazyload
  },
  data () {
    return {
      MovieDetailModel:{},
      CommentResponseModel:{}
    }
  },
  created () {
      this.boxHeight=window.screen.height-50;
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
      console.log(this.$route.query.id)
      let params = {
        id:this.$route.query.id||588362,
      };
      axios.get(AppConfig.url.getMovieDetail, {params}).then((res) => {
        console.log(res);
        if (res.status === 200) {
          this.MovieDetailModel = res.data.data.MovieDetailModel;
          this.CommentResponseModel = res.data.data.CommentResponseModel;
//          console.log(res.data.data);
          Indicator.close();
        }
      })
    },
    methods:{
      replaceHtml:function (url) {
        let urlHtml=url.replace("w.h/","");
        return urlHtml
      },
      selectStar:function (num) {
        switch (parseInt(num)){
          case 5:
            return 'star1';
            break;
          case 4:
            return 'star2';
            break;
          case 3:
            return 'star3';
            break;
          case 2:
            return 'star4';
            break;
          case 1:
            return 'star5';
            break;
          case 0:
            return 'star6';
            break;
        }
      }
    },
    computed:{


    },
    filters:{
      replacePra:function (str) {
        if(str!=undefined){
          let newStr=str.toString();
          newStr=newStr.replace("<p>","").replace("</p>","");
          return newStr
        }
      }
    },
    mounted (){
      console.log('挂载好了')
      let mySwiper = new Swiper('.mediaBox .swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 0,
        freeMode: true,
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
        scrollbar: '.swiper-scrollbar',
        scrollbarHide: true,
      });
      console.log(mySwiper)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style style="less" scoped>
  /**/
  .comment {
    display: flex;
    flex-direction: column;
    background-color: #fff;
  }
  .commentHeader{
    font-size: 0.4rem;
    font-weight: bold;
    padding: 10px 0 0 15px;
  }
  .commentItem{
    padding:10px 15px 10px 15px;
    font-size: 14px;
    border-bottom: solid #e5e5e5 1px
  }
  .startBox{
    padding-bottom: 5px;
  }
  .star{
    background: url("../../assets/images/other/star.png") no-repeat;
    width: 100px;
    height: 15px;
    display: inline-block;
    background-size: cover;
  }
  .star1{
    background-position-x:0;
  }

  .star2{
    -ms-background-position-x: -22px;
    background-position-x: -22px;
  }
  .star3{
    -ms-background-position-x: -44px;
    background-position-x: -44px;
  }
  .star4{
    -ms-background-position-x: -66px;
    background-position-x: -66px;
  }
  .star5{
    -ms-background-position-x: -88px;
    background-position-x: -88px;
  }

  .star6{
    -ms-background-position-x: -106px;
    background-position-x: -106px;
  }

  .startBox span{
    padding-left: 5px;
  }
  .commentBody{
    color: #333;
    font-size: .28rem;
    line-height: 1.5;
    text-align: justify;
    word-wrap: break-word;
  }
  .commentFoot{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 1rem;
  }
  .avater{

  }
  .comname{
    flex: 1;
    padding-left: 5px;
    padding-right: 5px;
    color: #999;
    font-size: .25rem;
    font-style: normal;
    margin-left: .2rem;
    vertical-align: inherit;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .comname span{
    margin-right: 5px;
    color: white;
    font-size: .2rem;
    margin-left: .1rem;
    border-radius: 2px;
    line-height: .2rem;
    background: #ff9900;
    padding: 1px 2px;
    vertical-align: middle;
  }
  .comcomit span {
    margin-right: 5px;
  }
  .comcomit span .icon{
    padding-right: 3px;
  }
  .avaicon{
    width: 0.6rem;
    background-size: cover;
    border-radius: 50%;
  }
  /**/

  .movieDetail{
    background-color: #F4F4F4;
    overflow-y: scroll;
    height: 100vh;
  }
  .header .icon{
    font-size: 0.6rem;
  }
  .header .mint-header{
    background-color: #D43E37;
    height: 50px;
  }

  .infoBox{
    display: flex;
    flex-direction: column;
    color:#BDBEC5;
  }
  .infoB1{
    display: flex;
    flex-direction: row;
    background-color:rgba(32,38,72,0.9);
  }
  .infoB1L{
    /*flex: 1;*/
  }
  .imgbox{
    position: relative;
  }
  .Himg{
    width: 130px;
    padding: 10px;
  }
  .infoB1R{
    flex: 1;
    padding-left: 10px;
  }
  .infoB1RT{
    font-size:0.54rem;
    color: #fff;
    font-family: 'Arial, Helvetica, sans-serif';
    padding-top: 15px;
  }
  .infoB1RW{
    padding-top: 10px;
    color: #ffc600;
    font-size:0.54rem;
    font-family: 'Helvetica, sans-serif';

  }
  .infoB1RType{
    padding-top: 10px;
  }
  .infoB1RCountry{
    padding-top: 10px;

  }
  .infoB1RDate{
    padding-top: 10px;
  }
  .small3D {
    display: inline-block;
    border: 1px solid #848695;
    margin-left: 5px;
  }

  .small3D>span:first-child{
    color: #fff;
    background-color:#848695;
  }
  .small3D span{
    padding-left: 3px;
    padding-right: 3px;
  }
  .play-icon{
    position: absolute;
    left: 38%;
    top: 36%;
    background: url("../../assets/images/other/play.png") no-repeat center;
    width:1rem;
    height: 1rem;
    background-size: cover;
  }
  .btnBug{
    padding: 15px;
    background-color: #fff;
  }
  .movieDet{
    font-size: 0.4rem;
    line-height: 0.5rem;
    color: #555;
    padding-top: 10px;
  }


  /*mediaBox*/
  .mediaBox{
    /*height: 100px;*/
    background-color: #fff;
  }
  .mediaTitle{
    font-size: 0.4rem;
    font-weight: bold;
    padding:10px 0 0 15px;
    margin-top: 10px;
  }
  .mediaimg{
    width: 100%;
    height: 100%;
    background-size: cover;
  }
  .swiper-container {
    width: 100%;
    height: 100px;
    margin: 10px auto;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    padding: 5px;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

</style>
