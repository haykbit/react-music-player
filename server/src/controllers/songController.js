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
    const songs = await db.Song.find().lean();
    res.status(200).send({
      data: songs,
    });
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

async function updateSong(req, res, next) {
  const { id } = req.params;
  const { name, band } = req.body;
  try {
    const updatedSong = await db.Song.findOneAndUpdate(
      { _id: id },
      { $set: { name: name || "", artist: artist || "" } }
      //Here add more following the schema
    );

    res.status(200).send({
      data: updatedSong,
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  createSong,
  getSongById,
  getSongsByUser,
  fetchSongs,
  updateSong,
};
