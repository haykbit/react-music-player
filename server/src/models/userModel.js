const mongoose = require('mongoose')
const { Schema } = require('mongoose')
const { isEmail } = require('validator')

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      required: true,
      validate: {
        validator: (value) => isEmail[value],
        message: (props) => `${props.value} is not a valid email`,
      },
    },
    firebase_id: {
      type: String,
      unique: true,
    },
  },
  { timestamp: true },
)

const User = mongoose.model('User', UserSchema)

module.exports = {
  User: User,
}
