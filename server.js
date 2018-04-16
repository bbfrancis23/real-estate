const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => res.send('Hello World again'));
app.get('/api/courses', (req, res)=>  res.send([1,2,3,4]));
app.get('/api/courses/:id', (req, res) => res.send(req.params.id));

const port = process.env.PORT || 3000;
app.listen(3000, ()=> console.log(`Listening on port ...${port}`));
