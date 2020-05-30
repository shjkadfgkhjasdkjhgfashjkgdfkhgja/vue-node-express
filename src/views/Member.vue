<template>
    <div class="memberComponent">
    		 <div class="title"><h4>会员登录</h4></div>
    	<div class="loginContent" v-if="!isLogin">
    		<div class="header">
         	<van-notice-bar
			  color="#1989fa"
			  background="#ecf9ff"
			  left-icon="info-o"
			  :scrollable="false"
			>
             好消息！好消息！登录会员享受八折优惠！
			</van-notice-bar>
			         </div>

          <div class="logo">
          	<van-icon name="manager" />
          </div>
          <div class="loginContent"> 
          
				  <van-field
				    v-model="username"
			
			
				    label="账号:"
				   
				    placeholder="请输入用户名"
				  
				  />
               <br>
				  <van-field

				    v-model="password"
				    type="password"
				    label="密码:"
				    placeholder="请输入密码"
				  
				  />
				
			
          </div>
          <div class="login" @click="login">
         
          		 	<van-button type="default">登录</van-button>
          
       
           </div>
    	</div>
         <div class="hasLogin" v-else>
         	<van-divider class="hasLogin">	你已成功登录会员,请去购买商品</van-divider>
        
         </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { NoticeBar,Icon ,Field, Button, Divider ,Dialog } from 'vant';


Vue.use(Divider).use(Icon).use(NoticeBar).use(Field).use(Button).use(Divider);

export default({
	data(){
		return{
			username:'',
			password:'',
			isLogin:false
		}
	},
	methods:{
		login(){
			if(!this.username || !this.password ){
				Dialog({ message: '请输入账号和密码' });
				return;
			}
			console.log(this.username,this.password);
               this.$axios.post(this.$store.state.nowAddress + '/user/login',{
				   username: this.username,
                   password: this.password
			   })
                  .then( (response)=>{
                
           
                         if(response.data == "登录成功"){
	
						    document.cookie="true";
							 this.isLogin = true;
											 
						 }else{
							    Dialog({ message: '账号或密码错误' });
						 }
						

                  })
                  .catch(function (error) {
                    
                  });
			// let key = false;
			// this.$store.state.MerberList.forEach((item) =>{
            //      if(item.username == this.username && item.password == this.password){
	        //          	key = true;
	        //          	return;
            //      }
			// })

			// if(key){

			// 	   this.$store.state.isMerber = true;
			// }else{
			// 		Dialog({ message: '请输入正确账号和密码' });
			// }
         
		},
	    ClearCookie(){
			 document.cookie = "";
		

		}
	},
	created(){
    //    this.ClearCookie();
	   this.isLogin = document.cookie;
	}
	// computed:{
	// 	IsLogin(){
	// 		return this.$store.state.isMerber;
	// 	}
	// }
})
</script>  
<style lang="less" scoped>
	.memberComponent{
	   padding-top:5rem;
	   padding-bottom:5.5rem;
	     .hasLogin{
	   	    margin: 2rem;
  			text-align: center;
  			color: #999;
  			font-size: 1.8rem;
	   }
	   .title{
    	padding-top:1rem;
    	font-size: 2rem;
    	text-align: center;
       
        margin-bottom: 2rem;
       }
	  
	   	
	   .logo{
	   	 width: 100%;
	   	  margin-top: 4rem;
	   	 text-align: center;
	   	 font-size: 3rem;
	   }
	   .loginContent{
	   	margin-top: 2rem;
	   	font-size: 2rem;
	   	/deep/.van-cell{
	   		/deep/.van-cell__title{
	   			font-size: 1.8rem;
                text-align: right;
                padding-right:1rem;
	   			/deep/ span{
	   			 line-height: 4rem;
	   			}
	   			
	   		}
	   		/deep/.van-cell__value{
	   			/deep/ .van-field__body{
	   				input{
	   					width:20rem;
	   					height: 4rem;
	   					border: 1px solid #999;
	   					padding:1rem;
	   					border-radius: 2rem;
	   				}

	   			}
	   		}
	   	}
	   	/deep/ .van-cell::after{
	   					border:none;
	   				}
	   }
	   .login{
	      	margin: 4rem;
	     	text-align: center;
	     	/deep/.van-button{
	     		   	border:1px solid #999;
	     		   	border-radius:1.5rem;
                    height: 3rem;
                    line-height: 3rem;
	     	}
	   }
	  
	
  }
</style>