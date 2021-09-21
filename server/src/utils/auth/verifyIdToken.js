const { auth } = require("../../firebase/firebase");

function verifyIdToken(token) {
  return auth.verifyIdToken(token);
}

module.exports = verifyIdToken;
