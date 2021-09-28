const Router = require("express").Router;
const { authMiddleware } = require("../middleware");
const { songController } = require("../controllers");

const songRouter = Router();

songRouter.post("/", authMiddleware, songController.createSong);
songRouter.get("/:id", authMiddleware, songController.getSongById);

module.exports = {
  songRouter,
};
