const express = require("express");
const router = express.Router();
const authenticationHelper = require("../helpers/authenticationHelper");
const alumniHelper = require("../helpers/alumniHelper");


router.get("/", (req, res) => {
  res.send("Backend Setup of Project MCA");
});

router.post("/signup", (req, res) => {
  authenticationHelper.doSignup(req.body).then((response) => {
    if (response.signedupStatus) {
      req.session.signedin=true
      req.session.userId = response.userid;
      req.session.userEmail = response.email;
      console.log("Session created: " + req.session.userId);
    }
    res.json({ response });
  });
});

router.post("/signin", (req, res) => {
  authenticationHelper.doSignin(req.body).then((response) => {
    if (response.status === "success") {
      req.session.signedin=true
      req.session.userEmail = response.email;
      res.json({ response: response });
    } else {
      res.json({ response: response.status });
    }
  });
});
router.get("/signout",(req,res)=>{
  req.session.signedin=null
  req.session.userId=null
  req.session.userEmail=null
  res.json({message:'signedOutSuccessfully'})
})


router.get("/profile", (req, res) => {
  if (req.session.signedin) {
    res.json({ signedin: true, userEmail: req.session.userEmail });
  } else {
    res.status(401).json({ signedin: false, message: "User not signed in" });
  }
});

router.get("/alumnidetails", (req, res) => {
  alumniHelper.getAlumniDetails().then((response) => {
    res.json(response);
  });
});

router.post('/alumnicompleteprofile', function (req, res) {
  console.log(req.body);  // This should log form fields
  console.log(req.files); // This should log uploaded files

  // Ensure userId is added to the request body
  // req.body.userId = req.session.userId;

  // // Complete profile and save data to the database
  // alumniHelper.alumnicompleteprofile(req.body, (id) => {
  //   if (req.files && req.files.image) {
  //     let image = req.files.image;
  //     let imagePath = `./storage/alumni/profilepictures/${id}.jpg`;

  //     // Save the image to the specified path
  //     image.mv(imagePath, (err) => {
  //       if (err) {
  //         return res.status(500).json({ error: 'Image upload failed' });
  //       }
  //       res.json({ message: 'Profile completed successfully' });
  //     });
  //   } else {
  //     res.status(400).json({ error: 'No image uploaded' });
  //   }
  // });
});

module.exports = router;
