const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const path = require('path');
app.use(express.static(path.join(__dirname,'/dist')));

const parser = require('body-parser');
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dojoproject');
mongoose.connection.on('connected', () => console.log('connected to MongoDB'));

mongoose.Promise = global.Promise;
const { Schema } = mongoose;
const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: [true, 'The user name is required'],
    minlength: [3, 'The user name length must be greater than 3'],
    unique: false
  },
  email: {
    type: String,
    trim: true,
    required: [true, 'The user email is required'],
    minlength: [6, 'The emsil length must be greater than 6'],
    unique: true
  },
  pass: {
    type: String,
    trim: true,
    required: [true, 'The password is required'],
    minlength: [6, 'The password length must be greater than 6'],
    unique: false
  }
});


userSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });
const User = mongoose.model('User', userSchema);

const userController = {
  login: (req, res) => {
    User.find({user})
      .then(user => res.json(user))
      .catch(error => console.log(error));
  },
  registration: (req, res) => {
    User.create(req.body)
      .then(user => res.json(user))
      .catch(error => console.log(error));
  }
};

app
  .get('/login', userController.login)
  .post('/register', userController.registration)
  .all("*", (req, res, next) => {
    res.sendFile(path.resolve("./dist/index.html"))
  });

app.listen(port , () => {console.log(`listening on port ${port}`)});
