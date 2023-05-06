module.exports = (app) => {
  const order = require('../controllers/order.controller');

  let router = require('express').Router();

  // crud
  //create a order
  router.post('/', order.create);

  // retrieve all order
  router.get('/', order.findAll);

  // retrieve a single order
  router.get('/:id', order.findOne);

  //update a order
  router.put('/:id', order.update);

  // delete a order
  router.delete('/:id', order.delete);

  // delete all order
  router.delete('/', order.deleteAll);

  // mount
  app.use('/api/orders', router);
};
