const db = require('../models');
const Product = db.product;
const Op = db.Sequelize.Op;

// create a product
exports.create = (req, res) => {
  // validated request
  if (
    !req.body.name ||
    !req.body.description ||
    !req.body.unit_price ||
    !req.body.top_product ||
    !req.body.image
  ) {
    res.status(400).send({
      message: 'All fields are required.',
    });
  }

  // create a product
  const product = {
    name: req.body.name,
    description: req.body.description,
    unit_price: req.body.unit_price,
    top_product: req.body.top_product,
    image: req.body.image,
  };

  // use model to save the database
  Product.create(product)
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(500).send({
        message:
          err.message || `Some error occured while creating this product.`,
      })
    );
};
// retrieve all product
exports.findAll = (req, res) => {
  // query param
  // ?key=value
  // localhost:3002/api/product?description
  // reqeust.query.description
  // req.query.name

  const top_product = req.query.top_product;
  // SELECT * FROM products WHERE description LIKE '%{descripton}%';
  let condition = top_product
    ? { top_product: { [Op.like]: `%${top_product}%` } }
    : null;

  // console.log(description);
  // condition.log(condition);

  Product.findAll({ where: condition })
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(500).send({
        message: err.message || `Some error occured while retrieving tasks`,
      })
    );
};

// retrieve a single product
exports.findOne = (req, res) => {
  const id = req.params.id;

  Product.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot retrieve product with id='${id}'`,
        });
      }
    })
    .catch((err) =>
      res.status(500).send({
        message: err.message || `Cannot retrieve product with id=${id}`,
      })
    );
};
// update a product
exports.update = (req, res) => {
  const id = req.params.id;

  Product.update(req.body, { where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: `Product was successfully updated`,
        });
      } else {
        res.send({
          message: `Cannot update task with id=${id}. Product not found on record.`,
        });
      }
    })
    .catch((err) =>
      res
        .status(500)
        .send({ message: err.message || `Cannot update product with id=${id}` })
    );
};
// delete a product
exports.delete = (req, res) => {
  const id = req.params.id;

  Product.destroy({ where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: `Product was successfully deleted`,
        });
      } else {
        res.send({
          message: `Cannot delete task with id=${id}. Product not found on record.`,
        });
      }
    })
    .catch((err) =>
      res
        .status(500)
        .send({ message: err.message || `Cannot delete product with id=${id}` })
    );
};
// delete all products
exports.deleteAll = (req, res) => {
  Product.destroy({ where: {}, truncate: false })
    .then((nums) => {
      res.send({
        message: `${nums} products were deleted succesfully.`,
      });
    })
    .catch((err) =>
      res.status(500).send({
        message:
          err.message || `Some error occured during removal of all tasks`,
      })
    );
};
