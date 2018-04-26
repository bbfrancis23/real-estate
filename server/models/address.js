const Joi = require('joi');
const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({

  updated:{
    type: Date,
    required: false
  },
  address:{
    type: String,
    maxlength: 1024,
    required: true,
  },
  city:{
    type: String,
    required: true,
    maxlength: 255,
  },
  state:{
    type: String,
    required: true,
    minlength: 2,
    maxlength: 4
  },
  zip:{
    type: String,
    required: true,
    maxlength: 10,
    minlength: 5
  }

});

const Address = mongoose.model('Address', addressSchema);

function validateAddress(account){
  const schema = {
    address: Joi.string().max(1024).required(),
    city: Joi.string().max(255).required(),
    state: Joi.string().min(2).max(4).required(),
    zip: Joi.string().min(5).max(10).require()
  };

  return Joi.validate(address, schema);
}

exports.Address = Address;
exports.addressSchema = addressSchema;
exports.validate = validateAddress;
