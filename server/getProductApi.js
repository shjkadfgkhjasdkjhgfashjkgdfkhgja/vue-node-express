const express = require("express");
const router = express.Router();

const sqlHelp = require("./sqlHelp.js");

router.get("/getProduct",(req,res)=>{

  sqlHelp.selectAll('SELECT * FROM getCart',(err,result)=>{
    
        res.send(result);
})

  
})

module.exports = router;