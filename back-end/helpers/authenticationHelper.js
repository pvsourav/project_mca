const db = require('../config/connection')
const collection = require('../config/collection')
const bcrypt = require('bcrypt')

module.exports = {
    doSignup: (userData) => {
        return new Promise(async (resolve, reject) => {
            let user = await db.get().collection(collection.USER_COLLECTION).findOne({ email: userData.email });
            if (user) {
                resolve({ userAlreadyExist: true });
            } else {
                userData.password = await bcrypt.hash(userData.password, 10);
               
              
                userData.createdAt = new Date(); // Set current date and time
                userData.lastLogin = null; // Initialize lastLogin to null
    
                db.get().collection(collection.USER_COLLECTION).insertOne(userData).then((response) => { 
                    resolve({ userid:response.insertedId,signedupStatus:  true ,email:userData.email,userType:userData.userType});
                }).catch((err) => {
                    console.error(err);
                    reject({ signupError: true });
                });
            }
        });
    },
    
    doSignin: (userData) => {
        return new Promise(async (resolve, reject) => {
            let response = {};
            let user = await db.get().collection(collection.USER_COLLECTION).findOne({ email: userData.email });
            
            if (user) {
                // Compare the password
                bcrypt.compare(userData.password, user.password).then(async (status) => {
                    if (status) {
                        // Update lastLogin field
                        await db.get().collection(collection.USER_COLLECTION).updateOne(
                            { email: userData.email },
                            { $set: { lastLogin: new Date() } } // Set lastLogin to the current date and time
                        );
    
                        resolve({
                            status: 'success',
                            email: user.email,
                            userType: user.userType
                        });
                    } else {
                        resolve({ status: 'passwordIncorrect' });
                    }
                }).catch(err => {
                    console.error(err);
                    reject({ error: 'passwordComparisonFailed' });
                });
            } else {
                resolve({ status: 'userNotExist' });
            }
        });
    }
    
}