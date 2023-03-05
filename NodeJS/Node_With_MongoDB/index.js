var MongoClient = require('mongodb').MongoClient;

//for cluster connection with our application need URL which we found in our cluster

var URL = "mongodb+srv://root:root@cluster0.es62grd.mongodb.net/?retryWrites=true&w=majority";

var config = {useUnifiedTopology: true};


MongoClient.connect(URL,config,function (error,MyMongoClient){
    if(error){
        console.log("connection fail");
    }
    else {
        console.log("connection success");
    }
});


function InsertData(MyMongoClient){
    var MyDatabase = MyMongoClient.db("school");
    var MyCollection = MyDatabase.collection('students');

    var MyData = {name:"Shorove",Roll:"01",Class:"Ten",city:"Dhaka"};

    MyCollection.insertOne(MyData,function (error){
        if(error){
            console.log("data insert fail");
        }
        else {
            console.log("data insert success");
        }
    })

}