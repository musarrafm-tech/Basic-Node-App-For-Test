// need simple node server to serve static files
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;



app.get('/', (req, res) => {
  res.send('Hello from the root route!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 