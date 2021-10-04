const db = require("../models");

// async function createSong(req, res, next) {
//     const { title, genre, artist, duration, url } = req.body.song;
//     const { uid } = req.user;
//     try {
//       await db.Song.create({
//         url,
//         owner: uid,
//       });
//     } catch (error) {
//       next(error);
//     }
//   }

async function fetchPlaylists(req, res, next) {
  try {
    const playlist = await db.Playlist.find().lean();

    res.status(200).send({
      data: playlist,
    });
  } catch (err) {
    console.log(err);
  }
}

async function getPlaylistById(req, res, next) {
  const { id } = req.params;
  try {
    const playlist = await db.Playlist.findOne({ _id: id }).lean();

    res.status(200).send({
      data: playlist,
    });
  } catch (err) {
    console.log(err);
  }
}

async function removePlaylistById(req, res, next) {
  const { id: playlistId } = req.params;

  try {
    const playlist = await db.Playlist.deleteOne({ _id: playlistId }).lean();

    res.status(200).send({
      data: playlist,
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  fetchPlaylists: fetchPlaylists,
  getPlaylistById: getPlaylistById,
  removePlaylistById: removePlaylistById,
};
