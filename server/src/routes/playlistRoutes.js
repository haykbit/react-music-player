const Router = require("express").Router;
const { authMiddleware } = require("../middleware");
const { playlistController } = require("../controllers");

const playlistRouter = Router();

//http://localhost:4000/playlists/

playlistRouter.get("/all", authMiddleware, playlistController.fetchPlaylists);
playlistRouter.post("/", authMiddleware, playlistController.createPlaylist);
playlistRouter.patch(
  "/songs/:id",
  authMiddleware,
  playlistController.removeSongFromPlaylist
);
playlistRouter.get(
  "/public/:id",
  authMiddleware,
  playlistController.fetchPublicPlaylists
);
playlistRouter.get(
  "/playlist/:id",
  authMiddleware,
  playlistController.getSongsByPlaylistId
);
playlistRouter.patch(
  "/order/:id",
  authMiddleware,
  playlistController.orderMyPlaylists
);
playlistRouter.get(
  "/my-lists/:id",
  authMiddleware,
  playlistController.fetchMyPlaylists
);
playlistRouter.get(
  "/my-favorite-lists/:id",
  authMiddleware,
  playlistController.getMyFavoritePlaylists
);
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
playlistRouter.get("/:id", authMiddleware, playlistController.getPlaylistById);
playlistRouter.patch("/:id", authMiddleware, playlistController.updatePlaylist);
playlistRouter.put(
  "/:id",
  authMiddleware,
  playlistController.removePlaylistById
);

module.exports = {
  playlistRouter,
};
