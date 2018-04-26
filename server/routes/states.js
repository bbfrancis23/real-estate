const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const {State} = require('../models/states');

router.get('/', async (req, res) => {
  const states = await State.find().sort('name');
  res.send(states);
});

module.exports = router;
