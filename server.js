// Dependencies
const express    = require('express');
const morgan     = require('morgan');
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');
const cors       = require('cors');
const app        = express();

const config     = require('./API/config/config');
const routes     = require('./API/config/routes')

// Connects to our database
mongoose.connect(config.db, () => {
  console.log(`Connected to ${config.db}`);
});

// Setting up our
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(routes);

// Listens on port
app.listen(config.port, () => {
  console.log(`We are listening on port: ${config.port}`);
})
