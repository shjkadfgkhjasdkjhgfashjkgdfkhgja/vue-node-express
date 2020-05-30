<template>

  
   

      <div class="box">
 
        <van-swipe :autoplay="3000" :width="clientWidth" :indicator-color="'#fff'">
             <van-swipe-item v-for="(image, index) in images" :key="index">
               <img :src="image" />
            </van-swipe-item>
         
          
      </van-swipe>

      </div>


</template>
<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe).use(SwipeItem);

   export default({
         data(){
               return{
                     nowIndex:1,
                     images:[
                           "img/lb/1.jpg",
                           "img/lb/2.jpg",
                           "img/lb/3.jpg",
                     ],
                     clientWidth: document.documentElement.clientWidth
               }
         },    
         mounted(){
                  
               window.onresize = () => {
                  return (() => {
                        this.clientWidth = document.documentElement.clientWidth                             
                       
                 })()
             }
               
         },
       
         

   })
</script>  
<style lang="less">
.box{   
        margin-top:5rem;
        width:100%;
        height: 20rem;
       display: inline-block;
       overflow: hidden;
   .van-swipe{
        .van-swipe__track{
             width:100.8rem;
          height:20rem;
          .van-swipe-item
          { 
             width:100%;
             height: 20rem;  

          }
          
       }
   }
   
   img{
         width: 100%;
         height: 20rem;  
         
   }
}
</style>
