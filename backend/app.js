const express = require("express");

const app = express();

//ROUTE IMPORT

const product = require('./routes/productRoute.js');

// app.use(express.json());

app.use('/api/v1',product);

module.exports = app;
