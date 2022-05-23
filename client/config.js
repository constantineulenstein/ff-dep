"use strict";

// const fs = require('fs');

const config = {
  database: {
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "dp",
    ssl: null
  },
  useEC2: false,
  useS3: false,
  aws: {
    accessKeyId: "ABCD",
    secretAccessKey: "EFGH",
    privateBucket: "private-bucket-name",
    publicBucket: "public-bucket-name",
    region: "us-west-1"
  },
  secretKey: "0123456789abcdef0123456789abcdef", // Used to sign cookies.
  deploy: false,
  heroku: {

  }
};

module.exports = config;
