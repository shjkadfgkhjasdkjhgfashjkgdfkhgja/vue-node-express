const express = require("express");
const router = express.Router();

const sqlHelp = require("./sqlHelp.js");

router.get("/productList",(req,res)=>{

  sqlHelp.selectAll('SELECT * FROM productList',(err,result)=>{
    
        res.send(result);
})

  
})

module.exports = router;