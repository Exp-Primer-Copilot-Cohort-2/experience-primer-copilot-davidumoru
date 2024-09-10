// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Importing the comments module
const comments = require('./comments');

// Use the comments module
app.use('/comments', comments);

// Start the server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});