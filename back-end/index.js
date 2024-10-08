const express = require('express');
const cors = require('cors');
const session = require('express-session');
const usersRouter = require('./routes/indexRoutes'); // Ensure you have defined routes properly
const db = require('./config/connection'); // Database configuration

const app = express();
const port = 3000;

// Database connection
db.connect((err) => {
  if (err) {
    console.error('Connection Error:', err);
  } else {
    console.log('Connection Successful');
  }
});

// Session configuration
app.use(session({
  secret: 'your-secret-key', // Replace with a unique key in production
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // Use secure: true in production with HTTPS
}));

// Enable CORS for your frontend (adjust URL if needed)
app.use(cors({
  origin: 'http://localhost:5173', // Frontend URL
  credentials: true
}));

// Body-parser for parsing request bodies
app.use(express.json()); // Using express built-in JSON parser

// Use your routes
app.use('/', usersRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
