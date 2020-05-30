<template>
	<div class="ProductIntroduce">

         <transition @before-enter="beforeEenter" @enter="enter" @after-enter="afterEnter">
                    <div class="circle" v-show="showCircle" ref="ball"></div>
         </transition> 
		<div class="ProductIntroduceBox">
			 <img :src="NowProduct && NowProduct.img">
             <div class="priceBox">
                             <span class="oldPrice">原价:{{NowProduct && NowProduct.oldPrice}}</span><span>现价:{{NowProduct && NowProduct .nowPrice}}</span>
             </div>
 
			 <h3>{{ NowProduct.title}}</h3>
              <button class="addCartBtn" @click="addCart(NowProduct.productId);addDh()">加入购物车</button>

			 <p class="productIntroduce">{{NowProduct  && NowProduct.introduce}}</p>
  
      
       <Comment :commentData="getNow && getNow"></Comment>     
    
		</div>
          
	</div>
</template>
<script>

  import Comment from '../components/Comment'
  // import axios from 'axios';
	export default({
      components:{
        Comment
      },
       data(){
        return {
            id:this.$route.params.id,
            NowProduct:'',
            showCircle:false,
            DhKey:false,
            commentData:null
        }
       },

        computed:{
          //  getNowP(){
          //    return this.$store.state.productList
          //  },
           getNow(){
             return this.commentData;
           }
        },
       methods:{
              getNowProduct(data){
           
                 
                  this.$axios.get(this.$store.state.nowAddress + '/shopping/productList')
                  .then( (response)=>{
           
                    this.NowProduct = response.data.find(item => item.productId == this.id);

                  })
                  .catch(function (error) {
                    
                  });
              
                //return data.find(item => item.productId == this.id);
             
              },
        	addCart(id){
		  	    	this.$store.commit("addCartList",id);
		
			     },
          addDh(){
            
            if(this.DhKey){
              return;
            }
           setTimeout(()=>{
                this. DhKey = false;
            },500)  
            this.showCircle = !this.showCircle;
             this.DhKey= true;
          
          },
          beforeEenter(el){
          
             el.style.opacity = "1";
            el.style.transform = "translate(0,0)";
          },
          enter(el,done){
            el.offsetWidth;
            const ballPosition = this.$refs.ball.getBoundingClientRect();
            const badgePosition = document.getElementById("badge").getBoundingClientRect();
            let Dtop = badgePosition.top - ballPosition.top;
            let Dleft = badgePosition.left - ballPosition.left;
   
            el.style.transform = `translate(${Dleft + 12.5}px,${ Dtop +12.5}px)`;
            el.style.transition = "all 0.5s ease-in";
            done();
          },
          afterEnter(el){
          
            this.showCircle = !this.showCircle;
              el.style.opacity = "0";
          },
          getNowuserComment(){
              this.$axios.get(this.$store.state.nowAddress + '/user/userComment')
                  .then( (response)=>{
     
                    this.commentData = response.data;
               
                  })
                  .catch(function (error) {
                    
                  });
                 
          }
      },
      created(){
           this.$store.commit('setProductList');
            this.getNowProduct();
            this.getNowuserComment();  
         
      },
      mounted(){
      }
	})
</script>	
<style  lang="less">
	.ProductIntroduce{
        .circle{

                width: 2rem !important;
                height: 2rem !important;
                border-radius:50%;
                background:red;
                position: absolute;
                bottom: 21.5rem;
                left: 18rem;
                z-index: 99999999;
                 opacity: 1;
          
            }
		padding-top: 5rem;
		padding-bottom: 5.5rem;
		.ProductIntroduceBox{
			width: 100%;
			height: 100%;
            // text-align: center;
            .priceBox{
                text-align: center;
                 padding-top:  3rem;

                span{
                  
                    color:#ea625b;
                     margin: 0 1rem;
                    font-size: 1.6rem;
                    font-weight: bold;

                }
                .oldPrice{
                    color: #999;
                   text-decoration: line-through;
                }
            }
            img{
            	width: 90%;  
            	display: block;      
            	margin: 0 auto;
               
            }
            h3{
            	
            	margin-top:2rem;
            	text-align: center;
            	font-size: 1.5rem;
            }
            .productIntroduce{  	
                margin: 3rem auto; 
            	  width: 80%;     
            	  display: block;
                word-wrap:break-word;
                word-break:break-all;
                font-size: 1.4rem;
                line-height: 1.5;
               color: #999;
            }
            .addCartBtn{
	    		display: block;
	    		margin: 1rem auto;
                width: 15rem;
                height: 3rem;
			    background: #ea625b;
			    border-radius: 0.5rem;
			    text-align: center;
			    color: #fff;
			    font-size: 1.3rem;
			    padding: 0.16rem;
			    font-weight: 700
	    	}
            

		}
	}
</style>