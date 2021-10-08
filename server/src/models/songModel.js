const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const SongSchema = new Schema({
  title: {
    type: String,
    required: [true, "Please enter title song"],
    trim: true,
    maxLength: [30, "Song title cannot exceed 30 characters"],
  },
  artist: {
    type: String,
    required: [true, "Please enter artist song"],
    trim: true,
    maxLength: [30, "Song artist cannot exceed 30 characters"],
  },
  genre: {
    type: String,
    required: [true, "Please select genre for this song"],
    enum: {
      values: [
        "Country",
        "Electronic dance music (EDM)",
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
        "Folk",
        "Ska",
        "Reggae",
        "Punk",
      ],
      message: "Please select correct genre for song",
    },
  },
  duration: {
    type: Number,
    default: 0,
  },
  url: {
    type: String,
    required: true,
  },
  album: {
    type: String,
  },
  // album: {
  //   type: mongoose.Schema.ObjectId,
  //   ref: "Album",
  //   required: false,
  // },
  // private: {
  //   type: Boolean,
  //   required: true,
  // },
  owner: {
    // type: mongoose.Schema.ObjectId,
    type: String,
    ref: "User",
    required: true,
  },
  popularity: {
    type: Number,
    default: 0,
  },
  includedLists: {
    type: [{ type: Schema.Types.ObjectId, ref: "Playlist" }],
    required: true,
    default: [],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Number,
  },
  likedBy: {
    // type: [{ type: Schema.Types.ObjectId, ref: "user" }],
    type: Array,
    default: [],
  },
  played: {
    type: Number,
  },
});

const Song = mongoose.model("Song", SongSchema);
module.exports = {
  Song: Song,
};
