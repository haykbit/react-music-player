const db = require("../models");

async function fetchSongs(req, res, next) {
    try {
      const users = await db.Song.find().lean();
  
      res.status(200).send({
        data: users,
      });
    } catch (error) {
      next(error);
    }
  }

  module.exports = {
    fetchSongs: fetchSongs,
  };