const { request } = require("express")
const express=require("express")
const app=express()
app.get("/",(req,res)=>{
    res.send("hello")
})
app.listen(10618)