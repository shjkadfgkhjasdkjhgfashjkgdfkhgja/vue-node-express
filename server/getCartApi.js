const express = require("express");
const router = express.Router();

const sqlHelp = require("./sqlHelp.js");
var bodyParser = require('body-parser');  
// parse application/x-www-form-urlencoded  
// var app = express();  
// app.use(bodyParser.urlencoded({ extended: false }))  
// // parse application/json  
// app.use(bodyParser.json()) 

router.post("/getCart",(req,res)=>{


  console.log("getCart数据访问成功");
  console.log(req.body);
      var str="";
      var obj = "";
      var key = false;
      var sendArr = [];
     req.on("data",function(dt){
         str+=dt
         console.log(str);
     })
     req.on("end",function(){
       console.log(str);
       obj = JSON.parse(str)
       sendArr =JSON.parse(obj.arr);
       for(var i = 0; i < sendArr.length;i++){      

                  sqlHelp.insertData("getcart",{"productId":sendArr[i].id,"productNum": sendArr[i].count},(err,result)=>{
                                  if(err){
                                      console.log(err);
                                    }else{
                                      if(result.affectedRows > 0){
                                          key = true;
                                     
                                      }
                                    
                                    }
                          })
  

}
                        if(key){
                          res.send({state:"ok"});
                        }else{
                          res.send({state:"err"});
                        }
                        
     })
 
  


                     
             
   
  

})

module.exports = router;