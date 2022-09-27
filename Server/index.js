const express = require('express'),
  app = express(),
  port = 4000,
  mongoose = require('mongoose'),
  mangaRoute = require('./routes/mangaRoutes'),
  userRoute = require('./routes/userRoutes');

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
app.listen(port, () => {
  console.log('This server is running on port', port);
});
