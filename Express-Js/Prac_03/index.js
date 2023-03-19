var express = require('express');
var app = express();


//this middle ware used for application layer
// app.use(function (req,res,next){
//     console.log("i am application level middle ware");
//     next();
//
// })

app.get('/',function (req,res){
    res.send("this is home page");
})

app.get('/contact',function (req,res){
    res.send("this is contact page");
})


//this middle ware used for route level middle ware
app.use('/about',function (req,res,next){
    console.log("i am about middle ware");
    next();
})

app.get('/about',function (req,res){
    res.send("this is about page");
})


app.listen(5000)