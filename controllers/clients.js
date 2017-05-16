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

function clientsShow(req, res){
  Client.findById(req.params.id, (err, show) => {
    if (err) return res.status(500).json({ success: false, message: err})
    if(!client) return res.status(500).json({success: false, message: 'Person does not exist here'})
    return res.stat(200).json(client);
  })
}

function clientsUpdate(req, res){
  Client.findByIdAndUpdate(req.params.id, req.body.clients, (err, client) => {
    if (err) return res.status(500).json({ success: false, message: err });
    if (!client) return res.status(500).json({ success: false, message: 'No client found' });
    return res.status(204).json({ success: true });
  })
}

module.exports = {
  index: clientIndex,
  create: clientsCreate,
  show: clientsShow,
  update: clientsUpdate
};
