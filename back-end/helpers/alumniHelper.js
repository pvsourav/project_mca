const db = require('../config/connection');
const collection = require('../config/collection');
const bcrypt = require('bcrypt');
const { ObjectId } = require('mongodb');

module.exports = {
    getAlumniDetails: () => {
        return new Promise(async (resolve, reject) => {
            try {
                let alumni = await db.get().collection(collection.ALUMNI_COLLECTION).find().toArray();
                resolve(alumni);
            } catch (err) {
                reject(err);
            }
        });
    },
    
    alumnicompleteprofile: (data) => {
        return new Promise(async (resolve, reject) => {
            try {
                let response = await db.get().collection(collection.ALUMNI_COLLECTION).insertOne(data);
                
                resolve(response.insertedId);
            } catch (err) {
                reject(err);
            }
        });
    }
};
