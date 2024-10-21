const express = require('express');
const cors = require('cors');
const session = require('express-session');
const fileUpload = require('express-fileupload');
const usersRouter = require('./routes/indexRoutes'); // Ensure you have defined routes properly
const db = require('./config/connection'); // Database configuration
const app = express();
const port = 3000;

// Built-in middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// File upload middleware
app.use(fileUpload({createParentPath: true}));

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
  origin: '*', // Frontend URL
  credentials: true
}));

// Use your routes
app.use('/', usersRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
