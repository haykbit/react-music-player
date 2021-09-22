const db = require("../models");

async function signIn(req, res, next) {
  const { uid, email } = req.user;

  try {
    const user = await db.User.findOne({ email: email });

    if (user) {
      return res.sendStatus(200);
    }

    const newUser = await db.User.create({
      _id: uid,
      email: email,
    });

    res.sendStatus(201);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  signIn: signIn,
};
