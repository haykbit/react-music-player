const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const { isEmail } = require("validator");

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
    profileImage: {
      type: String,
      default:
        "https://res.cloudinary.com/dzaxp8xwy/image/upload/v1633277832/vehkjqmyzfz9brcqmcto.jpg",
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
    mySongs: {
      type: [{ type: Schema.Types.ObjectId, ref: "song" }],
      default: [],
    },
    myFavoriteSongs: {
      type: [{ type: Schema.Types.ObjectId, ref: "song" }],
      default: [],
    },
    artist: {
      type: Boolean,
      default: false,
    },
    mySongs: {
      type: [{ type: Schema.Types.ObjectId, ref: "song" }],
      default: [],
    },
    myFavoriteSongs: {
      type: [{ type: Schema.Types.ObjectId, ref: "song" }],
      default: [],
    },
    myPlaylists: {
      type: [{ type: Schema.Types.ObjectId, ref: "Playlist" }],
      default: [],
    },
    artist: {
      type: Boolean,
      default: false,
    },
  },
  { timestamp: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = {
  User: User,
};
