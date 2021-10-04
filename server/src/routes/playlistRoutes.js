const Router = require("express").Router;
const { authMiddleware } = require("../middleware");
const { playlistController } = require("../controllers");

const playlistRouter = Router();

//http://localhost:4000/playlists/

playlistRouter.get("/all", authMiddleware, playlistController.fetchPlaylists);
playlistRouter.get("/:id", authMiddleware, playlistController.getPlaylistById);
playlistRouter.delete(
  "/:id",
  authMiddleware,
  playlistController.removePlaylistById
);

// songRouter.patch("/:id", authMiddleware, songController.updateSong);

// songRouter.get(
//   "/mysongs/:ownerId",
//   authMiddleware,
//   songController.getSongsByUser
// );
// songRouter.post("/", authMiddleware, songController.createSong);

module.exports = {
  playlistRouter,
};
