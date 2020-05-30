const express = require("express");
const router = express.Router();

const sqlHelp = require("./sqlHelp.js");
 
// parse application/x-www-form-urlencoded  
var app = express();  


router.post("/register",(req,res)=>{

      
   


    sqlHelp.selectAll('SELECT * FROM vip',(err,result)=>{
     
        if(result.length > 0){

            for(var i = 0; i < result.length; i++){
                console.log(result[i])
                if(result[i].account == req.body.account){
        
                     res.send("账户已注册")
                     return;
                } 
              
            }
        }
        
})
  
  sqlHelp.insertData("vip",{"account":req.body.account,"pwd":req.body.pwd},(err,result)=>{
         if(err){
           console.log(err);
         }else{
           if(result.affectedRows > 0){
                 res.send("注册成功")
           }
         
         }
     
})
  
  
})

module.exports = router;