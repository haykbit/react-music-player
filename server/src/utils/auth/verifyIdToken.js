const { auth } = require("./firebase");

function verifyIdToken(token) {
  return auth.verifyIdToken(token);
}

module.exports = verifyIdToken;
