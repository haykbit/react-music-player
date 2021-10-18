const Router = require("express").Router;
const { authMiddleware } = require("../middleware");
const { userController } = require("../controllers");

const userRouter = Router();

//http://localhost:4000/users/
userRouter.get("/artists", authMiddleware, userController.getArtisticPeople);
userRouter.post("/login", authMiddleware, userController.signIn);
userRouter.get("/:id", authMiddleware, userController.getUserById);
userRouter.patch("/:id", authMiddleware, userController.updateUser);
userRouter.get(
  "/myFavoriteSongs/:id",
  authMiddleware,
  userController.getMyFavoriteSongs
);
userRouter.get("/mySongs/:id", authMiddleware, userController.getMySongs);

module.exports = {
  userRouter,
};
