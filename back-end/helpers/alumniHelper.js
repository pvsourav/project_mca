const db = require('../config/connection');
const collection = require('../config/collection');
const bcrypt = require('bcrypt');
const { ObjectId } = require('mongodb');

module.exports = {
    getAlumniDetails:()=>{
        return new Promise(async (resolve, reject) => {
            let alumni = await db.get().collection(collection.ALUMNI_COLLECTION).find().toArray()
            resolve(alumni)
        })
    }

    
};