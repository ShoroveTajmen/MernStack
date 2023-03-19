var express = require('express');
// var bodyParser = require('body-parser');
var multer = require('multer');
const e = require("express");  //multer import

// var multer = multer();  //create multer instance

var app = express();
//for parsing multipart/form-data
// app.use(multer.array());
// app.use(express.static('public'));
// app.use(bodyParser.json());


// app.post('/',function (req,res){
//
//     //get request with url query
//     // let firstName = req.query.firstName;
//     // let lastName = req.query.lastName;
//     // res.end(firstName + " " + lastName);
//
//     //get request header
//     // let firstName = req.header('firstName');
//     // let lastName =  req.header('lastName');
//     // res.send(firstName + " " + lastName);
//
//
//     //simple post request
//     // res.send("this is a simple post request");
//
//     //post request with URL query
//     // let firstName = req.query.firstName;
//     // let lastName = req.query.lastName;
//     // res.end(firstName + " " + lastName);
//
//
//     //post request header
//     // let username = req.header('username');
//     // let password =  req.header('password');
//     // res.send("username: " +username +" password: " +password);
//
//     //post application json
//     // let JSONData = req.body;
//     // let JSONString = JSON.stringify(JSONData);
//     // res.send(JSONString);
//
//     // let name = JSONData['name']
//     // let city = JSONData['city']
//     // res.send(name+ " "+city);
//
//
//     //handling multipart data
//     // let JSONData = req.body;
//     // res.send(JSON.stringify(JSONData))
//
//
// });



//for file upload
var storage = multer.diskStorage({
    destination:function (req,file,callBack){
        callBack(null,'./uploads')
    },
    filename:function (req,file,callBack){
        callBack(null,file.originalname)
    }
})

var upload = multer({storage:storage}).single('myfile')

app.post('/',function (req,res){
    upload(req,res,function (error){
        if(error){
            res.send("file upload fail")
        }
        else {
            res.send("file upload success")
        }
    });
});


app.listen(8000, function (){
    console.log("server run success");
})