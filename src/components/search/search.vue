<template>
  <div class="search">
    <div class="btnLine">
      <i class="icon ion-search"></i>
      <input placeholder="找影视剧、影人、影院" class="inputLine"/>
    </div>
  </div>
</template>

<script>

export default {
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
  @import '../../assets/css/ionicons.min.css';
.search {
  height: 40px;
  width: 100%;
  background-color: #D43E37;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.btnLine {
  display: flex;
  background-color: #fff;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 30px;
  font-size: 14px;
}
.inputLine {
  border: none;
  font-size: 14px;
  margin-left: 5px;
}
.inputLine:active {
  border: none;
}
</style>
