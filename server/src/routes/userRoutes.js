const Router = require("express").Router;
const { authMiddleware } = require("../middleware");
const { userController } = require("../controllers");

const userRouter = Router();

//http://localhost:4000/users/
userRouter.post("/login", authMiddleware, userController.signIn);
userRouter.get("/:id", authMiddleware, userController.getUserById);
userRouter.patch("/:id", authMiddleware, userController.updateUser);
// userRouter.get("/likedsongs", authMiddleware, userController.getLikedSongsByUser);
userRouter.get("/likedsongs", userController.getLikedSongsByUser);

module.exports = {
  userRouter,
};
