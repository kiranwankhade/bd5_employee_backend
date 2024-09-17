const express = require('express');
const cors = require('cors');
const sequelize = require('./lib/sequelize');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Sync the database
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connected and synchronized.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

app.get('/', (req, res) => {
  console.log('hello');
  return res.json({ message: 'Starter template' });
});

app.listen(PORT, () => console.log('Server is running on port', PORT));