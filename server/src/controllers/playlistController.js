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
        $push: {
          myPlaylists: [{ _id: newPlaylist._id }],
          myFavoritePlaylists: [{ _id: newPlaylist._id }],
        },
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

async function fetchPublicPlaylists(req, res, next) {
  const { id } = req.params;
  try {
    const publicPlaylists = await db.Playlist.find({
      owner: { $ne: id },
      private: false,
    });

    res.status(200).send({
      data: publicPlaylists,
    });
  } catch (err) {
    console.log(err);
  }
}

async function orderMyPlaylists(req, res, next) {
  const { id } = req.params;
  const { orderedList } = req.body;

  try {
    const orderedPlaylists = await db.User.findOneAndUpdate(
      { firebase_id: id },
      { myFavoritePlaylists: orderedList },
      { new: true }
    );

    res.status(200).send({
      data: orderedPlaylists,
    });
  } catch (error) {
    next(error);
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

async function orderPlaylistsSongs(req, res, next) {
  const { id } = req.params;
  const { orderedList } = req.body;

  try {
    const orderedSongs = await db.Playlist.findOneAndUpdate(
      { _id: id },
      { songs: orderedList },
      { new: true }
    );

    res.status(200).send({
      data: orderedSongs,
    });
  } catch (error) {
    next(error);
  }
}

async function removePlaylistById(req, res, next) {
  const { id } = req.params;
  const { userId } = req.body;

  try {
    await db.Playlist.deleteOne({ _id: id });
    await db.User.findOneAndUpdate(
      { firebase_id: userId },
      {
        $pull: { myPlaylists: id, myFavoritePlaylists: id },
      },
      { new: true }
    );

    res.status(200).send({
      message: "OK",
    });
  } catch (err) {
    console.log(err);
  }
}

async function updatePlaylist(req, res, next) {
  const { id } = req.params;
  const { title, description, genre, private } = req.body.playlist;
  const { image } = req.body;

  try {
    const updatedPlaylist = await db.Playlist.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          title,
          description,
          genre,
          playlistImage: image,
          private,
        },
      }
    );

    res.status(200).send({
      data: updatedPlaylist,
    });
  } catch (error) {
    next(error);
  }
}

async function addSongToPlaylist(req, res, next) {
  const { id: songId } = req.params;
  const { playlistId } = req.body;
  const { userId } = req.body;
  try {
    const checkPlaylist = await db.Playlist.findById(playlistId);
    if (!checkPlaylist.songs.includes(songId)) {
      await db.Playlist.findOneAndUpdate(
        { _id: playlistId, owner: userId },
        {
          $push: { songs: [{ _id: songId }] },
        },
        { new: true }
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
  const { id } = req.params;
  const { songId } = req.body;
  try {
    await db.Playlist.findOneAndUpdate(
      { _id: id },
      {
        $pull: { songs: songId },
      },
      { new: true }
    );
    res.status(200).send({
      message: "OK",
    });
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

    // Orders songs as the user's playlists
    const orderedSongs = playlistSongs.map((playlistId) => {
      const orderedSong = songsData.filter(
        (list) => list._id.toString() === playlistId.toString()
      );
      return orderedSong[0];
    });

    res.status(200).send({
      data: orderedSongs,
    });
  } catch (error) {
    next(error);
  }
}

async function followPlaylist(req, res, next) {
  // playlist id
  const { id: playlistId } = req.params;
  const { userId } = req.body;
  try {
    const checkUser = await db.User.findOne({ firebase_id: userId });
    if (!checkUser.myFavoritePlaylists.includes(playlistId)) {
      await db.Playlist.findOneAndUpdate(
        { _id: playlistId, owner: { $ne: userId }, private: false },
        {
          $inc: {
            likes: 1,
          },
        }
      );
      await db.User.findOneAndUpdate(
        { firebase_id: userId },
        {
          $push: { myFavoritePlaylists: [{ _id: playlistId }] },
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

async function cancelFollowPlaylist(req, res, next) {
  const { id: playlistId } = req.params;
  const { userId } = req.body;
  try {
    const checkUser = await db.User.findOne({ firebase_id: userId });
    if (checkUser.myFavoritePlaylists.includes(playlistId)) {
      await db.Playlist.findOneAndUpdate(
        { _id: playlistId },
        {
          $inc: {
            likes: -1,
          },
        },
        { new: true }
      );

      await db.User.findOneAndUpdate(
        { firebase_id: userId },
        {
          $pull: { myFavoritePlaylists: playlistId },
        },
        { new: true }
      );
    }
    res.status(200).send({
      message: "OK",
    });
  } catch (error) {
    next(error);
  }
}

async function getMyFavoritePlaylists(req, res, next) {
  const { id } = req.params;
  try {
    const user = await db.User.findOne({ firebase_id: id });
    const myFavLists = user.myFavoritePlaylists;
    const myFavListsData = await db.Playlist.find({
      _id: { $in: myFavLists },
    });

    // Orders playlists as the user's favorite playlists list
    const orderedPlaylists = myFavLists.map((playlistId) => {
      const orderedList = myFavListsData.filter(
        (list) => list._id.toString() === playlistId.toString()
      );
      return orderedList[0];
    });

    res.status(200).send({
      data: orderedPlaylists,
    });
  } catch (error) {
    next(error);
  }
}

async function fetchPlaylists(req, res, next) {
  const { userId } = req.body;
  try {
    const publicPlaylists = await db.Playlist.find({
      private: false,
    }).select({ title: 1, playlistImage: 1, genre: 1 });
    const userPlaylists = await db.Playlist.find({ owner: userId }).select({
      title: 1,
      playlistImage: 1,
      genre: 1,
    });

    const playlists = publicPlaylists.concat(userPlaylists);

    res.status(200).send({
      data: playlists,
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  fetchMyPlaylists,
  fetchPublicPlaylists,
  getPlaylistById,
  removePlaylistById,
  updatePlaylist,
  createPlaylist,
  removeSongFromPlaylist,
  getSongsByPlaylistId,
  followPlaylist,
  cancelFollowPlaylist,
  getMyFavoritePlaylists,
  fetchPlaylists,
  orderMyPlaylists,
  addSongToPlaylist,
  fetchPlaylists,
  orderPlaylistsSongs,
};
