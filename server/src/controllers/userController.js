const db = require("../models");

async function signIn(req, res, next) {
  const { uid, email } = req.user;
  try {
    const user = await db.User.findOne({ email: email });

    if (user) {
      return res.sendStatus(200);
    }

    const newUser = await db.User.create({
      firebase_id: uid,
      email: email,
      firstName: req.body.user ? req.body.user.firstName : "",
      lastName: req.body.user ? req.body.user.lastName : "",
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
  const { firstName, lastName, email, profileImage } = req.body;
  console.log(req.body);
  try {
    const updatedUser = await db.User.findOneAndUpdate(
      { firebase_id: userId },
      {
        $set: {
          email,
          firstName: firstName || "",
          lastName: lastName || "",
          profileImage: profileImage || "",
        },
      }
    );

    res.status(200).send({
      data: updatedUser,
    });
  } catch (err) {
    console.log(err.message);
  }
}

async function getMyFavoriteSongs(req, res, next) {
  const { id: userId } = req.params;
  try {
    const user = await db.User.findOne({ firebase_id: userId });
    const myFavSongs = user.myFavoriteSongs;
    const songsData = await db.Song.find({
      _id: { $in: myFavSongs },
    });
    res.status(200).send({
      data: songsData,
    });
  } catch (error) {
    next(error);
  }
}

async function getMySongs(req, res, next) {
  const { id: userId } = req.params;
  try {
    const user = await db.User.findOne({ firebase_id: userId });
    const mySongs = user.mySongs;
    const mySongsData = await db.Song.find({
      _id: { $in: mySongs },
    });
    res.status(200).send({
      data: mySongsData,
    });
  } catch (error) {
    next(error);
  }
}

async function getArtisticPeople(req, res, next) {
  try {
    const user = await db.User.find({ artist: true }).select({
      _id: 0,
      userName: 1,
      profileImage: 1,
      firebase_id: 1,
    });
    res.status(200).send({
      data: user,
    });
  } catch (error) {
    next(error);
  }
}
//TODO delete my songs

module.exports = {
  signIn: signIn,
  getUserById: getUserById,
  updateUser: updateUser,
  getMyFavoriteSongs,
  getMySongs,
  getArtisticPeople,
};
