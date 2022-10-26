require('dotenv').config();
const user = require('../models/userModel'),
  argon2 = require('argon2'),
  jwt = require('jsonwebtoken'),
  validator = require('validator');
const jwt_secret = process.env.JWT_SECRET;

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

  async register(req, res) {
    const { name, lastName, email, password } = req.body;
    if (!name || !lastName || !email || !password)
      return res.json({ ok: false, message: 'All fields required.' });
    if (!validator.isEmail(email))
      return res.json({ ok: false, message: 'Invalid credentials' });
    try {
      const user1 = await user.findOne({ email });
      if (user1) return res.json({ ok: false, message: 'Invalid credentials' });
      const hash = await argon2.hash(password);
      console.log('hash ==> ', hash);
      const newUser = {
        name,
        lastName,
        email,
        password: hash,
      };
      await user.create(newUser);
      res.json({ ok: true, message: 'Successfully registered!' });
    } catch (error) {
      res.json({ ok: false, error });
    }
  }

  async login(req, res) {
    debugger;
    const { email, password } = req.body;
    if (!email || !password)
      return res.json({ ok: false, message: 'All fields required' });
    if (!validator.isEmail(email))
      return res.json({ ok: false, message: 'Invalid data provided' });

    try {
      const User = await user.findOne({ email });
      if (!User)
        return res.json({
          ok: false,
          message: 'No account found with this email',
        });
      const match = await argon2.verify(User.password, password);
      if (match) {
        const token = jwt.sign(
          { userEmail: User.email, userName: User.name },
          jwt_secret,
          {
            expiresIn: '1hr',
          }
        );
        res.json({ ok: true, message: 'Welcome back', token, email });
      } else return res.json({ ok: false, message: 'Invalid data provided' });
    } catch (error) {
      res.json({ ok: false, error });
    }
  }

  verify_token = (req, res) => {
    console.log(req.headers.authorization);
    const token = req.headers.authorization;
    jwt.verify(token, jwt_secret, (err, succ) => {
      err
        ? res.json({ ok: false, message: 'something went wrong' })
        : res.json({ ok: true, succ });
    });
  };

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
    console.log(req.body._id);
    try {
      const User = await user.findOne({ _id: req.body._id });
      Object.assign(User, req.body);
      User.save();
      res.send({ data: User });
    } catch {
      res.send({ error: 'No user with that Id' });
    }
  }

  async searchUser(req, res) {
    let email = req.params;
    try {
      const result = await user.findOne(email);
      res.send(result);
    } catch (error) {
      res.send({ error });
    }
  }
}

module.exports = new userController();
