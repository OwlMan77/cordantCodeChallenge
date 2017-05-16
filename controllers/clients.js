const Client = require('../models/client');

function clientIndex(req, res){
  Client.find({}, (err, clients) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(clients);
  });
}

function clientsCreate(req, res){
  Client.create(req.body, (err, client) => {
      if (err) return res.status(500).json({ success: false, message: err });
      if (!client) return res.status(500).json({ success: false, message: 'Please send the correct information to create a client.' });
      return res.status(201).json(client);
    });
};

function clientsShow(req, res){
  Client.findById(req.params.id, (err, client) => {
    if (err) return res.status(500).json({ success: false, message: err})
    if(!client) return res.status(500).json({success: false, message: 'Person does not exist here'})
    return res.status(200).json(client);
  })
}

function clientsUpdate(req, res){
  Client.findByIdAndUpdate(req.params.id, req.body.client, (err, client) => {
    if (err) return res.status(500).json({ success: false, message: err });
    if (!client) return res.status(500).json({ success: false, message: 'No client found' });
    return res.status(204).json({ success: true });
  })
}

function clientDelete(req, res) {
  Client.findByIdAndRemove(req.params.id, err => {
    if (err) return res.status(500).json({ success: false, message: err });
    return res.status(204).json({ success: true });
  });
}

module.exports = {
  index: clientIndex,
  create: clientsCreate,
  show: clientsShow,
  update: clientsUpdate,
  delete: clientDelete
};
