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
      userId,
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
        userId,
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
}

module.exports = new userController();
