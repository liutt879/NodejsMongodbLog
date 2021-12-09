const { request } = require("express")
const express=require("express")
const app=express()
app.get("/",(req,res)=>{
    res.send("hello world")
})
app.listen(10618)