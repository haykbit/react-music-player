const db = require("../models");

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
  const { id } = req.params;
  try {
    const playlist = await db.Playlist.deleteOne({ _id: id }).lean();

    res.status(200).send({
      data: playlist,
    });
  } catch (err) {
    console.log(err);
  }
}

async function updatePlaylist(req, res, next) {
  const { id } = req.params;
  const { title, description, songs, genre, private, playlistImage } = req.body;
  try {
    const updatedPlaylist = await db.Playlist.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          title: title || "",
          description: description || "",
          songs: songs || "",
          genre: genre || "",
          private: private || "",
          playlistImage: playlistImage || "",
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
