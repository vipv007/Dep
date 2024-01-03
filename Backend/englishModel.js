const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EnglishDetailsSchema = new Schema({
  Stage: {
    type: String,
    required: true
  },
  feedDays: {
    type: Number,
    required: true
  },
  disinfectant: {
    type: String,
    required: true
  },
  startBedSize: {
    type: String,
    required: true
  },
  endBedSize: {
    type: String,
    required: true
  },
  detailAge: {
    type: Number,
    required: true
  }
}, {
  collection: 'English_Details'
});

module.exports = mongoose.model('EnglishDetails', EnglishDetailsSchema);
