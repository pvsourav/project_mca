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
  secret: "your_secret_key",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, httpOnly: true }
}));

// Enable CORS for your frontend (adjust URL if needed)
const allowedOrigins = ['http://localhost:5173', 'http://192.168.29.252:5173'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Allow cookies or credentials
}));

// Use your routes
app.use('/', usersRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
