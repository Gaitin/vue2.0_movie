<template>
  <div class="movieItem" >
    <div class="imgBox">
      <img v-lazy="item.img" class="iconImg">
    </div>
    <div class="detailBox">
      <div class="detailTitle">{{item.nm}}</div>
      <div class="detailWanted" v-if="item.preSale==1"><p class="wantedNum">{{item.wish}}</p><p class="wantedlook paddingLeft">人想看</p></div>
      <div class="detailScore" v-else="item.preSale==0"><p class="wantedlook">观众</p><p class="wantedNum paddingLeft">{{item.sc}}</p></div>
      <div class="detailshortInfo">{{item.scm}}</div>
      <div class="detailTimes" >{{item.showInfo!=""?item.showInfo:item.rt}}</div>
    </div>
    <div class="BtnBox">
      <input type="button" v-if="item.preSale==1"  value="预购" class="btnB btnPreBuy"/>
      <input type="button" v-if="item.preSale==0" value="购买" class="btnB btnBuy" />
    </div>
  </div>
</template>

<script>
  import { Lazyload } from 'mint-ui';
export default {
  name: 'movieItem',
  components: {
    "v-lazy":Lazyload
  },
  props: {
    item: Object
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods : {

  }
}
</script>

<style lang="less" scoped>
  h1, h2 {
    font-weight: normal;
  }
  .movieBox {
    height:667px;
    overflow-y: scroll;
  }
  .movieItem {
    height: 140px;
    border-bottom: 1px solid #c5c5c5;
    display: flex;
    flex-direction: row;
  }
  .iconImg {
    height: 120px;
    width: 80px;
  }
  image[lazy=loading] {
    width: 80px;
    height: 120px;
    margin: auto;
  }
  .imgBox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
  }
  .detailBox {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
  }
  .BtnBox {
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btnB {
    width: 50px;
    height: 25px;
    font-size: 16px;
    background-color: #fff;
    border-radius: 5px;
  }
  .btnPreBuy {
    color:#12a2f1;
    border: 1px solid #12a2f1;
  }
  .btnBuy {
    color:#f34f39;
    border: 1px solid #f34f39;
  }
  .detailTitle {
    font-weight: bold;
    font-size: 20px;
    margin-top: 20px;
    /*padding-bottom: 5px;*/
    padding-top: 5px;
  }
  .detailWanted {
    display: flex;
    flex-direction: row;
    padding-bottom: 5px;
    padding-top: 5px;
    justify-content: center;
    align-items: center;
  }
  .detailScore {
    display: flex;
    flex-direction: row;
    padding-bottom: 5px;
    padding-top: 5px;
    justify-content: center;
    align-items: center;
  }
  .wantedNum {
    color:#ffb400;
  }
  .wantedlook {
    color:#999;
    font-size: 14px;
  }
  .detailshortInfo,.detailTimes {
    color:#666;
    font-size: 14px;
    padding-bottom: 5px;
  }
  .paddingLeft {
    padding-left: 3px;
  }
</style>
