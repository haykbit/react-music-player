const mongoose = require('mongoose')

const { config } = require('../config')

const connect = () => {
  return mongoose.connect(config.db.url)
}

module.exports = connect
