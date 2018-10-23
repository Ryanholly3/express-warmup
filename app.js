const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const cakes = require('./data.json')

app.use(bodyParser.urlencoded({extended: false}));

app.get('/cakes', (req, res, next) =>{
  res.json({ cakes })
})

cakes.map((cake) =>{
  app.get(`/cake/:id`, (req, res, next) =>{
    const id = req.params.id;
    res.json({ cake: cake.id })
  })
})

app.listen(port, () =>{
  console.log(`You are on ${port} port`)
})
