var express = require('express');   //adding express module

//create application

app = express();  //calling express

//simple string response
//res.send() -->response body
//res.end()--->response ending point

app.get("/one",function (req,res){
    res.send("this is simple string response");
})

app.get("/two",function (req,res){
    res.send("this is simple string response");
})


//response status code that we can change our response status code
app.get("/three",function (req,res){
    res.status(401).end("unauth.....")
})


//JSON response
app.get("/four",function (req,res){

    let MyJSONArray = [
        {
            name: "Rabbil",
            city: "Dhaka",
            occupation:"Engr."
        },
        {
            name: "Rakib",
            city: "Dhaka",
            occupation:"Pharma"
        },
        {
            name: "Rohan",
            city: "Khulna",
            occupation:"Student."
        }
    ]
    res.json(MyJSONArray);
})


//response download
app.get("/five", function (req,res){
    res.download("./uploads/abc.jpg")
})

//redirect response
app.get("/bangladesh", function (req,res){
    res.redirect("http://localhost:8000/India");
})

app.get("/india", function (req,res){
    res.send("This is India")
})

//response header
app.get("/six", function (req,res){

    res.append("name","shorove");
    res.append("name","rohan");
    res.append("name","tajmen");

    res.status(201).end("hello world");


})

//response set cookies
app.get("/seven", function (req,res){
    res.cookie('name','shorove')
    res.cookie('city','rohan')
    res.cookie('ccc','roman')
    res.end("cookie set success")

})

//clear cookies
app.get("/eight", function (req,res){


    res.clearCookie('name','shorove')
    res.clearCookie('city','rohan')

    res.end("cookie clear success")

})







// app.put("/contact",function (req,res){
//     res.send("contact page");
// })
//
// app.delete("/terms",function (req,res){
//     res.send("terms page");
// })
//
// app.get("/",function (req,res){
//     res.send("hello express");
// })


























app.listen(8000,function (){
    console.log("Server run ")
})