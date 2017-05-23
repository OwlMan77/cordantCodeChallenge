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
const Candidate  =  require('../models/candidate.js');

//drop the database before seeding
Client.collection.drop();
Candidate.collection.drop();


async.waterfall([
  createClients,
  createCandidates
], function(err) {
  if (err) console.log(err);
  console.log('Seeding is complete');
  return process.exit();
});

//function to create Clients
function createClients(done){
  const clients = [
    {
  "name":"Ale",
  "image": "https://static.pexels.com/photos/1862/summer-sunshine-alcohol-drink.jpg"
  "postcode":"B4 7XG"
},
{
  "name":"Lager",
  "image": "https://static.pexels.com/photos/1862/summer-sunshine-alcohol-drink.jpg"
  "postcode":"B1 2AA"
},
{
  "name":"IPA",
  "image": "https://static.pexels.com/photos/1862/summer-sunshine-alcohol-drink.jpg"
  "postcode":"B28 8LE"
},
{
  "name":"Stout",
  "image": "https://static.pexels.com/photos/1862/summer-sunshine-alcohol-drink.jpg"
  "postcode":"B13 8PQ"
},
{
  "name":"Porter",
  "image": "https://static.pexels.com/photos/1862/summer-sunshine-alcohol-drink.jpg"
  "postcode":"B8 2LY"
},
{
  "name":"Bitter",
  "image": "https://static.pexels.com/photos/1862/summer-sunshine-alcohol-drink.jpg"
  "postcode":"B69 2BH"
},
{
  "name":"Red Ale",
  "image": "https://static.pexels.com/photos/1862/summer-sunshine-alcohol-drink.jpg"
  "postcode":"B20 2EZ"
},
{
  "name":"Pilsner",
  "image": "https://static.pexels.com/photos/1862/summer-sunshine-alcohol-drink.jpg"
  "postcode":"B7 4BG"
},
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
}
  ];

  bluebird.map(clients, client => {
  return Client.create(client);
}).then(() => {
  done(null);
});
}

function createCandidates(done){
  const candidates = [
    {
      name: 'Nick',
      image: 'http://www.placecage.com/200/300',
      postcode: 'NW9 4BQ',
      latitude: 51.5907607184934,
      longitude: -0.240021783009471,
      modeOfTransport: { type: 'DRIVING', speed: 38}
    },
    {
      name: 'Patrick',
      image: 'http://fillmurray.com/200/300',
      postcode: 'NW3 6UT',
      latitude: 51.5556379489108,
      longitude:-0.179983706447622,
      modeOfTransport: { type: 'DRIVING', speed: 38}
    },
    {
      name: 'Oscar',
      image: 'http://stevensegallery.com/200/300',
      latitude: 51.5854188839318,
      longitude: -0.232216943791419,
      postcode: 'NW4 4NH',
      modeOfTransport: { type: 'DRIVING', speed: 38}
    },
  ]
  bluebird.map(candidates, candidate => {
  return Candidate.create(candidate);
}).then(() => {
  done(null);
});
}
