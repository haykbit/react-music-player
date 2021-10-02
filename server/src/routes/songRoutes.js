const Router = require("express").Router;
const { authMiddleware } = require("../middleware");
const { songController } = require("../controllers");

const songRouter = Router();

songRouter.post("/", authMiddleware, songController.createSong);
songRouter.patch("/like/:id", songController.likeSong);
songRouter.patch("/cancel-like/:id", songController.cancelLikeSong);

songRouter.get("/:id", songController.getSongById);
songRouter.get("/my-songs/:ownerId", songController.getSongsByUser);

module.exports = {
  songRouter,
};
