const express = require("express");
const {AuthController} = require("../controllers");

const authRouter = express.Router();

const {checkAuth} = require('../middleware');

module.exports = authRouter ;