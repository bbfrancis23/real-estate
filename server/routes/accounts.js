const {Account, validate } = require('../models/accounts');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) =>{
  const accounts = await Account.find.sort('email');
  res.send(accounts);
})

module.exports = router;
