const {Account, validate } = require('../models/accounts');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const auth = require('../middleware/auth');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => { cb(null, './uploads') },
    filename: (req, file, cb) => { cb(null, file.fieldname + '-' + Date.now()+'.jpg') }
});

const upload = multer({storage: storage});

router.get('/logout', async(req,res)=>{
  res.clearCookie("token").catch((err) => {res.status(400).send({message: err})});
  res.send({message: 'Cookie cleared'});
});

router.post('/img', auth, upload.single('image'), async (req,res) =>{

  const account = await
    Account.findByIdAndUpdate(req.account._id,{ img: `/uploads/${req.file.filename}`, updated: Date.now() })
    .select('-password')
    .catch((err) =>  res.status(400).send({message: err}));

  res.send(account);
});

router.get('/me', auth, async (req, res)=>{
  const account = await Account.findById(req.account._id).select('-password').catch((err) =>  res.status(400).send({message: err}));
  res.send(account);
});

router.post('/address', auth, async (req, res) =>{
  const account = await Account.findByIdAndUpdate(req.account._id,{ address: req.body.address, updated: Date.now() }).select('-password').catch((err) =>  res.status(400).send({message: err}));
  res.send(account);
});

router.post('/name', auth, async (req, res)=>{
  const account = await Account.findByIdAndUpdate(req.account._id,{ name: req.body.name, updated: Date.now() }).select('-password').catch((err) =>  res.status(400).send({message: err}));
  res.send(account);
});

router.post('/phone', auth, async (req, res)=>{

  const account = await Account.findByIdAndUpdate(req.account._id,{ phone: req.body.phone, updated: Date.now() }).select('-password').catch((err) =>  res.status(400).send({message: err}));
  res.send({stataus: true});
});

router.post('/', async (req, res) =>{
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let account = await Account.findOne({ email: req.body.email });
  if(account) return res.status(400).send('Account already registered.');

  account = new Account({ email: req.body.email, password: req.body.password }).catch((err) =>  res.status(400).send({message: err}));
  const salt = await bcrypt.genSalt(10).catch((err) =>  res.status(400).send({message: err}));
  account.password = await bcrypt.hash(account.password, salt).catch((err) =>  res.status(400).send({message: err}));
  account = await account.save().catch((err) =>  res.status(400).send({message: err}));

  const token = account.generateAuthToken().catch((err) =>  res.status(400).send({message: err}));
  res.cookie('token', token, { maxAge: 1000 * 60 * 60 * 24 * 7 }).send({_id: account._id});
});



module.exports = router;
