const Router = require("express").Router;
const { authMiddleware } = require("../middleware");
const { songController } = require("../controllers");

const songRouter = Router();

songRouter.post("/", authMiddleware, songController.createSong);
songRouter.get("/all", authMiddleware, songController.fetchSongs);
songRouter.get("/mysongs/:ownerId", songController.getSongsByUser);
songRouter.get("/:id", authMiddleware, songController.getSongById);
songRouter.patch("/:id", authMiddleware, songController.updateSong);

module.exports = {
  songRouter,
};
