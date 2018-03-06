const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');


router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/users/:name', function (req, res) {
  var singleName = req.params.name;
  var list = tweetBank.find( {name: singleName} );
  res.render('index', { tweets: list});
});



module.exports = router;

//route to see a specific user
//route to add a name