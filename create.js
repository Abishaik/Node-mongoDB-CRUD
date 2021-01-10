//Requirement module
var MongoClient = require('mongodb').MongoClient;

//URL for mongodb connection(local DB or online cluster url)
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");

    //creating object
    var myobj = { name: "Abishaik", age: 25 };

    //query
    dbo.collection("customers").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });