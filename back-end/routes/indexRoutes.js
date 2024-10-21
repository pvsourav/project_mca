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
      req.session.userEmail = response.email;
    
      res.json({ response: response});
    } else {
        res.json({ response: response.status });
    }

  });
});

router.get('/profile', (req, res) => {
  
  if (req.session.userEmail) {
    res.json({ signedin: true, userEmail: req.session.userEmail });
  } 
});
router.get('/alumnidetails', (req, res) => {
  alumniHelper.getAlumniDetails().then((response)=>{
    res.json(response)
  })
});

module.exports = router;
