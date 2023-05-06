module.exports = (app) => {
  const products = require('../controllers/product.controller');

  let router = require('express').Router();

  // crud
  //create a product
  router.post('/', products.create);

  // retrieve all product
  router.get('/', products.findAll);

  // retrieve a single product
  router.get('/:id', products.findOne);

  //update a product
  router.put('/:id', products.update);

  // delete a product
  router.delete('/:id', products.delete);

  // delete all products
  router.delete('/', products.deleteAll);

  // mount
  app.use('/api/products', router);
};
