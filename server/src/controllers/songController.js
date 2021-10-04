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

async function getSongById(req, res, next) {
  const { _id } = req.params;
  try {
    const song = await db.Song.findOne({ id: _id }).lean();

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

module.exports = {
  fetchSongs: fetchSongs,
  getSongById: getSongById,
  updateSong: updateSong,
  removeSongById: removeSongById,
};
