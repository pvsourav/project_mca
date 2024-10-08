const express = require("express");
const router = express.Router();
const authenticationHelper = require("../helpers/authenticationHelper");
const alumniHelper = require("../helpers/alumniHelper");

router.get('/', (req, res) => {
  res.send("Backend Setup of Project MCA");
});

router.post('/signup', (req, res) => {
  authenticationHelper.doSignup(req.body).then((response) => {
    res.json({ response });
  });
});

router.post('/signin', (req, res) => {
  authenticationHelper.doSignin(req.body).then((response) => {
    if (response.status === 'success') {
      console.log(response.user+'hello');
      
      req.session.userEmail = response.email;
    
      res.json({ response: response});
    } else {
        res.json({ response: response.status });
    }
  }).catch((error) => {
    res.status(500).json({ error: 'Signin failed' });
  });
});

router.get('/profile', (req, res) => {
  console.log("Session in /profile:", req.session.userEmail); // Log session for debugging
  if (req.session.userEmail) {
    res.json({ signedin: true, userEmail: req.session.userEmail });
  } else {
    res.status(401).json({ signedin: false, message: "User not signed in" });
  }
});
router.get('/alumnidetails', (req, res) => {
  alumniHelper.getAlumniDetails().then((response)=>{
    res.json(response)
  })
});

module.exports = router;
