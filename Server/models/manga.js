const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mangaSchema = new Schema(
  {
    mal_id: { type: Number, required: true, unique: true },
    title: { type: String, required: true, unique: true },
    title_japanese: { type: String, required: true },
    synopsis: { type: String },
    type: { type: String, required: true },
    themes: { type: Object, required: true },
    status: { type: String, required: true },
    rank: { type: Number },
    popularity: { type: Number, required: true },
    members: { type: Number, required: true },
    authors: { type: Object, required: true },
    demographics: { type: Object, required: true },
    images: { type: Object, required: true },
    chapters: { type: mongoose.Schema.Types.Mixed },
    publishing: { type: String, required: true },
    score: { type: mongoose.Schema.Types.Mixed },
  },

  { strictQuery: false }
);

module.exports = mongoose.model('manga', mangaSchema);
