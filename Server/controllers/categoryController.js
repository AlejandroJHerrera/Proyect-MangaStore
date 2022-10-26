const category = require('../models/category');

class categoryController {
  async findAll(req, res) {
    try {
      const cates = await category.find({});
      res.send(cates);
    } catch (error) {
      res.send({ error });
    }
  }

  async addCate(req, res) {
    try {
      const done = await category.insertMany(req.body);
      res.send({ done });
    } catch (error) {
      res.send({ error });
    }
  }
}

module.exports = new categoryController();
