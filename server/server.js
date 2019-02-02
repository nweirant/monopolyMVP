const express = require('express');
const db = require('../db/index.js');
const {retrieve, save} = require('../db/')
const parser = require('body-parser')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/../public/'));
app.use(parser.json())

app.post('/leaders', function(req,res) {
  save(req.body)
  // .then(() => {
  //   retrieve()
  //   .then(data => {
  //     console.log('leaderboard: ', data);
  //   })
  // })
});

app.get('/leaders', function(req,res) {
  retrieve()
  .then(data => {
    console.log('data', data);
      res.send(data);
  })
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})
