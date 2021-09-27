const db = require("../models");

async function signIn(req, res, next) {
  const { uid, email } = req.user;
  const { firstName, lastName } = req.body.user;
  try {
    const user = await db.User.findOne({ email: email });

    if (user) {
      return res.sendStatus(200);
    }

    const newUser = await db.User.create({
      firebase_id: uid,
      email: email,
      firstName: firstName || "",
      lastName: lastName || "",
    });

    res.sendStatus(201);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  signIn: signIn,
};
