const express = require('express');
const connectDB = require('./config/connectDB');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '/public')));

connectDB();
mongoose.connection.once('connected', () => {
      console.log('Connected to MongoDB');
      app.listen(process.env.PORT, () => {
          console.log(`Server is running on http://localhost:${process.env.PORT}`);
      });
});

module.exports = app;