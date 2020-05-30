<template>
    <div class="newsContent">
        <div>
             <div class="news" v-for="item in  getNewsList" :key="item.id">
        <router-link :to="'/UserComment/UserCommentDetail/' + item.id" >
     
        <div class="news" @click="addClick(item.id)">
           <div class="left">
           <img :src="item.img" alt="">
        </div>
        <div class="right" >
            <div class="top"> <span>{{item.title}} </span></div>
            <div class="rrleft">
                <span>{{item.time}}</span>
            </div>
            <div class="rright">
                <span>点击&nbsp;:&nbsp;{{item.clickTimes}}次</span>
            </div>
          </div>
         </div>   
        </router-link>
        
       </div>
       </div>
    </div>

</template>
<script>
export default({
   
    computed:{
        getNewsList(){
      
            return this.$store.state.newsList;
         
        }
    },
    methods:{
        addClick(id){
       
            this.$store.commit('addClickTimes',id)
        }
    },
    mounted(){
        this.$store.commit('setNewsList');
    }
})
</script>  
<style lang="less" scoped>
  .newsContent{
    padding-top:5rem;
    padding-bottom: 5.5rem;
  }
    .news{

        display: flex;
        width: 100%;
        font-size: 1.3rem;
        .left{
            padding: 1rem;
            
            img{
                width: 8rem;
                height: 8rem;
            }
        }
        .right{
            width: 28rem;
             .top{
            font-size: 1.4rem;
            padding-top: 1.5rem;
            white-space:nowrap;
            overflow:hidden;
            text-overflow:ellipsis;
             color: #000;
        }
        .rrleft{
            span{
                float: left;
                padding-top: 2rem;
                color: #000;
            }
        }
        .rright{
            span{
                float: right;
                padding-top: 2rem;
                padding-right: 0.5rem;
                 color: #000;
            }
        }
    }
        }
       
</style>