var express = require('express');
var router = express.Router();
var db = require('../database/index.js');


router.get('/:id', (req, res) => {
  var id = req.params.id;
  if (id) {
    db.getShopIdForProduct(id)
    .then((data) => {
      let resp = {
        results: []
      }
      resp.results = data;
      res.send(resp);
    })
    .catch((err) => {
      res.statusCode = 404;
      res.send(err);
    })
  }
});

module.exports = router;