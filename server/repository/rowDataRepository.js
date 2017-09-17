const mongo = require("../mongo/mongoConnector.js");

var getDataWithLimit = function (numberOfRecords, callback) {
    console.log("getDataWithLimit called");
    const db = mongo.getConnection();
    console.log("get data form server, size : " + numberOfRecords + " connection : " + db);    
    var result = {};
    db.collection("row_data").find().limit(numberOfRecords).toArray(function (err, docs) {
        result.message = "Row data received successfully";
        result.data = docs;
        result.type = "success";
        result.code = "600";
        // result.message = "No data found for your search query";
        // result.data = [];
        // result.type = "error";
        // result.code = "700";
        callback(result);
    });
};

module.exports.getDataWithLimit = getDataWithLimit;