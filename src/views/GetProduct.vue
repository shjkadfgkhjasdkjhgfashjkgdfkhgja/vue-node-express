<template>
    <div class="searchContent">
          
          <div class="title">
          	<h4>待收货</h4>
          </div>
    
      
        <div class="NoProduct"> 
        		<van-divider class="NoP" v-show="getProductList.length == false">当前无待收货</van-divider>
        	</div> 

         <div class="productList">
         	<div class="product" v-for="item in getProductList " :key="item.cartId">
         		   <div class="cartTop">
        	         	
        	         	<span class="price">￥{{ getDictProduct[item.productId] && getDictProduct[item.productId].nowPrice}}</span>
        		        <img :src="getDictProduct[item.productId]&&getDictProduct[item.productId].img">
        		        <div class="cartTopRight">
        		        	 <div class="speical">{{getDictProduct[item.productId] && getDictProduct[item.productId].introduce}}</div>
        		         <span class="productName"> {{getDictProduct[item.productId]&& getDictProduct[item.productId].title}}×{{ item.productNum && item.productNum}} </span>
        		     </div>
         	</div>
         </div>
		
        </div>
        <van-steps direction="vertical" :active="0" v-show="getNowSatuList.length >0 ">
  
			    <van-step>
			    <h3>快件已发货</h3>
			    <p>{{getNowTime}}</p>
			  </van-step>
			  <van-step>
			    <h3>扫描通过,已经出仓</h3>
			    <p>{{getNowTime}}</p>
			  </van-step>
		</van-steps>
   </div>
</template>
<script>
import Vue from 'vue';
import { Step, Steps,Divider } from 'vant';
Vue.use(Step).use(Steps).use(Divider)
  export default({
  	data(){
        return{
			active:3,
			getProductList:""
        }
  	},
  	computed:{
  		getNowSatuList(){
  			return this.$store.state.getCart;
  		},
  	    getDictProduct(){
			let DictProduct = {};
		    this.$store.commit('setProductList');
    		this.$store.state.productList.forEach(item =>
    		{
                 DictProduct[item.productId] = item;
    		})
    		
    		return DictProduct
    	},
        getNowTime(){
        	 let myDate = new Date()
        return	myDate.getFullYear()+'年' + (myDate.getMonth() + 1) + '月'+ myDate.getDate()+'日'+ myDate.getHours()+'时'+ myDate.getMinutes()+'分'
        }
	  },
	  created(){
			this.$axios.get(this.$store.state.nowAddress + '/shopping/getProduct')
			.then((data)=>{
                 this.getProductList = data.data
			})
	  }
  
  })
</script>  
<style type="text/css">
	.speical{
	
		  width: 16rem;
		  color:#999;
      margin: 1rem;
		  font-size: 1.6rem;
      overflow: hidden;
		 text-overflow: ellipsis;
		 word-break: break-all;
		 display: -webkit-box;
		 -webkit-line-clamp: 2;
		 -webkit-box-orient: vertical;
	                      
	}
</style>
<style lang="less" scoped>
	.searchContent{
	   padding-top:5rem;
	   padding-bottom:5.5rem;
	   .title{
	   	padding-top:1rem;
    	font-size: 2rem;
    	text-align: center;
        font-weight: bold;
	   }
       	.NoP{
       		margin: 2rem;
  			text-align: center;	
  			color: #999;
  			font-size: 1.8rem;
       	}
       	.productList{
	   	  .product{
	   	  	border: 0.1rem solid #999;
            border-radius: 1rem;
  			height: 12rem;
  		    width: 90%;
  		    padding-bottom:1rem;
  		    margin: 1rem auto;
  		    .cartTop{
  				
  				  display: flex;
  				  align-items: center;
  				 .price{
  				 	font-size: 1.7rem;
  				 }
  				span{
	                display: block;
	  				
  			        margin: 0 1.25rem;
  			        	color: #ea625b;
  		        }

	  			img{
	  			   
	  				width: 8rem;
	  				height: 8rem;
	  			}
  			
  				.cartTopRight{
  					padding:1rem;
  					padding-right:1rem;
  					width: 70%;
  					display: flex;
                    flex-direction: column;
                   
                    span{
                        color: #000;
                        margin-top: 0.8rem;
                        margin-left: 1.2rem;
                        font-size: 1.5rem;
                    }	
  				}
  			}
	   	  }
	   }
	}
</style>
