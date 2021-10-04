const Router = require("express").Router;
const { authMiddleware } = require("../middleware");
const { songController } = require("../controllers");

const songRouter = Router();

songRouter.get("/:id", authMiddleware, songController.getSongById);
songRouter.get(
  "/mysongs/:ownerId",
  authMiddleware,
  songController.getSongsByUser
);
songRouter.post("/", authMiddleware, songController.createSong);
songRouter.patch("/:id", authMiddleware, songController.updateSong);

module.exports = {
  songRouter,
};
