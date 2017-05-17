// Dependencies
const express    = require('express');
const morgan     = require('morgan');
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');
const cors       = require('cors');
const app        = express();

const config     = require('./API/config/config');
const routes     = require('./API/config/routes')
const dest       = `${__dirname}/public`
// Connects to our database
mongoose.connect(config.db, () => {
  console.log(`Connected to ${config.db}`);
});

// Setting up our middleware
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', routes);
app.use(express.static(`${__dirname}/public`));
app.use(express.static(`${__dirname}/bower_components`));

app.get('/*', (req, res) => res.sendFile(`${dest}/index.html`));

// Listens on port
app.listen(config.port, () => {
  console.log(`We are listening on port: ${config.port}`);
})
