const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StageSchema = new Schema({
  stage: {
    type: String,
    required: true
  },
  feedDays: {
    type: Number,
    required: true
  },
  disinfectant: {
    type: String
  },
  startBedSize: {
    type: String
  },
  endBedSize: {
    type: String
  },
  detailAge: {
    type: Number
  }
}, {
  collection: 'Stages' 
});

const StageModel = mongoose.model('StageModel', StageSchema);

module.exports = StageModel;
