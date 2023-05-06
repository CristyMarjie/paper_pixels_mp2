if (process.env.NODE_ENV !== 'production') require('dotenv').config();

// console.log('App,js is now running...');
// console.log(`DBUSER: ${process.env.DBUSER}`);
// console.log(`DBPASSWORD: ${process.env.DBPASSWORD}`);

const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
// const corsOptions = {
//   origin: 'http://localhost:3000',
// };
const corsOptions = {
  origin: [
       'https://grp06.webpark.tech',
       'http://localhost:3000',
    'http://grp06.webpark.tech',
  ],
};


app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// db
const db = require('./app/models');
// connect to db
db.sequelize
  .sync()
  .then(() => console.log('Databse is now synced'))
  .catch((err) => console.log('Failed to sync database!', err));

// bring all routers
require('./app/routes/product.routes')(app);
require('./app/routes/order.routes')(app);

const PORT = parseInt(process.env.PORT, 10) || 8000;
app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}...`);
});
