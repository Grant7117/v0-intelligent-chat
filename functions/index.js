const functions = require('firebase-functions');

const hello = () => {
  return "Hello from Firebase!";
};

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send(hello());
});

exports.hello = hello;
