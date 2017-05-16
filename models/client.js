const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
  name: { type: String, trim: true, required: true},
  image: {type: String},
  postcode: {type: String, maxlength: 9}
});

clientSchema.set('toJSON', { getters: true, setters: true, virtuals: false });

module.exports = mongoose.model('Client', clientSchema);
