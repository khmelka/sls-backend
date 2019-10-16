'use strict';
const AWS = require("aws-sdk");
const db = new AWS.DymanoDB.DocumentClient({ apiVersion: "2012-08-10"});

module.exports.run = async (event, context, callback) => {
  return{
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello World"
    })
  }
}
