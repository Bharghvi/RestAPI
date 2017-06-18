const express = require('express')
const routes = require('./routes/app')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.Promise= global.Promise

mongoose.connect('mongodb://localhost/coderrun')

const app = express();

app.use(express.static('public'))

app.use(bodyParser.json())

app.use('/api', routes)

app.use(function (err, req, res, next) {
  res.status(422).send(err.message);
})

app.listen(4000, function() {
  console.log('Listening to 4000');
})
