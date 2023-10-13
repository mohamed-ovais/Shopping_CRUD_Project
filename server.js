const express = require('express');
const app = express();

app.get('/',(req,res)=>{
   res.send("Hello Node API")
})


app.listen(5000,()=>{
    console.log("port running 5000")
})