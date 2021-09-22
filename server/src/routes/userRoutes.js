const Router = require("express").Router;
const { authMiddleware } = require("../middleware");
const { userController } = require("../controllers");

const userRouter = Router();

userRouter.post("/login", authMiddleware, userController.signIn);

module.exports = {
  userRouter,
};
