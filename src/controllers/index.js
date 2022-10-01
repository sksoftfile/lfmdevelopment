const config = require("../config");
const path = require("path");
const fs = require("fs");
const basename = path.basename(__filename);
const controllers = {};

fs.readdirSync(__dirname)
  .filter((file) => {
     return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const controller = require(path.join(__dirname, file))
    
     var nm = file.split('.');
      nm = nm[0];
      controllers[nm] = new controller;
      console.log(nm);
  });

module.exports = controllers;