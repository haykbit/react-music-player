const Router = require("express").Router;
const { authMiddleware } = require("../middleware");
const { userController } = require("../controllers");

const userRouter = Router();

//http://localhost:4000/users/
userRouter.post("/login", authMiddleware, userController.signIn);
userRouter.get("/:id", authMiddleware, userController.getUserById);
userRouter.get("/artists", userController.getArtisticPeople);
userRouter.patch("/:id", authMiddleware, userController.updateUser);
userRouter.get("/myFavoriteSongs/:id", userController.getMyFavoriteSongs);
userRouter.get("/mySongs/:id", userController.getMySongs);

module.exports = {
  userRouter,
};
