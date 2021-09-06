const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://ILP:TATA@cluster0.tzyke.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const collection = "courses";

function createCourse(id,name,description,amount){
    let data = {
        id:id,
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
    let filter = {id:id};
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
    let filter = {id:id};
    client.connect(err => {
        const dbo = client.db("test");
        dbo.createCollection(collection, (err,res) => {
            dbo.collection(collection).deleteOne(filter, (err,res) => {
                client.close();
            });
        });
    });
}