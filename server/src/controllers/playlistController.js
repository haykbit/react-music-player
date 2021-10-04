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

async function updatePlaylist(req, res, next) {
  const { id: playlistId } = req.params;
  const { title, description, songs, genre, private, playlist_image } =
    req.body;
  try {
    const updatedPlaylist = await db.Playlist.findOneAndUpdate(
      { _id: playlistId },
      {
        $set: {
          title: title || "",
          description: description || "",
          songs: songs || "",
          genre: genre || "",
          private: private || "",
          playlist_image: playlist_image || "",
        },
      }
    );

    res.status(200).send({
      data: updatedPlaylist,
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  fetchPlaylists: fetchPlaylists,
  getPlaylistById: getPlaylistById,
  removePlaylistById: removePlaylistById,
  updatePlaylist: updatePlaylist,
};
