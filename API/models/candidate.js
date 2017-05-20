const mongoose        = require('mongoose');

const candidateSchema = mongoose.Schema({
  name: { type: String, trim: true, required: true},
  image: {type: String},
  postcode: {type: String, maxlength: 9},
  latitude: {type: Number},
  longitude: {type: Number},
  modeOfTransport: {nameOfTransport: {type: String, trim: true}, speed:{type: Number}}
});

candidateSchema.set('toJSON', { getters: true, setters: true, virtuals: false });

module.exports = mongoose.model('Candidate', candidateSchema);
