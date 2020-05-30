const express = require("express");
const router = express.Router();

const sqlHelp = require("./sqlHelp.js");

router.post("/login",(req,res)=>{
  console.log("访问成功",req.body);
  sqlHelp.selectAll('SELECT * FROM vip',(err,result)=>{
        for(var i = 0; i < result.length;i ++){
             if(result[i].account == req.body.username && result[i].pwd == req.body.password ){
                  res.send("登录成功");
                  return;
             }

        }
        res.send("登录失败")
        
})

  
})

module.exports = router;