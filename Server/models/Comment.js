const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    name: { type: String },
    desc: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('comment', commentSchema);