const mysql = require('mysql')

const connectdb=()=>{
  let connection = mysql.createConnection({
    host     : 'localhost',      

    user     : 'root',             
  
    password : '123456',      
  
    port: '3306',                  
  
    database: 'test',
  })
  return connection;
}

module.exports=connectdb;
