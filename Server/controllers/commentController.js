const { default: mongoose } = require('mongoose');
const comment = require('../models/Comment');
const manga = require('../models/manga');

class commentController {
  async addComment(req, res) {
    let mal_id = req.params.id;
    let newComment = new comment(req.body);
    try {
      const savedComment = await newComment.save();
      try {
        await manga.findOneAndUpdate(mal_id, {
          $push: { comment: savedComment._id },
        });
      } catch (error) {
        return res.json({
          ok: false,
          message: 'Unable to save comment on user',
        });
      }
      res.status(200).json(savedComment);
    } catch (error) {
      return res.json({ ok: false, message: 'Comment not saved' });
    }
  }

  async getComment(req, res) {
    let id = req.params.id;
    try {
      const allComments = await comment.find({ mal_id: id });
      res.status(200).json(allComments);
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = new commentController();
