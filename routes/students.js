var express = require("express");
var router = express.Router();
const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://api-university:DmAncx0QFSf5ZRkG@cluster0.mp2zv.mongodb.net/api-university?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const databaseName = "api-university"; 
const collectionName = "students";

router.get("/", async(req, res, next) => {

  // 1. Get the list of all students from the MongoDB collection. 

  // 2. Put the results into an array w/ the object format { name : "student_name" }

  // 3. Pass the array of results to the render method to produce the expected result. 
  res.render("students", {
    results: results
  });
});

module.exports = router;
