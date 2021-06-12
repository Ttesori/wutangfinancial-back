const express = require('express');
const app = express();
const connectDB = require('./config/db');

// Connect to DB
connectDB();

// Start the server
app.listen(process.env['PORT'], () => {
  console.log('Diversifying your bonds...');
});