const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Price = new Schema({

  Breed:{
    type: String
  },
  Location: {
    type: String
  },
  Date: {
    type: String
  },
  Quantity: {
    type: String
  },
  Min_Price: {
    type: String
  },
  Max_Price: {
    type: String
  },
  Avg_Price: {
    type: String
  },



  },
 {
  collection: 'Cocoon'
})

module.exports = mongoose.model('Price', Price)
