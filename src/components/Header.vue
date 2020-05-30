<template>
    <div class="header">
       <span class="goBack" @click="goBack">返回</span>
       <span class="title">蒋豪鹏项目</span>
    </div>
</template>
<script>
import Vue from 'vue';
import { NavBar } from 'vant';

Vue.use(NavBar);
export default({
    methods:{
      goBack(){
              this.$router.go(-1);
      }
       
    }
})

</script>  
<style lang="less" scoped>

  .header{
      z-index:9999;
      position:fixed;
      top:0;
      left:0;
      width: 100%;
      height: 5rem;
      line-height: 5rem;
      text-align: center;
      color: #000;
      font-size: 2.2rem;
      background: #eee;
      letter-spacing:0.3rem;
      text-align: center;
      font-weight: bold;
      .goBack{
       
       position: absolute;
       left: 0.3rem;
     
        font-size: 1.8rem;
      }
      span{
        text-indent: 0.5rem;
      }
  }

</style>
