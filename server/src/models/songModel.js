const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const SongSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please enter song name'],
    trim: true,
    maxLength: [100, 'Song name cannot exceed 100 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please enter song description'],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
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
  multimedia: [
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
  category: {
    type: String,
    required: [true, 'Please select category for this song'],
    enum: {
      values: [
        'Country',
        'Electronic dance music (EDM) ',
        'Hip-hop',
        'Indie rock',
        'Jazz',
        'K-pop',
        'Metal',
        'Oldies',
        'Pop',
        'Rap',
        'Rhythm & blues (R&B)',
        'Rock',
        'Techno',
      ],
      message: 'Please select correct category for song',
    },
  },
  band: {
    type: String,
    required: [true, 'Please enter band name'],
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
    },
  ],
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const Song = mongoose.model('Song', SongSchema)
module.exports = {
  Song: Song,
}
