const Router = require("express").Router;
const { authMiddleware } = require("../middleware");
const { songController } = require("../controllers");

const songRouter = Router();

songRouter.post("/", authMiddleware, songController.createSong);
songRouter.patch("/like/:id", songController.likeSong);

songRouter.get("/:id", songController.getSongById);
songRouter.get("/mysongs/:ownerId", songController.getSongsByUser);
// songRouter.get("/mine/liked", songController.getMyLikedSongs);

module.exports = {
  songRouter,
};
