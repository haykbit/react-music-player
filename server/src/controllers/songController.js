const db = require('../models')

async function fetchSongs(req, res, next) {
  try {
    const songs = await db.Song.find().lean()
    res.status(200).send({
      data: songs,
    })
  } catch (error) {
    next(error)
  }
}

async function getSongById(req, res, next) {
  try {
    const song = await db.Song.findOne({ name: 'IDOL' }).lean()

    res.status(200).send({
      data: song,
    })
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  fetchSongs: fetchSongs,
  getSongById: getSongById,
}
