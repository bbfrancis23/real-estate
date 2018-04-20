const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const express = require('express');
const mongoose = require('mongoose');

const accounts = require('./server/routes/accounts');

const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

mongoose.connect('mongodb://localhost/re')
  .then(()=>console.log('connected to MongoDB...'))
  .catch(err => console.error('Counld not connect to MongoDB...'));

// Parsers
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// API location
app.use('/api/accouts',accounts);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || 3000;
app.set('port', port);
const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));
