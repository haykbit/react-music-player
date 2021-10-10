const Router = require("express").Router;
const { authMiddleware } = require("../middleware");
const { playlistController } = require("../controllers");

const playlistRouter = Router();

//http://localhost:4000/playlists/

playlistRouter.post("/", authMiddleware, playlistController.createPlaylist);
playlistRouter.get(
  "/my-lists/:id",
  authMiddleware,
  playlistController.fetchMyPlaylists
);
playlistRouter.get(
  "/all",
  authMiddleware,
  playlistController.fetchAllPlaylists
);
playlistRouter.get("/:id", authMiddleware, playlistController.getPlaylistById);
playlistRouter.patch("/:id", authMiddleware, playlistController.updatePlaylist);

playlistRouter.delete(
  "/:id",
  authMiddleware,
  playlistController.removePlaylistById
);

module.exports = {
  playlistRouter,
};
