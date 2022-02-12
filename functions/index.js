const functions = require("firebase-functions");
const admin = require("firebase-admin");
const {HttpsError} = require("firebase-functions/v2/https");
admin.initializeApp();
const db = admin.firestore();
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

exports.makeUppercase = functions.firestore.document('/messages/{documentId}')
  .onCreate((snap, context) => {
    const original = snap.data().original;
    console.log('Uppercasing', context.params.documentId, original);
    const uppercase = original.toUpperCase();
    return snap.ref.set({uppercase}, {merge: true});
  });

exports.syncRoster = functions.https.onCall((data, context) => {
  const competitionId = data.competitionId;
  const admin = context.auth.token.admin;
  if (admin) {

  } else {
    throw HttpsError();
  }
});

exports.createCompetition = functions.https.onCall(async (data, context) => {
  const competitionCode = data.competitionCode;
  const name = data.name;
  const admin = context.auth.token.admin;
  if (admin) {
    const col = db.collection("competitions");
    return col.add({
      competitionCode: competitionCode,
      name: name
    });
  } else {
    throw HttpsError();
  }
});

