<template>
  <div class="own" >
    <div class="ownBox" :style="{height:boxHeight+'px'}">
      <div class="infoHeadBox">
        <div class="infoHCom oiL"><img src="../../assets/images/header/u=785610095,2402278722&fm=117&gp=0.jpg"  class="headImg" alt=""></div>
        <div class="infoHCom oiC"><p>立即登录</p></div>
        <div class="infoHCom oiR"><i class="icon ion-ios-arrow-right"></i></div>
      </div>
      <div class="infoLook">
        <div class="iLItem">
          <i class="icon ion-ios-heart"></i>
          <p>想看</p>
        </div>
        <div class="iLItem">
          <i class="icon ion-eye"></i>
          <p>看过</p>
        </div>
        <div class="iLItem">
          <i class="icon ion-chatbubble-working"></i>
          <p>影评</p>
        </div>
        <div class="iLItem">
          <i class="icon ion-android-bookmark"></i>
          <p>话题</p>
        </div>
      </div>
      <div class="orderBox">
        <mt-cell
                title="我的订单"
                is-link
                value="全部">
        </mt-cell>
        <div class="infoLook order">
          <div class="iLItem1">
            <i class="icon ion-ios-bookmarks-outline"></i>
            <p>未消费</p>
          </div>
          <div class="iLItem1">
            <i class="icon ion-clock"></i>
            <p>待付款</p>
          </div>
          <div class="iLItem1">
            <i class="icon ion-ios-calendar-outline"></i>
            <p>待评价</p>
          </div>
          <div class="iLItem1">
            <i class="icon ion-android-exit"></i>
            <p>退款</p>
          </div>
        </div>
      </div>
      <div class="boxOwnInfo">
        <mt-cell
                title="我的消息"
                is-link
        >
        </mt-cell>
        <mt-cell
                title="我的收藏"
                is-link
        >
        </mt-cell>
        <mt-cell
                title="会员中心"
                is-link
        >
        </mt-cell>
        <mt-cell
                title="我的成就"
                is-link
        >
        </mt-cell>
      </div>
      <div class="boxOwnMoney">
        <mt-cell
                title="我的钱包"
                is-link
        >
        </mt-cell>
        <mt-cell
                title="余额"
                is-link
                value="0.00元"
        >
        </mt-cell>
        <mt-cell
                title="优惠券"
                is-link
        >
        </mt-cell>
        <mt-cell
                title="商城"
                is-link
        >
        </mt-cell>
      </div>
      <div class="exitBtn">
        <div class="exit">
          <mt-button type="danger" size="large">退出</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Cell } from 'mint-ui';
export default {
  name: 'PersonalCenter',
  components:{
    'mt-cell':Cell
  },
  data () {
    return {
      boxHeight:300
    }
  },
  created (){
    this.boxHeight=window.screen.height-45;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="less" scoped>
  .own{
    background-color: #f2f2f2;
  }
  .ownBox{
    overflow-y: scroll;
  }
  .own a:hover{
    text-decoration: none;
  }
  .boxOwnInfo{
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
  }
  .boxOwnMoney{
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
  }
  .infoHeadBox{
    display: flex;
    flex-direction: row;
    color:#fff;
    background-color:#D43E37;
  }
  .infoHCom {
    display: flex;
    justify-content: center;
    align-items: center;
    height:2.5rem;

  }
  .headImg{
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 1.8rem;
  }
  .oiL{
    width: 3rem;
  }
  .oiC{
    flex: 1;
    justify-content: flex-start;
    font-size: 0.4rem;
    font-family: '黑体';
  }
  .oiR{
    width: 1rem;
    font-size: 0.6rem;
  }
  .exitBtn{
    display: flex;
    justify-content: center;
    height: 50px;
  }
  .exit{
    width: 80%;
  }

  .infoLook{
    display: flex;
    flex-direction: row;
    background-color: #fff;
  }
  .iLItem,.iLItem1{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.4rem;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .iLItem i,.iLItem1 i{
    font-size: 0.6rem;
  }

  .iLItem:first-child i{
    color:#FF6036;
  }
  .iLItem:nth-child(2) i{
    color:#3BCCC5;
  }
  .iLItem:nth-child(3) i{
    color:#FFB500;
  }
  .iLItem:last-child i{
    color:#27B5FF;
  }

  .orderBox{
    margin-top: 10px;
  }
  .order .iLItem1 i{
    color: #878A8E;
  }
</style>
