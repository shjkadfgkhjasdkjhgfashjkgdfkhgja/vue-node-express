<template>
 <div class="container">
   
    
     <div class="content2">
                 <div>
                   <router-link to="./Products">
                       <img src="img/shopping/shopping.jpg" alt=""><br>
                       <span>商品购买</span>
                   </router-link>
                 </div>
                  <div>
                  <router-link to="./register">
                       <img src="img/vip/logo.jpg" alt=""><br>
                       <span>会员注册</span>
                   </router-link>
                 </div>
                 <div>
                   <router-link to="./UserComment">
                       <img src="img/UserComment/logo.jpg" alt=""><br>
                       <span>社区评论</span>
                   </router-link>
                  
                 </div>
                
                 
     </div>
      <div class="content1">
          <img src="/img/lb/4.jpg">
       
     </div>
 </div>
</template>

<script>

export default {

  
}
</script>
<style lang="less" scoped>
    .container{
      padding-bottom:5.5rem;
            .content1{
          padding-top:2rem;
          font-size: 0;
             img{
              width: 100%;
              height: 25rem;
             }
         }
         .content2{
          display: flex;
          justify-content: space-around;
          padding-top:1.5rem;
             text-align: center;
          a{
            color: #000;
            text-decoration: none;
            span{
              font-size: 1.8rem;

            }
          }
       }
        img{
          width: 8rem;
          height: 8rem;

        }
    }
   
</style>
