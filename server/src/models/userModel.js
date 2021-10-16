const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const { isEmail } = require("validator");

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
      minLength: [2, "First name needs to have at least 2 characters"],
      maxLength: [50, "First name cannot exceed 50 characters"],
    },
    lastName: {
      type: String,
      trim: true,
      minLength: [2, "Last name needs to have at least 2 characters"],
      maxLength: [50, "Last name cannot exceed 50 characters"],
    },
    userName: {
      type: String,
      trim: true,
      required: true,
      unique: [true, "This user name already exists, please try another one"],
      minLength: [2, "User name needs to have at least 2 characters"],
      maxLength: [50, "User name cannot exceed 50 characters"],
    },
    profileImage: {
      type: String,
      default:
        "https://res.cloudinary.com/dzaxp8xwy/image/upload/v1633277832/vehkjqmyzfz9brcqmcto.jpg",
    },
    coverImage: {
      type: String,
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
    myPlaylists: {
      type: [{ type: Schema.Types.ObjectId, ref: "playlist" }],
      default: [],
    },
    myFavoritePlaylists: {
      type: [{ type: Schema.Types.ObjectId, ref: "playlist" }],
      default: [],
    },
    artist: {
      type: Boolean,
      default: false,
    },
    auth_admin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = {
  User: User,
};
