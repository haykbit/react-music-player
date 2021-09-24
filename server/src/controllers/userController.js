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

async function getUserById(req, res, next) {
  const { id: userId } = req.params;

  try {
    const user = await db.User.findOne({ firebase_id: userId }).lean();

    res.status(200).send({
      data: user,
    });
  } catch (err) {
    console.log(err);
  }
}

async function updateUser(req, res, next) {
  const { id: userId } = req.params;
  const { firstName, lastName, email } = req.body;
  try {
    const updatedUser = await db.User.findOneAndUpdate(
      { firebase_id: userId },
      { $set: { email, firstName: firstName || "", lastName: lastName || "" } }
    );

    res.status(200).send({
      data: updatedUser,
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  signIn: signIn,
  getUserById: getUserById,
  updateUser: updateUser,
};
