//Requirement module
var MongoClient = require('mongodb').MongoClient;

//URL for mongodb connection(local DB or online cluster url)
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");

  //Creating object with multiple data
  var myobj = [
    { name: 'John', age: 71},
    { name: 'Akash', age: 4},
    { name: 'Kirubha', age: 6},
    { name: 'Selva', age: 21},
    { name: 'Siva', age: 345},
    { name: 'Shaik', age: 2},
    { name: 'Betty', age: 1},
    { name: 'Kakashi', age: 31},
    { name: 'Sakura', age: 98},
    { name: 'Vicky', age: 20},
    { name: 'Naruto Uzumaki', age: 38},
    { name: 'William', age: 9},
    { name: 'Krishnan', age: 9},
    { name: 'Raman', age: 16}
  ];

  //query
  dbo.collection("customers").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});