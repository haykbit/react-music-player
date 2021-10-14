const db = require("../models");

async function createPlaylist(req, res, next) {
  const { title, description, genre, private, image } = req.body.playlist;
  const { uid } = req.user;
  try {
    const newPlaylist = await db.Playlist.create({
      title,
      description,
      genre: genre,
      playlistImage: image,
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

async function fetchMyPlaylists(req, res, next) {
  const { id } = req.params;
  try {
    const myPlaylists = await db.Playlist.find({ owner: id }).lean();

    res.status(200).send({
      data: myPlaylists,
    });
  } catch (err) {
    console.log(err);
  }
}

async function fetchAllPlaylists(req, res, next) {
  const { id } = req.params;
  try {
    const allMyPlaylists = await db.Playlist.find({ owner: id }).lean();
    const publicPlaylists = await db.Playlist.find({
      owner: !id,
      private: false,
    }).lean();
    res.status(200).send({
      allMyPlaylists,
      publicPlaylists,
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
async function addSongFromPlaylistView(req, res, next) {
  const { id: songId } = req.params;
  const { playlistId } = req.body;
  const { userId } = req.body;

  try {
    //Soy dueño de esta playlist?
    const checkOwner = await db.Playlist.findOne(userId);

    //En que playlist voy a meter la cancion ?
    const checkPlaylist = await db.Playlist.findOne(playlistId);

    //Que cancion voy a meter? Esta repetida ?
    const checkSong = await db.Song.findById(songId);

    if (
      !checkOwner.playlist.includes(userId) &&
      !checkPlaylist.playlist.includes(playlistId) &&
      !checkSong.song.includes(songId)
    ) {
      await db.Playlist.findOneAndUpdate(
        { _id: playlistId },
        {
          $push: {
            songs: songId,
          },
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

async function removeSongFromPlaylist(req, res, next) {
  try {
  } catch (error) {
    next(error);
  }
}

async function getSongsByPlaylistId(req, res, next) {
  const { id } = req.params;
  try {
    const playlist = await db.Playlist.findOne({ _id: id });
    const playlistSongs = playlist.songs;
    const songsData = await db.Song.find({
      _id: { $in: playlistSongs },
    });
    res.status(200).send({
      data: songsData,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  fetchMyPlaylists,
  fetchAllPlaylists,
  getPlaylistById,
  removePlaylistById,
  updatePlaylist,
  createPlaylist,
  getSongsByPlaylistId,
  addSongFromPlaylistView,
};
