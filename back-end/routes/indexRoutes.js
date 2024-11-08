const express = require("express");
const router = express.Router();
const authenticationHelper = require("../helpers/authenticationHelper");
const alumniHelper = require("../helpers/alumniHelper");

const Mdata = {};

router.get("/", (req, res) => {
  res.send("Backend Setup of Project MCA");
});

router.post("/signup", (req, res) => {
  authenticationHelper.doSignup(req.body).then((response) => {
    if (response.signedupStatus) {
      req.session.signedin = true;
      req.session.userId = response.userid;
      req.session.userEmail = response.email;
      console.log("Session created: " + req.session.userId);
    }
    res.json({ response });
  });
});

router.post("/signin", (req, res) => {
  console.log(req.body);
  authenticationHelper.doSignin(req.body).then((response) => {
    if (response.status === "success") {
      req.session.signedin = true;
      req.session.userEmail = response.email;
      req.session.userId = response.userId;
      Mdata.signedin = true;
      Mdata.userEmail = response.email;
      Mdata.userId = response.userId;
      console.log("Session Created at SignIn " + req.session.signedin);
      res.json({ response: response });
    } else {
      res.json({ response: response.status });
    }
  });
});

router.get("/signout", (req, res) => {
  req.session.signedin = null;
  req.session.userId = null;
  req.session.userEmail = null;
  res.json({ message: "signedOutSuccessfully" });
});

router.get("/profile", (req, res) => {
  if (Mdata.signedin) {
    alumniHelper.getAlumniProfile(Mdata.userEmail).then((response) => {
      res.json(response);
    });
  } else {
    res.json({ err: "Not Created Session" });
  }
});

router.get("/alumnidetails", (req, res) => {
  alumniHelper.getAlumniDetails().then((response) => {
    res.json(response);
  });
});

router.post("/alumnicompleteprofile", function (req, res) {
  console.log(req.body);
  console.log(req.files);
  req.body.userId = req.session.userId;

  alumniHelper.alumnicompleteprofile(req.body).then((id) => {
    if (req.files && req.files.image) {
      let image = req.files.image;
      let imagePath = `./storage/alumni/profilepictures/${id}.jpg`;

      image.mv(imagePath, (err) => {
        if (err) {
          console.log("Image upload failed" )
          return res.status(500).json({ error: "Image upload failed" });
        }
        console.log("Profile completed successfully" )
        res.json({ message: "Profile completed successfully" });
      });
    } else {
      res.status(400).json({ error: "No image uploaded" });
    }
  });
}); 

router.post("/addmeetup", (req, res) => {
  console.log('====================================');
  console.log(req.body);
  console.log('====================================');
  alumniHelper.addMeetUp(req.body)
    .then((response) => {
      res.json({ success: true, data: response });
    })
    .catch((error) => {
      console.error("Error adding meetup:", error);
      res.status(500).json({ success: false, message: "Failed to add meetup" });
    });
});
router.get("/meetupdetails", (req, res) => {
  alumniHelper.getMeetUpDetails().then((response) => {
    res.json(response);
  });
});
router.post("/updateMeetup", async (req, res) => {
  alumniHelper.updateMeetUp(req.body)
    .then((response) => {
      res.json({ success: true, data: response });
    })
    .catch((error) => {
      console.error("Error Updating meetup:", error);
      res.status(500).json({ success: false, message: "Failed to add meetup" });
    });

  
});

router.post("/sendmessage", (req, res) => {
  alumniHelper.sendMessage(req.body).then((response) => {
    res.json(response);
  });
});
router.get("/getmessages", (req, res) => {
  alumniHelper.getMessage(req.body).then((response) => {
    res.json(response);
  });
});

module.exports = router;
