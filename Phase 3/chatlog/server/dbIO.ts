declare var require:any;
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://ILP:TATA@cluster0.tzyke.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const collection = "messages";

export function logMessage(recipient, message){
    let data = {
        recipient:recipient,
        message:message
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