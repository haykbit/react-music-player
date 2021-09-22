const Router = require("express").Router;
const { authMiddleware } = require("../middlewares");
const { userController } = require("../controllers");

const userRouter = Router();

userRouter.post("/login", authMiddleware, userController.logIn);

module.exports = {
  userRouter,
};