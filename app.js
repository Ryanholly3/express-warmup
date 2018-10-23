const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const cakes = require('./data.json')

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res, next) =>{
  res.send('🐭')
})

app.get('/cake', (req, res, next) =>{
  res.json({ cakes })
})

app.get(`/cake/:id`, (req, res, next) =>{
  const id = req.params.id;
  for(let i = 0; i < cakes.length; i++){
    const cakeChoice = cakes.filter((cake) =>{
      return cake.id == id
    })[0];
  res.json({ cake: cakeChoice })
  }
})

app.post('/cake', (req, res) =>{
  let body = req.body;
  cakes.push(body);
  res.json({ cakes: cakes })
})

app.listen(port, () =>{
  console.log(`You are on ${port} port`)
})
