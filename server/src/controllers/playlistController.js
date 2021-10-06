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
async function addSong(req, res, next) {
  // const { id: songId } = req.params;
  // const { id: playlistId } = req.params;
  // const { userId } = req.body;
  console.log("Hiiddd");

  // try {
  //   const checkSong = await db.Song.findById(songId);
  //   const checkUser = await db.User.findOne({ firebase_id: userId });
  //   const checkSong = await db.Song.findById(songId);

  //   if (
  //     !checkSong.likedBy.includes(userId) &&
  //     !checkUser.myFavoriteSongs.includes(songId)
  //   ) {
  //     const song = await db.Song.findOneAndUpdate(
  //       { _id: songId },
  //       {
  //         $inc: {
  //           likes: 1,
  //         },
  //         $push: {
  //           likedBy: userId,
  //         },
  //       }
  //     );
  //     await db.User.findOneAndUpdate(
  //       { firebase_id: userId },
  //       {
  //         $push: { myFavoriteSongs: [{ _id: songId }] },
  //       }
  //     );
  //   }

  //   res.status(200).send({
  //     message: "OK",
  //   });
  // } catch (error) {
  //   next(error);
  // }
}

module.exports = {
  fetchPlaylists: fetchPlaylists,
  getPlaylistById: getPlaylistById,
  removePlaylistById: removePlaylistById,
  updatePlaylist: updatePlaylist,
  addSong: addSong,
};
