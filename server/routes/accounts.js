
const {Account, validate } = require('../models/accounts');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const auth = require('../middleware/auth');

const fs = require('fs');
const multer = require('multer');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {

      cb(null, './uploads')
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now()+'.jpg')
    }
});
var upload = multer({storage: storage});


router.get('/logout', async(req,res)=>{
  console.log('McFly');
  console.log(`before ${req.cookies.token}`);
  res.clearCookie("token");
  console.log(`before ${req.cookies.token}`);
  res.send({status: true});
});

router.post('/img', auth, upload.single('image'), async (req,res) =>{



  const account = await Account.findByIdAndUpdate(req.account._id,{
    img: `/uploads/${req.file.filename}`,
    updated: Date.now()
  }).select('-password');

  res.send({status: true});
});

router.get('/me', auth, async (req, res)=>{
  const account = await Account.findById(req.account._id).select('-password');
  res.send(account);
});

router.post('/address', auth, async (req, res) =>{

  const account = await Account.findByIdAndUpdate(req.account._id,{
    address: req.body.address,
    updated: Date.now()
  }).select('-password');

  res.send({status: true});
});

router.post('/name', auth, async (req, res)=>{

  const account = await Account.findByIdAndUpdate(req.account._id,{
    name: req.body.name,
    updated: Date.now()
  }).select('-password');

  res.send({stataus: true});
});

router.post('/phone', auth, async (req, res)=>{

  const account = await Account.findByIdAndUpdate(req.account._id,{
    phone: req.body.phone,
    updated: Date.now()
  }).select('-password');

  res.send({stataus: true});
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
