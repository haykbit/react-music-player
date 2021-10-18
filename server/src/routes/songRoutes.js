const Router = require("express").Router;
const { authMiddleware } = require("../middleware");
const { songController } = require("../controllers");

const songRouter = Router();

//http://localhost:4000/songs/
songRouter.get("/all", authMiddleware, songController.fetchSongs);
songRouter.get("/public-songs", authMiddleware, songController.getPublicSongs);
songRouter.post("/", authMiddleware, songController.createSong);
songRouter.patch("/like/:id", songController.likeSong);
songRouter.patch("/cancel-like/:id", songController.cancelLikeSong);
songRouter.get("/:id", authMiddleware, songController.getSongById);
songRouter.patch("/:id", authMiddleware, songController.updateSong);
songRouter.patch(
  "/played/:id",
  authMiddleware,
  songController.countPlayedNumber
);
songRouter.put("/:id", authMiddleware, songController.deleteSong);

songRouter.get(
  "/mysongs/:ownerId",
  authMiddleware,
  songController.getSongsByUser
);

songRouter.get(
  "/accessible-songs/:id",
  authMiddleware,
  songController.getAccessibleSongs
);

module.exports = {
  songRouter,
};
