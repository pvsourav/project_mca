const db = require("../config/connection");
const collection = require("../config/collection");
const bcrypt = require("bcrypt");
const { ObjectId } = require("mongodb");

module.exports = {
  getAlumniDetails: () => {
    return new Promise(async (resolve, reject) => {
      try {
        let alumni = await db
          .get()
          .collection(collection.ALUMNI_COLLECTION)
          .find()
          .toArray();
        resolve(alumni);
      } catch (err) {
        reject(err);
      }
    });
  },

  alumnicompleteprofile: (data) => {
    return new Promise(async (resolve, reject) => {
      try {
        let response = await db
          .get()
          .collection(collection.ALUMNI_COLLECTION)
          .insertOne(data);

        resolve(response.insertedId);
      } catch (err) {
        reject(err);
      }
    });
  },
  getAlumniDetails: () => {
    return new Promise(async (resolve, reject) => {
      try {
        let alumni = await db
          .get()
          .collection(collection.ALUMNI_COLLECTION)
          .find()
          .toArray();
        resolve(alumni);
      } catch (err) {
        reject(err);
      }
    });
  },
  getAlumniProfile: (email) => {
    return new Promise(async (resolve, reject) => {
      try {
        let alumni = await db
          .get()
          .collection(collection.ALUMNI_COLLECTION)
          .find({ email: email })
          .toArray();
        resolve(alumni);
      } catch (err) {
        reject(err);
      }
    });
  },
  addMeetUp: (meetupData) => {
    return new Promise(async (resolve, reject) => {
      const formattedMeetupData = {
        title: meetupData.title,
        date: new Date(meetupData.date), // Convert date to ISO date
        time: meetupData.time,
        venue: meetupData.venue,
        description: meetupData.description,
        organizer: meetupData.organizer,
        instituteApprove: meetupData.approval, // Default value
        coming: [], // Default empty array
        notcoming: [], // Default empty array
        collegeApproval: {
          status: false, // Default status
          msg: "pending", // Default message
        },
      };
      db.get()
        .collection(collection.MEETUP_COLLECTION)
        .insertOne(formattedMeetupData)
        .then((response) => {
          resolve({});
        });
    });
  },
  getMeetUpDetails: () => {
    return new Promise(async (resolve, reject) => {
      try {
        let meetups = await db
          .get()
          .collection(collection.MEETUP_COLLECTION)
          .find()
          .toArray();

        // For each meetup, find the corresponding organizer
        for (let meetup of meetups) {
          if (meetup.organizer) {
            const organizer = await db
              .get()
              .collection(collection.ALUMNI_COLLECTION)
              .findOne({ email: meetup.organizer });
            meetup.organizerDetails = organizer; // Add organizer details to each meetup
          }
        }

        resolve(meetups);
      } catch (err) {
        reject(err);
      }
    });
  },

  updateMeetUp: (data) => {},
  // sendMsg: (data) => {
  //     return new Promise(async (resolve, reject) => {
  //         try {

  //             let inbox = await db.get().collection(collection.MESSAGE_COLLECTION).findOne({
  //                 $or: [
  //                     { sender: data.sender, receiver: data.receiver },
  //                     { sender: data.receiver, receiver: data.sender }
  //                 ]
  //             });

  //             if (inbox) {

  //                 await db.get().collection(collection.MESSAGE_COLLECTION).updateOne(
  //                     {
  //                         $or: [
  //                             { sender: data.sender, receiver: data.receiver },
  //                             { sender: data.receiver, receiver: data.sender }
  //                         ]
  //                     },
  //                     {
  //                         $push: {
  //                             messages: {
  //                                 message: data.message,
  //                                 time: new Date(),
  //                                 sender: data.sender
  //                             }
  //                         }
  //                     }
  //                 );
  //             } else {

  //                 const formattedMessage = {
  //                     sender: data.sender,
  //                     receiver: data.receiver,
  //                     messages: [
  //                         {
  //                             message: data.message,
  //                             time: new Date(),
  //                             sender: data.sender
  //                         }
  //                     ]
  //                 };

  //                 await db.get().collection(collection.MESSAGE_COLLECTION).insertOne(formattedMessage);
  //             }

  //             resolve({ success: true });
  //         } catch (err) {
  //             reject(err);
  //         }
  //     })
  // },
  sendMessage: (data) => {
    return new Promise(async (resolve, reject) => {
      const formattedMessage = {
        repliedto: data.repliedto ? data.repliedto : false,
        sender: data.sender,
        receiver: data.receiver,
        messages:data.message,
           
    
      };

      await db
        .get()
        .collection(collection.MESSAGE_COLLECTION)
        .insertOne(formattedMessage).then((response) => {
            resolve({msg:"Message Added Succesfully"});
          });
    });
  },
  getMessage: (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(data);
            const messages = await db
                .get()
                .collection(collection.MESSAGE_COLLECTION)
                .find(
                    { receiver: data.receiver }, // Filter query
                    { projection: { messages: 1, repliedto: 1, sender: 1, _id: 0 } } // Field projection
                )
                .toArray(); // Properly call toArray as a function

            resolve(messages);
        } catch (error) {
            reject(error); // Handle errors gracefully
        }
    });
}

};
