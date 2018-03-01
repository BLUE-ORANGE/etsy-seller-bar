let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let jsonParser = bodyParser.json();
let db = require('../database/index.js');
let route = require('./router.js');

const PORT = 3001;
let app = express();

let morgan = require('morgan');
app.use(morgan('combined'));

app.use(express.static('public'))
// app.use('/v1/product', route);

app.get('/v1/products/:id', (req, res) => {
    var id = req.params.id;
    console.log(id);
  db.getShopIdForProduct(id, (err, data) => {
    console.log('err: ' + err);
    console.log('data: ' + data);
    if (err) {
      console.log(`err retrieving images: ${err}`);
      res.statusCode = 404;
      res.send('Not found');
    }  else {
        console.log(data);
        res.send(data);   
    }
  })
})

// app.get('/v1/products/:id', (req, res) => {
//     var id = req.params.id;
//     console.log(id);
//   db.getShopIdForProduct(id)
//       .then(data => {
//       res.send(data);
//   })
//   .catch(err => {
//     res.statusCode = 404
//     res.send(err);
//   })
//   });




app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});