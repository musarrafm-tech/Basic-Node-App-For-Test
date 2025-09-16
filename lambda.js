const express = require('express');
const path = require('path');
const serverless = require('serverless-http');

const app = express();

// ✅ Serve static files from /public (or whatever folder you want)
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Your routes
app.get('/', (req, res) => {
  res.send('Hello from the root route!');
});

// ✅ Export the handler for AWS Lambda
module.exports.handler = serverless(app);
