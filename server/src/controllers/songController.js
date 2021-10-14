const db = require("../models");

async function createSong(req, res, next) {
  const { duration, url } = req.body.song;
  const { title, genre, artist, private } = req.body.metadata;
  const { image } = req.body;
  const { uid } = req.user;
  try {
    const newSong = await db.Song.create({
      title,
      artist,
      genre,
      url,
      duration,
      owner: uid,
      private,
      songImage: image,
    });
    await db.User.findOneAndUpdate(
      { firebase_id: uid },
      {
        $push: { mySongs: [{ _id: newSong._id }] },
      }
    );
    res.status(200).send({
      message: "OK",
    });
  } catch (error) {
    next(error);
  }
}

async function fetchSongs(req, res, next) {
  try {
    const song = await db.Song.find().lean();

    res.status(200).send({
      data: song,
    });
  } catch (err) {
    console.log(err);
  }
}

async function getSongById(req, res, next) {
  const { id } = req.params;
  try {
    const song = await db.Song.findOne({ _id: id }).lean();

    res.status(200).send({
      data: song,
    });
  } catch (err) {
    console.log(err);
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
  const { userId } = req.body;
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
  const { userId } = req.body;
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

async function updateSong(req, res, next) {
  const { id } = req.params;
  const { title, artist, genre, album } = req.body.songData;
  try {
    const updatedSong = await db.Song.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          title: title || "",
          artist: artist || "",
          genre: genre || "",
          album: album || "",
        },
      },
      { new: true }
    );

    res.status(200).send({
      data: updatedSong,
    });
  } catch (err) {
    console.log(err);
  }
}

async function deleteSong(req, res, next) {
  const { id } = req.params;
  const { userId } = req.body;
  try {
    await db.Song.deleteOne({ _id: id });
    await db.User.findOneAndUpdate(
      { firebase_id: userId },
      {
        $pull: { mySongs: id, myFavoriteSongs: id },
      },
      { new: true }
    );
    res.status(200).send({
      message: "OK",
    });
  } catch (err) {
    console.log(err);
  }
}

async function countPlayedNumber(req, res, next) {
  const { id } = req.params;
  try {
    await db.Song.findOneAndUpdate(
      { _id: id },
      {
        $inc: {
          played: 1,
        },
      },
      { new: true }
    );
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createSong,
  fetchSongs,
  getSongById,
  getSongsByUser,
  likeSong,
  cancelLikeSong,
  updateSong,
  deleteSong,
  countPlayedNumber,
};
