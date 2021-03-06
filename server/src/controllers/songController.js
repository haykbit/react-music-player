const db = require("../models");

async function createSong(req, res, next) {
  const { duration, url } = req.body.song;
  const { title, genre, artist, private, album } = req.body.metadata;
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
      album,
      songImage: image,
    });
    await db.User.findOneAndUpdate(
      { firebase_id: uid },
      {
        $push: { mySongs: [{ _id: newSong._id }] },
      }
    );
    res.status(200).send({
      data: newSong,
    });
  } catch (error) {
    next(error);
  }
}

async function fetchSongs(req, res, next) {
  const { userId } = req.body;
  try {
    const publicSongs = await db.Song.find({ private: false });
    const userSongs = await db.Song.find({ owner: userId });

    const songs = publicSongs.concat(userSongs);

    res.status(200).send({
      data: songs,
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

    const user = await db.User.findOne({ firebase_id: ownerId });
    const mySongsList = user.mySongs;

    const orderedSongs = mySongsList.map((songId) => {
      const orderedSong = songs.filter(
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

async function orderMySongs(req, res, next) {
  const { id } = req.params;
  const { orderedList } = req.body;

  try {
    const orderedSongs = await db.User.findOneAndUpdate(
      { firebase_id: id },
      { mySongs: orderedList },
      { new: true }
    );
    res.status(200).send({
      data: orderedSongs,
    });
  } catch (error) {
    next(error);
  }
}

async function orderFavoriteSongs(req, res, next) {
  const { id } = req.params;
  const { orderedList } = req.body;

  try {
    const orderedSongs = await db.User.findOneAndUpdate(
      { firebase_id: id },
      { myFavoriteSongs: orderedList },
      { new: true }
    );
    res.status(200).send({
      data: orderedSongs,
    });
  } catch (error) {
    next(error);
  }
}

async function likeSong(req, res, next) {
  const { id: songId } = req.params;
  const { userId } = req.body;
  try {
    const checkUser = await db.User.findOne({ firebase_id: userId });
    if (!checkUser.myFavoriteSongs.includes(songId)) {
      const song = await db.Song.findOneAndUpdate(
        { _id: songId },
        {
          $inc: {
            likes: 1,
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
    const checkUser = await db.User.findOne({ firebase_id: userId });
    if (checkUser.myFavoriteSongs.includes(songId)) {
      await db.Song.findOneAndUpdate(
        { _id: songId },
        {
          $inc: {
            likes: -1,
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
  const { title, artist, album } = req.body.songData;
  const { image } = req.body;
  try {
    const updatedSong = await db.Song.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          title: title || "",
          artist: artist || "",
          album: album || "",
          songImage: image || "",
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

async function getPublicSongs(req, res, next) {
  try {
    const publicSongs = await db.Song.find({ private: false }).lean();
    res.status(200).send({
      data: publicSongs,
    });
  } catch (err) {
    console.log(err);
  }
}

async function getAccessibleSongs(req, res, next) {
  const { id: userId } = req.params;
  try {
    const mySongs = await db.Song.find({ owner: userId }).lean();
    const othersPublicSongs = await db.Song.find({
      private: false,
      owner: { $ne: userId },
    });
    res.status(200).send({
      mySongs,
      othersPublicSongs,
    });
  } catch (err) {
    console.log(err);
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
  orderMySongs,
  orderFavoriteSongs,
  getPublicSongs,
  getAccessibleSongs,
};
