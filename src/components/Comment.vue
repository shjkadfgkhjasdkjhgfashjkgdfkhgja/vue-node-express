<template>
    <div class="CommentComponent">
      
        <div class="up">
            <textarea type="text" placeholder="请发表你的评论" ref="inputComment"> </textarea> 
            <van-button type="primary" class="submit" @click="pushComment">发表评论</van-button>
        </div>
         <div v-if="!commentData"></div>
         <div v-else class="comment">
          
             <div class="commentContent" v-for="item in commentData.slice(0,limitNum)" :key="item.productCommentId"> 
                 <p>第{{item.productCommentId}}楼说：</p> 
                 <p>发布时间:{{renderTime(item.SendTime)}}</p>
                <div class="CC">{{item.content}}</div>
          
    
         </div> 
              
        <van-button  v-if="limitNum<commentData.length" type="info" class="clickMore" @click="showMore">点击加载更多</van-button>
        <van-button  v-else="" type="info" class="clickMore">没有更多了</van-button>
         </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { Button,Dialog } from 'vant';
// import axios from 'axios'

Vue.use(Button);

export default ({
    props:{
       "commentData":{
         type:Array
       }
    },
    data(){
        return {
            comment:'',
            limitNum:3
           
        }
    },
    methods:{
       getComment(){
            // var arr = [];
         
            // //         for(let i =  this.commentData.length; i >= 0; i--){
                                
            // //                         arr[this.commentData.length - 1 - i] = this.commentData[i]
                            
            // //             }
                                    
            // //                         this.comment =  this.commentData; 
           
               this.comment =  this.commentData; 
           
     
                     
       },
       pushComment(){
           
             if(!this.$refs.inputComment.value.length){
               Dialog({ message: '评论不能为空' });
                 return;
             }
             let nowComment = this.$refs.inputComment.value;
             let myDate = new Date()
            //  this.commentData.push(
            //      {
            //          productCommentId: this.commentData.length + 1,
            //          SendTime: myDate.getFullYear()+'年' + (myDate.getMonth() + 1) + '月'+ myDate.getDate()+'日'+ myDate.getHours()+'时'+ myDate.getMinutes()+'分',
            //          content:nowComment
            //      }
            //  )
            var sendTime =  myDate.getFullYear()+'-' + (myDate.getMonth() + 1) + '-'+ myDate.getDate()+' '+ myDate.getHours()+':'+ myDate.getMinutes()+':' +myDate.getSeconds() ;
        
           this.$axios.get(this.$store.state.nowAddress + `/user/userCommentAdd?sendContent=${nowComment}&sendTime=${sendTime}` )
            .then((data)=>{
                  Dialog({ message: '评论成功' });
                   if(data["data"].state == "ok"){
                            this.commentData.push(
                        {
                            productCommentId: this.commentData.length + 1,
                            SendTime:data["data"].sendTime,
                            content:data["data"].content
                        }
                       )
                   }
            })
            .catch((err)=>{

            });
            // this.$refs.inputComment.value = '';
       },
       showMore(){
          this.limitNum += 3;
       },
        renderTime(date) {
            var dateee = new Date(date).toJSON();
            return new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '') 
        }
    },

    created(){
  
        this.getComment();
    },
    mounted(){
       this.getComment();
     
    }
})
</script>  
<style lang="less" scoped>
 .CommentComponent{
      padding-bottom: 7.2rem;
      .clickMore{       
          width: 43%;
          height: 4rem;
          line-height: 4rem;
          margin: 1rem auto;
          display: block;
           font-size: 2.1rem;
      }
     .up{
         text-align: right;
        textarea{
           
            width: 90%;
            height: 10rem;
            margin: 0 auto;
            display: block;
            resize:none;        
             font-size: 1.8rem;
        }
          .submit{
           margin-top:1rem;
          width: 90%;
          height: 4rem;
          line-height: 4rem;
          margin: 0.3rem auto;
          display: block;
           font-size: 2.1rem;
        }
     }
       
        .comment{
            
         .commentContent{
             width: 90%;
             display: block;
             margin: 0 auto;
             font-size: 1.8rem;
             margin-top:1.5rem;
             p{
              font-size: 1.6rem;
             }
             .CC{
 
              padding-top:1rem;
              word-break:break-all;
             }
          } 
        }
 }
 
</style>