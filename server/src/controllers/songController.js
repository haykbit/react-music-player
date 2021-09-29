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

  module.exports = {
    fetchSongs: fetchSongs,
  };