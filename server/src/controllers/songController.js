const db = require("../models");

async function createSong(req, res, next) {
  const { title, genre, artist, duration, url } = req.body;
  const { _id } = req.user;

  try {
  } catch (error) {
    next(error);
  }
}

async function getSongById(req, res, next) {
  const { _id } = req.params;
  try {
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createSong,
  getSongById,
};
