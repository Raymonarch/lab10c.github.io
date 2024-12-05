const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to parse incoming form data
app.use(express.urlencoded({ extended: true }));

// Serve static HTML files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Form submission route
app.post('/submit', (req, res) => {
  const userName = req.body.name;
  res.send(`<h1>Thank you for your submission, ${userName}!</h1>`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
