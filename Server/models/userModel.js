const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String, require: true },
    lastName: { type: String, require: true },
    email: { type: String, require: true },
    birthday: { type: Date, require: true },
    userId: { type: Number, require: true, unique: true },
    gender: { type: String, require: true },
    about: { type: String, require: true },
    commentsCount: { type: Number, require: true },
    favoritesCount: { type: Number, require: true },
    likesGivenCount: { type: Number, require: true },
    avatar: { type: String, require: true },
    language: { type: String, require: true },
    country: { type: String, require: true },
    hasPassword: { type: String, require: true },
    isAdmin: { type: Boolean, require: true, default: false },
  },
  { strictQuery: false }
);

module.exports = mongoose.model('user', userSchema);
