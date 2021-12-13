const express=require("express")
const app=express()
const mongoose = require('mongoose');
mongoose.connect('mongodb://172.21.2.236:27017/190110910618');
const schema={
    name:String,
    age:Number,
    health:String,
    hooby:String
}
const mydata = mongoose.model('cat1s', schema);
// const kitty = new mydata({ name: 'testZildjian' });
// kitty.save()

app.use('/',express.static('public'))
app.get("/input",(req,res)=>{
    res.send(req.query)
    console.log(req.query)
    //const kitty = new mydata({ name: req.query.first,health:req.query.second });
    const kitty = new mydata({ name:'aaaa'});
    kitty.save()
 })
app.listen(10618)