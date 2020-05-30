const express = require("express");
const app = express();
const productList = require("./ProductApi.js");
const userComment = require("./userCommentApi.js");
const userCommentAdd = require("./commentAddApi.js");
const getCart = require("./getCartApi.js");
const getProduct = require("./getProductApi.js");
const register = require("./vipApi.js");
const login = require("./loginApi.js");

const bodyParser = require('body-parser');
app.use(bodyParser.json());//数据JSON类型
app.use(bodyParser.urlencoded({ extended: false }));//解析post请求数据

app.all("*",function(req,res,next){
var bodyParser = require('body-parser');//解析,用req.body获取post参数
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin","*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers","content-type");
  //跨域允许的请求方式 
  res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
  if (req.method.toLowerCase() == 'options')
      res.send(200);  //让options尝试请求快速结束
  else
      next();
})



app.use("/shopping",productList)
app.use("/shopping",getCart)
app.use("/shopping",getProduct)
app.use("/user",userComment)
app.use("/user",userCommentAdd)
app.use("/user",register)
app.use("/user",login)



app.listen(5000,()=>{
     console.log("ok");
})



