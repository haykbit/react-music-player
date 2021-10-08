const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const PlaylistSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter title to the playlist"],
      trim: true,
      maxLength: [20, "Playlist title cannot exceed 20 characters"],
    },
    description: {
      type: String,
      required: [true, "Please enter description to the playlist"],
      trim: true,
      maxLength: [30, "Playlist description cannot exceed 30 characters"],
    },
    songs: {
      type: [{ type: Schema.Types.ObjectId, ref: "Song" }],
      default: [],
    },
    genre: {
      type: String,
      // required: [true, "Please select genre for this playlist"],
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
        message: "Please select correct genre for playlist",
      },
    },
    private: {
      type: Boolean,
      required: true,
    },
    owner: {
      type: String,
      ref: "User",
      required: true,
    },
    playlistImage: {
      type: String,
      default:
        "https://res.cloudinary.com/dzaxp8xwy/image/upload/v1633701663/jfjiknlvclszu5ci86dm.png",
    },
    likes: {
      type: Number,
      default: 0,
    },
  },
  { timestamp: true }
);

const Playlist = mongoose.model("Playlist", PlaylistSchema);
module.exports = {
  Playlist: Playlist,
};
