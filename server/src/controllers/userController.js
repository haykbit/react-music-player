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
      userName: req.body.user ? req.body.user.userName : "",
      profileImage: undefined,
    });

    res.status(200).send({
      data: newUser,
    });
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
  const { firstName, lastName, profileImage } = req.body;
  try {
    const updatedUser = await db.User.findOneAndUpdate(
      { firebase_id: userId },
      {
        $set: {
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

async function updateUserEmail(req, res, next) {
  const { id: userId } = req.params;
  const { newEmail } = req.body;
  try {
    const updatedEmail = await db.User.findOneAndUpdate(
      { firebase_id: userId },
      {
        $set: {
          email: newEmail,
        },
      }
    );

    res.status(200).send({
      data: updatedEmail,
    });
  } catch (error) {
    next(error);
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

    // Orders songs as the user fav list
    const orderedSongs = myFavSongs.map((songId) => {
      const orderedSong = songsData.filter(
        (song) => song._id.toString() === songId.toString()
      );
      return orderedSong[0];
    });

    res.status(200).send({
      data: orderedSongs,
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

async function followUser(req, res, next) {
  const { id: profileUserId } = req.params;
  const { userId } = req.body;
  try {
    const checkFollowing = await db.User.findOne({
      firebase_id: profileUserId,
    });
    if (!checkFollowing.followedBy.includes(userId)) {
      await db.User.findOneAndUpdate(
        { firebase_id: profileUserId },
        {
          $inc: {
            followed: 1,
          },
          $push: { followedBy: [userId] },
        }
      );
      await db.User.findOneAndUpdate(
        { firebase_id: userId },
        {
          $inc: {
            following: 1,
          },
        }
      );
    }
    res.status(200).send({
      message: "OK",
    });
  } catch (error) {
    next(error);
  }
}
async function cancelFollowUser(req, res, next) {
  const { id: profileUserId } = req.params;
  const { userId } = req.body;
  try {
    const checkFollowing = await db.User.findOne({
      firebase_id: profileUserId,
    });
    if (checkFollowing.followedBy.includes(userId)) {
      await db.User.findOneAndUpdate(
        { firebase_id: profileUserId },
        {
          $inc: {
            followed: -1,
          },
          $pull: { followedBy: userId },
        }
      );
      await db.User.findOneAndUpdate(
        { firebase_id: userId },
        {
          $inc: {
            following: -1,
          },
        }
      );
    }
    res.status(200).send({
      message: "OK",
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  signIn,
  getUserById,
  updateUser,
  updateUserEmail,
  getMyFavoriteSongs,
  getMySongs,
  getArtisticPeople,
  followUser,
  cancelFollowUser,
};
