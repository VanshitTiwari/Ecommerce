const express = require("express");

const app = express();

const errorMiddleware = require("./middleware/error");

const dotenv = require('dotenv');
const product = require('./routes/productRoute.js');

// Load environment variables
dotenv.config({ path: 'backend/config/.env' });

// Middleware for errors

app.use(errorMiddleware);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));





//ROUTE IMPORT


// app.use(express.json());

app.use('/api/v1',product);


//middleware for errors

module.exports = app;
