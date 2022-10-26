const express = require('express'),
  app = express(),
  port = process.env.PORT || 4000,
  mongoose = require('mongoose'),
  mangaRoute = require('./routes/mangaRoutes'),
  userRoute = require('./routes/userRoutes'),
  categoryRoute = require('./routes/categoryRoutes');

require('dotenv').config();

cors = require('cors');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

async function connecting() {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('Connected to the DB');
  } catch (error) {
    console.log(
      "'ERROR: Seems like your DB is not running, please start it up !!!'"
    );
  }
}
connecting();

app.use('/manga', mangaRoute);
app.use('/user', userRoute);
app.use('/category', categoryRoute);

const path = require('path');

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(port, () => {
  console.log('This server is running on port', port);
});
