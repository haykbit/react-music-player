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
  "/public/:id",
  authMiddleware,
  playlistController.fetchPublicPlaylists
);

playlistRouter.get("/all", authMiddleware, playlistController.fetchPlaylists);

playlistRouter.get("/:id", authMiddleware, playlistController.getPlaylistById);

playlistRouter.get(
  "/playlist/:id",
  authMiddleware,
  playlistController.getSongsByPlaylistId
);

playlistRouter.get(
  "/my-favorite-lists/:id",
  authMiddleware,
  playlistController.getMyFavoritePlaylists
);

playlistRouter.patch(
  "/songs/:id",
  authMiddleware,
  playlistController.removeSongFromPlaylist
);

playlistRouter.patch("/:id", authMiddleware, playlistController.updatePlaylist);

playlistRouter.patch(
  "/follow/:id",
  authMiddleware,
  playlistController.followPlaylist
);

playlistRouter.patch(
  "/cancel-follow/:id",
  authMiddleware,
  playlistController.cancelFollowPlaylist
);

playlistRouter.patch(
  "/add/:id",
  authMiddleware,
  playlistController.addSongToPlaylist
);

playlistRouter.put(
  "/:id",
  authMiddleware,
  playlistController.removePlaylistById
);

module.exports = {
  playlistRouter,
};
