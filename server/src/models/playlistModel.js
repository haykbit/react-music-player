const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const PlaylistSchema = new Schema({
  title: {
    type: String,
    required: [true, "Please enter title to the playlist"],
    trim: true,
    maxLength: [20, "Playlist title cannot exceed 30 characters"],
  },
  description: {
    type: String,
    required: [true, "Please enter description to the playlist"],
    trim: true,
    maxLength: [30, "Playlist description cannot exceed 30 characters"],
  },
  songs: {
    type: mongoose.Schema.ObjectId,
    ref: "Song",
    required: true,
  },
  genre: {
    type: String,
    required: [true, "Please select genre for this song"],
    enum: {
      values: [
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
      message: "Please select correct genre for song",
    },
  },
  private: {
    type: Boolean,
    required: true,
  },
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
    //Owner name?
  },
  playlist_image: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  popularity: {
    type: Number,
    default: 0,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Playlist = mongoose.model("Playlist", PlaylistSchema);
module.exports = {
  Playlist: Playlist,
};
