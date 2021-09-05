const fs = require('fs');
const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://ILP:TATA@cluster0.tzyke.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const logPath = "./call_data.json";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let data = JSON.parse(fs.readFileSync(logPath, "utf-8"));

client.connect(err => {
  const dbo = client.db("test");
  dbo.createCollection("calls", (err,res) => {
    dbo.collection("calls").insertMany(data, (err,res) => {
        console.log("Calls inserted: "+res.insertedCount);
        client.close();
    });
  });
});