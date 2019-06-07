const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Rescuer = new Schema({
  name: {
    type: String
  },
  surname: {
    type: String
  },
  doctor: {
    type: Date
  },
  train: {
    type: Date
  },
  kpp: {
    type: Date
  },
  ground1: {
    type: Date
  },
  ground2: {
    type: Date
  },
  osrg1: {
    type: Date
  },
  osrg2: {
    type: Date
  },
  under1: {
    type: Date
  },
  under2: {
    type: Date
  }
});
module.exports = mongoose.model('Rescuer', Rescuer);