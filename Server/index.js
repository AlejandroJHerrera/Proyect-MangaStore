const express = require('express'),
  app = express(),
  port = 4000,
  mongoose = require('mongoose');

cors = require('cors');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

async function connecting() {
  try {
    await mongoose.connect("mongodb://127.0.0.1/Proyect'");
    console.log('Connected to the DB');
  } catch (error) {
    console.log(
      "'ERROR: Seems like your DB is not running, please start it up !!!'"
    );
  }
}
connecting();

app.listen(port, () => {
  console.log('This server is running on port', port);
});
