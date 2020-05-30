<template>
<div class="footer">
  
<van-tabbar v-model="getNowState" class="bottomBar" :active-color="'#000'" :border="false">
  <router-link to="/home">
  <van-tabbar-item icon="home-o" class="item">首页</van-tabbar-item>
  </router-link>
  <router-link to="/member">
 <van-tabbar-item icon="friends-o"  class="item">会员</van-tabbar-item>
  </router-link>
  <router-link to="/cart">
     <van-tabbar-item icon="shopping-cart-o" id="badge" :info="getNowCartList" class="item">购物车</van-tabbar-item>
  </router-link>
  <router-link to="/getProduct">
<van-tabbar-item icon="send-gift-o"   class="item">待收货</van-tabbar-item>
  </router-link>
  
</van-tabbar>
  <!-- 得到当前显示状态                     -->
         

     </div>
</template>
<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar).use(TabbarItem);
export default({
   computed:{
    getNowCartList(){
       if(this.$store.state.cartList.length == 0)
       {
         return null;
       }
       return this.$store.state.cartList.length;
    },
       getNowState:{
         get:function(){
          
          switch(this.$route.path){
                        case "/home":
                        return 0;
                        break;
                        case "/member":
                        return 1;
                        break;
                        case "/cart":
                        return 2;
                        break;
                        case "/getProduct":
                        return  3;
                        break;
                        
                    };

         },
         set:function(){
 
         }
           
         }
     

   },
    methods:{
         goNowIndex(index){
             this.nowIndex = index;
         }
      
     },
    
      
   
})

</script>  
<style lang="less" scoped>
  
  
  .footer{
    width: 100%;
    font-size: 1.2rem;
    position: fixed;
    left: 0;
    bottom: 0;
   
     .bottomBar{
       display: flex;
       justify-content: space-around;  
       border: none;
       height: 5.5rem;
       line-height: 5.5rem;
       background: #fff;
   
        border: 1px solid #999;
     }
     .item{
       padding-top:0.5rem;
       font-size: 1.5rem;
       z-index: 1;
       color: #999;

       /deep/.van-icon{
          font-size: 2.5rem;
       }
         /deep/.van-tabbar-item__icon{
          font-size: 2rem;
        }
   
     }
      
  }
 
</style>
