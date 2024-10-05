const express = require('express');
const router = express.Router();
const authenticationHelper = require('../helpers/authenticationHelper');


router.get('/', (req, res) => {
    res.send('Hi From Backend');
});

router.post('/signup', (req, res) => {
    
    
    authenticationHelper.doSignup(req.body).then((response)=>{
     
        res.json({response})
        
      })

});
router.post('/Signin', (req, res) => {
    
    
    authenticationHelper.doSignin(req.body).then((response)=>{
     
        res.json({response})
        
      })

});

module.exports = router;

