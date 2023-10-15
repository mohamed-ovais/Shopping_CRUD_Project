const errorMiddleware = (err,req,res,next)=>{
    console.log('here is an error middleware')
    const statuscode = res.statuscode ? res.statuscode : 500
    res.status(statuscode)
    res.json({message: err.message, stack:process.env.NODE_URL === "development" ? err.stack : null})
}

module.exports = errorMiddleware