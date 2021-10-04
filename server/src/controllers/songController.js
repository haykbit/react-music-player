const db = require("../models");

async function createSong(req, res, next) {
  const { title, genre, artist, duration, url } = req.body.song;
  const { uid } = req.user;
  try {
    await db.Song.create({
      url,
      owner: uid,
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

async function updateSong(req, res, next) {
  const { id: songId } = req.params;
  const { title, artist, genre } = req.body;
  try {
    const updatedSong = await db.Song.findOneAndUpdate(
      { _id: songId },
      { $set: { title: title || "", artist: artist || "", genre: genre || "" } }
    );

    res.status(200).send({
      data: updatedSong,
    });
  } catch (err) {
    console.log(err);
  }
}

async function removeSongById(req, res, next) {
  const { id: songId } = req.params;

  try {
    const song = await db.Song.deleteOne({ _id: songId }).lean();

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

module.exports = {
  fetchSongs: fetchSongs,
  getSongById: getSongById,
  updateSong: updateSong,
  removeSongById: removeSongById,
  createSong: createSong,
  getSongsByUser: getSongsByUser,
};
