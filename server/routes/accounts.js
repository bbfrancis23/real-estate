
const {Account, validate } = require('../models/accounts');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const auth = require('../middleware/auth');



router.get('/me', auth, async (req, res)=>{
  const account = await Account.findById(req.account._id).select('-password');
  res.send(account);
});

router.post('/name', auth, async (req, res)=>{

  const account = await Account.findByIdAndUpdate(req.account._id,{
    name: req.body.name
  }).select('-password');


});

router.post('/', async (req, res) =>{
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let account = await Account.findOne({ email: req.body.email });
  if(account) return res.status(400).send('Account already registered.');

  account = new Account({ email: req.body.email, password: req.body.password });
  const salt = await bcrypt.genSalt(10);
  account.password = await bcrypt.hash(account.password, salt);

  account = await account.save();

  //const token = jwt.sign({_id: account._id}, 'meaglin');

  const token = account.generateAuthToken();

  res.header('x-auth-token', token).send({email: account.email, _id: account._id});
  //res.send({email: account.email, _id: account._id});
});



module.exports = router;
