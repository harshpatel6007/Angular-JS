var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/myApp';

var connection;

var openConnection = function () {
  console.log("open connection");
  MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server.");
    connection = db;
    console.log("connection  " + connection);
  });
};

var getConnection = function () {
  console.log("get connection " + connection);
  if (connection == null) {
    openConnection();
  } 
  return connection;
};

var closeConnection = function () {
  console.log("close connection");
  if (connection != null) {
    connection.close();
  }
}

//open connection on initialize
openConnection();

module.exports.openConnection = openConnection;
module.exports.closeConnection = closeConnection;
module.exports.getConnection = getConnection;