const Candidate  = require('../models/candidate');

function candidatesCreate(req, res){
  Candidate.create(req.body, (err, candidate) => {
      if (err) return res.status(500).json({ success: false, message: err });
      if (!candidate) return res.status(500).json({ success: false, message: 'Please send the correct information to create a candidate.' });
      return res.status(201).json(candidate);
    });
};

function candidatesIndex(req, res){
  Candidate.find({}, (err, candidates) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(candidates);
  });
}
function candidatesShow(req, res){
  Candidate.findById(req.params.id, (err, candidate) => {
    if (err) return res.status(500).json({ success: false, message: err})
    if(!candidate) return res.status(500).json({success: false, message: 'Person does not exist here'})
    return res.status(200).json(candidate);
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
