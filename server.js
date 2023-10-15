require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');

const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT || 3000
const FRONTEND = process.env.FRONTEND

var corsOptions = {
    origin: FRONTEND,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(cors(corsOptions))
app.use(express.json())

app.get('/',(req,res)=>{
    //throw new Error('fske error')
   res.send("Hello Node API")
})

app.use('/api',productRoutes)

app.use(errorMiddleware);

mongoose.connect(MONGO_URL)
.then(()=>{
    console.log("connected to mongodb");
    app.listen(PORT,()=>{
        console.log(`port running ${PORT}`)
    })
}).catch((error)=>{
    console.log(error)
})