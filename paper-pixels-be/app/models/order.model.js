module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('order', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customer_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shipping_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total_amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    shipping_cost: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    order_status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return Order;
};
