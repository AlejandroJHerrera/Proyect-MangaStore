const user = require('../models/userModel');

class userController {
  async findAll(req, res) {
    try {
      const users = await user.find({});
      res.send(users);
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  }

  async addUser(req, res) {
    console.log(req.body);
    let {
      name,
      lastName,
      email,
      birthday,
      gender,
      about,
      commentsCount,
      favoritesCount,
      likesGivenCount,
      avatar,
      language,
      country,
      hasPassword,
      isAdmin,
    } = req.body;
    try {
      const done = await user.create({
        name,
        lastName,
        email,
        birthday,
        gender,
        about,
        commentsCount,
        favoritesCount,
        likesGivenCount,
        avatar,
        language,
        country,
        hasPassword,
        isAdmin,
      });
      res.send({ done });
    } catch (error) {
      res.send(error);
    }
  }

  async delUser(req, res) {
    let id = req.body;
    console.log(id);
    try {
      const removed = await user.deleteOne(id);
      res.send({ removed });
    } catch (error) {
      res.send(error);
    }
  }

  async updateUser(req, res) {
    let { name, newName } = req.body;
    try {
      const updated = await user.updateOne({ name }, { name: newName });
      res.send({ updated });
    } catch (error) {
      res.send({ error });
    }
  }

  async searchUser(req, res) {
    let name = req.params;
    try {
      const result = await user.findOne(name);
      res.send({ result });
    } catch (error) {
      res.send({ error });
    }
  }
}

module.exports = new userController();
