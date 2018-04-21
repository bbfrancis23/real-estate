const Joi = require('joi');
const mongoose = require('mongoose');

const Account = mongoose.model('Account', mongoose.Schema({
  email:{
    type: String,
    require: true,
    maxlength: 255,
    unique: true
  },
  password:{
    type: String,
    required: true,
    minlength: 4,
    maxlength: 1024
  },
  admin: {
    type: Boolean,
    default: false
  },
  rank: {
    type: Number,
    default: 0
  }
}));

function validateAccount(account){

  console.log(account);

  const schema = {
    email: Joi.string().max(255).required(),
    password: Joi.string().min(4).max(1024).required()
  };

  return Joi.validate(account, schema);
}

exports.Account = Account;
exports.validate = validateAccount;
