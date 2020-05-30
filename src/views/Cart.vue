<template>
    <div class="cartContent">
        <div class="productBox">
        	<div class="title"><h4>购物车</h4></div>
          
        	<div class="productItem" v-for="item in getNowCartList" :key="item.id">
        		
        	         <div class="cartTop">
        	         	
        	         	<input type="checkbox"  v-model="item.statu"  class="isCheck">
        		        <img :src="getDictProduct[item.id].img">
        		        <div class="cartTopRight">
        		        	 <div class="speical">{{getDictProduct[item.id].introduce }}</div>
        		         <span class="productName">{{ getDictProduct[item.id].title}}</span>
        		        </div>
        		       
        	         </div>
        	         <div class="cartBottom">
        	         	   <div class="cartBottomRight">
        	      		     <span class="price">￥{{ getDictProduct[item.id].nowPrice * item.count}}</span>
	        	      		 <div class="buttons">    
			        	       <van-button type="primary" class="less" @click="less(item.id)"  :disabled="item.count == 1" size="larger" >-</van-button>
				                  <span class="num">{{ item.count }}</span> 
				           
				                  <van-button type="primary" class="add" @click="add(item.id)">+</van-button>
				                  <van-button type="danger" @click="move(item.id)" size="small" class="move">删除</van-button >
				      
		                     </div>

        	      	       </div>
        	         </div>
       	     
        	</div>
          <div class="merber">
             <h3 v-if="isLogin">会员打八折</h3>
          </div>
        	 <div class="AllPrice" v-if="getNowCartList.length"> 
            	  	<label>
                     <div class="getAllBox">
                          <input type="checkbox" id="changeAll" @click="changeAllStatu" checked=""> 
                           <span class="getAll">全选</span>
                     </div>
                 
                  </label> 	

            	     <h3 v-if="!isLogin">共计:{{getAllPrice}}</h3> 
                   <h3  v-if="isLogin">共计: <span>{{getAllPrice}}</span> {{ countPrice}}</h3> 
                     <van-button type="primary" size="small" @click="ClearAll">立即购买</van-button >
            </div> 
        	<div class="NoProduct" v-else> 
        		<van-divider class="NoP">当前购物车没有商品</van-divider>
        	</div>

           
        </div>
   
    </div>
