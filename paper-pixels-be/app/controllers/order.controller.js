const db = require('../models');
const Order = db.order;
const Op = db.Sequelize.Op;

// create a order
exports.create = (req, res) => {
  // validated request
  if (
    !req.body.customer_name ||
    !req.body.shipping_address ||
    !req.body.quantity
  ) {
    res.status(400).send({
      message: '*Required fields cannot be empty.',
    });
  }

  // create a order
  const order = {
    product_name: req.body.product_name,
    customer_name: req.body.customer_name,
    shipping_address: req.body.shipping_address,
    quantity: req.body.quantity,
    total_amount: req.body.total_amount,
    shipping_cost: req.body.shipping_cost,
    order_status: req.body.order_status
  };

  // use model to save the database
  Order.create(order)
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(500).send({
        message: err.message || `Some error occured while creating this order.`,
      })
    );
};
// retrieve all order
exports.findAll = (req, res) => {
  const order_status = req.query.order_status;
  let condition = order_status
    ? { order_status: { [Op.like]: `%${order_status}` } }
    : null;

  // console.log(`cont_stat : ${order_status}`);
  // condition.log(condition); .then((datas) => res, send(datas))

  Order.findAll({ where: condition })
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(500).send({
        message: err.message || `Some error occured while retrieving tasks`,
      })
    );
};

// retrieve a single order
exports.findOne = (req, res) => {
  const id = req.params.id;

  Order.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot retrieve order with id='${id}'`,
        });
      }
    })
    .catch((err) =>
      res
        .status(500)
        .send({ message: err.message || `Cannot retrieve order with id=${id}` })
    );
};

// update an order
exports.update = (req, res) => {
  const id = req.params.id;

  Order.update(req.body, { where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: `Order was successfully updated`,
        });
      } else {
        res.send({
          message: `Cannot update task with id=${id}. Order not found on record.`,
        });
      }
    })
    .catch((err) =>
      res
        .status(500)
        .send({ message: err.message || `Cannot update order with id=${id}` })
    );
};
// delete a order
exports.delete = (req, res) => {
  const id = req.params.id;

  Order.destroy({ where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: `Order was successfully deleted`,
        });
      } else {
        res.send({
          message: `Cannot delete task with id=${id}. Order not found on record.`,
        });
      }
    })
    .catch((err) =>
      res
        .status(500)
        .send({ message: err.message || `Cannot delete order with id=${id}` })
    );
};
// delete all orders
exports.deleteAll = (req, res) => {
  Order.destroy({ where: {}, truncate: false })
    .then((nums) => {
      res.send({
        message: `${nums} orders were deleted succesfully.`,
      });
    })
    .catch((err) =>
      res.status(500).send({
        message:
          err.message || `Some error occured during removal of all tasks`,
      })
    );
};
