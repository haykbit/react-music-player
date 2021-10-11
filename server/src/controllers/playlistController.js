const db = require("../models");

async function createPlaylist(req, res, next) {
  const { title, description, genre, private, url } = req.body.playlist;
  const { uid } = req.user;
  try {
    const newPlaylist = await db.Playlist.create({
      title,
      description,
      genre,
      playlistImage: url,
      private,
      owner: uid,
    });
    await db.User.findOneAndUpdate(
      { firebase_id: uid },
      {
        $push: { myPlaylists: [{ _id: newPlaylist._id }] },
      }
    );
    res.status(200).send({
      message: "OK",
    });
  } catch (error) {
    next(error);
  }
}

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
  const { title, description, genre, private } = req.body;
  try {
    const updatedPlaylist = await db.Playlist.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          title: title || "",
          description: description || "",
          genre: genre || "",
          private: private || "",
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

//To test.
async function addSong(req, res, next) {
  const { id: songId } = req.params;
  const { id: playlistId } = req.params;
  const { userId } = req.body;

  try {
    //CONST
    const checkSong = await db.Song.findById(songId);
    const checkPlaylist = await db.Playlist.findById(playlistId);
    const checkUser = await db.User.findOne({ firebase_id: userId });

    if (
      !checkSong.songs.includes(userId) &&
      !checkPlaylist.songs.includes(songId) &&
      !checkUser.myPlaylists.includes(songId)
    ) {
      await db.Playlist.findOneAndUpdate(
        { _id: playlistId },
        {
          $inc: {
            songsOfPlaylist: 1,
          },
          $push: {
            songs: userId,
          },
        }
      );
      await db.User.findOneAndUpdate(
        { firebase_id: userId },
        {
          $push: { myPlaylists: [{ _id: playlistId }] },
        }
      );
    }

    res.status(200).send({
      message: "OK",
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  fetchPlaylists: fetchPlaylists,
  getPlaylistById: getPlaylistById,
  removePlaylistById: removePlaylistById,
  updatePlaylist: updatePlaylist,
  createPlaylist: createPlaylist,
  addSong: addSong,
};
