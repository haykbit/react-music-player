const Router = require("express").Router;
const { authMiddleware } = require("../middleware");
const { songController } = require("../controllers");

const songRouter = Router();

songRouter.get("/all", authMiddleware, songController.fetchSongs);
songRouter.get("/public-songs", authMiddleware, songController.getPublicSongs);
songRouter.post("/", authMiddleware, songController.createSong);
songRouter.patch(
  "/played/:id",
  authMiddleware,
  songController.countPlayedNumber
);
songRouter.get(
  "/mysongs/:ownerId",
  authMiddleware,
  songController.getSongsByUser
);
songRouter.patch("/order-favorite/:id", songController.orderFavoriteSongs);
songRouter.patch("/order/:id", songController.orderMySongs);
songRouter.patch("/like/:id", songController.likeSong);
songRouter.patch("/cancel-like/:id", songController.cancelLikeSong);
songRouter.get(
  "/accessible-songs/:id",
  authMiddleware,
  songController.getAccessibleSongs
);
songRouter.get("/:id", authMiddleware, songController.getSongById);
songRouter.patch("/:id", authMiddleware, songController.updateSong);
songRouter.delete("/:id", authMiddleware, songController.deleteSong);
songRouter.put("/:id", authMiddleware, songController.deleteSong);

module.exports = {
  songRouter,
};
