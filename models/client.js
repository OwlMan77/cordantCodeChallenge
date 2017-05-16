const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: { type: String, trim: true, required: true},
  postcode: {type: String, maxlength: 9}
});

module.exports = mongoose.model('Client', clientSchema);
