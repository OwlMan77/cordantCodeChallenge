const Client = require('../models/client');

function clientIndex(req, res){
  Client.find({}, (err, clients) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(clients);
  });
}

function clientsCreate(req, res){
  const client = new Client(req.body.client);

  client.save((err, client) => {
    if(err) return res.status(500).json(err);
    return res.status(201).json(client);
  });
};

module.exports = {
  index: clientIndex,
  create: clientsCreate
};
