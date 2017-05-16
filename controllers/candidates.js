const Candidate  = require('../models/candidate');

function candidatesCreate(req, res){
  Candidate.find({}, (err, candidates) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(candidates);
  });
};

module.exports = {
  create: candidatesCreate
}
