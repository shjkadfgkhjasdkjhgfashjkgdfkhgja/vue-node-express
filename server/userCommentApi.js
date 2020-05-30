const express = require("express");
const router = express.Router();

const sqlHelp = require("./sqlHelp.js");

router.get("/userComment",(req,res)=>{

  sqlHelp.selectAll('SELECT * FROM userComment',(err,result)=>{
    
        res.send(result);
})

  
})

module.exports = router;