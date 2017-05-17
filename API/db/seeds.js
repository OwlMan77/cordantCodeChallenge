//dependencies
const mongoose    = require('mongoose');
const async       = require('async');
const config      = require('../config/config');
const bluebird    = require('bluebird');

//setting up Promise to build and drop our database
mongoose.Promise  = bluebird;

//connect mongoose
mongoose.connect(config.db);

//Models
const Client      =  require('../models/client.js');
const Candidates  =  require('../model/candidate.js');

//drop the database before seeding
Client.collection.drop();
Candidates.collection.drop();


async.waterfall([
  createClients
], function(err) {
  if (err) console.log(err);
  console.log('Seeding is complete');
  return process.exit();
});

//function to create Clients
function createClients(done){
  const clients = [
    {
      name: 'Codoo',
      image: 'https://img.clipartfest.com/ccb70b5901d2abf1a22bb0e019976e83_non-copyrighted-clipart-non-copyright-clipart_615-615.jpeg',
      postcode: 'NW10 1HL '
    },
    {
      name: 'Premba',
      image: 'https://cliparts.zone/thu/21599.jpg',
      postcode: 'NW1 5BY'
    },
    {
      name: 'Transize',
      image: 'https://yt3.ggpht.com/-xOb_ezWTKr0/AAAAAAAAAAI/AAAAAAAAAAA/kZH4wJ2soqM/s900-c-k-no-mo-rj-c0xffffff/photo.jpg',
      postcode: 'NW8 0DU'
    },
  ]
  bluebird.map(clients, client => {
  return Client.create(client);
}).then(() => {
  done(null);
});
}
