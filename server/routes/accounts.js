const {Account, validate } = require('../models/accounts');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

/*
router.get('/', async (req, res) =>{
  const accounts = await Account.find.sort('email');
  res.send(accounts);
});
// */

router.post('/', async (req, res) =>{
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let account = await Account.findOne({ email: req.body.email });
  if(account) return res.status(400).send('Account already registered.');

  account = new Account({ email: req.body.email, password: req.body.password });

  account = await account.save();

  res.send(account);
});


module.exports = router;
