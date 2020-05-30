<template>
<div class="newsDetailContent">

   <div class="header" >
         <img :src="getDictData[id].img">
         <div class="Ctitle">
            <span>  {{ getDictData[id].title}}</span>
            <div class="CtitleBottom">
               <span>{{ getDictData[id].content1}}</span>
               <span>{{ getDictData[id].content2}}</span>
            </div>
           
         </div>
    </div>
    <div class="contentTop">
        <van-notice-bar :scrollable="false">
    {{ getDictData[id].top}}
  </van-notice-bar>
    </div>

    <div class="content">
       <div class="UserItem">
          <div class="user">用户A</div>
          <div class="time">17:00</div>
          <div class="content">
             {{getDictData[id].c1}}
          </div>
       </div>
        <div class="UserItem" >
            <div class="user">用户B</div>
            <div class="time">18:00</div>
         <div class="content">
             {{getDictData[id].c2}}
          </div>
       </div>
        <div class="UserItem">
            <div class="user">用户C</div>
          <div class="time">19:00</div>
         <div class="content">
             {{getDictData[id].c3}}
          </div>
       </div>
      
    </div>
  

  

</div>
</template>    
<script>

import Vue from 'vue';
import { NoticeBar } from 'vant';
import UserCommentdata from '../store/userComment.js'

Vue.use(NoticeBar);
export default({
   
    data(){
        return{
            id:this.$route.params.id, 
        }
    },
      
       computed:{
          getDictData(){
          let dict = {};
             UserCommentdata.forEach(item =>{
                   dict[item.id] = item;
             })
             return dict;
            }
    
          }
          
       
})
</script>  
<style lang="less" scoped>
 .newsDetailContent{

   padding-top:5rem;
   padding-bottom:5.5rem;
    .header{
        display: flex;
        img{
          margin: 2rem;
          width: 8rem;
          height: 8rem;

        }

        .Ctitle{
          font-size: 1.2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .CtitleBottom{
            display: flex;

          }
          span{
            margin: 0.5rem;
          }
        }
       
      }
       .content{
     
          .UserItem{
             padding:2rem;
             margin: 1rem;
             border-radius: 1rem;
             border: 0.1rem solid #999;
             font-size: 1.3rem;
             height: 15rem;
             .user{
                font-weight: bold;
                font-size: 1.7rem;
             }
             .content{
              padding-top:1rem;
              font-size: 1.5rem;
             }
              .time{
                color: #999;
              }
          } 
       
        }
 }
 
</style>