const Candidate  = require('../models/candidate');

function candidatesCreate(req, res){
  Candidate.find({}, (err, candidates) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(candidates);
  });
};

function candidatesIndex(req, res){
  Candidate.find({}, (err, users) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(users);
  });
}
function candidatesShow(req, res){
  Candidate.findById(req.params.id, (err, show) => {
    if (err) return res.status(500).json({ success: false, message: err})
    if(!Candidate) return res.status(500).json({success: false, message: 'Person does not exist here'})
    return res.stat(200).json(candidate);
  })
}

function candidatesUpdate(req, res){
  Candidate.findByIdAndUpdate(req.params.id, req.body.candidates, (err, candidate) => {
    if (err) return res.status(500).json({ success: false, message: err });
    if (!candidate) return res.status(500).json({ success: false, message: 'No candidate found' });
    return res.status(204).json({ success: true });
  })
}

function candidateDelete(req, res) {
  candidate.findByIdAndRemove(req.params.id, err => {
    if (err) return res.status(500).json({ success: false, message: err });
    return res.status(204).json({ success: true });
  });
}

module.exports = {
  create: candidatesCreate,
  index: candidatesIndex,
  show: candidatesShow,
  update: candidatesUpdate,
  delete: candidateDelete
}