</template>
<script>
import Vue from 'vue';
import { Button,Divider} from 'vant';
import { Dialog } from 'vant';
Vue.use(Divider).use(Button);
export default ({
	data(){
		return{
	       active:true,
		   countNum:0,
		   isLogin:false
		}
		
	},
    computed:{
    	getNowCartList(){
    		return this.$store.state.cartList;
    	},
    	getDictProduct(){
    		let DictProduct = {};
    		this.$store.state.productList.forEach(item =>
    		{
                 DictProduct[item.productId] = item;
    		})
    		
    		return DictProduct
    	},
    	getAllPrice(){
    		let AllPrice = 0;

    		this.getNowCartList.forEach(item => {
    	        if(!item.statu)
    	        	 {
    	        	 	return;
    	        	 }
    			 AllPrice += (this.getDictProduct[item.id].nowPrice * item.count)
    		})
    		return AllPrice
    	},
      countPrice(){
        return Math.ceil(this.getAllPrice / (10 / 8));
      }

    },
    methods:{
    	add(id){
            let nowProduct = this.getNowCartList.find(item => item.id == id);        
            nowProduct.count++;
    	},
    	less(id){
            let nowProduct = this.getNowCartList.find(item => item.id == id);
            if(nowProduct.count <= 1){
            	nowProduct.count = 1;
            	return; 
            }
            nowProduct.count--;
    	},
        move(id){

        	if(this.getNowCartList.length == 0){
        		return;
        	}
        	this.getNowCartList.forEach((item,index) => {
        		if(item.id == id){

        			this.getNowCartList.splice(index,1)
        		} 
        	  
        	})
        },
        changeAllStatu(){
            if(this.countNum >= 10){
            	this.countNum = 0;
            }
        	this.getNowCartList.forEach(item => {

        		if(this.countNum % 2){
        			item.statu = true;
        				
        		}
        		else{
        		    item.statu = false;

        		}
        	})
        	 this.countNum++;

        },
        ClearAll(){
         
        	let key;
        	this.getNowCartList.forEach(item => {
        		if(item.statu == true){
        			 key = true;
        		}
        	})
            if(key){                     
              this.getNowCartList.forEach((item,index) =>{
                   this.$store.state.getCart[index] = item
			  })
			 var jsonArr = JSON.stringify(this.$store.state.getCart);
		      
	          console.log(jsonArr);
               this.$axios.post(this.$store.state.nowAddress + '/shopping/getCart',{
				   arr:jsonArr
			   }).then( (response)=>{
               
                   if(response.data = "ok"){

                    this.getNowCartList.splice(0,this.getNowCartList.length);
               

        	         Dialog({ message: '你已经成功购买商品' });
				   };
 
                  }).catch(function (error) {
                    
                  });
             
            }else{
            Dialog({ message: '请选择商品' });
            }
        	
		},
	

	},
	mounted(){

	   this.isLogin = document.cookie;
	   
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
<style lang="less">
  .cartContent{
  	padding-top:5rem;
  	padding-bottom:5.5rem;
    .title{
    	padding-top:1rem;
    	font-size: 2rem;
    	text-align: center;
        font-weight: bold;
       
    }
  	.productBox{
  		.productItem{

  		    border: 0.1rem solid #999;
            border-radius: 1rem;
  			height: 16rem;
  		    width: 90%;
  		    padding-bottom:1rem;
  		    margin: 2rem auto;
  			.cartTop{
  				
  				  display: flex;
  				  align-items: center;
  				input{
	                display: block;
	  				
  			        margin: 0 1.25rem;
  			        zoom:140%;
  		        }

	  			img{
	  			   
	  				width: 8rem;
	  				height: 8rem;
	  			}
  			
  				.cartTopRight{
  					padding:1.5rem;
  					padding-right:1rem;
  					width: 70%;
  					display: flex;
                    flex-direction: column;
                   
                    span{

                        margin-top: 1.2rem;
                        margin-left: 1.2rem;
                        font-size: 1.5rem;
                    }	
  				}
  			}
  			.cartBottom{
  				width: 100%;
  				height: 3rem;
                position: relative;
  				.cartBottomRight{
  					width: 70%;
  				    float: right;
  				   
  				.price{
  					margin-left:1.5rem;
  					font-size: 1.6rem;
  					color: #ea625b;
                    position:absolute;
                    top: 0;
                    left: 1rem;

  				}
  				.buttons{

	                float: right;
	  				width: 22rem;
	  				height: 3rem;
              
	  				// padding-right:6rem;
	  				.forbidden{
	  					width: 3rem;
	  					height: 2rem;
	  					font-size: 1.5rem;
	  					background: #999;
	  				}
	  				/deep/.less,.add,{

	  					width: 3rem;
	  					height: 2rem;
	  				
	  				} 
                    .num{
                    	margin: 1rem;
                    	vertical-align: 0.25rem;
                    }
                    /deep/.van-button{
                    	margin-left:1rem;
                    	width: 4rem;
	  					height: 2rem;
	  					line-height: 2rem;
                    	font-size: 1.2rem;
                    }

	  			}

  			   }
  			}
  		  			
  		}
      .merber{
        text-align: center;
          color: #ea625b;
          font-size: 1.8rem;
            font-weight: bold;
      }
  		.NoProduct{
  			margin: 2rem;
  			text-align: center;

  		
  			color: #999;
  			/deep/ .NoP{
  					font-size: 1.8rem;
  			}
  		}
  		.AllPrice{
  			display: flex;
  			justify-content: space-between;
  			padding:2rem;
  			height: 3rem;
  			line-height: 3rem;
  			padding-left: 4rem;
  			position:relative;
  			label{
  				font-size: 1.5rem;
        
          .getAllBox{
              display: flex;
              justify-content: space-between;
              align-items:center;
          }
          
  			}
  			h3{
  				color: #ea625b;
  				font-size: 1.8rem;
  			 font-weight: bold;
          span{
            color: #999;
            text-decoration:line-through;
          }
  			}
  			input{
  		    margin:0.5rem;
  				zoom:140%;
  			}
  		}
  	}
  }
</style>
