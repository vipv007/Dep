const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DateSchema = new Schema({
  selectedDate: {
    type: Date
  },
  selectedLocation: {
    type:String
  }
}, {
  collection: 'Date_Details'
});

module.exports = mongoose.model('DateModel', DateSchema);
