const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mangaSchema = new Schema(
  {
    type: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    synopsis: { type: String, required: true },
    averageRating: { type: Number, required: true },
    userCount: { type: Number, required: true },
    favortiesCount: { type: Number, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    ageRating: { type: String, required: true },
    status: { type: String, required: true },
    posterImage: { type: String, required: true },
    episodeCount: { type: Number, required: true },
    youtubeVideoId: { type: String, required: true },
    category: { type: String, required: true, unique: false },
    categoryId: { type: String, required: true },
  },

  { strictQuery: false }
);

module.exports = mongoose.model('manga', mangaSchema);
