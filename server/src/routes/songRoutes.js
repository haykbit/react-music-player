const Router = require('express').Router
// const { authMiddleware } = require("../middleware");
const { songController } = require('../controllers')

const songRouter = Router()

//http://localhost:4000/songs/
songRouter.get('/all', songController.fetchSongs)
songRouter.get('/one', songController.getSongById)

module.exports = {
  songRouter,
}
