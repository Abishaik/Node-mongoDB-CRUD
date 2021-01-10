//Requirement module
var MongoClient = require('mongodb').MongoClient;

//URL for mongodb connection(local DB or online cluster url)
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  //data with age 93 will be deleted after this code executed
  var myquery = { age: 98 };

  //query
  dbo.collection("customers").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});

//The End ....................... 