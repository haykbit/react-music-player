const Router = require("express").Router;
const { authMiddleware } = require("../middleware");
const { songController } = require("../controllers");

const songRouter = Router();

songRouter.post("/", authMiddleware, songController.createSong);
songRouter.patch("/like/:id", songController.likeSong);
songRouter.patch("/cancel-like/:id", songController.cancelLikeSong);
songRouter.patch("/:id", authMiddleware, songController.updateSong);

songRouter.get("/:id", authMiddleware, songController.getSongById);
songRouter.get(
  "/mysongs/:ownerId",
  authMiddleware,
  songController.getSongsByUser
);

module.exports = {
  songRouter,
};
