// Dependencies
const express    = require('express');
const morgan     = require('morgan');
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');
const cors       = require('cors');
const app        = express();

const config     = require('./config/config');

// Connects to our database
mongoose.connect(config.db, () => {
  console.log(`Connected to ${config.db}`);
});

// Setting up our middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

// Listens on port
app.listen(config.port, () => {
  console.log(`We are listening on port: ${config.port}`);
})
