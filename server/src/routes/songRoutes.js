const Router = require("express").Router;
const { authMiddleware } = require("../middleware");
const { userController } = require("../controllers");

const userRouter = Router();

http://localhost:4000/songs/
userRouter.get("/all", authMiddleware, userController.fetchSongs);


module.exports = {
  userRouter,
};