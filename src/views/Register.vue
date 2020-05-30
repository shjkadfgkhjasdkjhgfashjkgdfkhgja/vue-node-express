<template>
	<div class="register">
			 <div class="title"><h4>会员注册</h4></div>
			  <div class="loginContent"> 
          
				  <van-field
				    v-model="username"
			
			
				    label="账号:"
				    @blur="checkUsername(username)"
				    placeholder="请输入用户名"
				  
				  />
				  <div class="hint" v-if="usernameHint">
				  账号必须是英文字母数字6-12位</div>
               <br>
                <van-field
				    v-model="phone"
			
			
				    label="手机:"
				       @blur="checkPhone(phone)"
				    placeholder="请输入手机号"
				  
				  />
				  <div class="hint" v-if="phoneHint">手机号必须是数字11位</div>
               <br>
                  <van-field
				    v-model="email"
			
			
				    label="邮箱:"
				     @blur="checkEmail(email)"
				    placeholder="请输入邮箱"
				  
				  />
				  <div class="hint" v-if="emailHint">邮箱格式为***@***.com</div>
               <br>
				  <van-field

				    v-model="password"
				    type="password"
				    label="密码:"
				    placeholder="请输入密码"
				    @blur="checkPassword(password)"
				  />
				    <div class="hint" v-if="passwordHint">密码必须是数字8-12位</div>
					   <br>

					  <van-field

				    v-model="repassword"
				    type="password"
				    label="确认密码:"
				    placeholder="请再次输入密码"
				    @blur="checkRepassword()"
				  />
				    <div class="hint" v-if="repasswordHint">密码必须跟上次输入一致</div>
				 <div class="login">
	         
	          		 	<van-button type="default" @click="Rejster">注册</van-button>
	          
	           
	           </div>
          </div>
	</div>
</template>
<script>
import Vue from 'vue';
import { Field,Button,Dialog } from 'vant';
Vue.use(Field).use(Button);
	export default({
        data(){
        	return {
        		username:'',
        		phone:'',
        		email:'',
        		password:'',
        		repassword:'',
        		usernameHint:false,
        		phoneHint:false,
        		emailHint:false,
                passwordHint:false,
                repasswordHint:false
        	}
        },
        computed:{
        	computedUsername(){
        	   
        	}
        },
        methods:{
        	checkUsername(val){

        		let reg = /^(\d|\w){6,12}$/g;
        	     this.usernameHint =  !reg.test(val);
        	    
        	},
        	checkPhone(val){
        		let reg = /^\d{11}$/g
                this.phoneHint =  !reg.test(val);
        	},
        	checkEmail(val){
               let reg = /^(\d|\w){1,10}@(\d|\w){1,5}\.com$/g;
               this.emailHint = !reg.test(val);
        	},
        	checkPassword(val){
        		let reg = /^(\d){8,12}$/g;
        		this.passwordHint = !reg.test(val);
        	},
        	checkRepassword(val){
        		this.repasswordHint = this.passwordHint == this.repasswordHint;
        	},
        	Rejster(){
                // if(this.usernameHint || this.phoneHint || this.emailHint || this.passwordHint || this.repasswordHint  )
                // {
                // 	Dialog({ message: '请正确填入以上信息' });
                // 	return;
                // }
                // if(!this.username || !this.phone || !this.email || !this.password || !this.repassword)
                // {
                //    Dialog({ message: '未全部填入以上信息' });
                //     return;
                // }
                
                // let key = true;
                // this.$store.state.MerberList.forEach(item =>{
                // 	console.log(item.username ,this.username)
                // 	if(item.username == this.username){
                //             key = false;
                // 		    Dialog({ message: '当前账号已注册，请重新输入' });
                // 		    return;
                // 	}
                // })
                //   if(!key){
                //       return;
                //   }
                // Dialog({ message: '您已成功注册' });
				// this.$store.state.MerberList.push({username:this.username,password:this.password})
				
this.$axios({
  url: this.$store.state.nowAddress + '/user/register',
  method: 'post',
  data: {
    account: this.username,
    pwd: this.password
  },
  transformRequest: [function (data) {
    // Do whatever you want to transform the data
    let ret = ''
    for (let it in data) {
      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    return ret
  }],
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
.then((data)=>{
    if(data.data == "账户已注册"){
		Dialog({ message: '账户已注册,请重新输入账号' });
	
	}else{
		Dialog({ message: '您已成功注册' });
	};
})

        		this.username = '';
        		this.phone = '';
        		this.email = '';
        		this.password = '';
        		this.repassword = '';
        	   
        	}
        }
	})
</script>
<style lang="less" scoped>
	.register{
		padding-top: 5rem;
		padding-bottom:5.5rem;
        .title{
    	padding-top:1rem;
    	font-size: 2rem;
    	text-align: center;
       
        margin-bottom: 2rem;
       }
        .loginContent{
	   	margin-top: 2rem;
	   	font-size: 2rem;
	   	.hint{
	   		width: 65%;
	   		text-align: right;
	   		color: red;
	   		font-size: 1.5rem;
	   		margin: 0 auto;
	   	}
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