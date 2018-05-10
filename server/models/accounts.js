const Joi = require('joi');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const address = require('./address');

const accountSchema = mongoose.Schema({
  email:{
    type: String,
    require: true,
    maxlength: 255,
    unique: true
  },
  phone:{
    type: Number,
    require: false,
    maxlength: 10,
    minlength: 10
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
  },
  updated:{
    type: Date,
    required: false
  },
  type:{
    type: String,
    required: true,
    default: 'Agent'
  },
  img:{
    type: String,
    required: true,
    default: '/assets/img/blank-profile.png'
  },
  theme:{
    type: String,
    required: false
  },
  address: address.addressSchema,
  agent: {
    type: mongoose.Schema.Types.ObjectId,
    required: false
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
    password: Joi.string().min(4).max(1024).required(),
    name: Joi.string(),
    phone: Joi.string().min(10).max(10),
    type: Joi.string(),
    address: address.joiSchema,
    agent: Joi.objectId()
  };

  return Joi.validate(account, schema);
}

function validateTheme(theme){
  const schema = {
    theme: Joi.string().max(32).required()
  };

  return Joi.validate(theme,schema);
}

exports.Account = Account;
exports.validate = validateAccount;
exports.validateTheme = validateTheme;
