const express = require("express");

const app = express();

const dotenv = require('dotenv');
const product = require('./routes/productRoute.js');

// Load environment variables
dotenv.config({ path: 'backend/config/.env' });

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));





//ROUTE IMPORT


// app.use(express.json());

app.use('/api/v1',product);

module.exports = app;
