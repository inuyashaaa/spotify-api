"use strict"

const mongoose = require("mongoose")
const { db: { host } } = require("../config")

const db = mongoose.connect(host, { useNewUrlParser: true }, error => {
    if (error) {
      console.log("Error " + error);
    } else {
      console.log("Connected successfully to server");
    }
  }
)

module.exports = db
