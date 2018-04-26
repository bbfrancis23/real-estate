const Joi = require('joi');
const mongoose = require('mongoose');

const stateSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    maxlength: 63,
    unique: true
  },
  abbr:{
    type: String,
    required: true,
    minlength: 2,
    maxlength: 4
  }
});

const State = mongoose.model('State', stateSchema);

exports.stateSchema = stateSchema;
exports.State = State;
