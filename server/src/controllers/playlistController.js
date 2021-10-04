const db = require("../models");

async function fetchPlaylists(req, res, next) {
  try {
    const playlist = await db.Playlist.find().lean();
    // console.log("AAA INN");

    res.status(200).send({
      data: playlist,
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  fetchPlaylists: fetchPlaylists,
};
