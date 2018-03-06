let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let jsonParser = bodyParser.json();
let db = require('../database/index.js');
let route = require('./router.js');
const cors = require('cors');

const PORT = 3001;
let app = express();
app.use(cors());

let morgan = require('morgan');
app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, '/../client/')));
// app.use('/v1/product', route);

app.get('/v1/products/:id', (req, res) => {
    var id = req.params.id;
    console.log(id);

  db.getShopIdForProduct(id)
      .then((data) => {
        const resp = {
          results: [],
        };
        // console.log("data is: " + data);
        resp.results = data;
        res.send(resp);
      })
      .catch((err) => {
        res.statusCode = 404;
        res.send(err);
      });
});

app.get('/v1/shops/:id', (req, res) => {
    var id = req.params.id;
    db.getShopInfo(id)
        .then((data) => {
            const resp = {
                results: data
            };
            res.send(resp);
        }).catch((err) => {
            res.statusCode = 404;
            res.send(err);
        });
});

app.get('/v1/shops/:shopid/products', (req, res) => {
    var id = req.params.shopid;
    db.getOtherImagesSameShop(id)
        .then((data) => {
            let products = [];
            data.forEach(ele => {
                products.push(ele.dataValues);
            });
            res.send(products);
        }).catch((err) => {
            res.statusCode = 404;
            res.send(err);
        });
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});