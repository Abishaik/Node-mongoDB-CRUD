//Requirements
var MongoClient = require('mongodb').MongoClient;

//URL for mongodb connection(local DB or online cluster url)
var url = "mongodb://localhost:27017/mydb";

//Connection to DB if exists or create new db
MongoClient.connect(url, function(err, db) {
  if (err) throw err;

  //Message for our confirmation
  console.log("Database created!");
  db.close();
});

// no db created until there we have some data!
// See in this order

//CRUD-Create , Read , Update , Delete

// 1.create.js
// 2.createMany.js
// 3.read.js
// 4.readByAge
// 5.update.js
// 6.delete.js
