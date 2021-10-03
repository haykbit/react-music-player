const db = require("../models");

async function createSong(req, res, next) {
  const { title, genre, artist, duration, url } = req.body.song;
  const { uid } = req.user;
  try {
    const newSong = await db.Song.create({
      url,
      duration,
      owner: uid,
    });
    await db.User.findOneAndUpdate(
      { firebase_id: uid },
      {
        $push: { mySongs: [{ _id: newSong._id }] },
      }
    );
  } catch (error) {
    next(error);
  }
}

async function getSongById(req, res, next) {
  const { id } = req.params;
  try {
    const song = await db.Song.findOne({ _id: id }).lean();

    res.status(200).send({
      data: song,
    });
  } catch (error) {
    next(error);
  }
}
async function getSongsByUser(req, res, next) {
  const { ownerId } = req.params;
  try {
    const songs = await db.Song.find({ owner: ownerId });
    res.status(200).send({
      data: songs,
    });
  } catch (error) {
    next(error);
  }
}

async function likeSong(req, res, next) {
  const { id: songId } = req.params;
  const { id: userId } = req.body;
  try {
    const checkSong = await db.Song.findById(songId);
    const checkUser = await db.User.findOne({ firebase_id: userId });
    if (
      !checkSong.likedBy.includes(userId) &&
      !checkUser.myFavoriteSongs.includes(songId)
    ) {
      const song = await db.Song.findOneAndUpdate(
        { _id: songId },
        {
          $inc: {
            likes: 1,
          },
          $push: {
            likedBy: userId,
          },
        }
      );
      await db.User.findOneAndUpdate(
        { firebase_id: userId },
        {
          $push: { myFavoriteSongs: [{ _id: songId }] },
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

async function cancelLikeSong(req, res, next) {
  const { id: songId } = req.params;
  const { id: userId } = req.body;
  try {
    const checkSong = await db.Song.findById(songId);
    const checkUser = await db.User.findOne({ firebase_id: userId });
    if (
      checkSong.likedBy.includes(userId) &&
      checkUser.myFavoriteSongs.includes(songId)
    ) {
      await db.Song.findOneAndUpdate(
        { _id: songId },
        {
          $inc: {
            likes: -1,
          },
          $pull: {
            likedBy: userId,
          },
        },
        { new: true }
      );

      await db.User.findOneAndUpdate(
        { firebase_id: userId },
        {
          $pull: { myFavoriteSongs: songId },
        },
        { new: true }
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
  createSong,
  getSongById,
  getSongsByUser,
  likeSong,
  cancelLikeSong,
};
