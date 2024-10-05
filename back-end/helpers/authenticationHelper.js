const db = require('../config/connection')
const collection = require('../config/collection')
const bcrypt = require('bcrypt')

module.exports = {
    doSignup: (userData) => {
        return new Promise(async (resolve, reject) => {
            let user = await db.get().collection(collection.USER_COLLECTION).findOne({ email: userData.email })
            if(user){
                resolve({ userAlreadyExist:true })
               
            }
            else {
                userData.password = await bcrypt.hash(userData.password, 10)
                db.get().collection(collection.USER_COLLECTION).insertOne(userData).then(() => {
                resolve({signedupStatus:true})
            })
            }
            
        })

    },
    doSignin: (userData) => {
        return new Promise(async (resolve) => {
            let response = {}
            let user = await db.get().collection(collection.USER_COLLECTION).findOne({ email: userData.email })
            if (user) {
                bcrypt.compare(userData.password, user.password).then((status) => {
                    if (status) {
                       
                        resolve({ status:'success' })
                    }
                    else {
                        resolve({status:'passwordIncorrect' })
                    }
                })
            }
            else {
                resolve({status:'userNotExist' })
            }
        })
    }
}