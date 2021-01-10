//Requirement module
var MongoClient = require('mongodb').MongoClient;

//URL for mongodb connection(local DB or online cluster url)
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { age: 345 };
  var newvalues = { $set: {name: "Jiraya", age: "66" } };
  dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});