const Joi = require('joi');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const accountSchema = mongoose.Schema({
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
  },
  name:{
    type: String,
    required: false,
    maxlength: 255
  }
});

accountSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({_id: this._id, admin: this.admin}, 'meaglin');
  return token;
}

const Account = mongoose.model('Account', accountSchema);

function validateAccount(account){
  const schema = {
    email: Joi.string().max(255).required(),
    password: Joi.string().min(4).max(1024).required()
  };

  return Joi.validate(account, schema);
}

exports.Account = Account;
exports.validate = validateAccount;
