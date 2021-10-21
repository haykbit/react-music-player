const Router = require("express").Router;
const { authMiddleware } = require("../middleware");
const { userController } = require("../controllers");

const userRouter = Router();

userRouter.get("/artists", authMiddleware, userController.getArtisticPeople);
userRouter.post("/login", authMiddleware, userController.signIn);
userRouter.get("/:id", authMiddleware, userController.getUserById);
userRouter.patch("/:id", authMiddleware, userController.updateUser);
userRouter.patch("/follow/:id", authMiddleware, userController.followUser);
userRouter.patch(
  "/cancel-follow/:id",
  authMiddleware,
  userController.cancelFollowUser
);
userRouter.put(
  "/update-email/:id",
  authMiddleware,
  userController.updateUserEmail
);
userRouter.get(
  "/myFavoriteSongs/:id",
  authMiddleware,
  userController.getMyFavoriteSongs
);
userRouter.get("/mySongs/:id", authMiddleware, userController.getMySongs);

module.exports = {
  userRouter,
};
