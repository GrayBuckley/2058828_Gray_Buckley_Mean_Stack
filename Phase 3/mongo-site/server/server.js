const { MongoClient } = require('mongodb');
const http = require('http');
var url = require("url");
const uri = "mongodb+srv://ILP:TATA@cluster0.tzyke.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const collection = "courses";

function createCourse(id,name,description,amount){
    let data = {
        _id:id,
        name:name,
        description:description,
        amount:amount
    }
    client.connect(err => {
        const dbo = client.db("test");
        dbo.createCollection(collection, (err,res) => {
            dbo.collection(collection).insertOne(data, (err,res) => {
                client.close();
            });
        });
    });
}

function changeCourse(id,amount){
    let filter = {_id:id};
    let update = {$set: {amount:amount}};
    client.connect(err => {
        const dbo = client.db("test");
        dbo.createCollection(collection, (err,res) => {
            dbo.collection(collection).updateOne(filter, update, (err,res) => {
                client.close();
            });
        });
    });
}

function deleteCourse(id){
    let filter = {_id:id};
    client.connect(err => {
        const dbo = client.db("test");
        dbo.createCollection(collection, (err,res) => {
            dbo.collection(collection).deleteOne(filter, (err,res) => {
                client.close();
            });
        });
    });
}

function fetchCourses(result){
    let courses = [];
    client.connect(err => {
        const dbo = client.db("test");
        dbo.createCollection(collection, (err,res) => {
            dbo.collection(collection).find().forEach(doc => {
                courses.push(doc);
            }).then(() => {
                result.write(JSON.stringify(courses));
                result.end();
            });
        });
    });
}

http.createServer((req,res) => {
    res.writeHead(200, { 'Access-Control-Allow-Origin': '*' });
    var urlObj = url.parse(req.url, true);
    var queryObject = urlObj.query;
    if(urlObj.pathname == "/fetch"){
        fetchCourses(res);
    }
    else {
        if(urlObj.pathname == "/create")
            createCourse(queryObject.id, queryObject.name, queryObject.description, queryObject.amount);
        if(urlObj.pathname == "/change")
            changeCourse(queryObject.id, queryObject.amount);
        if(urlObj.pathname == "/delete")
            deleteCourse(queryObject.id);
        res.end();
    }
}).listen(8080);
