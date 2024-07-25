const express = require('express');
const app = express()
const cors = require("cors")
require("dotenv").config()
const shortUrl = require("node-url-shortener")


const port = process.env.PORT || 3000

app.use(cors())

app.get("/:url", (req,res)=>{
    const url = req.params.url
    shortUrl.short(url, function (err, url) {
        if (err){
            res.json({
                status: 500,
                developer: "hamza-saleem",
                message: "err while shortening url" 


            })
        }
        else{
            res.json({
                status: 200,
                developer: "hamza-saleem",
                url: url
            })
        }
    });
    
    
})



app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})