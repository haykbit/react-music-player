const db = require("../models");

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
  const { id: songId } = req.params;

  try {
    const song = await db.Song.findOne({ _id: songId }).lean();

    res.status(200).send({
      data: song,
    });
  } catch (err) {
    console.log(err);
  }
}

async function updateSong(req, res, next) {
  const { id: songId } = req.params;
  const { name, band } = req.body;
  try {
    const updatedSong = await db.Song.findOneAndUpdate(
      { _id: songId },
      { $set: { name: name || "", band: band || "" } }
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
  fetchSongs: fetchSongs,
  getSongById: getSongById,
  updateSong: updateSong,
};
