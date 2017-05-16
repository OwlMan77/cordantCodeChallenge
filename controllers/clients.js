const Client = require('../models/client');

function clientIndex(req, res){
  Client.find({}, (err, clients) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(clients);
  });
}


module.exports = {
  index: clientIndex,
};
