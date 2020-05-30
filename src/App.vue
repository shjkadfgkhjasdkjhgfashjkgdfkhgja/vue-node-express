<template>
  <div >
    <div id="index">
      <Header></Header>
   
       <transition >
            <router-view></router-view>
        </transition>
        
    <Footer></Footer>
    </div>
    
    
  
   </div>
</template>
<script>
import Header from './components/Header'

import Footer from './components/Footer'

export default({
   components:{
     Header,
     Footer
   } 
  

})
</script>  
<style lang="less">
 *{
      margin: 0;
      padding: 0;
  }
   html{
    font-size: 62.5%;
  }
  #index{
    overflow-x:hidden;
    width: 100%;
    height: 100%;
  }
        .v-enter
        {
            opacity: 0;
            transform: translateX(100%);
              position:absolute;
        } 
        .v-leave-to{
           opacity: 0;
            transform: translateX(-100%);
            position:absolute;
        }
        
        .v-enter-active,
        .v-leave-active {
            transition: all 0.1s ease
        }
</style>
