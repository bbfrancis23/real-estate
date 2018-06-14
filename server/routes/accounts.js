const {Account, validate, validateTheme } = require('../models/accounts');
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

/*
  Account Functions
*/

router.get('/logout', async(req,res)=>{
  res.clearCookie("token").catch((err) => {res.status(400).send({message: err})});
  res.send({message: 'Cookie cleared'});
});

router.post('/', async (req, res) =>{

  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let account = await Account.findOne({ email: req.body.email });
  if(account) return res.status(400).send('Account already registered.');

  account = new Account({ email: req.body.email, password: req.body.password, name: req.body.name, type: req.body.type, phone: req.body.phone, address: req.body.address, agent: req.body.agent});
  const salt = await bcrypt.genSalt(10).catch((err) =>  res.status(400).send({message: err}));
  account.password = await bcrypt.hash(account.password, salt).catch((err) =>  res.status(400).send({message: err}));

  account = await account.save().catch((err) =>  res.status(400).send({message: err}));

  //const token = account.generateAuthToken();
  //res.cookie('token', token, { maxAge: 1000 * 60 * 60 * 24 * 7 }).send({_id: account._id});

  res.send({_id: account._id});
});

router.get('/me', auth, async (req, res)=>{
  const account = await Account.findById(req.account._id).select('-password').catch((err) =>  res.status(400).send({message: err}));
  res.send(account);
});

/*
  Update functions
*/

router.post('/img', auth, upload.single('image'), async (req,res) =>{

  const account = await
    Account.findByIdAndUpdate(req.account._id,{ img: `/uploads/${req.file.filename}`, updated: Date.now() })
    .select('-password')
    .catch((err) =>  res.status(400).send({message: err}));


  account.img = `/uploads/${req.file.filename}`;
  res.send(account);
});

router.post('/address', auth, async (req, res) =>{
  const account = await Account.findByIdAndUpdate(req.account._id,{ address: req.body.address, updated: Date.now() }).select('-password').catch((err) =>  res.status(400).send({message: err}));
  res.send(account);
});

router.post('/name', auth, async (req, res)=>{
  if(req.body._id){
    const account = await Account.findByIdAndUpdate(req.body._id,{ name: req.body.name, updated: Date.now() }).select('-password').catch((err) =>  res.status(400).send({message: err}));
    res.send(account);
  }else{
    const account = await Account.findByIdAndUpdate(req.account._id,{ name: req.body.name, updated: Date.now() }).select('-password').catch((err) =>  res.status(400).send({message: err}));
    res.send(account);
  }

});

router.post('/email', auth, async(req, res) =>{
  if(req.body._id){
    console.log(req.body._id,req.body.email);
    const account = await Account.findByIdAndUpdate(req.body._id,{ email: req.body.email, updated: Date.now() }).select('-password').catch((err) =>  res.status(400).send({message: err}));
    res.send(account);
  }else{

  }
});

router.post('/phone', auth, async (req, res)=>{

  const account = await Account.findByIdAndUpdate(req.account._id,{ phone: req.body.phone, updated: Date.now() }).select('-password').catch((err) =>  res.status(400).send({message: err}));
  res.send(account);
});

router.post('/promote', auth, async(req, res) =>{
  const account = await Account.findByIdAndUpdate(req.account._id,{ rank: req.body.rank, updated: Date.now() }).select('-password').catch((err) =>  res.status(400).send({message: err}));
  res.send(account);
});

/*
  Agent functions
*/


router.get('/clients', auth, async (req, res) =>{
  const account = await Account.findById(req.account._id).select('-password').catch((err) =>  res.status(400).send({message: err}));

  const clients = await  Account.find({ agent: account._id}).sort('name').select('-password').catch((err) => res.status(400).send({message: err}));

  res.send(clients);
});

router.post('/theme', auth, async(req, res) =>{
  const { error } = validateTheme(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const account = await Account.findByIdAndUpdate(req.account._id,{ theme: req.body.theme, updated: Date.now() }).select('-password').catch((err) =>  res.status(400).send({message: err}));
  res.send(account);
})

module.exports = router;
