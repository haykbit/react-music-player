const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const SongSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      //   required: [true, "The title is required!"],
    },
    genre: {
      type: String,
      //   required: [true, "Please select category for this song"],
      enum: [
        "Country",
        "Electronic dance music (EDM) ",
        "Hip-hop",
        "Indie rock",
        "Jazz",
        "K-pop",
        "Metal",
        "Oldies",
        "Pop",
        "Rap",
        "Rhythm & blues (R&B)",
        "Rock",
        "Techno",
      ],
    },
    artist: {
      //TODO: We need to see about artist model and use of the object id
      type: String,
      default: "Jordi Anonymous",
    },
    duration: {
      type: Number,
    },
    url: {
      type: String,
      required: [true, "The URL is required!"],
    },
    owner: {
      type: String,
      ref: "user",
    },
    //   image: {
    //       type: String,

    //   },
  },
  {
    timestamps: true,
  }
);

const Song = mongoose.model("Song", SongSchema);

module.exports = {
  Song: Song,
};
