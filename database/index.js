// import { config } from '../../../Library/Caches/typescript/2.6/node_modules/@types/bluebird';

const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const sequelize = new Sequelize('etsy-scratch', 'student', 'student', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const Shop = sequelize.define('shop', {
  avatarurl: Sequelize.TEXT,
  name: Sequelize.STRING
},{
  schema: 'public'
});

const Product = sequelize.define('product', {
  name: Sequelize.TEXT,
  imageUrl: Sequelize.TEXT,
  shopId: Sequelize.INTEGER
},{
  schema: 'public'
});

Product.belongsTo(Shop, {foreignKey: 'shopId'});

// Shop.findOne().then(shops => {
//     console.log(shops)
//   })

let getShopIdForProduct = (id, cb) => {
  Product.findAll({
    // attributes: ['shopId'],
    where: {
      id: id
    }
  })
  .then(shopId => {
      cb(null, shopId[0].dataValues.shopId);
  })
  .catch((err) => {
      console.log(err);
    cb(err, null);
   });
}

let getOtherImagesSameShop = (prod, shop, cb) => {
    Product.findAll({
        where: {
            shopId: shop,
            id: {
                [Op.ne]: prod
            }
        }
    })
    .then(results => {
        let output = [];
        results.forEach((ele) => {
            output.push(ele.dataValues.imageUrl)
        })
        console.log(output);
    })
}

let getShopInfo = (id, cb) => {
    Shop.findAll({
        where: {
            id: id
        }
    })
    .then(shop => {
        cb(null, [shop[0].dataValues.avatarurl, shop[0].dataValues.name]);
    })
    .catch((err) => {
      cb(err, null);
    });
}

// getShopIdForProduct(40, (err, data) => {getShopInfo(data, (err1, data1) => {
//     console.log(data1[0] + ': URL');
//     console.log(data1[1] + ': shop name');
// })});

// getOtherImagesSameShop(40, 13);


getShopIdForProduct(40, (err, data) => {
    if (err) {
      console.log(`err retrieving images: ${err}`);
    }  else {
        console.log('blah' + data);  
    }
  })

module.exports.getOtherImagesSameShop = getOtherImagesSameShop;
module.exports.getShopInfo = getShopInfo;
module.exports.getShopIdForProduct = getShopIdForProduct;