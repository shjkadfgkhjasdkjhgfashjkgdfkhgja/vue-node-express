const express = require("express");
const router = express.Router();

const sqlHelp = require("./sqlHelp.js");

router.get("/userCommentAdd",(req,res)=>{


  sqlHelp.insertData("userComment",{"sendTime":req.query.sendTime,"content":req.query.sendContent},(err,result)=>{
         if(err){
           console.log(err);
         }else{
           if(result.affectedRows > 0){
              res.send({state:"ok","sendTime":req.query.sendTime,"content":req.query.sendContent});
           }
         
         }
     
})
  
  
})

module.exports = router;