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

  const validPassword = bcrypt.compare(req.body.password, account.password );
  if(!validPassword) return res.status(400).send('Invalid email or password');

  res.send(true);
});

function validate(req){

  console.log(account);

  const schema = {
    email: Joi.string().max(255).required(),
    password: Joi.string().min(4).max(1024).required()
  };

  return Joi.validate(account, schema);
}

module.exports = router;
