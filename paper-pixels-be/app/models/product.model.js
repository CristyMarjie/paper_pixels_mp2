module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    unit_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    top_product: {
      type: DataTypes.STRING(10),
      defaultValue: 'N',
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  return Product;
};
