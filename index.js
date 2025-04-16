const express = require('express');
const app = express();
const PORT = 3000;

//Application-Level Middleware
app.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  next(); // Pass control to the next middleware or route
});

//Route 1 - Home
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

//Route 2 - About
app.get('/about', (req, res) => {
  res.send('This is the About Page.');
});

//Route 3 - Contact
app.get('/contact', (req, res) => {
  res.send('Contact Page');
});

//Route 4 - Error Route (intentionally throws an error)
app.get('/error', (req, res, next) => {
    const err = new Error('Something broke in /error route!');
    next(err); // Passes the error to the error handler
});

//Error Handling Middleware 
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).send('Something went wrong!');
});

//Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//thappa