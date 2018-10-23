const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));



app.listen(port, () =>{
  console.log(`You are on ${port} port`)
})
