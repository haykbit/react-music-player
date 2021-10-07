const Router = require("express").Router;
const { authMiddleware } = require("../middleware");
const { playlistController } = require("../controllers");

const playlistRouter = Router();

//http://localhost:4000/playlists/

playlistRouter.get("/all", authMiddleware, playlistController.fetchPlaylists);
playlistRouter.get("/:id", authMiddleware, playlistController.getPlaylistById);
playlistRouter.patch("/:id", authMiddleware, playlistController.updatePlaylist);
playlistRouter.get("/add/:id", authMiddleware, playlistController.addSong);

playlistRouter.delete(
  "/:id",
  authMiddleware,
  playlistController.removePlaylistById
);

module.exports = {
  playlistRouter,
};
