const mongoose = require('mongoose')

const songSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter song name'],
        trim: true,
        maxLength: [100, 'Product name cannot exceed 100 characters']
    },
    description: {
        type: String,
        required: [true, 'Please enter song description'],
    },
    ratings: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
        }
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
                "Metal",
                'Oldies',
                'Pop',
                'Rap',
                'Rhythm & blues (R&B)',
                'Rock',
                'Techno',
            ],
            message: 'Please select correct category for song'
        }
    },
    author: {
        type: String,
        required: [true, 'Please enter product author']
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: 'User',
                required: true
            },
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            }
        }
    ],
    author: {
        type: mongoose.Schema.ObjectId,
        ref: 'Author',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Song', songSchema);