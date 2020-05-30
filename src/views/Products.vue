<template>
	<div class="productsComponent">
	
		     <div class="products">
		     	 <div class="product" v-for="item in  getNowProductListC" :key="item.productId">
		     	 	<router-link :to="'/products/productIntroduce/' + item.productId">
	                <img :src="item.img">
			 		<h3>{{ item.title }}</h3>
			 		<p>{{ item.introduce}}</p>
	                 <span class="oldPrice">{{ item.oldPrice}}</span> <span>{{ item.nowPrice}}</span> <br>
		     	 	</router-link>	
		     	 
		     	 </div> 
		     </div>
		 	
            
		   	
		 	
	
	</div>

</template>
<script >
	export default({
		  computed:{
               getNowProductListC(){
              
                 	return this.$store.state.productList;
               }
		  },
		  methods:{
		  	addCart(id){
		  		this.$store.commit("addCartList",id);
		
			  },
			    getNowProductList(data){    
					return data;
                 	//return this.$store.state.productList;
               }
		  },
           created(){
				this.productList = this.$store.commit('setProductList');
			
           }
	})
</script>
<style lang="less" scoped>
  .productsComponent{
  	 padding-top:5rem;
     padding-bottom:5.5rem;
  	.products{
	    
	  	display:flex;
	    justify-content: space-between;
	    flex-wrap: wrap;
	    padding:0.5rem;

	    .product{
	    	 padding-bottom:2rem;
	    	h3{
	    		margin-top: 0.5rem;
	    	    font-size: 1.45rem;
	    	    color: #000;
	    	}
	    	text-align: center;
	    	width: 49%;
	    	img{
	    		width: 100%;
	    	}
	    	p{
	    		color: rgba(0,0,0,.54);
	    		margin-top: 0.5rem;
	    		overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
	    		height: 2rem;
	    		line-height: 2rem;
                margin-bottom: 0.6rem;
	    	}
	    	span{
	    		color:#ea625b;
	    		margin-top: 0.5rem;
	    		font-size: 1.5rem;
	    	}
	    	.oldPrice{ 
                color: rgba(0,0,0,.54);
                text-decoration: line-through;
                margin-top: 0.5rem;

	    	}
	    	button{
	    		display: block;
	    		margin: 1rem auto;
                width: 10rem;
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
  }
  			

</style>