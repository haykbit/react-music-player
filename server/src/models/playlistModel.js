const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const PlaylistSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter title to the playlist"],
      trim: true,
      minLength: [2, "Playlist title needs to have at least 2 characters"],
      maxLength: [50, "Playlist title cannot exceed 50 characters"],
    },
    description: {
      type: String,
      required: [true, "Please enter description to the playlist"],
      trim: true,
      minLength: [
        2,
        "Playlist description needs to have at least 2 characters",
      ],
      maxLength: [200, "Playlist description cannot exceed 200 characters"],
    },
    songs: {
      type: [{ type: Schema.Types.ObjectId, ref: "Song" }],
      default: [],
    },
    genre: {
      type: String,
      enum: {
        values: [
          "",
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
        "https://res.cloudinary.com/oasismusic/image/upload/v1634296905/jvtqj07mryvnnztjnc2r.png",
    },
    likes: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Playlist = mongoose.model("Playlist", PlaylistSchema);
module.exports = {
  Playlist: Playlist,
};
