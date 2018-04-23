const jwt = require('jsonwebtoken');
const Joi = require('joi');
const {Account } = require('../models/accounts');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');


router.post('/', async (req, res) =>{
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let account = await Account.findOne({ email: req.body.email });
  if(!account) return res.status(400).send('Invalid email or password');

  const validPassword = await bcrypt.compare(req.body.password, account.password);


  if (!validPassword) return res.status(400).send('Invalid email or password.');

  const token = jwt.sign({_id: account._id}, 'meaglin');

  res.send({token: token});
});

function validate(req){

  const schema = {
    email: Joi.string().max(255).required(),
    password: Joi.string().min(4).max(1024).required()
  };

  return Joi.validate(req, schema);
}

module.exports = router;
