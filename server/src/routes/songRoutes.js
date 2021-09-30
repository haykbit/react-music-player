const Router = require("express").Router;
const { authMiddleware } = require("../middleware");
const { songController } = require("../controllers");

const songRouter = Router();

songRouter.post("/", authMiddleware, songController.createSong);
songRouter.get("/:id", authMiddleware, songController.getSongById);
songRouter.get("/mysongs/:ownerId", songController.getSongsByUser);

module.exports = {
  songRouter,
};
