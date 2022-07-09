const express = require('express');
const path = require('path');
const app = express();
const port = 3001;
const mongoose = require('mongoose');
const db = require('./config/keys');
app.use(express.static(path.join(__dirname, '../client/build')));

app.listen(port, () => {
  mongoose
    .connect(db.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(`${err}`));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
